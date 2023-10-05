import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from "./scenes/home/Home";
import React from 'react';
import ItemDetails from './scenes/itemDetails/ItemDetails';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/cartMenu';
import Footer from './scenes/global/footer';
import CustomerSupport from './scenes/Dropdown/CustomerSupport';
import Sales from './scenes/Dropdown/Sales';
import Feedback from './scenes/Dropdown/Feedback';


//so when you go to another page, you go to the top of the page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="/customer-Support
          " element={<CustomerSupport
          />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
