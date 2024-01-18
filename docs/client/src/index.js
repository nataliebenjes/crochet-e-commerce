import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
//makes redux store available to whole component tree. No need to pass through props
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./state";

const store = configureStore({
  reducer: { cart: cartReducer },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* //This means that any component within your app can now use styles defined in your theme. */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

