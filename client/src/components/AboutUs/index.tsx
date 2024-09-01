import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Back_07 from "../../assets/images/HomePage/AboutUs.svg";
import about from "../../assets/images/HomePage/about.png";
import { Button } from "../../base-components/Button";

const Index = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Back_07})`,
          backgroundSize: "cover",
        }}
        className="w-m relative flex h-screen flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50 sm:h-screen md:h-screen "
      >
        <div className="container absolute left-1/2 top-1/2 m-auto flex -translate-x-1/2 -translate-y-1/2 flex-col justify-center px-5 md:w-[700px] md:px-0">
          <img
            src={about}
            alt=""
            className="m-auto mb-5 scale-50 sm:mb-16 sm:scale-75"
          />
          <p className="text-center text-sm leading-relaxed tracking-widest text-amber-400">
            Welcome to our website for the Grand café restaurant, located in One
            Galle Face, Colombo! We are a food restaurant that is open from 6.00
            pm to 1.00 am, and we take pride in offering our customers a unique
            and unforgettable dining experience.
            <br />
            <br />
            <span>
              At Grand café, we are passionate about delivering the finest food
              and customer service in the industry. Our menu is carefully
              crafted to cater to all tastes, and we use only the freshest and
              highest-quality ingredients in our dishes. From delicious
              appetizers to mouth-watering entrees and decadent desserts, we
              have something to satisfy every craving.
            </span>
            <br />
            <br /> If you're looking to dine with us, you can easily book a
            table through our website. We also offer takeaway options for those
            who prefer to enjoy our food from the comfort of their own homes.
          </p>

          <Button
            as={NavLink}
            to="/"
            className={twMerge(
              "mx-auto mt-14 rounded-2xl border-2 border-solid border-gradient-yellow-500 !bg-transparent bg-opacity-50 px-20"
            )}
          >
            <span
              className={twMerge(
                "text-sm font-black uppercase tracking-widest !text-amber-400"
              )}
            >
              Read More
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
