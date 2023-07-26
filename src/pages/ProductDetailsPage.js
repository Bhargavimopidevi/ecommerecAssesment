import React from "react";
import ProductDetails from "../components/ProductDetails";
import data from "../products.json"; // If using JSON file

const ProductDetailsPage = ({ match }) => {
  const productId = parseInt(match.params.id);
  const product = data.find((product) => product.id === productId);

  const handleAddToCart = (product) => {
    // Implement the logic to add the product to the cart here
    console.log("Adding to cart:", product);
  };

  return product ? (
    <ProductDetails product={product} onAddToCart={handleAddToCart} />
  ) : (
    <p>Product not found</p>
  );
};

export default ProductDetailsPage;
