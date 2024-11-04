"use client"
import { motion } from "framer-motion";
import AnimationData from "@/Animation - 1730454833432.json";
import Lottie from 'lottie-react';

const Newsletter = () => {
  return (
    <div className=" flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12  w-full max-w-3xl mx-auto gap-8">
      
      {/* Animation Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
      >
        <div className="w-32 h-32 lg:w-40 lg:h-40">
          <Lottie animationData={AnimationData} style={{ width: "100%", height: "100%" }} />
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-900">Join Our Style Tribe!</h2>
        <p className="text-gray-700">
          Get exclusive updates, early access to new collections, and member-only discounts.
        </p>
        
        <form className="w-full flex flex-col items-center lg:items-start">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full lg:w-auto mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200"
          >
            Subscribe Now
          </button>
        </form>
      </motion.div>
      
    </div>
  );
};

export default Newsletter;
