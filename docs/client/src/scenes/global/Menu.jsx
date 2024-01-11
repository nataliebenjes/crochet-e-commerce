import React from "react";
import { Box, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Box p={2}>
      <MenuItem component={Link} to="/customer-Support" >
        Customer Support
      </MenuItem>
      <MenuItem component={Link} to="/sales" >
        Sales
      </MenuItem>
      <MenuItem component={Link} to="/feedback" >
        Feedback
      </MenuItem>
    </Box>
  );
};

export default Menu;

