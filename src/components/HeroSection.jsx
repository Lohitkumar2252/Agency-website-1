import Scroller from "./Scroller";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { Link } from "react-router";

const Container = (props) => {
  const heroImgs = [
    {
      src: "/hero_red.png",
      id: 1,
      color: "#E5281A",
    },
    {
      src: "/hero_yellow.png",
      id: 2,
      color: "#D4A017",
    },
    {
      src: "/hero_blue.png",
      id: 3,
      color: "#0EA5E9",
    },
  ];
  const records = [
    { recordsNum: "200+", text: "styles" },
    { recordsNum: "50+", text: "countries" },
    { recordsNum: "1m+", text: "athletes" },
  ];

  const handleSlideChange = (realIndex) => {
    props.setNum((prev) => (prev = realIndex));
  };

  return (
    <section>
      <div className="container">
        <div
          className={`background w-full ${props.banner[props.Num]} overflow-y-hidden relative  mt-15`}
        >
          <div className="container p-5 sm:flex sm:p-10  items-center h-full">
            <div className="left  w-full sm:w-1/2 flex flex-col gap-6 overflow-hidden h-full">
              <h2 className="text-[3.5rem] sm:text-[100px] uppercase font-black leading-15 z-5 h-full sm:leading-25 xl:leading-34 lg:text-[110px] xl:text-[150px]">
                built to
                <span
                  className={`${props.color[props.Num].heading} transition-colors duration-500 block`}
                >
                  move
                </span>
                you
              </h2>
              <p className="capitalize text-[#888] w-[50%] sm:w-[80%] font-light text-sm sm:text-base lg:text-lg xl:text-[1.3rem] z-2">
                Every stride tells a story. Our latest collection is engineered
                for athletes who refuse to stand still.
              </p>

              <div className="buttons flex gap-5 z-5">
                <Link to="/shop">
                  <button
                    className={`${props.color[props.Num].btn} transition-colors duration-500 px-6 py-1.5 text-sm sm:text-base lg:text-lg xl:text-[1.5rem] lg:px-10 text-white font-semibold uppercase tracking-widest`}
                  >
                    Shop Now
                  </button>
                </Link>
                <Link to="/about" onClick={() => console.log("clicked")}>
                  <button className=" px-6 border py-1.5 text-sm sm:text-base lg:text-lg xl:text-[1.5rem] lg:px-10 text-gray-500 font-semibold tracking-widest uppercase">
                    our story
                  </button>
                </Link>
              </div>
              <div className="records_container flex items-center justify-start gap-5 sm:gap-10">
                {records.map((value, i) => {
                  return (
                    <div
                      key={i}
                      className="records flex-col flex items-start justify-center"
                    >
                      <div className=" text-2xl sm:text-3xl xl:text-4xl font-bold uppercase">
                        {value.recordsNum}
                      </div>
                      <div className="uppercase text-base sm:text-lg tracking-widest text-[#888]">
                        {value.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="right h-full  w-[60%] sm:w-1/2 absolute sm:static bottom-0 right-0 z-0 ">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                speed={900}
                allowTouchMove={false}
                onSlideChange={(e) => handleSlideChange(e.realIndex)}
                className=" h-full"
              >
                {heroImgs.map((value) => {
                  return (
                    <SwiperSlide key={value.id}>
                      <img
                        src={value.src}
                        alt="shoe img"
                        className=" h-full object-contain object-right z-0"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <Scroller color={props.color} Num={props.Num} />
        </div>
      </div>
    </section>
  );
};

export default Container;
