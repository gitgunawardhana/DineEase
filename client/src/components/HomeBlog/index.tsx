import { ReactNode, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Text_03 from "../../assets/images/HomePage/Text_03.png";
import Text_04 from "../../assets/images/HomePage/Text_04.png";
import Text_05 from "../../assets/images/HomePage/Text_05.png";
import { Button } from "../../base-components/Button";
import { isLoggedInUser } from "../../utils";

interface AnimatedContentProps {
  children: ReactNode;
}

const AnimatedContent = ({ children }: AnimatedContentProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contentRef}
      className={`fade-in ${isVisible ? "animate-fade-in" : ""}`}
      style={{
        animationDuration: "1s",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

const index = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="grid h-screen items-center p-5 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <AnimatedContent>
              {/* Your animated content */}
              <img src={Text_03} alt="" />
              <br></br>
              <img src={Text_04} alt="" />
              <br></br>
              <img src={Text_05} alt="" />
              <br></br>
              <br></br>
              <div className="flex flex-col gap-2 sm:grid-cols-2 sm:flex-row">
                <div>
                  <Button
                    className={twMerge(
                      "hover:!text-#FFE353 !m-0 !w-full rounded-[15px] border-2 border-solid border-amber-500 !bg-transparent px-[20px] py-[10.141px] font-black uppercase tracking-wider text-amber-500 hover:!bg-amber-500 lg:px-[45px] lg:py-[10.141px]"
                    )}
                    onClick={() => isLoggedInUser(navigate, "/table-booking")}
                  >
                    <span className="!w-[125px]">Book A Table</span>
                  </Button>
                </div>
                <div>
                  <Button
                    as={NavLink}
                    to="/product-page"
                    className={twMerge(
                      "!m-0 !w-full rounded-[15px] border-2 border-solid border-amber-500 !bg-amber-500 px-[20px] py-[10.141px] font-black uppercase tracking-wider lg:px-[45px] lg:py-[10.141px]"
                    )}
                  >
                    <span className="!w-[125px]">See Menu</span>
                  </Button>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
