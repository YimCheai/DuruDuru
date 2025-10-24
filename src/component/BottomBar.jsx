import { useState } from "react";
import homeIcon from "../images/home_icon.svg";
import homeIconClick from "../images/home_icon_click.svg";
import plusIcon from "../images/plus_icon.svg";
import profileIcon from "../images/profile_icon.svg";
import profileIconClick from "../images/profile_icon_click.svg";

export default function BottomBar() {
  const [active, setActive] = useState("home"); // 기본 활성화 아이콘: home

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-sm">
      <div className="flex justify-around items-center h-14">
        <button onClick={() => setActive("home")} className="home">
          <img
            src={active === "home" ? homeIconClick : homeIcon}
            alt="Home"
            className="w-6 h-6"
          />
        </button>

        <button onClick={() => setActive("plus")} className="plus">
          <img src={plusIcon} alt="Plus" className="w-6 h-6" />
        </button>

        <button onClick={() => setActive("profile")} className="profile">
          <img
            src={active === "profile" ? profileIconClick : profileIcon}
            alt="Profile"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
}
