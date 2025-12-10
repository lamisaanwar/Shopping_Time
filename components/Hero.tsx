import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">
            New Summer Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Find the Perfect <br />
            <span className="text-brand-500">Style for You</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Discover the latest trends in girls' fashion. From breezy summer dresses to elegant party wear, Shopping Time has it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Shop Now
            </Link>
             <Link 
              to="/shop" 
              className="inline-flex items-center justify-center bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium group"
            >
              View Lookbook <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <img 
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop" 
              alt="Girl in Summer Fashion Dress" 
              className="object-cover w-full h-full"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-200 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute top-10 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;