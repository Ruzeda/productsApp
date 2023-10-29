import React, { useState, useEffect } from 'react';

const Products = () => {
  // State for products
  const [products, setProducts] = useState([]);
  // State for form inputs
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  // Function to add a new product
  const addProduct = (event) => {
    event.preventDefault();

    // Form a new product object
    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };

    // Add the new product to the products state
    setProducts([...products, newProduct]);

    // Clear the input fields
    setProductName('');
    setProductDescription('');
    setProductPrice('');
  };

  // useEffect to log changes in the products state
  useEffect(() => {
    console.log('A new product has been added!', products);
  }, [products]);

  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
