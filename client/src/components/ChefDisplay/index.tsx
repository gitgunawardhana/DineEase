import { useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import fb from "../../assets/images/HomePage/FB.png";
import insta from "../../assets/images/HomePage/Insta.png";
import tweet from "../../assets/images/HomePage/tweet.png";
import { Button } from "../../base-components/Button";

interface Person {
  name: string;
  imageId: string;
}

interface ChefDisplayProps {
  person: Person;
}

export default function ChefDisplay({ person }: ChefDisplayProps) {
  const [isHoveredFb, setIsHoveredFb] = useState(false);
  const [isHoveredInsta, setIsHoveredInsta] = useState(false);
  const [isHoveredTweet, setIsHoveredTweet] = useState(false);
  return (
    <>
      <div className="group m-4 flex h-full flex-col items-center justify-center">
        <img
          className="avatar m-2 transform cursor-pointer rounded-md object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          src={person.imageId}
          alt={person.name}
        />
        <br />
        <p className="text-xl uppercase tracking-widest lg:text-2xl">
          {person.name}
        </p>
        <br />
        <Button
          as={NavLink}
          to="/"
          className={twMerge(
            " border-none !bg-red-700 px-8 py-3 text-white shadow-none hover:text-[#ffffffc0]"
          )}
        >
          <span
            className={twMerge(" text-sm font-bold uppercase tracking-widest")}
          >
            Follow +
          </span>
        </Button>
        <br />
        <div className="justify-content grid grid-cols-3 items-center">
          <div className="m-2">
            <img
              src={fb}
              alt=""
              className="w-28 cursor-pointer shadow-white drop-shadow-2xl filter "
              style={{
                filter: isHoveredFb
                  ? "sepia(1) saturate(1000%) hue-rotate(94deg)"
                  : "none",
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={() => setIsHoveredFb(true)}
              onMouseLeave={() => setIsHoveredFb(false)}
            />
          </div>
          <div className="m-2">
            <img
              src={insta}
              alt=""
              className="w-28 cursor-pointer shadow-white drop-shadow-2xl filter "
              style={{
                filter: isHoveredInsta
                  ? "sepia(1) saturate(1000%) hue-rotate(267deg)"
                  : "none",
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={() => setIsHoveredInsta(true)}
              onMouseLeave={() => setIsHoveredInsta(false)}
            />
          </div>
          <div className="m-2">
            <img
              src={tweet}
              alt=""
              className="w-28 cursor-pointer shadow-white drop-shadow-2xl filter "
              style={{
                filter: isHoveredTweet
                  ? "sepia(1) saturate(1000%) hue-rotate(75deg)"
                  : "none",
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={() => setIsHoveredTweet(true)}
              onMouseLeave={() => setIsHoveredTweet(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
