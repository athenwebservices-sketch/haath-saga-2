
import React, { useState } from 'react';
import { Button } from '../components/Button';

export const CustomFit: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[800px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[10px] uppercase tracking-[0.4em] mb-4 text-[#CC5500]">The Guided Atelier</h2>
        <h1 className="font-serif-luxury text-4xl md:text-6xl mb-6">Custom Fit</h1>
        <p className="font-editorial text-xl italic text-[#1F305E]/60">
          Hand-stitched to your unique silhouette. Let our artisans create a garment that belongs only to you.
        </p>
      </div>

      <div className="bg-[#1F305E] text-[#F5F5DC] p-1 md:p-12 mb-12 relative overflow-hidden group">
         {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        
        <div className="relative z-10 p-6 md:p-0">
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map(i => (
              <div key={i} className={`flex items-center ${i !== 3 ? 'flex-1' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] border transition-all duration-700 ${
                  step >= i ? 'bg-[#CC5500] border-[#CC5500] text-white' : 'border-white/20 text-white/40'
                }`}>
                  {i}
                </div>
                {i !== 3 && <div className={`h-[1px] flex-1 mx-4 transition-all duration-1000 ${step > i ? 'bg-[#CC5500]' : 'bg-white/10'}`}></div>}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-700">
              <h3 className="font-serif-luxury text-2xl italic">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-60">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#CC5500] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-60">Order Reference (Optional)</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#CC5500] outline-none transition-colors" />
                </div>
              </div>
              <Button variant="secondary" onClick={() => setStep(2)}>Next Step: Dimensions</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in duration-700">
              <h3 className="font-serif-luxury text-2xl italic">Measurements (Inches)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Chest', 'Waist', 'Hips', 'Shoulders', 'Length', 'Sleeve'].map(field => (
                  <div key={field} className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-60">{field}</label>
                    <input type="number" placeholder="0.0" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#CC5500] outline-none transition-colors" />
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 pt-8">
                <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setStep(1)}>Back</Button>
                <Button variant="secondary" onClick={() => setStep(3)}>Final Review</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 text-center animate-in fade-in duration-700">
              <div className="w-16 h-16 bg-[#CC5500] rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="font-serif-luxury text-3xl">Artisan Review</h3>
              <p className="font-editorial text-lg italic opacity-80">
                Our master tailor will review your measurements and reach out within 24 hours if any clarification is needed.
              </p>
              <Button variant="secondary" className="w-full" onClick={() => alert("Details Saved")}>Submit to Atelier</Button>
              <button className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100" onClick={() => setStep(2)}>Edit Measurements</button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest">Expert Guidance</h4>
          <p className="text-[10px] opacity-60 leading-relaxed uppercase">Need help measuring? Schedule a 10-minute video call with our Vizag studio experts.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest">Fit Guarantee</h4>
          <p className="text-[10px] opacity-60 leading-relaxed uppercase">If the first fit isn't perfect, return it for complimentary alterations in our studio.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest">Digital Pattern</h4>
          <p className="text-[10px] opacity-60 leading-relaxed uppercase">We securely save your pattern for all future orders, ensuring consistent perfection.</p>
        </div>
      </div>
    </div>
  );
};
