import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';

const Navbar: React.FC = () => {
  const { totalItems, toggleCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  
  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm relative">
        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute inset-0 bg-white z-50 flex items-center px-4 container mx-auto animate-fade-in">
             <form onSubmit={handleSearchSubmit} className="w-full flex items-center">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  autoFocus
                  type="text"
                  className="flex-1 bg-transparent border-none outline-none text-lg text-gray-800 placeholder-gray-400 h-full py-4"
                  placeholder="Search for dresses, accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
             </form>
          </div>
        )}

        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
              Shopping Time
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 items-center font-medium text-gray-600">
              <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <Link to="/shop" className="hover:text-brand-600 transition-colors">New Arrivals</Link>
              <Link to="/shop" className="hover:text-brand-600 transition-colors">Dresses</Link>
              <Link to="/shop" className="hover:text-brand-600 transition-colors">Accessories</Link>
            </div>

            {/* Icons & Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Login/Signup Desktop */}
              <div className="hidden md:flex items-center space-x-2 mr-2 border-r border-gray-200 pr-4">
                 <button 
                  onClick={() => openAuth('login')}
                  className="text-gray-600 hover:text-gray-900 font-medium px-2 py-1"
                >
                  Log In
                </button>
                <button 
                  onClick={() => openAuth('signup')}
                  className="bg-gray-900 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
                >
                  Sign Up
                </button>
              </div>

               <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-500 hover:text-brand-600 transition-colors p-2"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                onClick={toggleCart} 
                className="relative text-gray-900 hover:text-brand-600 transition-colors p-2"
              >
                <ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 -translate-y-1">
                    {totalItems}
                  </span>
                )}
              </button>
              <button 
                className="lg:hidden text-gray-600 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 flex flex-col space-y-4 animate-fade-in-down">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-brand-600 font-medium">Home</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-brand-600 font-medium">Shop All</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-brand-600 font-medium">Categories</Link>
              
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                <button 
                  onClick={() => openAuth('login')}
                  className="w-full text-center border border-gray-200 rounded-lg py-2 text-gray-700 font-medium hover:bg-gray-50"
                >
                  Log In
                </button>
                <button 
                  onClick={() => openAuth('signup')}
                  className="w-full text-center bg-gray-900 text-white rounded-lg py-2 font-medium hover:bg-gray-800"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode} 
      />
    </>
  );
};

export default Navbar;