"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
  "Creating a viral Twitter post... ✅",
  "Writing an engaging blog post... ✅",
  "Composing a marketing email... ✅",
  "Scheduling LinkedIn content... ✅",
];

export default function AILaptop() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2500); // Change message every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center w-full px-4 z-40">
      {/* Laptop Container */}
      <div className="relative flex flex-col items-center">
        {/* Laptop Screen */}
        <div className="relative w-[82vw] max-w-[600px] h-[50vw] max-h-[350px] bg-gray-900 border-[6px] border-gray-700 rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-black flex items-center justify-center text-white p-4 rounded-t-lg">
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-center text-sm md:text-lg font-mono"
            >
              {messages[currentMessage]}
            </motion.p>
          </div>
        </div>
        
        {/* Laptop Hinge */}
        <div className="w-[80vw] max-w-[550px] h-[6px] bg-gray-700 rounded-t-lg mt-[-2px]"></div>

        {/* Laptop Base / Keyboard */}
        <div className="w-[92vw] max-w-[650px] h-4 bg-gray-800 rounded-b-lg"></div>
      </div>
    </div>
  );
}
