import React from "react";

export default function SIdeBarCard({ name, ...props }) {
  return (
    <div>
      <div className="w-[180px] h-[40px]  rounded-lg flex items-center text-md text-white bg-gray-900 hover:bg-gray-600 hover:cursor-pointer">
        <div className="px-3">🏠</div>
        <div className="px-5 font-semibold" {...props}>
          {name}
        </div>
      </div>
    </div>
  );
}
