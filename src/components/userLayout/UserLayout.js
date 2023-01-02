import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function UserLayout() {
  let user = true;
  if (user === false) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
