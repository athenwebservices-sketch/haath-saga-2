
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Shop: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Sarees', 'Tunics', 'Jackets', 'Dresses'];

  const filteredProducts = activeFilter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <header className="mb-16">
        <h1 className="font-serif-luxury text-4xl md:text-6xl mb-8">Collections</h1>
        
        <div className="flex flex-wrap items-center gap-6 border-b border-[#1F305E]/10 pb-6">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                activeFilter === filter ? 'text-[#CC5500] font-bold underline underline-offset-8' : 'text-[#1F305E]/60 hover:text-[#1F305E]'
              }`}
            >
              {filter}
            </button>
          ))}
          <div className="ml-auto hidden md:flex items-center space-x-4 text-[10px] uppercase tracking-widest opacity-60">
            <span>Sort By: Recommended</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"/></svg>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-editorial italic text-2xl text-[#1F305E]/40">No pieces found in this saga yet...</p>
        </div>
      )}
    </div>
  );
};
