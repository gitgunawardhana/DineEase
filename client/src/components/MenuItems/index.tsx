import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { twMerge } from "tailwind-merge";
import { Button } from "../../base-components/Button";
import LucideIcon from "../../base-components/LucideIcon";
import { Icons } from "../../constants";
import { roundToDecimal } from "../../utils";
import { Product, ProviderContext } from "../Provider";

interface ProductBrowsingComponentProps {
  products: Product[];
}

const ProductBrowsingComponent: React.FC<ProductBrowsingComponentProps> = ({
  products,
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
    if (currentIndex < products.length - slidesToShow) {
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
              {products.length > 0 &&
                products.map((product: Product, index: number) => (
                  <div
                    key={index}
                    className={`relative w-full flex-none p-2 sm:w-1/2 md:w-1/3`}
                    style={{ minWidth: `${100 / slidesToShow}%` }}
                  >
                    <div className="h-auto rounded-xl text-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="m-auto h-48 w-48 rounded-full object-cover"
                      />
                      <div className="flex flex-col items-baseline justify-center gap-1 align-baseline">
                        <h1 className=" mt-5 text-xl font-black uppercase tracking-widest text-[#FF9224] m-auto">
                          {product.name}
                        </h1>
                        <div className="flex justify-center gap-1 m-auto">
                          <LucideIcon
                            icon={Icons.START}
                            strokeWidth={1}
                            fill="#24FFFF"
                            color="#24FFFF"
                            className="ml-2 translate-y-1"
                          />
                          <p className=" text-xl font-extrabold leading-relaxed text-[#24FFFF]">
                            {roundToDecimal(product.rate)}
                          </p>
                        </div>
                      </div>
                      <p className=" mx-auto mb-5 mt-4 line-clamp-3 min-h-[60px] max-w-[320px] overflow-hidden !bg-gradient-to-b from-gradient-yellow-100 to-gradient-yellow-900 bg-clip-text text-sm font-normal leading-relaxed tracking-widest text-transparent">
                        {product.description}
                      </p>
                      <h1 className=" mb-4 text-xl font-black uppercase tracking-widest text-[#FF9224]">
                        Rs. {product.price}.00
                      </h1>
                      <div className="m-auto flex flex-col gap-1 py-2">
                        <Button
                          as={NavLink}
                          to={`/product/${encodeURIComponent(product.name)}`}
                          className="m-auto h-12 min-w-[200px] !rounded-[10px] border border-gradient-yellow-100-15 !bg-transparent !bg-opacity-20 !px-5 !py-2 text-xs font-semibold uppercase text-black hover:text-black md:!px-5 md:py-2 md:text-sm"
                        >
                          <p className="!bg-gradient-to-b from-gradient-yellow-500 to-gradient-yellow-900 bg-clip-text text-transparent">
                            Order Now
                          </p>
                        </Button>
                        <Button
                          as={NavLink}
                          to={`/customize-page/${product.name}`}
                          className="m-auto !mb-2 !mt-1 h-12 min-w-[200px] !rounded-[10px] border-none !bg-opacity-20 !bg-gradient-to-b from-gradient-yellow-900-6 to-gradient-yellow-900-2 !px-5 !py-2 text-xs font-semibold uppercase text-black hover:text-black md:!px-5 md:py-2 md:text-sm"
                        >
                          <p className="!bg-gradient-to-b from-gradient-yellow-500 to-gradient-yellow-900 bg-clip-text text-transparent">
                            Customize Order
                          </p>
                        </Button>
                      </div>
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
              currentIndex === products.length - slidesToShow && "opacity-20",
            ])}
            onClick={next}
            disabled={currentIndex === products.length - slidesToShow}
          >
            <LucideIcon
              icon={Icons.CHEVRONSRIGHT}
              strokeWidth={4}
              color="#FF9224"
            />
          </button>

          <div className="mt-4 flex justify-center">
            {products.length > 0 &&
              Array(Math.ceil(products.length - (slidesToShow - 1)))
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

function Main() {
  const { products } = useContext(ProviderContext);

  return (
    <div>
      <ProductBrowsingComponent products={products} />
    </div>
  );
}

export default Main;
