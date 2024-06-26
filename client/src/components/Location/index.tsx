import "react-resizable/css/styles.css";
import location from "../../assets/images/HomePage/location.png";
import operating_hours from "../../assets/images/HomePage/operating_hours.png";

const Index = () => {
  return (
    <>
      <div
        style={{
          // backgroundImage: `url(${Back_08})`,
          backgroundSize: "cover",
        }}
        className="w-m flex h-full flex-col bg-repeat  text-center text-slate-900 dark:text-slate-50 lg:h-screen"
      >
        <div className="h-full items-center justify-center">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className=" mx-5 flex h-full flex-col justify-center rounded-3xl bg-opacity-50 p-4 md:translate-y-5 lg:w-1/3 lg:translate-y-44 xl:w-1/3 xl:translate-x-0 xl:translate-y-44">
              <br />
              <img src={location} alt="" className="scale-75" />
              <br />
              <p className="p-5 text-center text-sm leading-relaxed tracking-widest text-amber-400">
                Nestled in the heart of [City], [Restaurant Name] offers a
                delightful dining experience. Our address is: 1234 Culinary
                Street, Gourmet District, [City], [State], [Zip Code]
              </p>
              <img
                src={operating_hours}
                alt=""
                className="mb-10 mt-16 scale-75"
              />
              <div className="m-auto flex grid-cols-2 gap-5">
                <div className="">
                  <p className="text-center text-sm leading-relaxed tracking-widest text-amber-400">
                    Monday - Thursday
                    <br /> 11:00 AM - 10:00 PM
                  </p>
                </div>
                <div className="">
                  <p className="text-center text-sm leading-relaxed tracking-widest text-amber-400">
                    Friday - Saturday
                    <br /> 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
              <p className=" mt-5 text-center text-sm leading-relaxed tracking-widest text-amber-400">
                Sunday
                <br /> 10:00 AM - 9:00 PM
              </p>
            </div>
            <div className=" hidden h-screen grow lg:block">
              <iframe
                className="h-full w-full rounded-bl-xl rounded-tl-xl opacity-50"
                title="Location Map"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Matara, city, Sri Lanka&amp;t=h&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Index;
