import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="justify-between items-center absolute z-10 flex w-[1280px] max-w-full gap-[40px_100px] flex-wrap -translate-x-2/4 translate-y-[0%] bg-[rgba(255,255,255,0.15)] px-8 py-4 rounded-[30px] left-2/4 top-[53px] max-md:px-5">
      {/* Logo */}
      <img
        src="Vontech-Logo 1.png"
        alt="Vontech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />

      {/* Desktop Nav */}
      <nav className="hidden md:flex self-stretch items-center gap-9 my-auto">
        <a href="#" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">Home</a>
        <a href="#" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">About</a>
        <a href="#" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">Services</a>
        <div className="flex items-center gap-[5px]">
          <a href="#" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">Resources</a>
          <img src="drop down.svg" alt="Dropdown arrow" className="w-6" />
        </div>
        <a href="#" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">Career</a>
        <a href="#" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">Events</a>
      </nav>

      {/* Desktop Button */}
      <button className="hidden md:flex justify-center items-center text-xl text-[#181818] font-semibold bg-[#FFE21B] px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">
        Login
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#181818] flex flex-col items-center gap-6 py-6 rounded-b-[20px] md:hidden">
          <a href="#" className="text-white text-lg hover:text-[#FFE21B]">Home</a>
          <a href="#" className="text-white text-lg hover:text-[#FFE21B]">About</a>
          <a href="#" className="text-white text-lg hover:text-[#FFE21B]">Services</a>
          <a href="#" className="text-white text-lg hover:text-[#FFE21B]">Resources</a>
          <a href="#" className="text-white text-lg hover:text-[#FFE21B]">Career</a>
          <a href="#" className="text-white text-lg hover:text-[#FFE21B]">Events</a>
          <button className="text-lg text-[#181818] font-semibold bg-[#FFE21B] px-6 py-2 rounded-[15px] hover:bg-[#FFD700]">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
