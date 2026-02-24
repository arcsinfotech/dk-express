import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Footer from "./sections/Footer";

const timeline = [
  { year: "1997", event: "Founded with 2 trucks and a vision" },
  { year: "2005", event: "Expanded to 20+ trucks, serving 5 states" },
  { year: "2012", event: "Added refrigerated fleet & cold chain services" },
  { year: "2018", event: "Grew to 50+ trucks with modern equipment" },
  { year: "Today", event: "70+ trucks, 100+ trailers, 12+ states" },
];

const leaders = [
  { name: "Daljit Singh (DK)", role: "President", initials: "DK" },
  { name: "Sarb Singh", role: "Operations Manager", initials: "SS" },
];

export default function About() {
  return (
    <div className="min-h-screen w-full">
      <main>
        {/* Hero */}
        <section className="bg-[#00112D] pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <p className="text-[#C81E3A] font-heading font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">Our Story</h1>
              <p className="text-white/70 text-lg">Family-owned since 1997, delivering excellence in transportation across the nation.</p>
            </motion.div>
          </div>
        </section>

        {/* Company Description */}
        <section className="py-24 bg-[#F7F9FB]">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-[#1F2A3A] mb-6">About DK Express</h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>DK Express is a family-owned and operated transportation company headquartered in Stockton, California. Founded in 1997 by Daljit Singh, the company has grown from a modest operation of two trucks to a major freight carrier with over 70 trucks and 100 trailers.</p>
                <p>We specialize in both refrigerated and dry freight, transporting everything from fresh produce and frozen goods to construction materials and beverages. Our commitment to quality service, modern equipment, and experienced drivers has earned us a reputation as one of the most reliable carriers in the industry.</p>
                <p>At DK Express, we believe in treating every customer like family. Our service-first approach, combined with our deep understanding of the logistics industry, makes us the partner you can count on for all your transportation needs.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-[#EEF2F5]">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Team</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {leaders.map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-lg p-8 text-center shadow-md border border-[#DCE3EA]"
                >
                  <div className="w-24 h-24 rounded-full bg-[#0D3B8C]/10 flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl font-heading font-bold text-[#0D3B8C]">{leader.initials}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#1F2A3A]">{leader.name}</h3>
                  <p className="text-sm text-[#6B7280] mt-1">{leader.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-[#F7F9FB]">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Company Timeline</h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#DCE3EA]" />
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#C81E3A] rounded-full border-4 border-[#F7F9FB] z-10" />
                  <div className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-[#C81E3A] font-heading font-bold text-lg">{item.year}</span>
                    <p className="text-[#1F2A3A] mt-1">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-linear-to-br from-[#0A2342] to-[#0D3B8C] py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Target className="w-12 h-12 text-[#C81E3A] mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To provide reliable, safe, and efficient transportation services while maintaining the highest standards of integrity and customer satisfaction. We are committed to being the most trusted partner in the logistics industry.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};