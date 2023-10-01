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
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus consectetur, ea impedit exercitationem laborum odit harum, totam molestias, voluptate illo quod molestiae dolores. Eveniet voluptas blanditiis eum asperiores quasi!
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold"
          mb="30px">
            About us:
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">FAQ</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Returns & Refund</Typography>
        </Box>
        <Box>
          <Typography width="clamp(20%, 25%, 30%)">Contact Us</Typography>
          <Typography mb="40px">5097 Store-address-in-PDX Portland, OR</Typography>
          <Typography mb="30px">email: adventure.crochet@gmail.com</Typography>
        </Box>
        <Box>
          <Typography width="clamp(20%, 25%, 30%)">Our Credo:</Typography>
          <Typography mb="40px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta modi iste, eaque accusantium, placeat nesciunt quos dolor eligendi accusamus illum vero quisquam fuga obcaecati, laboriosam aliquam tempora ratione nobis amet!</Typography>
        </Box>
      </Box>
  </Box>
  )
}

export default Footer;