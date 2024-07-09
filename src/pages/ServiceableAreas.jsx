import React from 'react';
import { motion } from 'framer-motion';

const ServiceableAreas = () => {
  return (
    <motion.div className="h-screen flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-primary dark:text-darkPrimary">Serviceable Areas</h1>
        <p className="mt-4 text-lg">We currently serve the following areas in Bangalore:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Area 1</li>
          <li>Area 2</li>
          <li>Area 3</li>
          <li>Area 4</li>
          <li>Area 5</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default ServiceableAreas;
