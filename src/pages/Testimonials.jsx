import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAppleAlt, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Emily Johnson",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    title: "Fantastic Service!",
    text: "The subscription has made getting fresh fruit so convenient and easy.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    title: "Top-notch quality!",
    text: "The quality of the fruit is always excellent and the service is reliable.",
    rating: 5,
  },
  {
    name: "Sophia Lee",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    title: "Highly Satisfied",
    text: "I love the variety and freshness of the fruits delivered every week.",
    rating: 4,
  },
  {
    name: "James Brown",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    title: "Great Value!",
    text: "The pricing is reasonable for the quality and convenience offered.",
    rating: 5,
  },
  {
    name: "Olivia Martin",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    title: "Exceptional Taste!",
    text: "The fruits are always fresh and taste amazing. Highly recommend!",
    rating: 5,
  },
  {
    name: "Liam Wilson",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    title: "Impressive Variety",
    text: "The variety of fruits included in the subscription is impressive and keeps things interesting.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="py-20 border-t border-b text-primary dark:text-darkPrimaryText bg-lightBg dark:bg-darkLightBg border-primaryText">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-primary dark:text-darkPrimary">
          What our customers are saying
        </h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 p-2 transition rounded-full bg-primary hover:bg-primary"
          >
            <FaAngleLeft className="text-white" size={24} />
          </button>
          <div className="w-full max-w-5xl overflow-hidden">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.9 },
              }}
              className="flex space-x-4"
            >
              {testimonials.slice(index, index + 3).map((testimonial, i) => (
                <div
                  key={i}
                  className="w-full max-w-sm p-6 mx-2 border-2 rounded-lg shadow-lg hover:cursor-pointer bg-lightBg dark:bg-darkLightBg border-primaryText hover:border-primary h-52"
                >
                  <div className="flex items-center mb-4 space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-bold">{testimonial.title}</h4>
                      <p className="text-sm text-primary dark:text-darkPrimaryText">
                        {testimonial.text}
                      </p>
                      <p className="text-sm text-secondaryText">
                        {testimonial.name}
                      </p>
                      <div className="flex justify-start mt-4 text-primary dark:text-darkPrimary">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <FaAppleAlt
                            key={j}
                            className={`mr-1 ${
                              j < testimonial.rating
                                ? "text-primary dark:text-darkPrimary"
                                : "text-secondaryText"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 p-2 transition rounded-full bg-primary hover:bg-primary"
          >
            <FaAngleRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
