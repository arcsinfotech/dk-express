import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Truck, Shield, Handshake, TrendingUp, CheckCircle } from "lucide-react";
import Footer from "./sections/Footer";

const benefits = [
  { icon: Truck, title: "Modern Fleet", desc: "All equipment under 4 years old with latest technology." },
  { icon: Shield, title: "Asset-Based Carrier", desc: "We own our trucks – no middlemen, direct service." },
  { icon: Handshake, title: "Owner-Operators Welcome", desc: "Competitive compensation and consistent freight." },
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Expanding operations with room for advancement." },
];

const reasons = [
  "Competitive pay & benefits",
  "Consistent, year-round freight",
  "Modern equipment fleet",
  "Dedicated dispatch support",
  "Family-owned culture",
  "Strong customer relationships",
];

const Opportunities = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero */}
        <section className="bg-[linear-gradient(135deg,hsl(220_90%_15%)_0%,hsl(220_85%_25%)_100%)] pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <p className="text-[#b51222] font-heading font-semibold text-sm uppercase tracking-widest mb-3">Join Our Team</p>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">Partner With DK Express</h1>
              <p className="text-white/70 text-lg">Discover opportunities for carriers, owner-operators, and drivers.</p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-[#f9fafb]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg p-8 text-center shadow-md border border-[#d9dfe8]"
                >
                  <div className="w-14 h-14 rounded-full bg-[#b51222]/10 flex items-center justify-center mx-auto mb-5">
                    <b.icon className="w-7 h-7 text-[#b51222]" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#1b2232] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#627084]">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[#f0f2f5]">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-[#1b2232]">Why Choose DK Express</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-[#d9dfe8]">
                  <CheckCircle className="w-5 h-5 text-[#b51222] shrink-0" />
                  <span className="text-[#1b2232] font-medium text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[linear-gradient(135deg,hsl(220_90%_15%)_0%,hsl(220_85%_25%)_100%)] py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/70 mb-8 text-lg">Contact us today to learn more about partnership opportunities.</p>
              <Button asChild variant="default" size="lg" className="text-base px-10 py-6">
                <Link to="/contact">Become a Partner</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Opportunities;
