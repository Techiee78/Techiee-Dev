import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "motion/react";
import { 
  Code, 
  ShoppingBag, 
  Smartphone, 
  Cloud, 
  Palette, 
  LifeBuoy,
  ChevronRight,
  ArrowUpRight,
  X
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ElementType;
  delay: number;
  onLearnMore: () => void;
  key?: React.Key;
}

const ServiceCard = ({ title, desc, icon: Icon, delay, onLearnMore }: ServiceCardProps) => {
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 15;
    const yPct = (mouseY / height - 0.5) * -15;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative glass-card p-10 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(250,204,21,0.1)] cursor-default"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-[2.5rem] -z-10" />
      
      <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background-dark transition-all duration-500 yellow-shadow">
        <Icon size={32} className="text-primary group-hover:text-background-dark transition-colors duration-500" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
        {desc}
      </p>

      <div className="mt-auto">
        <button 
          onClick={onLearnMore}
          className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.3em] group/btn"
        >
          Learn More 
          <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-px rounded-[2.5rem] border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: "Web Development",
      desc: "Custom responsive websites built with modern frameworks and pixel-perfect UI precision.",
      fullDesc: "I specialize in building high-performance, responsive websites using the latest technologies like React, Next.js, and Tailwind CSS. My approach focuses on clean code, SEO optimization, and exceptional user experiences that drive results for your business.",
      icon: Code,
      delay: 0.1
    },
    {
      title: "E-Commerce",
      desc: "High-conversion online stores with secure payment integrations and intuitive admin panels.",
      fullDesc: "Transform your business with a powerful online store. I build custom e-commerce solutions with seamless payment integrations (Stripe, PayPal), inventory management, and user-friendly admin dashboards to help you scale your sales efficiently.",
      icon: ShoppingBag,
      delay: 0.2
    },
    {
      title: "Mobile Apps",
      desc: "Native-feel Android and iOS applications optimized for smooth performance and engagement.",
      fullDesc: "Reach your audience on the go with high-quality mobile applications. I develop cross-platform apps using React Native that offer native performance, smooth animations, and a consistent experience across both iOS and Android devices.",
      icon: Smartphone,
      delay: 0.3
    },
    {
      title: "SaaS Development",
      desc: "Scalable, cloud-native software solutions designed to grow with your business needs.",
      fullDesc: "Build your next big software idea with a scalable SaaS architecture. I design and develop cloud-based applications with multi-tenancy, subscription management, and robust security to ensure your platform can handle thousands of users.",
      icon: Cloud,
      delay: 0.4
    },
    {
      title: "UI/UX Design",
      desc: "Modern, user-centric interfaces focused on conversion and exceptional digital storytelling.",
      fullDesc: "Design is more than just looks; it's about how it works. I create intuitive user journeys and visually stunning interfaces that guide users toward your goals, utilizing modern design principles and interactive prototyping.",
      icon: Palette,
      delay: 0.5
    },
    {
      title: "Maintenance",
      desc: "Ongoing technical support, security updates, and continuous performance optimization.",
      fullDesc: "Keep your digital assets running smoothly with professional maintenance. I provide regular security patches, performance tuning, and technical support to ensure your website or app remains fast, secure, and up-to-date.",
      icon: LifeBuoy,
      delay: 0.6
    }
  ];

  return (
    <section className="pb-48 pt-4 px-6 bg-background-dark min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.02)_0%,transparent_70%)]" />
        {/* Animated Gradient Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-6"
          >
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">My Services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-8"
          >
            What I Can <span className="text-primary">Do For You</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          >
            I provide end-to-end digital solutions to help businesses grow with modern technology and high-performance applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard 
              key={i} 
              {...service} 
              onLearnMore={() => setSelectedService(service)}
            />
          ))}
        </div>

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="glass-card max-w-2xl w-full p-10 rounded-[3rem] border-primary/20 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Background Glow */}
                <div className="absolute top-0 right-0 size-64 bg-primary/5 blur-[80px] -z-10" />
                
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-8 right-8 text-slate-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full"
                >
                  <X size={24} />
                </button>
                
                <div className="size-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 yellow-shadow">
                  <selectedService.icon size={40} className="text-primary" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">
                  {selectedService.title} <span className="text-primary">Expertise</span>
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light">
                  {selectedService.fullDesc}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-5 bg-primary text-background-dark font-black uppercase tracking-[0.2em] text-xs rounded-2xl yellow-shadow hover:bg-white transition-all active:scale-95">
                    Inquire Now
                  </button>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-24 p-12 rounded-[3rem] glass-card border-dashed border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8 bg-primary/5"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight mb-2">Ready to start a project?</h3>
            <p className="text-slate-400 font-light">Let's discuss your vision and build something extraordinary together.</p>
          </div>
          <button className="flex items-center gap-3 bg-primary text-background-dark px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs yellow-shadow hover:bg-white transition-all group">
            Get Started 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
