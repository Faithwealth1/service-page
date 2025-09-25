import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="items-center shadow-[0_6px_36px_0_rgba(142,142,142,0.15)] self-stretch flex min-w-60 flex-col justify-center aspect-[1] w-[390px] bg-white my-auto px-10 rounded-[30px] max-md:px-5">
      <div className="flex w-full flex-col items-stretch justify-center">
        <h3 className="text-[#181818] text-2xl font-semibold leading-[31px]">
          {title}
        </h3>
        <p className="text-[#393C3D] text-lg font-normal leading-[27px] mt-4">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
