import React from 'react';

interface IndustryCardProps {
  category: string;
  title: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ category, title, description }) => {
  return (
    <article className="shadow-[0_6px_36px_0_rgba(142,142,142,0.15)] self-stretch min-w-60 min-h-[330px] grow shrink w-[502px] bg-white my-auto p-10 rounded-[30px] max-md:max-w-full max-md:px-5">
      <div className="aspect-[1/1] flex min-h-[60px] w-[60px] h-[60px] bg-[#097484] rounded-[10px]" />
      <div className="w-full mt-6 max-md:max-w-full">
        <div className="text-[#0288D1] text-xl font-medium max-md:max-w-full">
          {category}
        </div>
        <div className="flex w-full flex-col items-stretch justify-center mt-2 max-md:max-w-full">
          <h3 className="text-[#181818] text-2xl font-semibold leading-[1.3] max-md:max-w-full">
            {title}
          </h3>
          <p className="text-[#393C3D] text-lg font-normal leading-[27px] mt-4 max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default IndustryCard;
