import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button, Tabs, Tab } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { shades } from "../../theme.js";
import { addToCart } from "../../state";
import { useNavigate } from "react-router-dom";
import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
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
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }
  async function getItems() {
    const items = await fetch(
      `http://localhost:1337/api/items?populate=image`,
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
console.log(item);

  return (
  <Box
  width="80%" m="80px auto">
    <Box display="flex" flexWrap="wrap" columnGap="40px">
      {/* Images */}
      <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* Actions */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev/next</Box>

          </Box>
          {/* //top, right, bottom left */}
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.shortDescription}</Typography>
            <Typography>${item?.attributes?.Price}</Typography>
            <Typography sx={{ mt: "20px" }}>{item?.attributes?.longDescription}</Typography>
          </Box>
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.secondary[300]}`}
              mr="20px"
              p="2px 5px"
              >
                {/* To add to cart: Could be a component */}
                <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px"}}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
              </Box>
              <Button
              sx={{
                backgroundColor: "pink"
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count }}))}>Add to cart</Button>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px"}}>Add to wishlist</Typography>
            </Box>
            <Typography>Category: {item?.attributes.category}</Typography>
          </Box>
        </Box>
    </Box>
    {/* information */}
    <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="description" />
        </Tabs>
    </Box>
    <Box display="flex" flexWrap="wrap" gap="15px">
      {value === "description" && (
        <div>{item?.attributes?.longDescription}</div>
      )}
      {value === "reviews" && <div>reviews</div>}
    </Box>
        <Typography variant="h3" fontWeight="bold">Related Products</Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0,4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} width={undefined} />
          ))}
        </Box>
        </Box>
  )
};


export default ItemDetails;