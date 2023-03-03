import {BrowserRouter,Routes, Route,} from "react-router-dom";
import * as url from '../src/app/js/utils/Url';
import PrivateComponent from "./app/js/components/PrivateComponent";

import Header from "./app/js/components/Header";
import Login from "./app/js/components/Login";
import Register from "./app/js/components/Register";
import Footer from "./app/js/components/Footer";
import HomePage from "./app/js/pages/HomePage";
import Category from "./app/js/pages/Category";
import ProductDetails from "./app/js/pages/ProductDetails";
import Cart from "./app/js/pages/Cart";
import Checkout from "./app/js/pages/Checkout";
import ThankYou from './app/js/pages/ThankYou';
import MyAccount from "./app/js/pages/account/MyAccount";
import ChangePassword from "./app/js/pages/account/ChangePassword";
import Address from "./app/js/pages/account/Address";
import Orders from "./app/js/pages/account/Orders";
import Wishlist from "./app/js/pages/account/Wishlist";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route element={<PrivateComponent />} >
              <Route path={url.ACCOUNT} element={<MyAccount />} />
              <Route path={url.CHANGE_PASSWORD} element={<ChangePassword />} />
              <Route path={url.ADDRESS} element={<Address />} />
              <Route path={url.ORDERS} element={<Orders />} />
              <Route path={url.WISHLIST} element={<Wishlist />} />
              <Route path={url.CHECKOUT} element={<Checkout />} />
              <Route path={url.THANKYOU} element={<ThankYou />} />
            </Route>
            <Route path={url.ROOT} element={<HomePage />} />
            <Route path="/men" element={<Category />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path={url.CART} element={<Cart />} />
            <Route path={url.LOGIN} element={<Login />} />
            <Route path={url.REGISTER} element={<Register />} />
            <Route path={url.FORGOT_PASSWORD} element={<h2 className="text-center p-4">Password Reset</h2>} />

        </Routes>
        <Footer />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
