import React, { useState, useEffect } from "react";
import { getAllProduct } from "../../../ApiService/api";
import { useCart } from "../../../CartContext"; // Import the custom hook
import "./Cart.css"; // Assuming you have some CSS file for styling

function Cart() {
  const [products, setProducts] = useState([]); // Store all products
  const { cart, addToCart, removeFromCart } = useCart(); // Access cart state and functions from context

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProduct();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      {/* Product Grid */}

      <div className="cart-box">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "50px", objectFit: "contain" }}
                />
                <span>{item.title}</span> - ${item.price}
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img
              src={product.image}
              style={{ objectFit: "contain" }}
              alt={product.title}
            ></img>
            <h2>{product.title}</h2>
            <p>
              <span className="price">${product.price}</span>
            </p>
            <button
              className="product-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
