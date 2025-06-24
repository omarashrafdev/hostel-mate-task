import { motion } from "framer-motion";

const Companies = () => {
  const companies = [
    { name: "Amazon", logo: "/assets/companies/amazon.svg" },
    { name: "Dribbble", logo: "/assets/companies/dripple.svg" },
    { name: "HubSpot", logo: "/assets/companies/hubspot.svg" },
    { name: "Notion", logo: "/assets/companies/notion.svg" },
    { name: "Netflix", logo: "/assets/companies/netflix.svg" },
    { name: "Zoom", logo: "/assets/companies/zoom.svg" },
  ];

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center group"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto mix-blend-luminosity group-hover:mix-blend-normal transition-opacity duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
