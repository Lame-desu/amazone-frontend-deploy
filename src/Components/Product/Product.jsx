import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";
function Product() {
  const [results, seResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        seResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err");
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} flex={false} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
