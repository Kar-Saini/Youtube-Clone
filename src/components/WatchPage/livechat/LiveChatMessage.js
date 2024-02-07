import React from "react";

export default function LiveChatMessage({ name, msg }) {
  return (
    <div className="flex m-1 bg-slate-300 p-1 rounded-md">
      <div className="font-semibold mx-2">{name}</div>
      <div className="mx-1">{msg}</div>
    </div>
  );
}
