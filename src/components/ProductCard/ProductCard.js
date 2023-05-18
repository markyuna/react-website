/* eslint-disable jsx-a11y/anchor-is-valid */
// ProductCard component
import { Link } from 'react-router-dom';

import React from "react";
import "./ProductCard.css";


export default function ProductCard(props) {
  // const clr = "#2196f3";
  const { productDetails, colorCode } = props;
  const somstyle = {
    "--company": productDetails.ProductCompany,
    "--clr": colorCode,
  };
  var productPrice = productDetails.productPrice.split(".");

  return (
    <div className="productCard" style={somstyle}>
      <div className="imgBx">
        <img
          src={require(`../../assets/images/${productDetails.productPhoto}`).default
          }
          alt=""
        />
      </div>
      <div className="contentBx">
        <h3>{productDetails.productName}</h3>
        <h2 className="price">
          ${productPrice[0]}.<small>{productPrice[1]}</small>
        </h2>
        <Link className="buy">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
