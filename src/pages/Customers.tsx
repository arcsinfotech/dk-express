import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Footer from "./sections/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Customers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(
        "Quote Request Sent! We'll get back to you within 24 hours.",
      );
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero */}
        <section className="bg-[linear-gradient(135deg,hsl(220_90%_15%)_0%,hsl(220_85%_25%)_100%)] pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-[#b51222] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Get Started
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
                Request a Quote
              </h1>
              <p className="text-white/70 text-lg">
                Fill out the form below and our team will provide a competitive
                quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 bg-[#f9fafb]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                        Company Name
                      </label>
                      <Input placeholder="Your company name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                        Contact Person
                      </label>
                      <Input placeholder="Full name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="email@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                        Phone
                      </label>
                      <Input type="tel" placeholder="(209) 000-0000" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                        Pickup Location
                      </label>
                      <Input placeholder="City, State" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                        Delivery Location
                      </label>
                      <Input placeholder="City, State" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                        Freight Type
                      </label>
                      <select
                        className="flex h-10 w-full rounded-md border border-[#d9dfe8] bg-[#f9fafb] px-3 py-2 text-sm text-[#1b2232]"
                        required
                      >
                        <option value="">Select type</option>
                        <option value="dry">Dry</option>
                        <option value="refrigerated">Refrigerated</option>
                        <option value="frozen">Frozen</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                        Weight (lbs)
                      </label>
                      <Input type="number" placeholder="Estimated weight" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1b2232] mb-2 block">
                      Additional Details
                    </label>
                    <Textarea
                      placeholder="Tell us more about your shipment..."
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="px-10 bg-[#b51222]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Quote Request"}
                  </Button>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg p-8 shadow-md border border-[#d9dfe8] sticky top-28">
                  <h3 className="text-lg font-heading font-bold text-[#1b2232] mb-6">
                    Contact Information
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#b51222] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#627084]">
                        2000 West Charter Way, Stockton, CA
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#b51222] shrink-0" />
                      <a
                        href="tel:209-954-9354"
                        className="text-sm text-[#627084] hover:text-[#b51222]"
                      >
                        209-954-9354
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#b51222] shrink-0" />
                      <a
                        href="mailto:dispatch@dkexpress.net"
                        className="text-sm text-[#627084] hover:text-[#b51222]"
                      >
                        dispatch@dkexpress.net
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#b51222] shrink-0" />
                      <span className="text-sm text-[#627084]">
                        6:00 AM – 4:00 PM
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Customers;
