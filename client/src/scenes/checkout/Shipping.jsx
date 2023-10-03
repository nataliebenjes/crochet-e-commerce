import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";
import React from "react";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return(
    <Box m="30px auto">
      {/* billing form */}
      <Box>
        <Typography sx={{ mb: "15px"}} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          value={values.billingAddress}
          errors={errors}
          //when hovering over
          touched={touched}
          //when you click
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
      <Box mb="20px">
        <FormControlLabel
          label="Same for Shipping Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
              />
          }
          />
      </Box>
      {/* shipping form */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
          type="shippingAddress"
          values={values.billingAddress}
          errors={errors}
          //when hovering over
          touched={touched}
          //when you click
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
          </Box>
      )}
    </Box>
  )
}



export default Shipping;