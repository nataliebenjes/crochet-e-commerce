import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from "../../theme";
import React from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    
    <Box
    display="flex"
    alignItems="center"
    width="100"
    height="60px"
    color="black"
    position="fixed"
    top="0"
    left="0"
    //so it appears above other divs
    zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        >
          <Box
          
          onClick={() => navigate("/")}
          sx={{ '&:hover': { cursor: "pointer" }}}
          color={shades.secondary[500]}
          >
            Crochet!!!
          </Box>
          {/* //icons */}
          <Box
            display="flex"
            justifyContent="space-between"
            columnGap="20px"
            zIndex="2"
            >
              <IconButton sx={{ color: "purple"}}>
                <SearchOutlined />
              </IconButton>
              <IconButton sx={{ color: "purple"}}>
                <PersonOutline />
              </IconButton>
              <IconButton sx={{ color: "purple"}}>
                <ShoppingBagOutlined />
              </IconButton>
              <IconButton sx={{ color: "purple"}}>
                <MenuOutlined />
              </IconButton>
            </Box>
        </Box>
    </Box>

  );
};

export default Navbar;