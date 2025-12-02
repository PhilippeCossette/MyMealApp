import Navigation from "@/components/navigation/navigation";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen p-5 bg-background">
      <Outlet />
      <Navigation />
    </div>
  );
}
