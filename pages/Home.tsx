
import React from 'react';
import { Button } from '../components/Button';
import { MOCK_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { TrustBadge } from '../components/Badge';

export const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60"
            alt="Handloom heritage"
          />
          <div className="absolute inset-0 bg-[#F5F5DC]/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] mb-8 block text-[#CC5500] font-semibold animate-pulse">
            Rooted in Visakhapatnam
          </span>
          <h1 className="font-serif-luxury text-5xl md:text-8xl leading-tight mb-8 text-[#1F305E]">
            A Saga Stitched <br />
            <span className="italic">with Human Hands</span>
          </h1>
          <p className="font-editorial text-xl md:text-2xl italic mb-12 text-[#1F305E]/80 max-w-2xl mx-auto">
            Coastal slow-fashion that breathes with the ocean breeze. 
            Contemporary silhouettes crafted through ancient craft wisdom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="primary">Explore Collections</Button>
            <Button variant="outline">Our Heritage</Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-xl">
            <h2 className="text-[10px] uppercase tracking-[0.3em] mb-4 text-[#CC5500]">New Arrivals</h2>
            <h3 className="font-serif-luxury text-3xl md:text-5xl leading-tight">
              Coastal Winds <br /> 
              <span className="italic font-editorial text-4xl">Edition '24</span>
            </h3>
          </div>
          <p className="text-xs max-w-xs text-[#1F305E]/60 leading-loose">
            Hand-spun kora cotton meets natural indigo and madder root dyes. 
            A limited drop inspired by the changing tides of the Vizag coast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Storytelling Break */}
      <section className="bg-[#1F305E] text-[#F5F5DC] py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h4 className="font-serif-luxury text-4xl md:text-6xl italic leading-relaxed">
            "We believe the soul of a garment lies in the rhythm of the weaver's loom."
          </h4>
          <div className="w-24 h-[1px] bg-[#CC5500] mx-auto"></div>
          <p className="text-sm tracking-[0.1em] leading-loose max-w-2xl mx-auto opacity-80 uppercase font-light">
            Founded in the coastal town of Visakhapatnam, Haath Saga began with a simple vision: to bring the tactility of Indian craft into the modern wardrobe without losing its heartbeat.
          </p>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-20 bg-[#F5F5DC] border-y border-[#1F305E]/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          <TrustBadge label="Hand-Block Certified" />
          <TrustBadge label="Natural Fabrics" />
          <TrustBadge label="Coastal Heritage" />
          <TrustBadge label="Custom Fit Guaranteed" />
        </div>
      </section>
    </div>
  );
};
