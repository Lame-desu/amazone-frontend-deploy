import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./Results.module.css";
import ProductCard from "../../Components/Product/ProductCard";
// import { ProductUrl } from "../../API/endPoints";
import { ProductUrl } from "../../API/endpoints";

import Loader from "../../Components/Loader/Loader";
import LayOut from "../../Layout/LayOut";

function Results() {
  const [results, seResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  // console.log(useParams())
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        seResults(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err");
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results </h1>
          <p>Category / {categoryName}</p>
          <hr />
          {
            <div className={classes.products_container}>
              {results?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          }
        </section>
      )}
    </LayOut>
  );
}

export default Results;

// import React from "react";
// import LayOut from "../../Layout/LayOut";
// import classes from "./Results.module.css";
// import { useParams } from "react-router-dom";
// import { productUrl } from "../../API/endpoints";

// import axios from "axios";

// export default function Results() {
//   const { catagoryName } = useParams();
//   axios.get(`${productUrl}products/catagory/${catagoryName}`).then((res) => {
//     console.log(res);
//   });
//   return (
//     <LayOut>
//       <h2>results page</h2>
//     </LayOut>
//   );
// }
