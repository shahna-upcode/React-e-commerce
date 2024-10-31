import React, { useState, useEffect } from "react";
import "./Product.css";
import { getAllProduct } from "../../ApiService/api";
import { Link } from "react-router-dom";

function Product() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const data = await getAllProduct();
      setproducts(data);
    };
    fetchproducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} style={{objectFit:"contain"}}></img>
          <h2>{product.title}</h2>
          <p>
            <span className="price">${product.price}</span>
          </p>

          <Link to={`/product/${product.id}`}>
            <button className="product-button"> Product Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Product;
