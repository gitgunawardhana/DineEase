import { twMerge } from "tailwind-merge";
import Footer from "../../components/Footer";
import LandingNavbar from "../../components/LandingNavbar";
import Navbar from "../../components/Navbar";

interface SideMenuLayoutsProps {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  landing?: boolean;
  footer?: boolean;
}

const Main = (props: SideMenuLayoutsProps) => {
  return (
    <div>
      {props.landing ? <LandingNavbar /> : <Navbar />}
      <div className="h-0"></div>
      <div
        className={twMerge([
          "content transform duration-500 ease-in-out",
          props.className,
        ])}
      >
        {props.children}
        {props.footer && (
          <div className="-mx-5 -mb-5 mt-10">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

Main.defaultProps = {
  landing: false,
};
export default Main;
