import React from 'react';
import { FaShippingFast, FaSnowflake, FaRedoAlt, FaAppleAlt, FaSeedling } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaShippingFast />,
    title: "Free Delivery",
    description: "For those who purchased a monthly subscription"
  },
  {
    icon: <FaSnowflake />,
    title: "Freeze Option",
    description: "2 days freeze option for those who purchased a monthly subscription"
  },
  {
    icon: <FaAppleAlt />,
    title: "Fresh Fruits",
    description: "Fresh and hygienic seasonal fruits"
  },
  {
    icon: <FaSeedling />,
    title: "Sustainable Practices",
    description: "Our fruits are sourced from farms that use sustainable practices"
  }
];

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 px-8 bg-lightBg dark:bg-darkLightBg">
      <h2 className="mb-8 text-3xl font-bold text-primary dark:text-darkPrimaryText lg:text-5xl">
        Why <span className="text-primary dark:text-darkPrimary">Phalaharam ?</span>
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap">
      {servicesData.map((service, index) => (
        <div key={index} className="flex lg:flex-row md:flex-col lg:items-start lg:justify-start items-center justify-start w-full p-4 text-center border border-secondaryText rounded-lg gap-4 lg:gap-0 hover:cursor-pointer hover:border-primary lg:w-[40%] lg:h-[18vh]">
          <div className="p-4 text-2xl border-4 border-dashed rounded-full text-primary dark:text-darkPrimary border-primary">{service.icon}</div>
          <div className="text-left md:ml-4">
            <h3 className="text-xl font-semibold text-primary dark:text-darkPrimaryText">{service.title}</h3>
            <p className="mt-2 text-secondaryText">{service.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Services;

