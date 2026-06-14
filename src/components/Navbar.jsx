import React from "react";

const Navbar = (props) => {
  const navLinks = []
  return (
    <div className="border-b border-b-[#2e2e2e] w-full bg-[#0A0A0A] fixed top-0 z-10">
      <div className="flex justify-between px-6 h-15 items-center container">
        <div className="logo uppercase font-bold text-white text-[1.8rem]">
          <span className={`text-[#E5281A]`}>S</span>tride
        </div>
        <ul className="flex gap-10  uppercase text-[#535353] tracking-wider">
          {navLinks.map((value, i) => {
            return (
              <li key={i} className="hover:text-[#b9b9b9] hover:cursor-pointer">
                {value}
              </li>
            );
          })}
        </ul>
        <button
          className={`bg-[#E5281A] transition-colors duration-500 px-8 h-9 border-none outline-none text-white font-bold uppercase tracking-wide`}
        >
          shop now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
