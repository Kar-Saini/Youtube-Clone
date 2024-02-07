import React from "react";
import SIdeBarCard from "./SIdeBarCard";
import { useSelector } from "react-redux";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);

  return isSideBarOpen ? (
    <div className="h-screen p-3 ">
      <SIdeBarCard
        name="Home"
        onClick={() => {
          navigate("/");
        }}
      />
      <SIdeBarCard name="Shorts" />
    </div>
  ) : (
    <div className="w-20 items-center ">
      <Button>Home</Button>
      <Button>Shorts</Button>
    </div>
  );
}
