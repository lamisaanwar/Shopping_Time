import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Shop by Category</h2>
          <p className="text-gray-500 mt-2">Browse our curated collections</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/shop`} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-full aspect-square mb-4 shadow-lg border-4 border-white group-hover:border-brand-100 transition-all">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="text-center font-medium text-lg text-gray-800 group-hover:text-brand-600 transition-colors">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;