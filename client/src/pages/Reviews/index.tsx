import ReviewCard from "../../components/ReviewCard";

interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = ({ className }) => {
  return <ReviewCard className="!pt-32" />;
};

export default Main;
