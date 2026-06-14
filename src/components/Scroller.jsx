import React from "react";
import Marquee from "react-fast-marquee";
const Scroller = (props) => {
  const scrollContent = [
    "-",
    "new drop",
    "-",
    "move further",
    "-",
    "performance redefined",
    "-",
    "just do it",
  ];
  return (
    <div className={`absolute bottom-0 w-full left-0 ${props.color[props.Num].btn} overflow-x-hidden transition-colors duration-500 `}>
      <Marquee autoFill={true} speed={150}>
        {scrollContent.map((value, i) => {
          return (
            <div
              className="text-[1rem] mx-10 font-bold uppercase py-2 px-3"
              key={i}
            >
              {value}
            </div>
          );
        })}
      </Marquee>    
    </div>


  );
};

export default Scroller;
