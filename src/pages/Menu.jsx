import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  return (
    <motion.div id='menu' className="flex items-center justify-center h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-primary dark:text-darkPrimary">Our Menu</h1>
        <p className="mt-4 text-lg">We offer a variety of fruits that change with the seasons. Enjoy fresh and healthy options every day.</p>
        <img src="https://source.unsplash.com/random/800x600?fruits" alt="Menu" className="object-cover w-full h-64 mt-4 rounded-lg"/>
      </div>
    </motion.div>
  );
}

export default Menu;
