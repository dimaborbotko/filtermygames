import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function UserLayout() {
  let user = false;
  if (user === false) {
    return <Navigate to={"/filtermygames/login"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
