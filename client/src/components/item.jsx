import { useState } from "react";
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import React from "react";

const Item = ({ item, width}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //represent number of items that we're going to add to the cart
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { palette: { secondary },
} = useTheme();
//destructuring assignment to extract properties from `item`
const { category, price, name, image } = item.attributes;
const {
  data: {
    attributes: {
      formats: {
        medium: { url },
      },
    },
  },
} = image;
  return (
    console.log('item', item),
    <Box width={width}>
      <Box position="relative" onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}

          // src={`https://plus.unsplash.com/premium_photo-1661741379133-9206bca144dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: 'pointer'}}
          />
    <Box
      display={isHovered ? "block" : "none"}
      position="absolute"
      bottom="10%"
      left="0"
      width="100%"
      padding="0 5%"
      >
        <Box display="flex" justifyContent="space-between">
          <Box display="flex"
          alignItems="center"
          borderRadius="3px" 
          >
            {/* //make sure the count doesn't go below 1 */}
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            {/* Button */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[600], color: "brown" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" color={secondary.dark}>
          {category
            .replace(/[A-Z]/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
          </Box>
        </Box>
  )
}

export default Item;