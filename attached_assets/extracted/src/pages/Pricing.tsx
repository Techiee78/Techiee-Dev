import React, { useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "motion/react";
import { 
  Check, 
  ArrowUpRight, 
  Zap, 
  Star, 
  ShieldCheck,
  Calendar,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

interface PricingPlan {
  name: string;
  price: string;
  numericPrice: number;
  desc: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  delay: number;
}

const PricingCard = ({ plan, onPay, loading }: { plan: PricingPlan; onPay: (plan: PricingPlan) => void; loading: boolean; key?: React.Key }) => {
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
    const xPct = (mouseX / width - 0.5) * 10;
    const yPct = (mouseY / height - 0.5) * -10;
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
      viewport={{ once: true }}
      transition={{ delay: plan.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative glass-card p-10 rounded-[3rem] flex flex-col h-full transition-all duration-500 hover:border-primary/40 ${plan.popular ? 'border-primary/30 bg-primary/[0.03] scale-105 z-10' : 'hover:bg-white/[0.02]'}`}
    >
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-background-dark text-[10px] font-black uppercase tracking-[0.2em] rounded-full yellow-shadow">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-white uppercase italic tracking-tight mb-2">{plan.name}</h3>
        <p className="text-slate-500 text-xs font-light">{plan.desc}</p>
      </div>

      <div className="mb-10">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">₹{plan.price}</span>
          <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">/ Project</span>
        </div>
      </div>

      <div className="space-y-5 mb-12 flex-grow">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 group/item">
            <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary transition-colors">
              <Check size={12} className="text-primary group-hover/item:text-background-dark transition-colors" />
            </div>
            <span className="text-sm text-slate-300 font-light group-hover/item:text-white transition-colors">{feature}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={() => onPay(plan)}
        disabled={loading}
        className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${plan.popular ? 'bg-primary text-background-dark yellow-shadow hover:bg-white' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
      >
        {loading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <>
            {plan.buttonText}
            <ArrowUpRight size={18} />
          </>
        )}
      </button>

      {/* Hover Glow */}
      <div className="absolute inset-px rounded-[3rem] border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<{
    type: "success" | "error";
    message: string;
    id?: string;
  } | null>(null);

  const plans: PricingPlan[] = [
    {
      name: "Starter Plan",
      price: "9,999",
      numericPrice: 9999,
      desc: "Perfect for personal portfolios and small businesses.",
      features: [
        "5 Page Website",
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "7 Days Delivery"
      ],
      buttonText: "Pay Starting Fee",
      delay: 0.1
    },
    {
      name: "Professional Plan",
      price: "19,999",
      numericPrice: 19999,
      desc: "Ideal for growing startups and established brands.",
      features: [
        "10 Page Website",
        "Premium UI/UX",
        "Advanced SEO",
        "Admin Panel",
        "Speed Optimization",
        "14 Days Delivery"
      ],
      buttonText: "Pay Starting Fee",
      popular: true,
      delay: 0.2
    },
    {
      name: "Premium Plan",
      price: "39,999",
      numericPrice: 39999,
      desc: "Custom solutions for complex business needs.",
      features: [
        "Custom Website / Web App",
        "E-Commerce or SaaS Features",
        "Payment Integration",
        "API Integration",
        "Priority Support",
        "30 Days Delivery"
      ],
      buttonText: "Pay Starting Fee",
      delay: 0.3
    }
  ];

  const handlePayment = async (plan: PricingPlan) => {
    try {
      setLoadingPlan(plan.name);
      setPaymentStatus(null);

      // 1. Create order on server
      const response = await fetch("/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: plan.numericPrice }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create order. Please check if Razorpay keys are configured.");
      }
      const order = await response.json();

      if (!(window as any).Razorpay) {
        throw new Error("Razorpay SDK not loaded. Please check your internet connection.");
      }

      // 2. Initialize Razorpay Checkout
      const options = {
        key: (import.meta as any).env.VITE_RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: order.amount,
        currency: order.currency,
        name: "TECHIEE.DEV",
        description: `Payment for ${plan.name}`,
        order_id: order.id,
        handler: async (response: any) => {
          try {
            // 3. Verify payment on server
            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (verifyRes.ok) {
              setPaymentStatus({
                type: "success",
                message: "Payment Successful! We will contact you shortly.",
                id: response.razorpay_payment_id
              });
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (err: any) {
            setPaymentStatus({
              type: "error",
              message: err.message || "Payment verification failed"
            });
          }
        },
        prefill: {
          name: "User",
          email: "user@example.com",
        },
        theme: {
          color: "#FACC15",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        setPaymentStatus({
          type: "error",
          message: response.error.description || "Payment failed"
        });
      });
      rzp.open();
    } catch (err: any) {
      setPaymentStatus({
        type: "error",
        message: err.message || "Something went wrong"
      });
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="pt-4 pb-48 px-6 bg-background-dark min-h-screen relative overflow-hidden">
      {/* Payment Status Modal */}
      <AnimatePresence>
        {paymentStatus && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass-card max-w-md w-full p-10 rounded-[3rem] border-primary/20 relative text-center"
            >
              <button 
                onClick={() => setPaymentStatus(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className={`size-20 rounded-full mx-auto mb-8 flex items-center justify-center ${paymentStatus.type === 'success' ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'}`}>
                {paymentStatus.type === 'success' ? <CheckCircle2 size={40} /> : <AlertCircle size={40} />}
              </div>

              <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-4">
                {paymentStatus.type === 'success' ? 'Payment Success' : 'Payment Failed'}
              </h3>
              
              <p className="text-slate-400 font-light mb-8">
                {paymentStatus.message}
              </p>

              {paymentStatus.id && (
                <div className="bg-white/5 rounded-2xl p-4 mb-8">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Payment ID</p>
                  <p className="text-xs font-mono text-primary">{paymentStatus.id}</p>
                </div>
              )}

              <button 
                onClick={() => setPaymentStatus(null)}
                className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-30" />
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
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Pricing</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-8"
          >
            Flexible Plans for <span className="text-primary">Every Business</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          >
            Choose a plan that fits your needs. Custom solutions are always available.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <PricingCard 
              key={i} 
              plan={plan} 
              onPay={handlePayment}
              loading={loadingPlan === plan.name}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 p-12 rounded-[3rem] glass-card border-dashed border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8 bg-primary/5"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-white uppercase italic tracking-tight mb-2">Need a custom solution?</h3>
            <p className="text-slate-400 font-light text-lg">Let’s discuss your project and build something extraordinary together.</p>
          </div>
          <Link 
            to="/contact"
            className="flex items-center gap-4 bg-primary text-background-dark px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs yellow-shadow hover:bg-white transition-all group active:scale-95"
          >
            Book a Free Consultation
            <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-30 grayscale">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-primary" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Secure Payments</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar size={24} className="text-primary" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">On-Time Delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <Star size={24} className="text-primary" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">5-Star Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
