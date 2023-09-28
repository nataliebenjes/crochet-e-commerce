import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import React from "react";



const Subscribe = () => {
 const [email, setEmail] = useState("");

 return (
  <Box width="80%" margin="80px auto" textAlign="center">
    <IconButton>
      <MarkEmailReadOutlinedIcon fontSize="large" />
    </IconButton>
    <Typography variant="h3">Subscribe to our Newsletter</Typography>
    <Typography>and receive 10% off your first order at checkout</Typography>
  </Box>
 )
}

export default Subscribe;