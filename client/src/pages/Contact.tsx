import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  CheckCircle2,
  Zap,
  PhoneCall,
  Github,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8477939338",
      href: "tel:+918477939338"
    },
    {
      icon: Mail,
      label: "Email",
      value: "techiee790@gmail.com",
      href: "mailto:techiee790@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Open for Freelance",
      href: "#"
    }
  ];

  return (
    <section className="pb-48 pt-4 px-6 bg-background-dark min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 size-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-1/4 size-[500px] bg-white/2 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-6"
          >
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Contact</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-8"
          >
            Let’s Discuss Your <span className="text-primary">Project</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          >
            Have an idea or project in mind? Get in touch and let’s create something amazing together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass-card p-8 rounded-3xl border-white/5 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background-dark transition-all duration-500 yellow-shadow">
                    <info.icon size={20} className="text-primary group-hover:text-background-dark transition-colors" />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">{info.label}</h4>
                  <p className="text-white font-bold text-lg tracking-tight group-hover:text-primary transition-colors">{info.value}</p>
                </motion.a>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-8 rounded-[2.5rem] glass-card border-dashed border-primary/30 bg-primary/5 flex items-center gap-6 mb-8"
            >
              <div className="size-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <div className="size-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h5 className="text-white font-black uppercase italic tracking-tight">Currently Available</h5>
                <p className="text-xs text-slate-500 mt-1">Accepting new freelance projects and collaborations.</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-8 rounded-[2.5rem] glass-card border-white/5"
            >
              <h5 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Social Ecosystem</h5>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/Techiee78", color: "hover:text-white" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-hamid-556a012a2?utm_source=share_via&utm_content=profile&utm_medium=member_android", color: "hover:text-blue-400" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/techiee.dev?igsh=MWt1eGNic3hoeTI4MA==", color: "hover:text-pink-500" },
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1DdRuW8D1h/", color: "hover:text-blue-600" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 transition-all ${social.color} hover:bg-white/10 hover:border-primary/30 group`}
                  >
                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-card p-10 md:p-12 rounded-[3rem] border-white/10 relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute -top-24 -right-24 size-64 bg-primary/5 rounded-full blur-[80px] -z-10" />
              
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-20"
                  >
                    <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-8 yellow-shadow">
                      <CheckCircle2 size={40} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Message Sent!</h3>
                    <p className="text-slate-400 font-light max-w-xs">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setFormState("idle")}
                      className="mt-10 text-[10px] font-black text-primary uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Full Name</label>
                        <input 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-700" 
                          placeholder="Mohd Hamid" 
                          type="text" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Email Address</label>
                        <input 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-700" 
                          placeholder="alex@example.com" 
                          type="email" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Phone Number</label>
                        <input 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-700" 
                          placeholder="+91 00000 00000" 
                          type="tel" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Project Type</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                          <option className="bg-surface-dark" value="web">Web Development</option>
                          <option className="bg-surface-dark" value="saas">SaaS Product</option>
                          <option className="bg-surface-dark" value="ecommerce">E-Commerce</option>
                          <option className="bg-surface-dark" value="mobile">Mobile App</option>
                          <option className="bg-surface-dark" value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Message</label>
                      <textarea 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-700 resize-none" 
                        placeholder="Tell me about your project details..." 
                        rows={5}
                      ></textarea>
                    </div>

                    <button 
                      disabled={formState === "submitting"}
                      className="w-full bg-primary text-background-dark font-black py-5 rounded-2xl yellow-shadow flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs hover:bg-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed" 
                      type="submit"
                    >
                      {formState === "submitting" ? (
                        <div className="size-5 border-2 border-background-dark border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/918477939338" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all"
              >
                <MessageSquare size={16} className="text-primary" /> WhatsApp
              </a>
              <a 
                href="tel:+918477939338" 
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all"
              >
                <PhoneCall size={16} className="text-primary" /> Call Now
              </a>
              <a 
                href="mailto:techiee790@gmail.com" 
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all"
              >
                <Mail size={16} className="text-primary" /> Email
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
