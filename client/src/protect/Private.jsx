import { pocketbase } from "../configs/pocketbase";
import { Outlet, Navigate } from "react-router-dom";

const Private = () => {
  const isLoggedIn = pocketbase.authStore.isValid;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default Private;
