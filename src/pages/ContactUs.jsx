import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <motion.div
      id="contact"
      className="flex flex-col items-center justify-center gap-4 p-8 bg-darkBlue md:flex-row "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 lg:items-start md:w-1/2">
        <h1 className="text-4xl font-bold leading-tight">
          Contact <span className="text-primary dark:text-darkPrimary">Us</span>{" "}
        </h1>
        <div className="mt-8 space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="mr-4 text-primary dark:text-darkPrimary" />
            <span>phalaharam@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-4 text-primary dark:text-darkPrimary" />
            <span>+91 807 359 7390</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-4 text-primary dark:text-darkPrimary" />
            <span><p className="text-primaryText dark:text-PrimaryText">
                Marathahalli, <br />
                Bangalore, 560037
                <br />
                India <br />
              </p></span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl px-0 lg:p-8 rounded-lgmd:w-1/2">
        <div className="space-y-4">
          <div>
            <label className="block text-lg">Your name</label>
            <input
              type="text"
              className="w-full p-2 border-b border-secondaryText focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg">Your email</label>
            <input
              type="email"
              className="w-full p-2 border-b border-secondaryText focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg">Your message</label>
            <textarea rows="1"  className="w-full p-2 border-b border-secondaryText focus:outline-none"></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded-md bg-primary"
          >
            Send message
          </button>
        </div>
      </div>
      
    </motion.div>
  );
};

export default ContactUs;
