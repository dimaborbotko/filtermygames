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
      <div class="z-50 bg-[#f8fafc] px-5 py-5 rounded-md mx-auto ">
        <h1 class="text-2xl">Log in to continue</h1>
        <p class="text-sm font-thin">
          Log in by using one of the specified methods
        </p>
        <div class="flex mt-4">
          <img
            class="mr-5"
            src="https://cdn-icons-png.flaticon.com/512/3/3782.png"
            alt="steam"
            width="60"
          />
          <img
            class="	"
            src="https://seeklogo.com/images/G/gog-galaxy-logo-DC8A483B28-seeklogo.com.png"
            alt="gog"
            width="50"
          />
        </div>
      </div>
    </div>
  );
}