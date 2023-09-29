import { useEffect, useState } from "react";
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
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  async function getItem() {
    //how you grab a single item
    const item  = await fetch(
      `http://localhost:2000/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }
  async function getItems() {
    const items = await fetch(
      `http://localhost:2000/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }
  //triggers functions when component mounts, or itemId changes
  useEffect(()=>{
    getItem();
    getItems();
  }, [itemId]);

  return (
  <div>Item Details</div>

  )
};

export default ItemDetails;