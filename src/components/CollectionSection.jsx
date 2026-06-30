  import React from "react";
  import Card from "./Card";
  import {useCart} from "../context/CartContext"

  const CollectionSection = () => {
  const  {state : {products}} = useCart();
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
            {products.map((value, i) => {
              return (
                <Card key={value.id} bgColor={value.bgColor} img={value.img} category={value.category} name={value.name} price={value.price} id={value.id}/>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  export default CollectionSection;
