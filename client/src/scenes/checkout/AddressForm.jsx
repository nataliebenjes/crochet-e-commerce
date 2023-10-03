import { useMediaQuery, TextField } from "@mui/material";
import { getIn } from "formik";
import React from "react";

const AddressForm = ({
  type,
  value,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px");

  //for code readability
  const formattedName = (field) => `${type}.${field}}`;
  
  const formattedError = (field) =>
    Boolean(
      //needed if nesting object in formik
      getIn(touched, formattedName(field)) &&
      getIn(errors, formattedName(field))
    );

    const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) &&
    getIn(errors, formattedName(field));

    return (
      <Box
      display="grid"
      gap="15px"
      //repeat 1fr 4 times
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        //target children
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >

      </Box>
    )
}


export default AddressForm;