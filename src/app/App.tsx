import "./App.css";
import { Route, Routes } from "react-router-dom";

import Auth from "./screens/Auth/Auth";
import AuthLayout from "./layout/AuthLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Auth />} />
      </Route>
    </Routes>
  );
}
