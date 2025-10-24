import { useNavigate, useLocation } from "react-router-dom";
import homeIcon from "../images/home_icon.svg";
import homeIconClick from "../images/home_icon_click.svg";
import plusIcon from "../images/plus_icon.svg";
import plusIconClick from "../images/plus_icon_click.svg";
import profileIcon from "../images/profile_icon.svg";
import profileIconClick from "../images/profile_icon_click.svg";
import checkIcon from "../images/check.svg"; // Import the check icon
import "./css/BottomBar.css";

export default function BottomBar({ showCheckIcon, onCheckClick }) {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 확인

    // 현재 경로에 따라 활성화 아이콘 결정
    const getActiveIcon = () => {
        if (location.pathname === "/main") return "home";
        else if (location.pathname === "/letterwrite") return "plus";
        else if (location.pathname === "/profile") return "profile";
        else return ""; // 다른 경로에서는 없음
    };

    const handleClick = (icon) => {
        if (icon === "home") navigate("/main");
        else if (icon === "profile") navigate("/profile");
        else if (icon === "plus") navigate("/letterwrite");
    };

    const active = getActiveIcon();

    return (
        <div className="bottomBar">
            <div
                onClick={() => handleClick("home")}
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
                onClick={showCheckIcon ? onCheckClick : () => handleClick("plus")}
                className="plus"
                role="button"
                tabIndex={0}
            >
                <img
                    src={showCheckIcon ? checkIcon : (active === "plus" ? plusIconClick : plusIcon)}
                    alt={showCheckIcon ? "Check" : "Plus"}
                />
            </div>

            <div
                onClick={() => handleClick("profile")}
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
