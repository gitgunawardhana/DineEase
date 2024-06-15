import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Back_07 from "../../assets/images/HomePage/AboutUs.svg";
import Back_01 from "../../assets/images/HomePage/Back_01.svg";
import Back_02 from "../../assets/images/HomePage/Back_02.svg";
import Back_03 from "../../assets/images/HomePage/Back_03.svg";
import BestMenu from "../../assets/images/HomePage/BestMenu.svg";
import Back_06 from "../../assets/images/HomePage/Blog.svg";
import Back_05 from "../../assets/images/HomePage/CutomerReviews.svg";
import Delivery_01 from "../../assets/images/HomePage/Delivery_01.png";
import Delivery_02 from "../../assets/images/HomePage/Delivery_02.png";
import Delivery_03 from "../../assets/images/HomePage/Delivery_03.png";
import Back_08 from "../../assets/images/HomePage/MobileApp.svg";
import our_chef from "../../assets/images/HomePage/Our chefs.png";
import Back_09 from "../../assets/images/HomePage/OurChef.svg";
import OurFood from "../../assets/images/HomePage/OurFood.png";
import OurMenu from "../../assets/images/HomePage/OurMenu.png";
import Text_01 from "../../assets/images/HomePage/Text_01.png";
import Text_02 from "../../assets/images/HomePage/Text_02.png";
import ImageGallery from "./../../components/ImageGallery/index";
// import Text_03 from "../../assets/images/HomePage/Text_03.png";
// import Text_04 from "../../assets/images/HomePage/Text_04.png";
// import Text_05 from "../../assets/images/HomePage/Text_05.png";
import Text_08 from "../../assets/images/HomePage/Text_08.png";
import about from "../../assets/images/HomePage/about.png";
import app_store from "../../assets/images/HomePage/app_store.png";
import chef_01 from "../../assets/images/HomePage/chef_01.png";
import chef_02 from "../../assets/images/HomePage/chef_02.png";
import chef_03 from "../../assets/images/HomePage/chef_03.png";
import chef_04 from "../../assets/images/HomePage/chef_04.png";
import get_started from "../../assets/images/HomePage/get_started.png";
import google_pay from "../../assets/images/HomePage/google_pay.png";
import { Button } from "../../base-components/Button";
import ChefDisplay from "../../components/ChefDisplay/index";
import DeliveryCards from "../../components/HomePageOrderDiv";
import { reviews } from "../../components/ReviewCardComponent/ReviewDetails";
import HomeBlog from "./../../components/HomeBlog/index";
import ProductBrowsingComponent from "./../../components/MenuItems/index";
import ReviewCardComponent from "./../../components/ReviewCardComponent/index";

