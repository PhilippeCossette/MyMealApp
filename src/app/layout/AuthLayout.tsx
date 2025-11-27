import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-primary-600">
      <Outlet />
    </div>
  );
}
