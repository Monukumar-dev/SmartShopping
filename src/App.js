import {BrowserRouter,Routes, Route,} from "react-router-dom";
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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route element={<PrivateComponent />} >
              <Route path="/wishlist" element={<h1>Welcome to wishlist...</h1>} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/men" element={<Category />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<h2 className="text-center p-4">Password Reset</h2>} />

        </Routes>
        <Footer />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
