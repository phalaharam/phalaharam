import { motion } from 'framer-motion';
import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const points = [
  "Phalaharam offers a wide variety of fresh fruits delivered directly to your doorstep.",
  "Choose from daily, weekly, or monthly subscription plans tailored to your needs.",
  "All fruits are sourced from organic farms ensuring the highest quality and taste.",
  "Experience the convenience of fresh fruit delivery with just a few clicks.",
  "Enjoy seasonal fruits at their peak freshness and flavor.",
  "Our flexible subscription plans can be paused or modified at any time.",
  "Phalaharam ensures contactless delivery for your safety and convenience.",
  "Get personalized fruit recommendations based on your preferences.",
  "Join our community and share your fruit experiences and recipes.",
];

const handleScrollToSection = (target) => {
  const element = document.getElementById(target);
  const headerOffset = 60; // Adjust based on your header height
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

};

const AboutUs = () => {

  return (
    <div id='about' className="flex flex-col items-center justify-center px-8 py-16 overflow-hidden bg-darkGray lg:flex-row">
      <motion.div
        className="flex items-center justify-center w-full lg:w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img
          src="./images/other/first.jpg" // Replace with your image source
          alt="Fresh Fruits"
          className="object-cover lg:w-[35vw] lg:h-[35vw] md:w-full md:h-full rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div
        className="w-full mt-8 lg:w-1/2 lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="mb-4 text-4xl font-bold text-primary dark:text-darkPrimary">About Phalaharam</h2>
        <h3 className="mb-4 text-3xl font-bold text-primaryText dark:text-darkPrimaryText">100% Fresh & Hygienic Fruit Bowl</h3>
        <ul className="mb-8 space-y-4 text-secondaryText">
          {points.map((point, index) => (
            <li key={index} className="flex items-center">
              <FaLeaf className="mr-2 text-primary dark:text-darkPrimary" /> {point}
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 text-white rounded-full shadow-lg bg-primary"
          onClick={() => handleScrollToSection('subscription')}
        >
          Order
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutUs;


