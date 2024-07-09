import React from 'react';
import { motion } from 'framer-motion';
import mainBg from '../../public/images/ai-bg.jpg'; // Adjust the path as needed

const Home = () => {
  return (
    <motion.div
      id="home"
      className="relative flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${mainBg})` }} // Corrected this line
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 w-full max-w-6xl p-8 mx-4 text-center text-white bg-transparent">
  <h1 className="text-5xl font-bold md:text-7xl">Welcome to <span className="text-primary dark:text-darkPrimary">Phalaharam</span></h1>
  <p className="mt-4 text-xl md:text-2xl">
    Delicious Seasonal Fruits
  </p>
  <div className="flex flex-col justify-center gap-8 mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
    <a
      className="px-6 py-3 font-semibold text-white transition bg-primary rounded-xl text-md hover:bg-opacity-90"
    >
      Subscription
    </a>
    <a
      className="px-6 py-3 font-semibold text-white transition border-2 border-primary rounded-xl text-md hover:bg-primary hover:text-white"
    >
      Contact
    </a>
  </div>
</div>

    </motion.div>
  );
};

export default Home;