const Main = () => {
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
          <img src={OurMenu} alt="" className="scale-75" />
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
          <img src={OurFood} alt="Our food" className="mb-20 scale-75" />
          <ImageGallery />
        </div>
      </div>

      {/** Fifth part */}

      <div
        style={{
          backgroundImage: `url(${Back_05})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50"
      >
        <div className=" flex h-full flex-col items-center justify-center">
          <img src={Text_08} alt="Our food" className="mb-12 scale-75" />
          <div className="container !w-full pb-10">
            <ReviewCardComponent reviews={reviews} />
          </div>

          <br></br>
        </div>
      </div>

      {/** sixth part */}

      <div
        style={{
          backgroundImage: `url(${Back_06})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 sm:h-full md:h-screen"
      >
        <div className=" h-full items-center justify-center">
          <div className="grid h-screen grid-cols-1 sm:grid-cols-2">
            {/* First Column */}
            <div className="h-screen rounded-3xl bg-amber-300 bg-opacity-50 p-4 md:h-5/6 md:pb-10">
              {/* Text at the top of the card */}

              {/* Button at the bottom of the card */}
              <br />
              <h2 className="uppercase tracking-widest text-gray-900 xs:text-[30px] xs:font-black sm:text-[40px]">
                DineEase Blog
              </h2>
              <br />

              <p className="p-5 text-justify text-xs text-gray-900 xs:p-10 xs:text-lg sm:text-xl">
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
                  "rounded-[15px] border-2 border-solid border-gradient-yellow-300 !bg-zinc-800 bg-opacity-50 px-[20px] py-[20px] xs:px-[120px]  sm:px-[180px] sm:py-[20px]"
                )}
              >
                <span
                  className={twMerge(
                    "!text-#FFE353 text-[14px] font-[900] uppercase tracking-[2px] hover:scale-110"
                  )}
                >
                  Go to Our Blog
                </span>
              </Button>
            </div>

            {/* Second Column */}
            <div className="p-4">{/* Content of the second column */}</div>
          </div>
        </div>
        <br></br>
      </div>

      {/**seventh part */}
      <div
        style={{
          backgroundImage: `url(${Back_07})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 sm:h-full md:h-screen"
      >
        <div className=" flex h-1/5 flex-col items-center justify-center">
          <img src={about} alt="" />
          <br />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div></div>
          <div>
            <p className="p-5 text-justify tracking-tight text-[px] text-amber-400 xs:leading-7">
              {" "}
              Welcome to our website for the Grand café restaurant, located in
              One Galle Face, Colombo! We are a food restaurant that is open
              from 6.00 pm to 1.00 am, and we take pride in offering our
              customers a unique and unforgettable dining experience.
              <br />
              <br />
              <span>
                At Grand café, we are passionate about delivering the finest
                food and customer service in the industry. Our menu is carefully
                crafted to cater to all tastes, and we use only the freshest and
                highest-quality ingredients in our dishes. From delicious
                appetizers to mouth-watering entrees and decadent desserts, we
                have something to satisfy every craving.
              </span>
              <br />
              <br /> If you're looking to dine with us, you can easily book a
              table through our website. We also offer takeaway options for
              those who prefer to enjoy our food from the comfort of their own
              homes.
            </p>

            <Button
              as={NavLink}
              to="/"
              className={twMerge(
                "rounded-[15px] border-2 border-solid border-gradient-yellow-500 !bg-transparent bg-opacity-50 px-[20px] py-[20px]   sm:px-[80px] sm:py-[20px]"
              )}
            >
              <span
                className={twMerge(
                  "!text-#FFE353 text-[14px] font-[900] uppercase tracking-[2px] hover:scale-110"
                )}
              >
                Read More
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/**eighth part */}
      <div
        style={{
          backgroundImage: `url(${Back_08})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 sm:h-full md:h-screen"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="flex flex-col items-center justify-center">
            <img src={get_started} alt="" className="w-3/4" />
            <br />
            <p className="p-5 text-center   tracking-wide text-amber-400 xs:p-10 xs:leading-7 sm:leading-10">
              Welcome to our mobile app for Taco Grag restaurant ! Our mobile
              app is the perfect way to stay connected with us and enjoy all of
              our services on the go. With our app, you can easily browse our
              menu, place orders for pickup or delivery, and even make
              reservations at our restaurant.
            </p>
            <Button
              as={NavLink}
              to="/"
              className={twMerge(
                "!bg-gradient-yellow rounded-[15px] border-2 border-solid  border-gradient-yellow-500 bg-opacity-50 px-[20px] py-[20px] hover:text-amber-300   sm:px-[80px] sm:py-[20px]"
              )}
            >
              <span
                className={twMerge(
                  "!text-#FFE353 text-[14px] font-[900] uppercase tracking-[2px]  "
                )}
              >
                Download App
              </span>
            </Button>
            <br />
            <div className="flex grid-cols-2 sm:mt-10">
              <div className="mx-4">
                <img src={app_store} alt="" />
              </div>
              <div className="mx-4">
                <img src={google_pay} alt="" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/**ninth part */}
      <div
        style={{
          backgroundImage: `url(${Back_09})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 sm:h-full md:h-screen"
      >
        <div className="grid items-center justify-center">
          <img src={our_chef} alt="" className="" />
          <br />
        </div>
        <div className="grid sm:grid-cols-4 ">
          <div>
            <ChefDisplay
              person={{
                name: "Grant Achatz",
                imageId: chef_01,
              }}
            />
          </div>
          <div>
            <ChefDisplay
              person={{
                name: "Ferran Adria",
                imageId: chef_02,
              }}
            />
          </div>
          <div>
            <ChefDisplay
              person={{
                name: "Nicolas Appert",
                imageId: chef_03,
              }}
            />
          </div>
          <div>
            <ChefDisplay
              person={{
                name: "Mario Batali",
                imageId: chef_04,
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Main;
