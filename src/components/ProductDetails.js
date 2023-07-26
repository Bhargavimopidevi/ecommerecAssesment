import React from "react";

const ProductDetails = ({ product, onAddToCart }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
