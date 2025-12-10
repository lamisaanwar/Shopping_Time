import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-2xl font-serif italic mb-4">Shopping Time</h3>
              <p className="text-gray-400">© 2024 Shopping Time. All rights reserved.</p>
            </div>
          </footer>
          <AIAssistant />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;