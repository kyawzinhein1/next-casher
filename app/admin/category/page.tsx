"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function CategoryPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      alert("Category name cannot be empty!");
      return;
    }

    setCategories((prev) => [...prev, newCategory]); // Add to the list
    setNewCategory(""); // Clear the input
    setIsCreating(false); // Close the creation input
  };

  const handleCancle = () => {
    return setNewCategory("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Category Management</h1>
      {!isCreating && (
        <button
          onClick={() => setIsCreating(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create New Category
        </button>
      )}

      {/* New Category Input */}
      {isCreating && (
        <div className="mt-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter category name"
            className="border p-2 rounded w-64"
          />
          <Button color="success" onClick={handleAddCategory}>
            Save
          </Button>
          <Button color="danger" onClick={handleCancle}>
            Cancel
          </Button>
        </div>
      )}

      {/* List Categories */}
      <ul className="mt-6">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li key={index} className="mb-2">
              {category}
            </li>
          ))
        ) : (
          <p className="text-red-600 mt-6">
            No categories yet. Start by creating one!
          </p>
        )}
      </ul>
    </div>
  );
}
