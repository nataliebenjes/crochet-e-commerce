import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

//will have stripe promise here

const initialValues = {
  billingAddress: {
    firstName: ""
    lastName: ""
    country: ""
    street1: ""
    street2: ""
    city: ""
    state: ""
    zipCode: ""
  }
}

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
      validationSchema={}
      >

      </Formik>
    </Box>
  </Box>
export default Checkout;