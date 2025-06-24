import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const navigationLinks = [
    "About us",
    "Services",
    "Use Cases",
    "Pricing",
    "Blog",
  ];

  return (
    <footer className="bg-[#191A23] text-white rounded-t-4xl max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Section 1: Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <img
            src="/assets/logo.svg"
            alt="Positivus"
            className="w-9 h-9 brightness-0 invert"
          />
          <span className="text-3xl font-bold text-white">Positivus</span>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-8"
        >
          {navigationLinks.map((link, index) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-white hover:text-[#B9FF66] transition-colors duration-300 underline underline-offset-4"
            >
              {link}
            </motion.a>
          ))}
        </motion.nav>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="/assets/socials/linkedin-white.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="/assets/socials/facebook-white.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="/assets/socials/twitter.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Section 2: Contact & Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-12 grid lg:grid-cols-2 gap-8"
      >
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="rounded-lg p-8"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#B9FF66] text-[#191A23] text-xl font-medium mb-6 px-1 rounded-lg w-fit"
          >
            Contact us:
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 text-white"
          >
            <div>
              <span className="font-medium">Email: </span>
              <span>info@positivus.com</span>
            </div>
            <div>
              <span className="font-medium">Phone: </span>
              <span>555-567-8901</span>
            </div>
            <div>
              <span className="font-medium">Address: </span>
              <span>
                1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#292A32] rounded-xl p-8 flex items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 w-full items-center"
          >
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent border border-white text-white placeholder:text-gray-300 px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66]"
            />
            <Button className="bg-[#B9FF66] hover:bg-[#B9FF66]/90 text-[#191A23] font-bold text-lg px-8 py-[1.875rem] rounded-xl">
              Subscribe to news
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Line Separator */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="border-t border-white"
      ></motion.div>

      {/* Section 3: Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="py-8 flex flex-row items-center gap-8"
      >
        <p className="text-white">© 2023 Positivus. All Rights Reserved.</p>
        <a
          href="#"
          className="text-white hover:text-[#B9FF66] transition-colors duration-300 underline underline-offset-4"
        >
          Privacy Policy
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
