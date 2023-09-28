import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import React from "react";


const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return <Box mt="70px" p="40px 0">
    <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      rowGap="30px"
      columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
        </Box>
      </Box>
  </Box>
}

export default Footer;