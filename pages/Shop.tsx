import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { PRODUCTS, CATEGORIES } from '../data';
import { X } from 'lucide-react';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'All' 
      ? true 
      : p.category.includes(selectedCategory) || selectedCategory.includes(p.category);
    
    const matchesSearch = searchTerm 
      ? p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const clearSearch = () => {
    setSearchParams({});
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Shop Collection</h1>
        
        {/* Search Results Indicator */}
        {searchTerm && (
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="text-gray-600">
              Showing results for "<span className="font-semibold text-gray-900">{searchTerm}</span>"
            </span>
            <button 
              onClick={clearSearch}
              className="flex items-center text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded-full transition-colors"
            >
              Clear <X className="w-3 h-3 ml-1" />
            </button>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'All' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
             <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat.name ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-serif text-gray-400 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          <button 
            onClick={() => { clearSearch(); setSelectedCategory('All'); }}
            className="mt-6 text-brand-600 font-medium hover:underline"
          >
            View all products
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;