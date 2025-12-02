import { NavLink } from "react-router-dom";
import { Home, Plus, Calendar, Heart, Book } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const active = "text-primary";
  const inactive = "text-muted-foreground";

  return (
    <>
      {/* MOBILE NAV (bottom) */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50 shadow-xl flex flex-col">
        <NavLink
          to="/generate"
          className="p-6 ml-auto  bg-primary-500 rounded-full m-4 text-white"
        >
          <Plus size={36} />
        </NavLink>
        <nav className="relative flex-1 flex justify-around items-center border border-border bg-card">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-primary bg-neutral-500/10 border-t-4 border-primary/40"
                  : "text-muted-foreground"
              } px-4 py-5 flex-1 flex justify-center items-center`
            }
          >
            <Home size={36} />
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-primary bg-neutral-500/10 border-t-4 border-primary/40"
                  : "text-muted-foreground"
              } px-4 py-5 flex-1 flex justify-center items-center`
            }
          >
            <Book size={36} />
          </NavLink>
          <NavLink
            to="/generate"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-primary bg-neutral-500/10 border-t-4 border-primary/40"
                  : "text-muted-foreground"
              } px-4 py-5 flex-1 flex justify-center items-center`
            }
          >
            <Heart size={36} />
          </NavLink>

          <NavLink
            to="/weeks"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-primary bg-neutral-500/10 border-t-4 border-primary/40"
                  : "text-muted-foreground"
              } px-4 py-5 flex-1 flex justify-center items-center`
            }
          >
            <Calendar size={36} />
          </NavLink>
        </nav>
      </div>

      {/* DESKTOP NAV (top) */}
      <div className="hidden md:flex w-full fixed top-0 left-0 border-b bg-card/80 backdrop-blur-md z-50">
        <nav className="mx-auto max-w-4xl flex items-center justify-center gap-16 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg transition-colors ${
                isActive ? active : inactive
              }`
            }
          >
            <Home size={26} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/generate"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg transition-colors ${
                isActive ? active : inactive
              }`
            }
          >
            <Plus size={26} />
            <span>Generate</span>
          </NavLink>

          <NavLink
            to="/weeks"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg transition-colors ${
                isActive ? active : inactive
              }`
            }
          >
            <Calendar size={26} />
            <span>Weeks</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}
