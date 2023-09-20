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

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
    display="flex"
    alignItems="center"
    width="100"
    height="60px"
    backgroundColor="#fffdd0"
    color="black"
    position="fixed"
    top="0"
    left="0"
    //so it appears above other divs
    zIndex="1"
    ></Box>
  )
};

export default Navbar;