import { twMerge } from "tailwind-merge";
import Back_05 from "../../assets/images/HomePage/CutomerReviews.svg";
import Text_08 from "../../assets/images/HomePage/Text_08.png";
import { reviews } from "../../components/ReviewCardComponent/ReviewDetails";
import ReviewCardComponent from "./../../components/ReviewCardComponent/index";

interface ReviewCard {
  className?: string;
}

const Index: React.FC<ReviewCard> = ({ className }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Back_05})`,
          backgroundSize: "cover",
        }}
        className={twMerge(
          "w-m flex h-full flex-col bg-repeat p-5 pt-[80px]  text-center text-slate-900 dark:text-slate-50",
          className && className
        )}
      >
        <div className=" flex h-full flex-col items-center justify-center">
          <img src={Text_08} alt="Our food" className="mb-12 scale-75" />
          <div className="container !w-full pb-10">
            <ReviewCardComponent reviews={reviews} />
          </div>

          <br></br>
        </div>
      </div>
    </>
  );
};

export default Index;
