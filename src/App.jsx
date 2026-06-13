import React, { useState } from "react";
import Navbar from "./components/Navbar";

import Container from "./components/Container";
const App = () => {
  const [Num, setNum] = useState(0);
  const color = [
    { btn: "bg-[#E5281A]", heading: "text-[#E5281A]", ribbon: "bg-[#E5281A]" },
    { btn: "bg-[#D4A017]", heading: "text-[#D4A017]", ribbon: "bg-[#D4A017]" },
    { btn: "bg-[#0EA5E9]", heading: "text-[#0EA5E9]", ribbon: "bg-[#0EA5E9]" },
  ];
  const banner = [
    "bg-[linear-gradient(105deg,#000000_0%,#000000_30%,#300e0c_30%,#1f0908_65%,#350f0e_65%,#200908_80%,#39100f_80%,#000000_90%,#000000_90%,#000000_100%)]",
    "bg-[linear-gradient(105deg,#000000_0%,#000000_30%,#3e2f07_30%,#241b04_65%,#3d2d07_65%,#271d04_80%,#171103_80%,#000000_90%,#000000_90%,#000000_100%)]",
    "bg-[linear-gradient(105deg,#000000_0%,#000000_30%,#02161e_30%,#01090d_65%,#02161e_65%,#01090d_80%,#02161e_80%,#000000_90%,#000000_90%,#000000_100%)]",
  ];
  return (
    <div className="relative">
      <Navbar Num={Num} color={color}/>
      <Container Num={Num} setNum={setNum} color={color} banner={banner}/>
    </div>
  );
};

export default App;
