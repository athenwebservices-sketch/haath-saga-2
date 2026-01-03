
import React from 'react';
import { Product } from './types';

export const COLORS = {
  INDIGO: '#1F305E',
  TERRACOTTA: '#CC5500',
  KORA: '#F5F5DC',
  GOLD: '#C5A059',
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Coastal Indigo Drape',
    saga: 'Inspired by the deep hues of the Bay of Bengal, this hand-spun cotton drape features subtle block-print borders telling stories of the Vizag shores.',
    price: 8500,
    category: 'Sarees',
    fabric: 'Kora Cotton',
    dyeType: 'Natural Indigo',
    occasion: 'Ceremonial',
    images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'],
    dropEdition: 'Coastal Winds 24',
    customFitAvailable: true,
  },
  {
    id: '2',
    name: 'Terracotta Tunic',
    saga: 'Earth-bound and warm. This short tunic is hand-loomed by artisan clusters in Andhra, finished with wooden button details.',
    price: 4200,
    category: 'Tunics',
    fabric: 'Linen Blend',
    dyeType: 'Madder Root',
    occasion: 'Everyday Luxury',
    images: ['https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800'],
    dropEdition: 'Atelier Basics',
    customFitAvailable: true,
  },
  {
    id: '3',
    name: 'Temple Gold Overlay',
    saga: 'A sheer masterpiece. Woven with Zari threads that catch the Vizag sun, perfect for layered evening elegance.',
    price: 12000,
    category: 'Jackets',
    fabric: 'Silk Organza',
    dyeType: 'Undyed Natural',
    occasion: 'Festive',
    images: ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800'],
    dropEdition: 'Limited Heirloom',
    customFitAvailable: false,
  },
  {
    id: '4',
    name: 'Sand Drift Maxi',
    saga: 'Billowing kora fabric that breathes with the ocean breeze. A silhouette designed for freedom and grace.',
    price: 6800,
    category: 'Dresses',
    fabric: 'Unbleached Kora',
    dyeType: 'Natural',
    occasion: 'Resort',
    images: ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800'],
    dropEdition: 'Coastal Winds 24',
    customFitAvailable: true,
  }
];

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center space-x-1 cursor-pointer select-none ${className}`}>
    <span className="font-editorial text-3xl md:text-4xl italic tracking-tighter" style={{ color: COLORS.INDIGO }}>
      H
    </span>
    <div className="w-4 h-[1px] bg-[#1F305E] opacity-40 rotate-12 mx-[-2px]"></div>
    <span className="font-editorial text-3xl md:text-4xl italic tracking-tighter" style={{ color: COLORS.INDIGO }}>
      S
    </span>
    <span className="ml-2 font-serif-luxury text-xs uppercase tracking-[0.3em] font-light hidden sm:inline">
      Haath Saga
    </span>
  </div>
);
