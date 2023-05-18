import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Product.css";

const Product = () => {
  const colorCode = {
    blue: "#2196f3",
    black: "#505050",
    green: "#e7f567",
    ash: "#b4c3ae",
    yellow: "#f8b300",
    red: "#b02727",
  };

  const productDetails = [
    {
      productKey: 1,
      productName: "Phillips Headphone",
      ProductCompany: "Phillips",
      productPhoto: "lanterne2.png", // 1:1.38 aspect ratio
      productPrice: "49.99",
      productColor: "ash",
    },
    {
      productKey: 2,
      productName: "Beats Studio3",
      ProductCompany: "Beats",
      productPhoto: "iron.png",
      productPrice: "249.99",
      productColor: "ash",
    },
    {
      productKey: 3,
      productName: "Apple AirPods Max",
      ProductCompany: "Apple",
      productPhoto: "lanterne.png",
      productPrice: "549.00",
      productColor: "ash",
    },
    {
      productKey: 4,
      productName: "Anker Life Q10",
      ProductCompany: "Anker",
      productPhoto: "coffre.png",
      productPrice: "31.99",
      productColor: "ash",
    },
    {
      productKey: 5,
      productName: "Phillips Headphone",
      ProductCompany: "Phillips",
      productPhoto: "coffre.png", // 1:1.38 aspect ratio
      productPrice: "49.99",
      productColor: "ash",
    },
    {
      productKey: 6,
      productName: "Beats Studio3",
      ProductCompany: "Beats",
      productPhoto: "beats-headphone.png",
      productPrice: "249.99",
      productColor: "ash",
    },
    {
      productKey: 7,
      productName: "Apple AirPods Max",
      ProductCompany: "Apple",
      productPhoto: "apple-headphone.png",
      productPrice: "549.00",
      productColor: "ash",
    },
    {
      productKey: 8,
      productName: "Anker Life Q10",
      ProductCompany: "Anker",
      productPhoto: "red-headphone.png",
      productPrice: "31.99",
      productColor: "ash",
    },
  ];

  const productShow = productDetails.map((product) => {
    return (
      <ProductCard
        key={product.productKey}
        productDetails={product}
        colorCode={colorCode[product.productColor]}
      />
    );
  });

  return <div className="product">{productShow}</div>;
};

export default Product;
