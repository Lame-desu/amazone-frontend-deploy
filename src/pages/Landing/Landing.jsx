import React from "react";
import CaraouselEffect from "../../Components/Caraousel/CaraouselEffect";
import Category from "../../Components/Category/Category";
import LayOut from "../../Layout/LayOut";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <LayOut>
      <>
        <CaraouselEffect />
        <Category />
        <Product />
      </>
    </LayOut>
  );
}

export default Landing;
