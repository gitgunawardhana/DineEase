import "react-resizable/css/styles.css";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Back_08 from "../../assets/images/HomePage/MobileApp.svg";
import app_store from "../../assets/images/HomePage/app_store.png";
import get_started from "../../assets/images/HomePage/get_started.png";
import google_pay from "../../assets/images/HomePage/google_pay.png";
import { Button } from "../../base-components/Button";

const Index = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Back_08})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px] text-center text-slate-900 dark:text-slate-50 lg:h-screen"
      >
        <div className="h-full items-center justify-center">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className=" mx-5 flex flex-col justify-center rounded-3xl bg-opacity-50  p-4 md:translate-y-5 lg:w-1/2 lg:translate-y-20 xl:w-1/3 xl:translate-x-28 xl:translate-y-28">
              <br />
              <img src={get_started} alt="" className="scale-75" />
              <br />
              <p className="p-5 text-center text-sm leading-relaxed tracking-widest text-amber-400">
                Welcome to our mobile app for Taco Grag restaurant ! Our mobile
                app is the perfect way to stay connected with us and enjoy all
                of our services on the go. With our app, you can easily browse
                our menu, place orders for pickup or delivery, and even make
                reservations at our restaurant.
              </p>
              <Button
                as={NavLink}
                to="/"
                className={twMerge(
                  "!bg-gradient-yellow m-auto mb-10 mt-5 transform  rounded-[15px] border-2 border-solid border-gradient-yellow-500 bg-opacity-50 px-20 transition-all hover:text-amber-300"
                )}
              >
                <span
                  className={twMerge(
                    "transform text-[14px] font-[900] uppercase tracking-[2px] !text-gradient-yellow-500 transition-all"
                  )}
                >
                  Download App
                </span>
              </Button>
              <div className="m-auto flex grid-cols-2 gap-4">
                <div className="">
                  <img src={app_store} alt="" className="h-16 cursor-pointer" />
                </div>
                <div className="">
                  <img
                    src={google_pay}
                    alt=""
                    className="h-16 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="p-4"></div>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Index;
