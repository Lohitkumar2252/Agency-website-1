import React from "react";

const Navbar = (props) => {
  return (
    <div className="border-b border-b-[#2e2e2e]  w-full top-0 right-0 bg-[#0A0A0A] absolute">
      <div className=" flex justify-between px-6 h-15 items-center container">
        <div className="logo uppercase font-bold text-white text-[1.8rem]">
          <span className="text-[#E5281A]">S</span>tride
        </div>
        <ul className="flex gap-10  uppercase text-[#535353] tracking-wider">
          <li>Home</li>
          <li>colection</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className={`${props.color[props.Num].btn} transition-colors duration-500 px-8 h-9 border-none outline-none text-white font-bold uppercase tracking-wide`}>
          shop now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
