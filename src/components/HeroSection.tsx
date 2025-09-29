import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center overflow-hidden relative z-0 min-h-[720px] w-full pt-[210px] pb-[190px] px-20 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="footer bg.png"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[733px] max-w-full flex-col items-stretch">
        <div className="flex w-full flex-col items-stretch text-white justify-center max-md:max-w-full">
          <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Transforming Businesses Through Innovation and Technology
          </h1>
          <p className="text-xl font-medium leading-[30px] mt-5 max-md:max-w-full">
            At Vontech Group, we combine innovation with industry expertise to
            deliver cloud and technology services that accelerate growth.
            Every solution is tailored to help your business thrive in today's
            digital landscape.
          </p>
        </div>
        <button className="justify-center items-center bg-[#FFE21B] flex gap-2 text-xl text-[#181818] font-semibold mt-10 px-8 py-3 rounded-[20px] max-md:px-5 hover:bg-[#FFD700] transition-colors w-fit">
          Get Free Consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
