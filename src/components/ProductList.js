import React from "react";

const ProductList = ({ products, onItemClick }) => {
  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <div key={product.id} onClick={() => onItemClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
