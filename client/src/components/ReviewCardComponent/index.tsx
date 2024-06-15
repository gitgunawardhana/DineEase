import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { twMerge } from "tailwind-merge";
import LucideIcon from "../../base-components/LucideIcon";
import { Icons } from "../../constants";
import ReviewCard from "./Card";

interface Review {
  name: string;
  post: string;
  rate: string;
  review: string;
  image: string;
}

interface ReviewCardComponentProps {
  reviews: Review[];
}

const ReviewCardComponent: React.FC<ReviewCardComponentProps> = ({
  reviews,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesToShow(1);
    } else if (width < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const next = () => {
    if (currentIndex < reviews.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="m-auto w-full">
        <div className="relative mt-20">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (100 / slidesToShow) * currentIndex
                }%)`,
              }}
            >
              {reviews.length > 0 &&
                reviews.map((review: Review, index: number) => (
                  <div
                    key={index}
                    className={`relative w-full flex-none p-2 sm:w-1/2 md:w-1/3`}
                    style={{ minWidth: `${100 / slidesToShow}%` }}
                  >
                    <div
                      className={
                        currentIndex + 1 === index
                          ? "scale-90 transform transition-all"
                          : "-translate-y-16 scale-75 transform transition-all"
                      }
                    >
                      <ReviewCard review={review} />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <button
            className={twMerge([
              "absolute left-0 top-1/2 -translate-y-1/2 transform p-2 text-white opacity-100",
              currentIndex === 0 && "opacity-20",
            ])}
            onClick={prev}
            disabled={currentIndex === 0}
          >
            <LucideIcon
              icon={Icons.CHEVRONSLEFT}
              strokeWidth={4}
              color="#FF9224"
            />
          </button>
          <button
            className={twMerge([
              "absolute right-0 top-1/2 -translate-y-1/2 transform p-2 text-white",
              currentIndex === reviews.length - slidesToShow && "opacity-20",
            ])}
            onClick={next}
            disabled={currentIndex === reviews.length - slidesToShow}
          >
            <LucideIcon
              icon={Icons.CHEVRONSRIGHT}
              strokeWidth={4}
              color="#FF9224"
            />
          </button>

          <div className="mt-4 flex justify-center">
            {reviews.length > 0 &&
              Array(Math.ceil(reviews.length - (slidesToShow - 1)))
                .fill(0)
                .map((_, index) => (
                  <button
                    key={index}
                    className={`mx-1 h-1 w-2 rounded-full ${
                      index === currentIndex
                        ? "w-10 transform bg-gradient-yellow-900 transition-all"
                        : "bg-gradient-yellow-900"
                    }`}
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCardComponent;
