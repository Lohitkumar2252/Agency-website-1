import React from "react";

const CollectionSection = () => {
  const cards = [
    { img: "/hero_red.png", category: "running", name: "air phantom", price: "₹12,995", bgColor:"bg-[#1A0A08]" },
    { img: "/hero_blue.png", category: "training", name: "react flux 4", price: "₹9,495", bgColor:"bg-[#0A0F1A]" },
    { img: "/hero_yellow.png", category: "lifestyle", name: "court vision low", price: "₹7,295", bgColor:"bg-[#19180c]" },
  ];
  return (
    <section>
      <div className="container p-7 pt-20">
        <p className="text-[#D01A10] uppercase tracking-widest text-sm">
          featured this season
        </p>
        <h2 className="text-[#888888] uppercase font-bold text-6xl tracking-wide">
          <span className="text-[#FAFAFA]">top</span> picks
        </h2>
        <div className="card_container flex items-center justify-center gap-2 mt-15">
          {cards.map((value, i) => {
            return (
              <div className={`${value.bgColor} w-full flex flex-col justify-between hover:scale-102 transition-transform duration-200`} key={i}>
                <div className="img py-8"><img src={value.img} alt="shoe" className=" w-full h-full object-contain"/></div>
                <div
                  className="content bg-[#1A1A1A] p-3
                flex flex-col gap-1"
                >
                  <p className="text-[#D01A10] uppercase tracking-widest text-sm">
                    {value.category}
                  </p>
                  <h3 className="text-[#FAFAFA] uppercase font-bold text-3xl tracking-wide">
                    {value.name}
                  </h3>
                  <p className="text-[#888888] tracking-wider">{value.price}</p>
                </div>
                <button className=" text-lg  text-center w-full py-2 bg-[#E5281A] uppercase tracking-wider">add to cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
