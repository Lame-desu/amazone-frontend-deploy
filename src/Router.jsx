import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

//pk_test_51Q0sZLA7KsFf5YYB14hGAubGWk5mxCO4QCuegYhFLDMaCuA7Q1dnj9tZ7VXDdcZ2aaZQi4sRZtXyalNsOEzeEHeX00tujhBuZX
const stripePromise = loadStripe(
  "pk_test_51QUdvsJAQXvyp5PMmK91CpDyuW2sSSvxP0RTBVH4q1zsEcegPnhBBR7487GFtVf7ikZj5cv3lrglY079D94GXQhC00IjZyMNtX"
);
function Routing() {
  return (
    <Router>
      <Routes>
        {/* <Route path = "/" element = {<LayOut />}> */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default Routing;
