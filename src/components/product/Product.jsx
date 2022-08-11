import React from "react";

function Product({ src }) {
  return (
    <>
      <div className="product">
        <div className="browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href="/" target="_blank">
          <img src={src} alt="" className="p-img" />
        </a>
      </div>
    </>
  );
}

export default Product;
