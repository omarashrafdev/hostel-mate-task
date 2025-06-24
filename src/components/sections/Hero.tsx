import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-[#191A23] font-medium leading-tight">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg text-[#191A23] leading-relaxed">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button className="bg-[#191A23] text-white hover:bg-[#191A23]/90 text-lg p-8 rounded-xl">
                Book a consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero SVG */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <img
              src="/assets/hero.svg"
              alt="Digital Marketing Illustration"
              className="w-full h-auto max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
