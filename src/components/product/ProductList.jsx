import React from "react";
import Product from "./Product";
import "./Product.css";
import productlist from "../../data";

function ProductList() {
  console.log(productlist);
  return (
    <>
      <section className="product-list">
        <div className="product-text">
          <h2 className="pl-title">Create & Inspire. It's Maxwell</h2>
          <p className="pl-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            deleniti eligendi? Soluta velit laboriosam quos ratione suscipit
            perspiciatis eum consectetur?
          </p>
        </div>
        <div className="pl-list">
          {productlist.map((item) => (
            <Product key={item.id} src={item.imgUrl} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductList;
