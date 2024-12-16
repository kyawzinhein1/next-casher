"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function ProductPage() {
  const [products, setProducts] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleAddProduct = () => {
    if (!newProduct.trim()) {
      alert("Product name cannot be empty!");
      return;
    }

    setProducts((prev) => [...prev, newProduct]); // Add to the list
    setNewProduct(""); // Clear the input
    setIsCreating(false); // Close the creation input
  };

  const handleCancle = () => {
    return setNewProduct("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      {!isCreating && (
        <button
          onClick={() => setIsCreating(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create a New Product
        </button>
      )}

      {/* New Category Input */}
      {isCreating && (
        <div className="mt-4">
          <input
            type="text"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="Enter product name"
            className="border p-2 rounded-xl w-64 mr-2 outline-none"
          />
          <Button color="success" onClick={handleAddProduct} className="mr-2 text-white">
            Save
          </Button>
          <Button color="danger" onClick={handleCancle}>
            Cancel
          </Button>
        </div>
      )}

      {/* List Categories */}
      <ul className="mt-6">
        {products.length > 0 ? (
          products.map((product, index) => (
            <li key={index} className="mb-2">
              {product}
            </li>
          ))
        ) : (
          <p className="text-red-600 mt-6">
            No products yet. Start by creating one!
          </p>
        )}
      </ul>
    </div>
  );
}
