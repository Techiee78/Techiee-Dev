import { motion } from "motion/react";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  CheckCircle2
} from "lucide-react";

export default function Resume() {
  const personalInfo = {
    name: "Mohd Hamid",
    title: "Full Stack Web Developer | Freelance Developer",
    location: "India",
    phone: "+91 8218732250",
    email: "techiee790@gmail.com",
    portfolio: "https://techieedev-production.up.railway.app/",
    github: "https://github.com/Techiee78"
  };

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT)"],
    database: ["MongoDB", "MySQL", "PostgreSQL / NeonDB"],
    tools: ["Git", "GitHub", "Railway", "Vercel", "Netlify", "Firebase", "Figma", "Canva"]
  };

  const experience = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "Present",
      points: [
        "Developed and deployed multiple websites for startups and businesses",
        "Managed full project lifecycle from design to deployment",
        "Created responsive and SEO-friendly websites improving client engagement",
        "Integrated admin panels and backend systems for business management",
        "Provided maintenance, optimization, and hosting support"
      ]
    }
  ];

  const projects = [
    {
      name: "Business Company Website",
      desc: "Professional responsive website with modern UI"
    },
    {
      name: "E-Commerce Platform",
      desc: "Full stack system with admin dashboard and authentication"
    },
    {
      name: "Portfolio Website",
      desc: "Personal portfolio with animations and optimized performance"
    },
    {
      name: "Admin Dashboard System",
      desc: "Role-based backend management system"
    }
  ];

  return (
    <div className="pt-4 pb-48 px-6 bg-background-dark min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header Actions */}
        <div className="flex justify-end mb-12">
          <a 
            href="https://drive.google.com/file/d/1zQSmlNAIOabcKDTkIP9l7BWjgwlH_5jC/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-black uppercase tracking-[0.2em] text-[10px] rounded-xl yellow-shadow hover:scale-105 transition-all active:scale-95"
          >
            Download PDF <Download size={14} />
          </a>
        </div>

        {/* Resume Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-[3rem] border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Top Section: Identity */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-4"
                >
                  {personalInfo.name}
                </motion.h1>
                <p className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                  {personalInfo.title}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 text-slate-400 text-xs font-medium">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-primary" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-primary" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-12 pt-12 border-t border-white/5">
              <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
                <Globe size={14} /> Portfolio <ExternalLink size={10} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
                <Github size={14} /> GitHub <ExternalLink size={10} />
              </a>
              <a href="https://www.linkedin.com/in/mohd-hamid-556a012a2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
                <Linkedin size={14} /> LinkedIn <ExternalLink size={10} />
              </a>
              <a href="https://www.instagram.com/techiee.dev?igsh=MWt1eGNic3hoeTI4MA==" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
                <Instagram size={14} /> Instagram <ExternalLink size={10} />
              </a>
              <a href="https://www.facebook.com/share/1DdRuW8D1h/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
                <Facebook size={14} /> Facebook <ExternalLink size={10} />
              </a>
            </div>
          </div>

          <div className="p-12 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Skills & Education */}
            <div className="lg:col-span-1 flex flex-col gap-12">
              <section>
                <h3 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-xs mb-8">
                  <Code2 size={16} className="text-primary" /> Technical Skills
                </h3>
                <div className="space-y-8">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 opacity-70">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map(item => (
                          <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-[9px] font-bold uppercase tracking-wider">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-xs mb-8">
                  <GraduationCap size={16} className="text-primary" /> Education
                </h3>
                <div className="glass-card p-6 rounded-2xl border-white/5">
                  <h4 className="text-white font-bold text-sm italic">Self-Taught Web Developer</h4>
                  <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">Online Learning & Practical Projects</p>
                </div>
              </section>

              <section>
                <h3 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-xs mb-8">
                  <Trophy size={16} className="text-primary" /> Strengths
                </h3>
                <ul className="space-y-4">
                  {["Strong problem-solving ability", "Fast learner and adaptable", "Attention to detail", "Client communication"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-400 text-xs font-medium">
                      <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Column: Experience & Projects */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              <section>
                <h3 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-xs mb-8">
                  <Briefcase size={16} className="text-primary" /> Professional Experience
                </h3>
                <div className="space-y-12">
                  {experience.map((exp, i) => (
                    <div key={i} className="relative pl-8 border-l border-white/10">
                      <div className="absolute -left-[5px] top-0 size-2.5 rounded-full bg-primary yellow-shadow" />
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-white font-black text-xl uppercase italic tracking-tight">{exp.title}</h4>
                          <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-1">{exp.company}</p>
                        </div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {exp.points.map((point, j) => (
                          <li key={j} className="text-slate-400 text-sm leading-relaxed font-light flex gap-3">
                            <span className="text-primary mt-1.5">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-xs mb-8">
                  <Globe size={16} className="text-primary" /> Key Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, i) => (
                    <div key={i} className="glass-card p-6 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
                      <h4 className="text-white font-bold text-sm italic group-hover:text-primary transition-colors">{project.name}</h4>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed">{project.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20">
                <p className="text-slate-400 text-sm italic leading-relaxed font-light">
                  "Passionate and self-motivated Full Stack Web Developer with hands-on experience in designing and developing modern, responsive, and high-performance websites. Skilled in both frontend and backend technologies with a strong focus on user experience, performance optimization, and scalable architecture."
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
