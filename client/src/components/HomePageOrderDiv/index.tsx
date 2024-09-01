import React, { useEffect, useRef, useState } from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const Main: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
}) => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldAnimate(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={mainRef}
      className={`mt-10 transform rounded-lg p-4 shadow-lg transition-all ${
        shouldAnimate ? "appear-animation" : ""
      }`}
    >
      <div className="flex transform items-center justify-center transition-all">
        <img src={imageSrc} alt="Card" className=" " />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-amber-500">{title}</h3>
        <p className="mb-4 max-w-[400px] p-5 text-sm !font-normal leading-relaxed tracking-widest text-white">
          {description}
        </p>
        <button className="w-[250px] transform rounded-[15px] border-2 border-solid border-amber-500 !bg-transparent px-[30px] py-[10.141px] text-sm transition-all hover:scale-105 lg:px-[45px] lg:py-[10.141px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Main;
