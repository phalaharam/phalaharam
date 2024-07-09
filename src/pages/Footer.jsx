import React from "react";
import {
  FaAngleRight,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGooglePlus,
  FaLinkedin,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  const pageLinks = [
    { name: "Home", target: "home" },
    { name: "About us", target: "about" },
    { name: "Menu", target: "menu" },
    { name: "Gallery", target: "gallery" },
    { name: "FAQ's", target: "faq" },
    { name: "Contact Us", target: "contact" },
  ];

  const usefulLinks = [
    { name: "Terms & Conditions", target: "#" },
    { name: "Returns & Refunds", target: "#" },
    { name: "Our Subscriptions", target: "#" },
    { name: "Delivery", target: "#" },
    { name: "Terms of service", target: "#" },
    { name: "Privacy policy", target: "#" },
  ];

  const handleScrollToSection = (target) => {
    if (target === "#") return;
    const element = document.getElementById(target);
    const headerOffset = 60; // Adjust based on your header height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="px-4 text-primary bg-lightBg dark:bg-darkLightBg md:px-8 lg:px-16"
    >
      <div className="py-12 footer-top">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="footer-info">
              <h2 className="mb-4 text-3xl font-bold tracking-wider text-primary dark:text-darkPrimary">
                Phalaharam
              </h2>
              <h4 className="mb-4 text-xl font-semibold text-primary dark:text-darkPrimary">
                About Us
              </h4>
              <p>
                Welcome to Phalaharam, your premier destination for a wide
                variety of fresh, healthy, and hygienic fruits are just a
                subscription away. Our mission is to deliver the finest quality
                fruits right to your doorstep, ensuring you and your loved ones
                enjoy nature's bounty with convenience and ease.
              </p>
            </div>

            <div className="footer-links">
              <h4 className="mb-4 text-xl font-semibold text-primary dark:text-darkPrimary">Pages</h4>
              <ul>
                {pageLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <FaAngleRight className="inline mr-2 text-primary dark:text-darkPrimary" />
                    <button
                      className="text-primary hover:text-primary dark:text-darkPrimary"
                      onClick={() => handleScrollToSection(link.target)}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="mb-4 text-xl font-semibold text-primary dark:text-darkPrimary">
                Useful Links
              </h4>
              <ul>
                {usefulLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <FaAngleRight className="inline mr-2 text-primary dark:text-darkPrimary" />
                    <button
                      className="text-primary hover:text-primary dark:text-darkPrimary"
                      onClick={() => handleScrollToSection(link.target)}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contactus">
              <h4 className="mb-4 text-xl font-semibold text-primary dark:text-darkPrimary">
                Contact Us
              </h4>
              <p className="text-primary">
                Marathahalli, <br />
                Bangalore, 560037
                <br />
                India <br />
                <strong className="text-primary dark:text-darkPrimary">Phone:</strong> +91 807 359
                7390
                <br />
                <strong className="text-primary dark:text-darkPrimary">Email:</strong>{" "}
                phalaharam@gmail.com
                <br />
              </p>

              <div className="flex mt-4 space-x-4 social-links">
                <a
                  href="#"
                  className="text-xl text-primary hover:text-primary dark:text-darkPrimary"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-xl text-primary hover:text-primary dark:text-darkPrimary"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-xl text-primary hover:text-primary dark:text-darkPrimary"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-xl text-primary hover:text-primary dark:text-darkPrimary"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="text-xl text-primary hover:text-primary dark:text-darkPrimary"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 mx-auto border-t-2 border-primary">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong className="text-primary dark:text-darkPrimary">Phalaharam</strong>. All Rights
            Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="#intro" className="text-primary dark:text-darkPrimary">
              Phalaharam
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
