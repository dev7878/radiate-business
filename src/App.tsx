import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Custom from './pages/Custom';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import Orders from './pages/Orders';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}