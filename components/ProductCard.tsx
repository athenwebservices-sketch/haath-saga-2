
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { COLORS } from '../constants';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block mb-12">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e8cc]">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        {product.customFitAvailable && (
          <div className="absolute top-4 left-4 bg-[#F5F5DC]/80 backdrop-blur-sm px-3 py-1 text-[8px] uppercase tracking-widest text-[#1F305E] border border-[#1F305E]/10">
            Custom Fit
          </div>
        )}
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="font-serif-luxury text-lg tracking-wide group-hover:text-[#CC5500] transition-colors duration-500">
          {product.name}
        </h3>
        <p className="text-[10px] uppercase tracking-widest text-[#1F305E]/60">
          {product.fabric} • {product.dyeType}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-editorial text-lg italic text-[#CC5500]">₹{product.price.toLocaleString()}</span>
          <div className="w-12 h-[1px] bg-[#CC5500] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
        </div>
      </div>
    </Link>
  );
};
