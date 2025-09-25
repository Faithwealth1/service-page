import React from 'react';

const Header = () => {
  return (
    <header className="justify-between items-center absolute z-10 flex w-[1280px] max-w-full gap-[40px_100px] flex-wrap -translate-x-2/4 translate-y-[0%] bg-[rgba(255,255,255,0.15)] px-8 py-4 rounded-[30px] left-2/4 top-[53px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/a0d7ae3d5919fc0bdac4bea8de350a83e737593e?placeholderIfAbsent=true"
        alt="Vontech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />
      <nav className="self-stretch flex min-w-60 items-center gap-9 flex-wrap my-auto max-md:max-w-full">
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Home
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          About
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Services
        </a>
        <div className="self-stretch flex items-center gap-[5px] my-auto">
          <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            Resources
          </a>
          <div className="self-stretch flex flex-col overflow-hidden items-center justify-center w-[26px] my-auto pt-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/b83d9e1e2c5d17bda2f384bf9d8e24c2c9d7dde9?placeholderIfAbsent=true"
              alt="Dropdown arrow"
              className="aspect-[1] object-contain w-6"
            />
          </div>
        </div>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Career
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Events
        </a>
      </nav>
      <button className="justify-center items-center self-stretch flex gap-2 text-xl text-[#181818] font-semibold whitespace-nowrap bg-[#FFE21B] my-auto px-8 py-3 rounded-[20px] max-md:px-5 hover:bg-[#FFD700] transition-colors">
        Login
      </button>
    </header>
  );
};

export default Header;
