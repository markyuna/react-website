import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Product";

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
      productName: "Lanterne Plafonnier",
      ProductCompany: "MarkPaper",
      productPhoto: "lanterne2.png", // 1:1.38 aspect ratio
      productPrice: "149",
      productColor: "ash",
    },
    {
      productKey: 2,
      productName: "Iron",
      ProductCompany: "MarkPaper",
      productPhoto: "iron.png",
      productPrice: "49.99",
      productColor: "ash",
    },
    {
      productKey: 3,
      productName: "lanterne Plafonnier",
      ProductCompany: "MarkPaper",
      productPhoto: "lanterne.png",
      productPrice: "249.00",
      productColor: "ash",
    },
    {
      productKey: 4,
      productName: "coffre a bijoux",
      ProductCompany: "MarkPaper",
      productPhoto: "coffre.png",
      productPrice: "59.99",
      productColor: "ash",
    },
    {
      productKey: 5,
      productName: "",
      ProductCompany: "MarkPaper",
      productPhoto: "coffre.png", // 1:1.38 aspect ratio
      productPrice: "49.99",
      productColor: "ash",
    },
    {
      productKey: 6,
      productName: "Beats Studio3",
      ProductCompany: "MarkPaper",
      productPhoto: "beats-headphone.png",
      productPrice: "249.99",
      productColor: "ash",
    },
    {
      productKey: 7,
      productName: "Apple AirPods Max",
      ProductCompany: "MarkPaper",
      productPhoto: "apple-headphone.png",
      productPrice: "549.00",
      productColor: "ash",
    },
    {
      productKey: 8,
      productName: "Anker Life Q10",
      ProductCompany: "MarkPaper",
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
