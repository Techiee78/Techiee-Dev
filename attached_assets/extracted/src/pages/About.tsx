import { motion } from "motion/react";
import { 
  Download, 
  ArrowUpRight,
  Clock,
  Briefcase,
  Zap,
  TrendingUp,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const skills = [
    "React", "Node.js", "MongoDB", "Next.js", 
    "Tailwind CSS", "Firebase", "Express", "APIs"
  ];

  const highlights = [
    {
      icon: Clock,
      title: "3+ Years Experience",
      desc: "Proven track record in full stack development."
    },
    {
      icon: Briefcase,
      title: "50+ Projects Completed",
      desc: "Delivering high-quality digital products."
    },
    {
      icon: Zap,
      title: "Modern Technologies",
      desc: "Expertise in the latest web ecosystems."
    },
    {
      icon: TrendingUp,
      title: "Performance & Scalability",
      desc: "Focus on building for future growth."
    }
  ];

  return (
    <section className="pb-48 pt-4 px-6 bg-background-dark min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 size-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-1/4 size-[500px] bg-white/2 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-900 yellow-shadow border border-white/10"
            >
              <img 
                alt="Developer portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://i.postimg.cc/Pqq7HxCx/IMG-20260114-201217.jpg" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60" />
              
              {/* Floating Info Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-3xl border-primary/20 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-black text-xl uppercase tracking-tighter italic">Mohd Hamid</h4>
                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-1">Full Stack Developer</p>
                  </div>
                  <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-background-dark yellow-shadow">
                    <Zap size={20} fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 size-32 border-2 border-primary/20 rounded-full blur-sm -z-10" />
            <div className="absolute -bottom-10 -left-10 size-48 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-6"
              >
                <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">About Me</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-8 leading-[0.9]"
              >
                Passionate Full Stack <span className="text-primary">Developer</span> Crafting Digital Experiences
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed font-light mb-10"
              >
                I’m a dedicated Full Stack Developer specializing in building scalable, high-performance web applications and modern user experiences. I help startups and businesses transform ideas into powerful digital products using cutting-edge technologies.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight italic">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="pt-8 border-t border-white/5">
              <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Technical Arsenal</h5>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="px-5 py-2 rounded-xl bg-white/5 text-white text-[10px] font-black border border-white/10 uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <Link to="/resume" className="group relative flex items-center gap-3 px-10 py-5 bg-primary text-background-dark font-black uppercase tracking-[0.2em] text-xs rounded-2xl yellow-shadow hover:scale-105 transition-all active:scale-95">
                View Resume <Download size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white/10 transition-all active:scale-95"
              >
                Contact Me <Mail size={18} />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
