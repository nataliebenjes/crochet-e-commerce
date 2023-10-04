'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
//Node.js: expose variables, objects, or functions from a module

//destructuring strapi
module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  //access to strapi API. allows up to modify strapi endpoint
  async create(ctx) {
    //what we are getting from front end
      const { products, userName, email } = ctx.request.body;

      try {
          //retereive item info
          const lineItems = await Promise.all(
          //cycle through each product, grab price and send to stripe
          products.map(async (product) => {
            const item = await strapi
              .service("api::item.item")
              .findOne(product.id);
          
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.name,
                  },
                  unit_amount: item.price * 100,
                },
                quantity: product.count,
              };
            })
          );
            //make sure that we're sending the user to the right page. Create stripe session
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ["card"],
              customer_email: email,
              mode: "payment",
              success_url: "http://localhost:1337/checkout/success",
              cancel_url: "http://localhost:1337",
              line_items: lineItems,
            });
      // create the item in backend
      await strapi
        .service("api::order.order")
        .create({ data: { userName, products, stripeSessionId: session.id } });

      // return the session id need this on front end
      return { id: session.id };
    } catch (error) {
      ctx.response.status = 500;
      return { error: { message: "There was a problem creating the charge" } };
    }
  },
}));
