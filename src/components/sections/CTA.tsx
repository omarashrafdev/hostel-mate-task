import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3F3F3] rounded-3xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 lg:p-16 space-y-6"
            >
              <h3 className="text-[#191A23] font-medium leading-tight">
                Let's make things happen
              </h3>
              <p className="text-[#191A23] text-lg leading-relaxed">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button className="bg-[#191A23] hover:bg-[#191A23]/90 text-white p-8 text-xl font-medium rounded-xl">
                  Get your free proposal
                </Button>
              </motion.div>
            </motion.div>

            {/* Empty space for layout on large screens */}
            <div className="hidden lg:block"></div>
          </div>

          {/* CTA Image extending outside the card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute right-18 top-1/2 transform -translate-y-1/2 z-10 lg:block hidden"
          >
            <img
              src="/assets/cta.svg"
              alt="Call to Action"
              className="w-100 h-100 object-contain"
            />
          </motion.div>

          {/* Mobile image - inside card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:hidden p-8 text-center"
          >
            <img
              src="/assets/cta.svg"
              alt="Call to Action"
              className="w-80 h-80 object-contain mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
