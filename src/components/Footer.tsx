import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[rgba(10,9,25,1)] self-center relative z-0 flex w-full flex-col overflow-hidden items-stretch justify-center pt-10 pb-[110px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="z-0 flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 w-[323px] my-auto">
          <img
            src="Vontech-Logo 1.png"
            alt="Vontech Group Logo"
            className="aspect-[3.66] object-contain w-[165px] max-w-full"
          />
          <div className="flex w-full gap-5 mt-[17px]">
            <a href="#" className="bg-[rgba(59,89,152,1)] flex items-center justify-center w-[50px] h-[50px] rounded-[25px] hover:opacity-80 transition-opacity">
              <img
                src="facebook.png"
                alt="Facebook"
                className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
              />
            </a>
            <a href="#" className="justify-center items-center flex w-[50px] h-[50px] bg-black rounded-[25px] hover:opacity-80 transition-opacity">
              <img
                src="x.png"
                alt="Twitter"
                className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
              />
            </a>
            <a href="#" className="bg-[rgba(0,119,181,1)] flex items-center justify-center w-[50px] h-[50px] rounded-[25px] hover:opacity-80 transition-opacity">
              <img
                src="linkedin.png"
                alt="LinkedIn"
                className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
              />
            </a>
            <a href="#" className="bg-neutral-800 flex items-center justify-center w-[50px] h-[50px] rounded-[25px] hover:opacity-80 transition-opacity">
              <img
                src="instagram.png"
                alt="Instagram"
                className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
              />
            </a>
          </div>
          <p className="text-white text-base font-normal leading-6 mt-[17px]">
            VonTech Group is a cloud consulting company
            <br />
            dedicated to helping businesses achieve their
            <br />
            cloud goals with innovative solutions.
          </p>
        </div>
        <nav className="self-stretch flex min-w-60 min-h-[186px] items-stretch gap-[40px_60px] text-base text-white font-normal flex-wrap my-auto max-md:max-w-full">
          <div className="w-[98px]">
            <h4 className="text-white text-xl font-medium">Company</h4>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">About</a>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Services</a>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Contact Us</a>
          </div>
          <div className="whitespace-nowrap w-[89px]">
            <h4 className="text-white text-xl font-medium">Resources</h4>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Webinars</a>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Career</a>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Blog</a>
          </div>
          <div className="w-[110px]">
            <h4 className="text-white text-xl font-medium">Support</h4>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Partners</a>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Support portals</a>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Contact us</a>
          </div>
          <div className="w-[153px]">
            <h4 className="text-white text-xl font-medium">Policy</h4>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Cookies Policy</a>
            <a href="#" className="text-white mt-7 block hover:text-[#FFE21B] transition-colors">Terms and Conditions</a>
          </div>
        </nav>
      </div>
      <div className="absolute z-0 bottom-0 left-0 w-full flex items-center justify-center border-t border-[rgba(25,25,25,1)] p-5">
        <div className="text-white text-sm font-medium text-center leading-[1.4">
          Copywrite © 2025 VonTech Group. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
