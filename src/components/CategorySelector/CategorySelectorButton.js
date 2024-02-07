import React from "react";

export default function CategorySelectorButton({ name }) {
  return (
    <button className="bg-gray-900 text-white my-3 mx-2 text-lg px-3 py-1  rounded-lg hover:cursor-pointer hover:bg-gray-800 hover:scale-105">
      {name}
    </button>
  );
}
