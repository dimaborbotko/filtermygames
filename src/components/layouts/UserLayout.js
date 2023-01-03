import React  from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import home from "../../assets/home.png";
import want from "../../assets/want.png";
import play from "../../assets/play.png";
import finish from "../../assets/finish.png";
import UserDropDown from "../userDropdown/UserDropDown";

export default function UserLayout() {
  const activePage = useLocation();
  console.log(activePage.pathname);
  let userlog = false;
  if (userlog === true) {
    return <Navigate to={"/filtermygames/login"} />;
  }

  const sideBarElStyle = "flex flex-col items-center mb-10";

  return (
    <div
      class="flex bg-main-img bg-no-repeat bg-center bg-cover bg-scroll"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div class="bg-main-white rounded-full shadow-main-box px-3 py-3 mx-4 my-4 justify-end self-center">
        <ul>
          <li>
            <Link to="/" class={`${sideBarElStyle} mt-5 `}>
              <img src={home} alt="home" width="45" />
              <p
                class={
                  activePage.pathname === "/"
                    ? "text-active-link font-semibold"
                    : "text-black font-semibold"
                }
              >
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to="/filtermygames/wantPlay" class={`${sideBarElStyle}	`}>
              <img src={want} alt="wantPlay" width="45" />
              <p
                class={
                  activePage.pathname === "/filtermygames/wantPlay"
                    ? "text-active-link font-semibold"
                    : "text-black font-semibold"
                }
              >
                Want to play
              </p>
            </Link>
          </li>
          <li>
            <Link to="/filtermygames/playingNow" class={`${sideBarElStyle}`}>
              <img src={play} alt="playingNow" width="45" />
              <p
                class={
                  activePage.pathname === "/filtermygames/playingNow"
                    ? "text-active-link font-semibold"
                    : "text-black font-semibold"
                }
              >
                In progress
              </p>
            </Link>
          </li>
          <li>
            <Link to="/filtermygames/finishedGames" class={`${sideBarElStyle}`}>
              <img src={finish} alt="finish" width="45" />
              <p
                class={
                  activePage.pathname === "/filtermygames/finishedGames"
                    ? "text-active-link font-semibold"
                    : "text-black font-semibold"
                }
              >
                Finished
              </p>
            </Link>
          </li>
          <li class="bg-[#a6dfb5] shadow-inner-bar py-3 rounded-full flex flex-col items-center">
            <UserDropDown />
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
