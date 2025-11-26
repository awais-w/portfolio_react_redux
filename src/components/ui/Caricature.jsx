import React from 'react';
import { motion } from 'framer-motion';
import headImage from '../../assets/figureHead.png';
import armImage from '../../assets/figureArm.png';
import bodyImage from '../../assets/figureBody.png';
import steamImage from '../../assets/steam.png';

const Caricature = () => {

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1
      }}
      className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] mx-auto md:mx-0"
    >
      {/* Arm */}
      <motion.div
        className="absolute z-10 w-[90px] md:w-[90px] left-[60px] md:left-[60px] top-[175px] md:top-[175px]"
        animate={{
          x: [0, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2
        }}
      >
        {/* Steam */}
        <motion.div
          className="absolute -z-10 w-[80px] left-[-20px] top-[-40px]"
          animate={{
            y: [0, -250],
            x: [0, 10, -10, 5, -5],
            scale: [0.5, 1.5],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5
          }}
        >
          <img
            src={steamImage}
            alt="Steam"
            className="w-full h-auto"
          />
        </motion.div>
        <img
          src={armImage}
          alt="Caricature Arm"
          className="w-full h-auto drop-shadow-xl"
        />
      </motion.div>

      {/* Body */}
      <div className="absolute z-20 w-[300px] md:w-[300px] left-[90px] md:left-[90px] top-[180px] md:top-[180px]">
        <img
          src={bodyImage}
          alt="Caricature Body"
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Head */}
      <motion.div
        className="absolute z-30 w-[200px] md:w-[200px] left-[80px] md:left-[80px] top-[-150px] md:top-[-150px]"
        animate={{
          y: [0, 0, 0],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src={headImage}
          alt="Caricature Head"
          className="w-full h-auto drop-shadow-xl rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Caricature;
