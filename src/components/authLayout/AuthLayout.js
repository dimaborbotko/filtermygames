import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  let user = true;
  if (user === true) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}
