import React from "react";
import "../../assets/steamShop.png";

export default function LoginScreen() {
  return (
    <div
      className="z-0 bg-main-img bg-fixed bg-no-repeat bg-center bg-cover grid content-center px-5"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="z-50 bg-[#f8fafc] px-5 py-5 rounded-md mx-auto ">
        <h1 className="text-2xl">Log in to continue</h1>
        <p className="text-sm font-thin">
          Log in by using one of the specified methods
        </p>
        <div className="flex mt-4">
          <img
            className="mr-5"
            src="https://cdn-icons-png.flaticon.com/512/3/3782.png"
            alt="steam"
            width="60"
          />
          <img
            src="https://seeklogo.com/images/G/gog-galaxy-logo-DC8A483B28-seeklogo.com.png"
            alt="gog"
            width="50"
          />
        </div>
      </div>
    </div>
  );
}
