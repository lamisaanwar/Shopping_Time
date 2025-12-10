import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
          <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-gray-100 block">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button 
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation when clicking the quick add button
                addToCart(product);
              }}
              className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-gray-900 hover:bg-brand-500 hover:text-white transition-colors transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10"
              aria-label="Add to Cart"
            >
              <Plus className="w-5 h-5" />
            </button>
          </Link>
          <div className="p-4 flex flex-col flex-grow">
            <Link to={`/product/${product.id}`} className="block">
              <div className="text-xs text-brand-500 font-semibold uppercase tracking-wide mb-1">
                {product.category}
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 leading-tight hover:text-brand-600 transition-colors">
                {product.name}
              </h3>
            </Link>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-gray-900 font-medium text-lg">৳ {product.price.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;