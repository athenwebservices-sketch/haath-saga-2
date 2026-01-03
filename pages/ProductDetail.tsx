
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Button } from '../components/Button';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) return <div className="pt-40 text-center">Finding the thread...</div>;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Gallery */}
        <div className="lg:col-span-7 space-y-8">
          <div className="aspect-[3/4] overflow-hidden bg-[#e8e8cc]">
            <img 
              src={product.images[0]} 
              className="w-full h-full object-cover"
              alt={product.name}
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-[#e8e8cc] opacity-60"></div>
            <div className="aspect-square bg-[#e8e8cc] opacity-60"></div>
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 self-start">
          <div>
            <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#1F305E]/40 mb-6">
              <Link to="/shop" className="hover:text-[#CC5500]">Collections</Link>
              <span>/</span>
              <span>{product.category}</span>
            </nav>
            <h1 className="font-serif-luxury text-4xl md:text-5xl mb-4 text-[#1F305E] leading-tight">
              {product.name}
            </h1>
            <p className="font-editorial text-2xl italic text-[#CC5500]">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1F305E]">The Saga</h3>
            <p className="text-sm leading-relaxed text-[#1F305E]/80 font-light">
              {product.saga}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-8 border-y border-[#1F305E]/10">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Fabric</p>
              <p className="text-xs font-medium">{product.fabric}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Dye Technique</p>
              <p className="text-xs font-medium">{product.dyeType}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold">Select Size</h3>
              <button className="text-[10px] uppercase tracking-widest underline opacity-60 hover:text-[#CC5500]">Size Guide</button>
            </div>
            <div className="flex gap-4">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center text-xs transition-all duration-300 border ${
                    selectedSize === size 
                      ? 'bg-[#1F305E] text-[#F5F5DC] border-[#1F305E]' 
                      : 'border-[#1F305E]/20 hover:border-[#CC5500]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {product.customFitAvailable && (
              <Link 
                to="/custom-fit"
                className="block text-center p-4 border border-dashed border-[#CC5500] text-[#CC5500] text-[10px] uppercase tracking-[0.2em] hover:bg-[#CC5500] hover:text-[#F5F5DC] transition-all duration-500"
              >
                Experience Custom Atelier Sizing
              </Link>
            )}
          </div>

          <div className="space-y-4 pt-4">
            <Button className="w-full" size="lg">Add to Collection</Button>
            <p className="text-[8px] uppercase tracking-[0.2em] text-center opacity-40">
              Each piece is handcrafted. Shipping takes 10-14 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
