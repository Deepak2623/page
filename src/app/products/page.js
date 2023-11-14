"use client";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API using Axios
    axios
      .get("http://localhost:3000/api/posts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className=" text-black text-3xl font-bold mb-4 text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto max-h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold mt-4 text-black">
                {product.title}
              </h2>

              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
