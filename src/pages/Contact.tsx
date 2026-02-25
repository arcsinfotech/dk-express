import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Footer from "./sections/Footer";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message Sent! We'll respond within 1 business day.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <main>

        {/* Contact Section */}
        <section className="py-24 bg-[#f9fafb]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-heading font-bold text-[#1b2232] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">Name</label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1b2232] mb-2 block">Email</label>
                      <Input type="email" placeholder="email@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1b2232] mb-2 block">Phone</label>
                    <Input type="tel" placeholder="(209) 000-0000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1b2232] mb-2 block">Subject</label>
                    <Input placeholder="How can we help?" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1b2232] mb-2 block">Message</label>
                    <Textarea placeholder="Your message..." rows={5} required />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="px-10 bg-[#b51222]" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-heading font-bold text-[#1b2232] mb-6">Contact Information</h2>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0c3992]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#0c3992]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-[#1b2232]">Address</h4>
                      <p className="text-sm text-[#627084] mt-1">2000 West Charter Way, Stockton, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0c3992]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#0c3992]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-[#1b2232]">Phone</h4>
                      <a href="tel:209-954-9354" className="text-sm text-[#627084] hover:text-[#b51222] mt-1 block">209-954-9354</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0c3992]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#0c3992]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-[#1b2232]">Email</h4>
                      <a href="mailto:dispatch@dkexpress.net" className="text-sm text-[#627084] hover:text-[#b51222] mt-1 block">dispatch@dkexpress.net</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0c3992]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#0c3992]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-[#1b2232]">Business Hours</h4>
                      <p className="text-sm text-[#627084] mt-1">Monday – Friday: 6:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden border border-[#d9dfe8] shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5!2d-121.32!3d37.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU2JzI0LjAiTiAxMjHCsDE5JzEyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DK Express Location"
                  />
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

export default Contact;
