import { useEffect, useState } from "react";
import "react-resizable/css/styles.css";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Back_01 from "../../assets/images/HomePage/Back_01.svg";
import Back_02 from "../../assets/images/HomePage/Back_02.svg";
import Back_03 from "../../assets/images/HomePage/Back_03.svg";
import BestMenu from "../../assets/images/HomePage/BestMenu.svg";
import Back_06 from "../../assets/images/HomePage/Blog.svg";
import DINEEASE from "../../assets/images/HomePage/DINEEASE.svg";
import Delivery_01 from "../../assets/images/HomePage/Delivery_01.png";
import Delivery_02 from "../../assets/images/HomePage/Delivery_02.png";
import Delivery_03 from "../../assets/images/HomePage/Delivery_03.png";
import our_chef from "../../assets/images/HomePage/Our chefs.png";
import Back_09 from "../../assets/images/HomePage/OurChef.svg";
import OurFood from "../../assets/images/HomePage/OurFood.png";
import OurMenu from "../../assets/images/HomePage/OurMenu.png";
import Text_01 from "../../assets/images/HomePage/Text_01.png";
import Text_02 from "../../assets/images/HomePage/Text_02.png";
import chef_01 from "../../assets/images/HomePage/chef_01.png";
import chef_02 from "../../assets/images/HomePage/chef_02.png";
import chef_03 from "../../assets/images/HomePage/chef_03.png";
import chef_04 from "../../assets/images/HomePage/chef_04.png";
import { Button } from "../../base-components/Button";
import AboutUs from "../../components/AboutUs";
import ChefDisplay from "../../components/ChefDisplay/index";
import DeliveryCards from "../../components/HomePageOrderDiv";
import Location from "../../components/Location";
import MobileApp from "../../components/MobileApp";
import ReviewCard from "../../components/ReviewCard";
import HomeBlog from "./../../components/HomeBlog/index";
import ImageGallery from "./../../components/ImageGallery/index";
import ProductBrowsingComponent from "./../../components/MenuItems/index";

const chefs = [
  { name: "Grant Achatz", imageId: chef_01 },
  { name: "Ferran Adria", imageId: chef_02 },
  { name: "Nicolas Appert", imageId: chef_03 },
  { name: "Mario Batali", imageId: chef_04 },
];

