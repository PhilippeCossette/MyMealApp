import "./App.css";
import { Route, Routes } from "react-router-dom";

import Auth from "./screens/Auth/Auth";
import AuthLayout from "./layout/AuthLayout";
import Home from "./screens/Logged/Home";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Auth />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
