import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'British Gas', logo: '/images/logos/britishgas.png', height: '40px' },
  { name: 'Autodesk', logo: '/images/logos/autodesk.png', height: '30px' },
  { name: "Sainsbury's", logo: '/images/logos/sainsburys.png', height: '35px' },
  { name: 'Argos', logo: '/images/logos/argos.png', height: '35px' },
  { name: 'Pearson', logo: '/images/logos/pearson.svg', height: '100px' },
  { name: 'Regus', logo: '/images/logos/regus.svg', height: '85px' },
  { name: 'Mastercard', logo: '/images/logos/mastercard.png', height: '45px' },
  { name: 'NatWest', logo: '/images/logos/natwest.png', height: '35px' },
  { name: 'Superdrug', logo: '/images/logos/superdrug.png', height: '35px' },
  { name: 'Coral', logo: '/images/logos/coral.png', height: '25px' },
  { name: 'Kaplan', logo: '/images/logos/kaplan.png', height: '35px' }
];

const BrandTicker = () => {
  return (
    <div className="w-full py-12 mb-16 overflow-hidden relative border-y border-white/20 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-6 mb-8 mt-2 text-center">
        <p className="text-slate-500 font-medium tracking-wide">
          Some of the brands/organisations I've helped deliver meaningful and aesthetic experiences are;
        </p>
      </div>

      <div className="flex w-full">
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ width: "max-content" }}
        >
          {/* Double the list for seamless loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300">
              <img
                src={brand.logo}
                alt={brand.name}
                style={{ height: brand.height, objectFit: 'contain' }}
                className="max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-sm"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient masks for fading edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default BrandTicker;
