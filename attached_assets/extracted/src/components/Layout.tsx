import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate API call
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Pricing", href: "/pricing" },
    { name: "Hire Me", href: "/cta" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary/30">
      {/* Background Mesh */}
      <div className="fixed inset-0 -z-10 bg-background-dark bg-mesh" />

      {/* Navbar */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${isScrolled ? "top-4" : "top-6"}`}>
        <div className={`glass-nav px-6 py-4 flex items-center justify-between transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${isScrolled ? "rounded-full shadow-2xl border-primary/20 py-3 px-8" : "rounded-2xl"}`}>
          <Link to="/" className="flex items-center gap-0 group">
            <div className="relative flex items-center">
              <div className="size-10 bg-[#FACC15] rounded-full flex items-center justify-center yellow-shadow transition-transform group-hover:scale-110">
                <span className="text-black font-black text-sm tracking-tighter ml-1">Tech</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white -ml-1">iee<span className="text-[#FACC15]">.dev</span></span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 overflow-x-auto no-scrollbar max-w-[50%] lg:max-w-none">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-xs font-black transition-colors uppercase tracking-[0.2em] relative group/link whitespace-nowrap ${location.pathname === link.href ? "text-primary" : "text-slate-400 hover:text-white"}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover/link:w-full"}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/resume" className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full bg-primary text-background-dark hover:bg-white transition-all yellow-shadow active:scale-95">
              Resume
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden size-10 flex items-center justify-center text-primary hover:bg-white/5 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden sm:block size-10 rounded-full border-2 border-primary/30 overflow-hidden">
              <img 
                alt="Developer portrait" 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/techiee/100/100" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 md:hidden z-[60]"
            >
              <div className="glass-nav rounded-3xl p-8 flex flex-col gap-6 shadow-2xl border-primary/20 max-h-[70vh] overflow-y-auto no-scrollbar">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className={`text-xl font-black transition-colors uppercase tracking-[0.2em] py-2 border-b border-white/5 last:border-0 ${location.pathname === link.href ? "text-primary" : "text-slate-300 hover:text-primary"}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/resume" className="w-full mt-4 text-xs font-black uppercase tracking-[0.2em] px-6 py-5 rounded-2xl bg-primary text-background-dark hover:bg-white transition-all yellow-shadow text-center">
                  Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className={location.pathname === "/" ? "" : "pt-24"}>
        <Breadcrumbs />
        {children}
      </main>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 bg-background-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-0 mb-6 group">
                <div className="relative flex items-center">
                  <div className="size-8 bg-[#FACC15] rounded-full flex items-center justify-center yellow-shadow transition-transform group-hover:scale-110">
                    <span className="text-black font-black text-[10px] tracking-tighter ml-0.5">Tech</span>
                  </div>
                  <span className="text-xl font-bold tracking-tighter text-white -ml-1">iee<span className="text-[#FACC15]">.dev</span></span>
                </div>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
                Building digital experiences with modern web technologies. Focused on performance, accessibility, and high-impact design.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/Techiee78" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/mohd-hamid-556a012a2?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                  { icon: Instagram, href: "https://www.instagram.com/techiee.dev?igsh=MWt1eGNic3hoeTI4MA==" },
                  { icon: Facebook, href: "https://www.facebook.com/share/1DdRuW8D1h/" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all border border-white/5"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Navigation</h5>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Tech Stack</h5>
              <ul className="space-y-4">
                {["React & Next.js", "Tailwind CSS", "Node.js", "TypeScript"].map(item => (
                  <li key={item}><a className="text-slate-500 hover:text-primary transition-colors text-sm font-medium" href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Stay Connected</h5>
              <p className="text-slate-500 text-sm mb-6 font-light">Join the newsletter for tech updates and insights.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all placeholder:text-slate-600 text-white" 
                    placeholder="Your email" 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="bg-primary p-4 rounded-xl hover:brightness-110 transition-all text-black yellow-shadow active:scale-95"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <AnimatePresence>
                  {isSubscribed && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-primary text-[10px] font-black uppercase tracking-widest"
                    >
                      Thanks for subscribing!
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
              © 2024 TECHIEE.DEV. DEVELOPED WITH PRECISION.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Techiee78" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/mohd-hamid-556a012a2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/techiee.dev?igsh=MWt1eGNic3hoeTI4MA==" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/share/1DdRuW8D1h/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
            <div className="flex items-center gap-8">
              <a className="text-slate-500 hover:text-primary text-xs transition-colors" href="#">Privacy Policy</a>
              <a className="text-slate-500 hover:text-primary text-xs transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 w-16 h-16 bg-primary rounded-full yellow-shadow flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-all z-[100] group"
      >
        <ArrowUpRight size={28} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
}
