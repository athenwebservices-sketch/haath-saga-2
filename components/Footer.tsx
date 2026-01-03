
import React from 'react';
import { Logo, COLORS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F305E] text-[#F5F5DC] pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
        <div className="space-y-8">
          <Logo className="brightness-200 contrast-125" />
          <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed opacity-60 max-w-xs">
            Contemporary slow-fashion celebrating the coastal craft heritage of Andhra Pradesh. Handcrafted with intention in our Visakhapatnam studio.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#CC5500] transition-colors">
              <span className="text-[10px] uppercase tracking-widest font-medium">Instagram</span>
            </a>
            <a href="#" className="hover:text-[#CC5500] transition-colors">
              <span className="text-[10px] uppercase tracking-widest font-medium">Journal</span>
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#CC5500] font-bold">Collections</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-widest font-light opacity-80">
            <li><a href="#" className="hover:text-[#CC5500] transition-colors">Coastal Winds '24</a></li>
            <li><a href="#" className="hover:text-[#CC5500] transition-colors">The Kora Series</a></li>
            <li><a href="#" className="hover:text-[#CC5500] transition-colors">Hand-Block Edits</a></li>
            <li><a href="#" className="hover:text-[#CC5500] transition-colors">Heirloom Silk</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#CC5500] font-bold">Assistance</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-widest font-light opacity-80">
            <li><a href="#" className="hover:text-[#CC5500] transition-colors">Custom Fit Guide</a></li>
            <li><a href="#" className="hover:text-[#CC5500] transition-colors">Fabric Care</a></li>
            <li><a href="#" className="hover:text-[#CC5500] transition-colors">Studio Appointments</a></li>
            <li><a href="#" className="hover:text-[#CC5500] transition-colors">Shipping & Returns</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#CC5500] font-bold">Studio</h4>
          <div className="space-y-4 text-[10px] uppercase tracking-widest font-light opacity-80">
            <p className="leading-loose">
              Beach Road, Waltair Uplands <br />
              Visakhapatnam, 530003 <br />
              Andhra Pradesh, India
            </p>
            <p className="hover:text-[#CC5500] transition-colors">studio@haathsaga.com</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-[8px] uppercase tracking-[0.4em] opacity-40">
        <p>&copy; {new Date().getFullYear()} Haath Saga. Handcrafted Luxury.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Sustainability Report</a>
        </div>
      </div>
    </footer>
  );
};
