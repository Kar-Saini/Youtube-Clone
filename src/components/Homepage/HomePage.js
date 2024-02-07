import React from "react";
import HomeContainer from "./HomeContainer";
import CategorySelector from "../CategorySelector/CategorySelector";

export default function HomePage() {
  return (
    <div className=" mx-10 w-full ">
      <CategorySelector />
      <HomeContainer />
    </div>
  );
}
