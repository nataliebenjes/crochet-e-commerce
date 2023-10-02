import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";
// import Payment from "./Payment";
import Shipping from "./Shipping";
// import { loadStripe } from "@stripe/stripe-js";
import React from "react";

//will have stripe promise here

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: ""
  },
  shippingAddress: {
    isSameAddress: "",
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: ""
  },
  email: "",
  phoneNumber: ""
}

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
  }),
  shippingAddress: yup.object().shape({
    firstName: yup.string().when("isSameAddress", {
      is: false,
      then: yup.string().required("required"),
    }),
    lastName: yup.string().when("isSameAddress", {
      is: false,
      then: yup.string().required("required"),
    }),
    country: yup.string().when("isSameAddress", {
      is: false,
      then: yup.string().required("required"),
    }),
    street1: yup.string().when("isSameAddress", {
      is: false,
      then: yup.string().required("required"),
    }),
    street2: yup.string(),
    city: yup.string().when("isSameAddress", {
      is: false,
      then: yup.string().required("required"),
    }),
    state: yup.string().when("isSameAddress", {
      is: false,
      then: yup.string().required("required"),
    }),
    zipCode: yup.string().when("isSameAddress", {
      is: false,
      then: yup.string().required("required"),
    }),
  }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required")
  })
]

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  //extracting cart from redux store
  const cart = useSelector((state) => state.cart.cart);
  //will be used to conditionally render different UI components based on current step
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const handleFormSubmit = async (value, actions) => {
    setActiveStep(activeStep + 1);
  }

  return <Box width="80%" m="100px">
    <Stepper activeStep={activeStep} sx={{ m: "20px 0"}}>
      <Step>
        <StepLabel>Billing</StepLabel>
      </Step>
      <Step>
        <StepLabel>Payment</StepLabel>
      </Step>
    </Stepper>
    <Box>
    <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue
            }) => (
                <form onSubmit={handleSubmit}>
                  {isFirstStep && (
                  <Shipping
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />

                  )} 
                </form>
            )}
            
      </Formik>
    </Box>
  </Box>
}
export default Checkout;