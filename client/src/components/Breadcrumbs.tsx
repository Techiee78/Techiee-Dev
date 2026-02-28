import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") return null;

  return (
    <nav className="flex items-center gap-2 px-6 py-4 max-w-7xl mx-auto w-full z-20 relative">
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <Link 
          to="/" 
          className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em]"
        >
          <Home size={12} />
          <span>Home</span>
        </Link>

        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const name = value.replace(/-/g, " ");

          return (
            <div key={to} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-slate-700" />
              {last ? (
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                  {name}
                </span>
              ) : (
                <Link 
                  to={to} 
                  className="text-slate-500 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
                >
                  {name}
                </Link>
              )}
            </div>
          );
        })}
      </motion.div>
    </nav>
  );
}
