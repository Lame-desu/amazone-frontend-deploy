import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../API/endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
import LayOut from "../../Layout/LayOut";

function ProductDetail() {
  const { productId } = useParams();
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("poduct detail page called", useParams());

  // console.log("eshi ezi dersual");
  useEffect(() => {
    //https://fakestoreapi.com/products/1
    //${ProductUrl}/products/${productId}
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        console.log("detail of product with product ID" + res.data);
        // let request = res.data.filter((product)=>{ return product.id == productId})
        setProduct(res.data);
        setIsLoading(false);
        // console.log("the fetched one",res)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log("this is products",products)
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          key={products.id}
          product={products}
          flex={true}
          desc={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;

// import React from "react";
// import LayOut from "../../Layout/LayOut";

// export default function ProductDetail() {
//   return (
//     <LayOut>
//       <h2>product detail page</h2>
//     </LayOut>
//   );
// }
