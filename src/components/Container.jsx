import Scroller from "./Scroller";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

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

  const handleSlideChange = (realIndex) => {
    props.setNum((prev)=> prev = realIndex);
  };

  return (
    <div
      className={`background w-screen h-screen ${props.banner[props.Num]} overflow-y-hidden`}
    >
      <div className="container px-10 flex  pt-20 relative h-screen">
        <div className="left  w-1/2 flex flex-col gap-6">
          <h2 className="text-[100px] uppercase font-black leading-22.5">
            built to{" "}
            <span className={`${props.color[props.Num].heading} transition-colors duration-500 block`}>
              move
            </span>{" "}
            you
          </h2>
          <p className="capitalize text-[#888] font-light w-[55%] ">
            Every stride tells a story. Our latest collection is engineered for
            athletes who refuse to stand still.
          </p>

          <div className="buttons flex gap-5">
            <button
              className={`${props.color[props.Num].btn} transition-colors duration-500 px-10 py-1.5 text-lg text-white font-semibold uppercase tracking-widest`}
            >
              Shop Now
            </button>
            <button className="border px-10 py-1.5 text-lg text-gray-500 font-semibold tracking-widest uppercase">
              our story
            </button>
          </div>
          <div className="records_container flex items-center justify-start gap-10">
            <div className="records flex-col flex items-start">
              <div className=" text-4xl font-bold">200+</div>
              <div className="uppercase tracking-widest text-[#888]">
                styles
              </div>
            </div>
            <div className="records flex-col flex items-start">
              <div className=" text-4xl font-bold">50+</div>
              <div className="uppercase tracking-widest text-[#888]">
                countries
              </div>
            </div>
            <div className="records flex-col flex items-start">
              <div className=" text-4xl font-bold">1M+</div>
              <div className="uppercase tracking-widest text-[#888]">
                athletes
              </div>
            </div>
          </div>
        </div>
        <div className="right w-1/2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay:8000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(e) => handleSlideChange(e.realIndex)}
          >
            {heroImgs.map((value) => {
              return (
                <SwiperSlide key={value.id}>
                  <img
                    src={value.src}
                    alt="shoe img"
                    className=" w-full h-full object-contain"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Scroller color={props.color} Num={props.Num}/>
      </div>
    </div>
  );
};

export default Container;
