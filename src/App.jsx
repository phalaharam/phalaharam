import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsMoonStars } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import {
  IoMdHelpCircle,
  IoMdHome,
  IoMdImages,
  IoMdInformationCircle,
  IoMdMail,
} from "react-icons/io";
import "tailwindcss/tailwind.css";
import { useInView } from 'react-intersection-observer';
import BackToTop from "./components/BackToTop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import SubscriptionPlans from "./pages/SubscriptionPlan";
import Testimonials from "./pages/Testimonials";

function App() {
  const [active, setActive] = useState("Home");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const menuLinks = [
    { name: "Home", icon: IoMdHome, target: "home" },
    { name: "About", icon: IoMdInformationCircle, target: "about" },
    { name: "Subscription", icon: IoMdImages, target: "subscription" },
    { name: "Faq", icon: IoMdHelpCircle, target: "faq" },
    { name: "Contact", icon: IoMdMail, target: "contact" },
  ];

  const [homeRef, inViewHome] = useInView({ threshold: 0.5 });
  const [aboutRef, inViewAbout] = useInView({ threshold: 0.5 });
  const [subscriptionRef, inViewSubscription] = useInView({ threshold: 0.5 });
  const [faqRef, inViewFaq] = useInView({ threshold: 0.5 });
  const [contactRef, inViewContact] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewHome) setActive("Home");
    else if (inViewAbout) setActive("About");
    else if (inViewSubscription) setActive("Subscription");
    else if (inViewFaq) setActive("Faq");
    else if (inViewContact) setActive("Contact");
  }, [inViewHome, inViewAbout, inViewSubscription, inViewFaq, inViewContact]);

  const handleScrollToSection = (target) => {
    const element = document.getElementById(target);
    const headerOffset = 60; // Adjust based on your header height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setActive(target.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-orange-50 dark:bg-darkLightSecondary">
        <nav className="container flex items-center justify-between h-16 px-5 mx-auto">
          <a
            href="#home"
            className="text-2xl font-bold uppercase text-primary dark:text-darkPrimary"
          >
            Phalaharam
          </a>
          <div className="fixed bottom-0 left-0 flex justify-around w-full px-4 py-4 bg-lightSecondary dark:bg-darkLightSecondary shadow-medium md:static md:w-auto md:bg-transparent md:shadow-none md:py-0">
            <ul className="flex justify-around w-full md:gap-12">
              {menuLinks.map((link) => (
                <li key={link.name} className="flex flex-col items-center">
                  <button
                    className={`flex flex-col items-center ${
                      active === link.name ? "text-primary dark:text-darkPrimary" : "text-primaryText"
                    }`}
                    onClick={() => handleScrollToSection(link.target)}
                  >
                    <link.icon className="text-xl md:hidden hover:text-primary" />
                    <span className={`hidden font-bold text-md md:block hover:text-primary ${active === link.name ? "text-primary dark:text-darkPrimary" : "text-primaryText"} `}>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center px-1 ml-4 cursor-pointer">
            <motion.div
              className="flex items-center justify-center"
              onClick={toggleTheme}
              animate={{ rotate: theme === "light" ? 360 : 720 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {theme === "light" ? (
                <ImSun size={25} className="text-primary dark:text-darkPrimary" />
              ) : (
                <BsMoonStars
                  size={25}
                  className="text-teal-300"
                />
              )}
            </motion.div>
          </div>
        </nav>
      </header>

      <main>
        <div id="home" ref={homeRef}>
          <Home />
        </div>
        <div id="about" ref={aboutRef}>
          <AboutUs />
        </div>
        <div id="subscription" ref={subscriptionRef}>
          <SubscriptionPlans />
        </div>
        <div id="faq" ref={faqRef}>
          <FAQ />
        </div>
        
        <Services />
        {/* <Menu /> */}
        <Testimonials />
        <div id="contact" ref={contactRef}>
          <ContactUs />
        </div>
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}

export default App;