const Main = () => {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(450);

  useEffect(() => {
    // Calculate initial width and height based on the window size or parent container
    const handleResize = () => {
      setWidth(window.innerWidth * 0.5); // 50% of the window width
      setHeight(window.innerHeight * 0.5); // 50% of the window height
    };

    // Set initial size
    handleResize();

    // Add event listener to update size on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {/**First Part */}
      <div
        style={{
          backgroundImage: `url(${Back_01})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-screen flex-col p-5 pt-[80px] text-center  text-slate-900 dark:text-slate-50 sm:h-screen md:h-screen"
      >
        <HomeBlog />
      </div>
      {/**Second Part */}
      <div
        style={{
          backgroundImage: `url(${Back_02})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 md:h-screen"
      >
        <div className="flex flex-col items-center justify-center">
          <img src={Text_01} alt="" className="mb-2 scale-75" />
          <img className="scale-75 justify-center" src={Text_02} alt="" />
          <br></br>
          <div className="grid w-screen md:grid-cols-3">
            <div className="flex items-center justify-center 2xl:translate-y-40">
              <DeliveryCards
                imageSrc={Delivery_01}
                title="Best Quality"
                description="We believe that ordering delicious food should be easy and hassle-free. We understand that our customers have busy schedules, and we want to make the ordering  "
                buttonText="Read More"
              />
            </div>
            <div className="flex items-center justify-center 2xl:-translate-x-28 2xl:translate-y-10">
              <DeliveryCards
                imageSrc={Delivery_02}
                title="Easy to order"
                description="We take pride in delivering our customers' orders quickly and efficiently. We understand that our customers' time is valuable, and we want to ensure that they receive  "
                buttonText="Read More"
              />
            </div>
            <div className="flex items-center justify-center 2xl:-translate-x-40 2xl:translate-y-40">
              <DeliveryCards
                imageSrc={Delivery_03}
                title="Fast Delivery"
                description="We take great pride in delivering the best quality products to our customers. We believe that using high-quality ingredients is the foundation of creating delicious and satisfying  "
                buttonText="Read More"
              />
            </div>
          </div>
        </div>
      </div>

      {/**Third part */}
      <div
        style={{
          backgroundImage: `url(${Back_03})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 md:h-screen"
      >
        <div className="flex flex-col items-center justify-center">
          <img src={OurMenu} alt="" className="scale-50 sm:scale-75" />
          <br />
          {/* from here */}
          <div className="container !w-full">
            <ProductBrowsingComponent />
          </div>
        </div>
      </div>
      {/** Fourth part */}

      <div
        style={{
          backgroundImage: `url(${BestMenu})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50"
      >
        <div className="flex h-full flex-col items-center justify-center pb-20">
          <img
            src={OurFood}
            alt="Our food"
            className="mb-20 scale-50 sm:scale-75"
          />
          <ImageGallery />
        </div>
      </div>

      {/** Fifth part */}
      <ReviewCard />

      {/** sixth part */}
      <div
        style={{
          backgroundImage: `url(${Back_06})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 sm:h-full md:h-screen"
      >
        <div className="h-full items-center justify-center">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="order-last mx-5 flex -translate-y-8 flex-col justify-center rounded-3xl bg-opacity-50 !bg-gradient-to-br !from-[#FFE35348] !to-[#fc9b0b48] p-4 md:translate-y-5 lg:w-1/2 lg:translate-y-10 xl:w-1/3 xl:-translate-x-28 xl:translate-y-32">
              <br />
              {/* <h2 className="m-auto text-4xl font-black uppercase tracking-widest text-gray-900">
                DineEase Blog
              </h2> */}
              <img
                src={DINEEASE}
                alt=""
                className="m-auto my-3 w-48 items-center xs:w-52 sm:w-60 md:w-72"
              />
              <p className=" m-auto max-w-[450px] p-5 text-justify text-sm font-semibold leading-relaxed tracking-widest text-black">
                Welcome to the Taco Grag restaurant blog, your ultimate guide to
                all things related to our restaurant! Here, you'll find a
                plethora of information about our mouth-watering food, talented
                chefs, exceptional customer service, and the overall quality of
                our restaurant. Whether you're a regular customer or a
                first-time visitor, our blog is the perfect place to discover
                everything you need to know about Taco Grag. From our menu to
                our reservation system, we've got you covered. So, sit back,
                relax, and let us take you on a journey through the world of
                Taco Grag!
              </p>
              <Button
                as={NavLink}
                to="/"
                className={twMerge(
                  "mx-auto mb-10 mt-4 max-w-[450px] rounded-[15px] border-none !bg-[#402F11] bg-opacity-50 px-[30px] xs:px-[100px] sm:px-[130px]"
                )}
              >
                <span
                  className={twMerge(
                    "m-auto w-auto text-sm font-black uppercase tracking-[2px] !text-gradient-yellow-900"
                  )}
                >
                  Go to Our Blog
                </span>
              </Button>
            </div>
            <div className="p-4"></div>
          </div>
        </div>
        <br></br>
      </div>

      {/**seventh part */}
      <AboutUs />

      {/**eighth part */}
      <MobileApp />

      {/**eighth part */}
      <Location />

      {/**ninth part */}
      <div
        style={{
          backgroundImage: `url(${Back_09})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 sm:h-full md:h-full"
      >
        <div className="grid items-center justify-center">
          <img src={our_chef} alt="" className="scale-50 sm:scale-75" />
          <br />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
          {chefs.map((chef, index) => (
            <div key={index}>
              <ChefDisplay person={chef} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
