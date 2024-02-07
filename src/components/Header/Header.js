import React, { useEffect, useState } from "react";
import {
  HAMBURGER_ICON,
  YOUTUBE_ICON,
  YT_SEACR_SUGGESTION_API,
} from "../../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../utils/slices/sidebarSlice";
import { useNavigate } from "react-router-dom";
import { removeCurrentVideo } from "../../utils/slices/currentlyPlayingVideoSlice";
import { addSuggestion } from "../../utils/slices/suggestedSearchSlice";

export default function Header() {
  const suggestedSearchData = useSelector((store) => store.suggestedSearch);
  const [searchText, setSearchText] = useState("");
  const [suggestedData, setSuggestedData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function fetchSearchSuggestion() {
    if (!searchText == "") {
      const data = await fetch(YT_SEACR_SUGGESTION_API + searchText);
      const jsonData = await data.json();
      //console.log(jsonData[1]);
      setSuggestedData(jsonData[1]);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (suggestedSearchData[searchText]) {
        setSuggestedData(suggestedSearchData[searchText]);
      } else {
        fetchSearchSuggestion();
        dispatch(addSuggestion({ [searchText]: suggestedData }));
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div className="h-[56px] bg-gradient-to-bl from-black px-[16px] py-[10px] flex justify-between shadow-xl">
      <div className="flex ">
        <img
          src={HAMBURGER_ICON}
          alt="Hamburger logo"
          className="w-[24px] h-[24px] pt-1 mx-2 hover:cursor-pointer hover:scale-110"
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        />
        <img
          src={YOUTUBE_ICON}
          alt=""
          className="w-[100px] h-[30px] hover:cursor-pointer "
          onClick={() => {
            dispatch(removeCurrentVideo());
            navigate("/");
          }}
        />
      </div>
      <div>
        <div className="flex">
          <form action="">
            <input
              type="text"
              placeholder="Search"
              className="w-[515px] h-[38px] rounded-l-full p-3 text-lg"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
          <button className="text-2xl bg-gray-100 border-l-2 rounded-r-full hover:cursor-pointer px-1.5 h-[38px] ">
            🔍
          </button>
        </div>
        {
          <div className="fixed bg-white w-1/3 mx-1 my-1 px-1 shadow-lg rounded-md">
            <ul>
              {suggestedData.map((ele) => (
                <li className="border-b-2 px-1 hover:cursor-pointer py-1">
                  {ele}
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
      <div className="flex justify-between">
        <div>User</div>
        <div>Sign Out</div>
      </div>
    </div>
  );
}
