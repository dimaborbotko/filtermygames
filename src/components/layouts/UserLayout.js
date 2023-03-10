import React from "react";
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
      className="flex px-4 bg-main-img bg-no-repeat bg-center bg-cover bg-scroll"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex shrink-0 bg-main-white rounded-full mr-4 shadow-main-box px-3 py-3 my-4 self-center">
        <ul>
          <li>
            <Link to="/" className={`${sideBarElStyle} mt-5 `}>
              <img src={home} alt="home" width="45" />
              <p
                className={
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
            <Link to="/filtermygames/wantPlay" className={`${sideBarElStyle}	`}>
              <img src={want} alt="wantPlay" width="45" />
              <p
                className={
                  activePage.pathname === "/filtermygames/wantPlay"
                    ? "text-active-link font-semibold"
                    : "text-black font-semibold"
                }
              >
                Will play
              </p>
            </Link>
          </li>
          <li>
            <Link to="/filtermygames/playingNow" className={`${sideBarElStyle}`}>
              <img src={play} alt="playingNow" width="45" />
              <p
                className={
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
            <Link to="/filtermygames/finishedGames" className={`${sideBarElStyle}`}>
              <img src={finish} alt="finish" width="45" />
              <p
                className={
                  activePage.pathname === "/filtermygames/finishedGames"
                    ? "text-active-link font-semibold"
                    : "text-black font-semibold"
                }
              >
                Finished
              </p>
            </Link>
          </li>
          <li className="bg-[#a6dfb5] shadow-inner-bar py-3 rounded-full flex flex-col items-center">
            <UserDropDown />
          </li>
        </ul>
      </div>
      <div className="flex container overflow-y-auto max-w-screen-2xl shrink mx-auto px-4 py-4 bg-main-white my-4 shadow-main-box rounded-md relative">
        <Outlet />
      </div>
    </div>
  );
}
