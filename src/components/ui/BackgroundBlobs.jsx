import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BackgroundBlobs = () => {
  // Mouse position state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 20, stiffness: 300, mass: 1 }; // More aggressive snap

  // Create different spring values for parallax effect - INCREASED RANGES
  const x1 = useSpring(useTransform(mouseX, [0, 1], [-400, 400]), springConfig);
  const y1 = useSpring(useTransform(mouseY, [0, 1], [-400, 400]), springConfig);

  const x2 = useSpring(useTransform(mouseX, [0, 1], [400, -400]), springConfig);
  const y2 = useSpring(useTransform(mouseY, [0, 1], [400, -400]), springConfig);

  const x3 = useSpring(useTransform(mouseX, [0, 1], [-250, 250]), springConfig);
  const y3 = useSpring(useTransform(mouseY, [0, 1], [250, -250]), springConfig);

  const x4 = useSpring(useTransform(mouseX, [0, 1], [250, -250]), springConfig);
  const y4 = useSpring(useTransform(mouseY, [0, 1], [-250, 250]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize coordinates to 0-1
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-70">
      {/* Blob 1 - Top Left (Bright Pink) */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-500/30 rounded-full blur-3xl mix-blend-multiply"
      />

      {/* Blob 2 - Top Right (Bright Purple) */}
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute top-[10%] -right-[10%] w-[60vw] h-[60vw] bg-orange-500/30 rounded-full blur-3xl mix-blend-multiply"
      />

      {/* Blob 4 - Bottom Right (Bright Yellow) */}
      <motion.div
        style={{ x: x4, y: y4 }}
        className="absolute bottom-[10%] -right-[20%] w-[50vw] h-[50vw] bg-yellow-500/30 rounded-full blur-3xl mix-blend-multiply"
      />
    </div>
  );
};

export default BackgroundBlobs;
