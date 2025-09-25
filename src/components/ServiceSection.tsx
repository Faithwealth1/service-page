import React from 'react';

interface CheckPoint {
  text: string;
}

interface ServiceSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  checkPoints: CheckPoint[];
  imageOnLeft?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  checkPoints,
  imageOnLeft = true
}) => {
  const imageElement = (
    <img
      src={imageSrc}
      alt={imageAlt}
      className="aspect-[1] object-contain w-[400px] self-stretch min-w-60 grow shrink my-auto max-md:max-w-full"
    />
  );

  const contentElement = (
    <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center grow shrink w-[474px] my-auto max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="w-full text-4xl font-bold leading-none max-md:max-w-full">
          <h2 className="bg-clip-text max-md:max-w-full">
            {title}
          </h2>
          <div className="min-h-0.5 w-[94px] bg-[#181818] mt-2 border-[rgba(24,24,24,1)] border-solid border-2" />
        </div>
        <p className="text-[#393C3D] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
          {description}
        </p>
      </div>
      <div className="flex w-full flex-col items-stretch text-xl text-[#181818] font-medium justify-center mt-10 max-md:max-w-full">
        {checkPoints.map((point, index) => (
          <div key={index} className="flex w-full items-center gap-4 flex-wrap mt-5 first:mt-0 max-md:max-w-full">
            <div className="bg-[rgba(9,116,132,0.4)] self-stretch flex w-10 shrink-0 h-10 my-auto rounded-[1249px]" />
            <div className="text-[#181818] self-stretch my-auto">
              {point.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-white px-20 py-[60px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_120px] justify-center flex-wrap max-md:max-w-full">
        {imageOnLeft ? (
          <>
            {imageElement}
            {contentElement}
          </>
        ) : (
          <>
            {contentElement}
            {imageElement}
          </>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
