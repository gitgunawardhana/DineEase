interface ImageProps {
  src: string;
  alt: string;
  size: string; // small, medium, large
}

const images: ImageProps[] = [
  {
    src: "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/plant-based%20protein.jpg?itok=aDfgI_8Z",
    alt: "Image 1",
    size: "small",
  },
  {
    src: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    alt: "Image 2",
    size: "small",
  },
  {
    src: "https://t4.ftcdn.net/jpg/06/85/13/59/360_F_685135980_I8Ku62fx5IQMNQUWvOkolzQp4vwTBVNW.jpg",
    alt: "Image 3",
    size: "medium",
  },
  {
    src: "https://restaurant.ucb.ac.uk/wp-content/uploads/2022/04/IMG_0582.jpg",
    alt: "Image 4",
    size: "small",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYFC_orpBMpyo8iPfKR9E345IuazesTl1HiFlDSORYoAL73krPiFQHQluJukltxXEK-CPwxYl2h1fxZQCr0cC0kZeU1WChRGdSw61z3JeU-Bm1mRqx3UWrlVskSjsIVjJI_TNyWWl8XogFFnr8IiC6uogJNzCiy6MKZoYM3uGQBtAVpWxZ1EKwW2OdI6I/s16000/IMG_7473.HEIC",
    alt: "Image 5",
    size: "small",
  },
  {
    src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-122861-376464.jpg&fm=jpg",
    alt: "Image 6",
    size: "large",
  },
  {
    src: "https://img.freepik.com/free-photo/italian-lasagne-served-with-rocket-salad_141793-1787.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717200000&semt=ais_user",
    alt: "Image 7",
    size: "large",
  },
  {
    src: "https://www.marinabaysands.com/content/dam/marinabaysands/restaurant-landing/view-all/masthead.jpg",
    alt: "Image 8",
    size: "medium",
  },
  {
    src: "https://www.planethollywoodintl.com/wp-content/uploads/2017/01/menu-header-burger-straightup-with-cheese.jpg",
    alt: "Image 9",
    size: "small",
  },
  {
    src: "https://www.kapruka.com/cdn-cgi/image/width=700,quality=93,f=auto/shops/specialGifts/additionalImages/large/1628680216469_dsc07985_m.jpg",
    alt: "Image 10",
    size: "small",
  },
];
const index = () => {
  const getSizeClass = (size: string) => {
    switch (size) {
      case "small":
        return "row-span-1 col-span-1";
      case "medium":
        return "row-span-2 col-span-2";
      case "large":
        return "row-span-3 col-span-1";
      default:
        return "row-span-1 col-span-1";
    }
  };
  return (
    <>
      <div className="container grid grid-cols-4 grid-rows-1 gap-2 p-4 md:gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${getSizeClass(
              image.size
            )} transform overflow-hidden rounded-lg transition-all`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full transform rounded-lg object-cover transition-all hover:scale-[1.03] hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
