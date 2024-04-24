import React from "react";
import {  Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

type ProtectedRouteProps = {
  children: React.ReactNode;
}
const ProtectedRoute = (props: ProtectedRouteProps) => {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? props.children : <Navigate to="/login" />;
};

export default ProtectedRoute;