import React, { useContext, useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ProviderContext } from "../Provider";

interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
}

interface ProductBrowsingComponentProps {
  products: Product[];
}

const ProductBrowsingComponent: React.FC<ProductBrowsingComponentProps> = ({
  products,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const data = [
    {
      name: "John Morgan1",
      img: "https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg",
      review: "Lorem ipsum dolor sit amet, cor",
    },
    {
      name: "John Morgan2",
      img: "https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg",
      review: "Lorem ipsum dolor sit amet, cor",
    },
    {
      name: "John Morgan3",
      img: "https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg",
      review: "Lorem ipsum dolor sit amet, cor",
    },
    {
      name: "John Morgan4",
      img: "https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg",
      review: "Lorem ipsum dolor sit amet, cor",
    },
    {
      name: "John Morgan5",
      img: "https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg",
      review: "Lorem ipsum dolor sit amet, cor",
    },
    {
      name: "John Morgan6",
      img: "https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg",
      review: "Lorem ipsum dolor sit amet, cor",
    },
    {
      name: "John Morgan7",
      img: "https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg",
      review: "Lorem ipsum dolor sit amet, cor",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [endPoint, setEndPoint] = useState(1);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesToShow(1);
      setEndPoint(1);
    } else if (width < 1024) {
      setSlidesToShow(2);
      setEndPoint(2);
    } else {
      setSlidesToShow(3);
      setEndPoint(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const next = () => {
    if (currentIndex < data.length - endPoint) {
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
      <div className="m-auto w-3/4">
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
              {data.map((d, index) => (
                <div
                  key={index}
                  className={`w-full flex-none p-2 sm:w-1/2 md:w-1/3`}
                  style={{ minWidth: `${100 / slidesToShow}%` }}
                >
                  <div className="h-[450px] rounded-xl bg-white text-white">
                    <div className="flex h-56 items-center justify-center rounded-t-xl bg-indigo-500">
                      <img src={d.img} alt="" className="h-44 w-44" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                      <p className="text-xl font-semibold text-black">
                        {d.name}
                      </p>
                      <p className="text-center">{d.review}</p>
                      <button className="rounded-xl bg-indigo-500 px-6 py-1 text-lg text-white">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-gray-500 p-2 text-white"
            onClick={prev}
          >
            Prev
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-gray-500 p-2 text-white"
            onClick={next}
          >
            Next
          </button>
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
