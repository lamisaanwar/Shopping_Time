import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductList from '../components/ProductList';
import { PRODUCTS } from '../data';

const Home: React.FC = () => {
  // Just showing a subset of products for the homepage
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="pb-20">
      <Hero />
      
      <CategorySection />

      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">New Arrivals</h2>
            <p className="text-gray-500 mt-2">Fresh looks just for you</p>
          </div>
        </div>
        <ProductList products={featuredProducts} />
      </section>

       <section className="bg-brand-900 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join the Shopping Time Club</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none"
            />
            <button className="bg-brand-500 px-6 py-3 rounded-full font-bold hover:bg-brand-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;