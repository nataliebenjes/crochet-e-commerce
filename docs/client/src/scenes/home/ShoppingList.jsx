import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";

import { setItems } from "../../state/index";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue); //updates the value in the component's state. newValue of selected tab
  };

  async function getItems() {
    try {
      const response = await fetch("http://localhost:1337/api/items?populate=image", { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const itemsJson = await response.json();
      dispatch(setItems(itemsJson.data));
    } catch (error) {
      console.error('Error fetching items:', error);
    }
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
console.log(items);
let hatsItems = [];
let topsItems = [];
let miscellaneousItems  = [];
if (items !== null) {
  hatsItems = items.filter(
    (item) => item.attributes.category === "hats"
  );
  topsItems = items.filter(
    (item) => item.attributes.category === "tops"
  );
  miscellaneousItems = items.filter(
    (item) => item.attributes.category === "miscellaneous"
  );
}


  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      {/* used for filter function */}
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        //responds to tab selection changes
        onChange={handleChange}
        centered
        //visible in non-mobile device
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="TOPS" value="tops" />
        <Tab label="HATS" value="hats" />
        <Tab label="miscellaneous" value="miscellaneous" />
      </Tabs>
      {/* makes box responsive */}
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
      {value === "all" && items !== null ?
      items.map((item) => (
        <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
      )) :
      <p>Loading...</p> // or any other loading indication
        }
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
          {value === "tops" &&
          topsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
        {value === "miscellaneous" &&
          miscellaneousItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
        {value === "hats" &&
          hatsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
          
      </Box>
    </Box>
  );
};

export default ShoppingList;