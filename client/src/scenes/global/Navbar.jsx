import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Popover, MenuItem } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import React, { useState } from "react";
import Menu from "./Menu"; 
import { ReactComponent as SvgLogo } from "./SvgLogo.svg";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="80px"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      backgroundColor="rgba(255, 255, 255, 0.5)"
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
  sx={{
    "&:hover": { cursor: "pointer" },
    color: shades.orange[700],
    fontSize: "27px",
    display: "flex",
    alignItems: "center"
  }}
>
  <SvgLogo
    style={{ height: "75px", marginRight: "60px" }} // Adjust the height and spacing if needed
  />

        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton
            sx={{ color: "black" }}
            onClick={handleClick}
          >
            <MenuOutlined />
          </IconButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Menu />
          </Popover>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;


