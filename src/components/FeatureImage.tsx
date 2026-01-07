import React from "react";
import { motion } from "framer-motion";

// Using the provided Dropbox video (raw=1 for direct stream)
const HERO_VIDEO =
  "https://www.dropbox.com/scl/fi/lzqy2p19hd2z8afjf58eh/3d-cartoon-character-dancing-on-yellow-background-2025-12-09-12-50-41-utc.webm?rlkey=si14mekr5au4wx3s27wvwv7o2&st=xl0p4p04&raw=1";

export const FeatureImage: React.FC = () => {
  return (
    <div className="w-full flex justify-center px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1400px] relative mt-[60px] md:mt-[80px] mb-[80px] md:mb-[120px]"
      >
        <div className="w-full relative overflow-hidden rounded-[20px] md:rounded-[32px] bg-gray-100 aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] shadow-[0_30px_40px_-10px_rgba(0,0,0,0.08)]">
          <video
            src={HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
          {/* Overlay for soft grain/texture if needed */}
          <div className="absolute inset-0 bg-black/2 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};
