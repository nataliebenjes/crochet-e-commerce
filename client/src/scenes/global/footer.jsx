import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import React from "react";


const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
  <Box mt="70px" p="40px 0">
    <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      rowGap="30px"
      columnGap="clamp(20px, 30px, 40px)"
      >
        {/* 20% is lowest allowed value, 30% is preferred (if box is within 20% and 40%) 40% is as big as it can get */}
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
          variant="h4"
          fontWeight="bold"
          mb="30px"
          color={shades.secondary[500]}
          >Crochet store</Typography>
        </Box>

      </Box>
  </Box>
}

export default Footer;