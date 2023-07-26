import React from "react";
import ProductList from "../components/ProductList";
import data from "../products.json"; // If using JSON file

const ProductsPage = ({ history }) => {
  const handleItemClick = (productId) => {
    history.push(`/products/${productId}`);
  };

  return <ProductList products={data} onItemClick={handleItemClick} />;
};

export default ProductsPage;
