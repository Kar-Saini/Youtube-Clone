import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-black text-white rounded-lg mx-1 my-2 p-2 text-xs text-center hover:cursor-pointer hover:bg-gray-900">
      {children}
    </button>
  );
}
