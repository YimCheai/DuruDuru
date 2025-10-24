import { useState } from "react";
import homeIcon from "../images/home_icon.svg";
import homeIconClick from "../images/home_icon_click.svg";
import plusIcon from "../images/plus_icon.svg";
import plusIconClick from "../images/plus_icon_click.svg"; // 추가
import profileIcon from "../images/profile_icon.svg";
import profileIconClick from "../images/profile_icon_click.svg";
import "./css/BottomBar.css";

export default function BottomBar() {
    const [active, setActive] = useState("home"); // 기본 활성화 아이콘: home

    return (
        <div className="bottomBar">
            <div
                onClick={() => setActive("home")}
                className="home"
                role="button"
                tabIndex={0}
            >
                <img
                    src={active === "home" ? homeIconClick : homeIcon}
                    alt="Home"
                />
            </div>

            <div
                onClick={() => setActive("plus")}
                className="plus"
                role="button"
                tabIndex={0}
            >
                <img
                    src={active === "plus" ? plusIconClick : plusIcon}
                    alt="Plus"
                />
            </div>

            <div
                onClick={() => setActive("profile")}
                className="profile"
                role="button"
                tabIndex={0}
            >
                <img
                    src={active === "profile" ? profileIconClick : profileIcon}
                    alt="Profile"
                />
            </div>
        </div>
    );
}
