import { useState } from "react";
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button, Tabs } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { shades } from "../../theme.js";
import { addToCart } from "../../state";
import { useNavigate } from "react-router-dom";
import React from "react";
//returns an object of key/value pairs of the dynamic params from  that were matched by the `<Route path>`
import { useParams } from "react-router-dom";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Item from "../../components/item.jsx"


const ItemDetails = () => {
  return <div>Item Details</div>;
  const dispatch = useDispatch();
  const { itemId } = useParams();
  //create value variable and corresponding setValue function. initial value of `value` is description.
  const [value, setValue] = useState("description");

};

export default ItemDetails;