import React from "react";
import Icon_01 from "../../assets/images/HomePage/image 62.png";
import Icon_02 from "../../assets/images/HomePage/image 63.png";
import Icon_03 from "../../assets/images/HomePage/image 64.png";
import Icon_04 from "../../assets/images/HomePage/image 65.png";

interface Review {
  name: string;
  post: string;
  rate: string;
  review: string;
  image: string;
}

interface ReviewCardProps {
  review: Review;
}

const Card: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="to-Emerald-950 content-center items-center rounded-3xl bg-gradient-to-br from-yellow-950 px-4 py-10">
      <div className="flex items-center justify-center">
        {review.image && (
          <img
            src={review.image}
            alt={review.name}
            className="m-auto h-48 w-48 rounded-full object-cover"
          />
        )}
      </div>
      <p className="m-auto mt-4 text-xl font-black uppercase tracking-widest text-[#FF9224]">
        {review.name}
      </p>
      <p className=" m-auto mt-2 !bg-gradient-to-b !from-gradient-yellow-100 !to-gradient-yellow-900 bg-clip-text px-10 text-center text-sm font-normal leading-relaxed tracking-widest text-transparent">
        {review.post}
      </p>
      <br />
      <p className=" !bg-gradient-to-b !from-gradient-yellow-100 !to-gradient-yellow-900 bg-clip-text p-4 px-10 text-justify text-sm font-normal leading-relaxed tracking-widest text-transparent">
        {review.review}
      </p>
      <br />
      <br />
      <div className="flex w-full items-center justify-center gap-5">
        <img src={Icon_01} className="h-7 w-7 object-cover" />
        <img src={Icon_02} className="h-7 w-7 object-cover" />
        <img src={Icon_03} className="h-7 w-7 object-cover" />
        <img src={Icon_04} className="h-7 w-7 object-cover" />
      </div>
    </div>
  );
};

export default Card;
