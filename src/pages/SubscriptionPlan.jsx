// SubscriptionPlans.js
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    name: "Basic Plan",
    image: "../../public/images/other/first-bowl.jpg",
    description: "1 Month Subscription",
    price: "$10/month",
    variety: "Includes 5 different fruits",
  },
  {
    name: "Standard Plan",
    image: "../../public/images/other/fifth-bowl.jpg",
    description: "3 Months Subscription",
    price: "$27/month",
    variety: "Includes 10 different fruits",
  },
  {
    name: "Deluxe Plan",
    image: "../../public/images/other/second-bowl.jpg",
    description: "6 Months Subscription",
    price: "$50/month",
    variety: "Includes 20 different fruits",
  },
  {
    name: "Premium Plan",
    image: "../../public/images/other/sixth-bowl.jpg",
    description: "12 Months Subscription",
    price: "$100/month",
    variety: "Includes 30 different fruits",
  },
];

const SubscriptionPlans = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="subscription" className="py-12 bg-lightBg dark:bg-darkLightBg">
      <div className="container px-4 mx-auto md:px-8 lg:px-16">
        <div className="mb-8 text-center section-header">
          <h2 className="mb-2 text-3xl font-bold text-primary dark:text-darkPrimary">
            Subscription Plans
          </h2>
          <p className="text-secondaryText">
            Choose the best plan that suits your needs
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="p-4 border-2 rounded-lg hover:cursor-pointer group border-primaryText hover:border-primary bg-lightSecondary dark:bg-darkLightSecondary plan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4 plan-img">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-primary dark:text-darkPrimary">
                <a href="#">{plan.name}</a>
              </h3>
              <p className="mb-4 text-secondaryText">{plan.description}</p>
              <div className="mb-4 text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    className={`fa ${
                      i < Math.floor(plan.price.length / 10)
                        ? "fa-star"
                        : "fa-star-half-full"
                    }`}
                    key={i}
                  ></i>
                ))}
              </div>
              <p className="text-lg font-bold text-primary dark:text-darkPrimary">
                {plan.price}
              </p>
              <p className="text-secondaryText">{plan.variety}</p>
              <a
                href="#"
                className="inline-block px-4 py-2 mt-4 font-semibold transition duration-500 ease-in-out border rounded-full group-hover:text-white text-primary group-hover:bg-primary bg-lightSecondary border-primary"
              >
                Order
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
