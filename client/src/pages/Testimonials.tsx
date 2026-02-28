import React from "react";
import { motion } from "motion/react";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Award,
  Users,
  MessageSquare
} from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  img: string;
  rating: number;
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number; key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-card p-10 rounded-[2.5rem] flex flex-col h-full hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(250,204,21,0.05)]"
    >
      {/* Quote Icon */}
      <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
        <Quote size={64} fill="currentColor" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-8">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-primary" fill="currentColor" />
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-300 text-lg italic leading-relaxed mb-10 font-light relative z-10">
        "{testimonial.text}"
      </p>

      {/* Client Info */}
      <div className="mt-auto flex items-center gap-5 border-t border-white/5 pt-8">
        <div className="size-14 rounded-full border-2 border-primary/30 overflow-hidden yellow-shadow group-hover:scale-110 transition-transform duration-500">
          <img 
            alt={testimonial.name} 
            className="w-full h-full object-cover" 
            src={testimonial.img} 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div>
          <h4 className="text-white font-bold uppercase italic tracking-tight">{testimonial.name}</h4>
          <p className="text-xs text-primary/70 font-black uppercase tracking-widest mt-1">
            {testimonial.role} <span className="text-slate-600 mx-1">@</span> {testimonial.company}
          </p>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-px rounded-[2.5rem] border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder",
      company: "NexaFlow",
      text: "Techiee delivered our website beyond expectations. The performance and design quality were outstanding. Our conversion rate increased by 25% within the first month.",
      img: "https://picsum.photos/seed/client1/100/100",
      rating: 5
    },
    {
      name: "Aman Verma",
      role: "Business Owner",
      company: "Verma Logistics",
      text: "Professional, fast, and highly skilled developer. Highly recommended for modern web projects. The attention to detail in the UI is something rarely seen.",
      img: "https://picsum.photos/seed/client2/100/100",
      rating: 5
    },
    {
      name: "Neha Gupta",
      role: "Entrepreneur",
      company: "EcoStyle",
      text: "Our e-commerce platform works flawlessly thanks to Techiee. Great communication and support throughout the entire development process.",
      img: "https://picsum.photos/seed/client3/100/100",
      rating: 5
    },
    {
      name: "David Miller",
      role: "CTO",
      company: "CloudScale",
      text: "The architectural decisions made for our SaaS platform were brilliant. Scalability issues are a thing of the past. A top-tier engineering talent.",
      img: "https://picsum.photos/seed/client4/100/100",
      rating: 5
    },
    {
      name: "Sophia Reed",
      role: "Creative Director",
      company: "Aura Design",
      text: "Working with Techiee was a breath of fresh air. They understood our brand vision perfectly and translated it into a stunning digital experience.",
      img: "https://picsum.photos/seed/client5/100/100",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Marketing Head",
      company: "GrowthOps",
      text: "The speed of delivery without compromising on quality was impressive. The new dashboard has significantly improved our team's productivity.",
      img: "https://picsum.photos/seed/client6/100/100",
      rating: 5
    }
  ];

  const trustBadges = [
    { name: "Google Reviews", icon: CheckCircle2, score: "4.9/5" },
    { name: "Upwork Top Rated", icon: Award, score: "100% JSS" },
    { name: "Freelancer", icon: Users, score: "5.0/5" },
    { name: "Clutch", icon: MessageSquare, score: "4.8/5" }
  ];

  return (
    <div className="pt-4 pb-48 px-6 bg-background-dark min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-0 right-0 size-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 size-[600px] bg-white/2 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-6"
          >
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Testimonials</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-8"
          >
            What Clients <span className="text-primary">Say</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-12"
          >
            Real feedback from clients who trusted me to build their digital products.
          </motion.p>

          {/* Trust Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem]"
          >
            <div className="text-center px-8 border-r border-white/10 last:border-0">
              <div className="text-4xl font-black text-primary mb-1">4.9/5</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Average Rating</div>
            </div>
            <div className="text-center px-8 border-r border-white/10 last:border-0">
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Job Success</div>
            </div>
            <div className="text-center px-8 border-r border-white/10 last:border-0">
              <div className="text-4xl font-black text-white mb-1">50+</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Happy Clients</div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <badge.icon size={24} className="text-primary" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{badge.name}</span>
                  <span className="text-[10px] font-bold text-primary">{badge.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-48 p-12 rounded-[3rem] glass-card border-dashed border-primary/30 flex flex-col items-center text-center gap-8 bg-primary/5"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Ready to be the next success story?</h3>
            <p className="text-slate-400 text-lg font-light">Let's collaborate and build something that your users will love.</p>
          </div>
          <button className="flex items-center gap-4 bg-gradient-to-br from-primary to-primary-dark text-background-dark px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm yellow-shadow hover:scale-105 transition-all group">
            Hire Me Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
