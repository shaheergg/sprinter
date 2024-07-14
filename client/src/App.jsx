import { Routes, Route } from "react-router-dom";
import "./App.css";
import Public from "./protect/Public";
import Private from "./protect/Private";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "sonner";

function App() {
  return (
    <div>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/app" element={<Private />}>
            <Route path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </AppLayout>
      <Toaster position="top-left" />
    </div>
  );
}

export default App;
