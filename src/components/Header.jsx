import React from 'react';

function Header() {
  return (
    <header className="sticky top-0 bg-green-600 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Nature's Safety</h1>
        <nav>
          <ul className="flex flex-wrap space-x-4 mt-2 md:mt-0">
            <li><a href="#home" className="hover:text-green-300">Home</a></li>
            <li><a href="#disasters" className="hover:text-green-300">Disasters</a></li>
            <li><a href="#communication" className="hover:text-green-300">Communication</a></li>
            <li><a href="#resources" className="hover:text-green-300">Resources</a></li>
            <li><a href="#contact" className="hover:text-green-300">Contact</a></li>
            <li><a href="#sos" className="hover:text-green-300">SOS</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
