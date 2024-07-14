import { pocketbase } from "../configs/pocketbase";
import { Outlet, Navigate } from "react-router-dom";

const Public = () => {
  const isLoggedIn = pocketbase.authStore.isValid;

  return isLoggedIn ? <Navigate to="/app" /> : <Outlet />;
};

export default Public;
