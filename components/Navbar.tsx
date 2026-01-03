
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, COLORS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Collections', path: '/shop' },
    { label: 'Custom Fit', path: '/custom-fit' },
    { label: 'Fabrics', path: '/fabrics' },
    { label: 'Drops', path: '/drops' },
    { label: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
      isScrolled ? 'bg-[#F5F5DC]/95 backdrop-blur-md py-4 border-[#1F305E]/10' : 'bg-transparent py-6 border-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              to={item.path}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 hover:text-[#CC5500] ${
                location.pathname === item.path ? 'text-[#CC5500]' : 'text-[#1F305E]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6 text-[#1F305E]">
          <button className="hover:text-[#CC5500] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
          <button className="hover:text-[#CC5500] transition-colors relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span className="absolute -top-1 -right-1 text-[8px] bg-[#CC5500] text-white w-3 h-3 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="lg:hidden hover:text-[#CC5500]">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
