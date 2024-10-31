import React, { useEffect, useState } from 'react';
import { getProductId } from '../../../ApiService/api';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../../CartContext'; // Import the custom hook 
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProductDetails] = useState({});
  const {addToCart , cart, removeFromCart}  = useCart() // Access the addToCart function from CartContext

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };

    fetchProductDetails();
  }, [id]);

  const display = () => {
    // addToCart(product);
    alert('Product added to cart!');
  }
  return (
    <>
    <div className='product-details-container'>
      <img src={product.image} className='product-image' alt={product.title}></img>

      <div className='product-info'>
        <h2 className='product-title'>{product.title}</h2>
        <p className='product-description'>{product.description}</p>
        <p className='product-price'>${product.price}</p>

        <button className='buy-now-button'>Buy Now</button>

        {/* Add to Cart Button */}
        <button 
          className='buy-now-button' 
          onClick={() => addToCart(product)} // Use the addToCart function here
        >
          Add to Cart
        </button>

        <Link to='/product'>
          <button className='go-back-home-button'>GO BACK</button>
        </Link>
      </div>
    </div>

   
    </> 
  );
}

export default ProductDetails;
