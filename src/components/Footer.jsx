import React from "react";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 py-8 mt-10 border-t border-gray-700">
      <div className="container mx-auto px-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} BookHive. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 space-x-6 flex">
          {["Privacy Policy", "Terms of Service", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-gray-100 transition duration-300"
              >
                {item}
              </a>
            )
          )}
          <a
            href="https://github.com/Sahil-Bhowmick/Library-System.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            <FaGithub className="text-4xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
