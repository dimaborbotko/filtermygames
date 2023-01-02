import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  let user = false;
  if (user === true) {
    return <Navigate to={"/filtermygames"} />;
  }

  return <Outlet />;
}
