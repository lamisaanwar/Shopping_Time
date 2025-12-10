import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, Check, Heart } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif text-gray-900 mb-4">Product not found</h2>
        <button onClick={() => navigate('/shop')} className="text-brand-600 hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product);
    // In a real application, this would redirect to a checkout page
    alert(`Proceeding to checkout with ${product.name}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 mb-8 hover:text-gray-900 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
        Back
      </button>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700" 
          />
        </div>
        
        {/* Info Section */}
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm bg-brand-50 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-4 leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <p className="text-3xl font-medium text-gray-900">৳ {product.price.toLocaleString()}</p>
            {/* Mock rating */}
            <div className="flex text-yellow-400 text-sm">
              {'★'.repeat(5)}
              <span className="text-gray-400 ml-2">(12 reviews)</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {product.description}
            <br className="mb-4"/>
            Made with premium quality fabrics ensuring comfort and style for every occasion. Perfect for the season.
          </p>
          
          <div className="space-y-4 mb-8">
             <div className="flex gap-4">
              <button 
                onClick={handleBuyNow}
                className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform active:scale-95 shadow-lg hover:shadow-xl"
              >
                Buy Now
              </button>
              <button className="p-4 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-400 hover:text-red-500">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full border-2 border-gray-200 text-gray-900 py-4 rounded-full font-bold text-lg hover:border-gray-900 transition-colors flex justify-center items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" /> Add to Cart
            </button>
          </div>
          
          <div className="border-t border-gray-100 pt-6 space-y-3 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check className="w-4 h-4"/> 
              </div>
              <span>In Stock & Ready to Ship</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Check className="w-4 h-4"/> 
              </div>
              <span>Free delivery on orders over ৳ 5000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;