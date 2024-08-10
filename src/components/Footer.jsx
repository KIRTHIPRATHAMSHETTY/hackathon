import React from 'react';

function Footer() {
  return (
    <footer className="bg-brown-800 text-beige-400 p-6 mt-12">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="hidden md:flex flex-wrap space-x-4 mb-4">
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#disasters" className="hover:text-white">Disasters</a></li>
            <li><a href="#communication" className="hover:text-white">Communication</a></li>
            <li><a href="#resources" className="hover:text-white">Resources</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="text-sm text-white text-center">
          &copy; {new Date().getFullYear()} Nature's Safety. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
