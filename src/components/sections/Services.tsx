import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: ["Search engine", "optimization"],
      bgColor: "bg-white",
      titleBgColor: "bg-[#B9FF66]",
      titleTextColor: "text-[#191A23]",
      iconBgColor: "bg-[#191A23]",
      iconColor: "text-[#B9FF66]",
      learnMoreColor: "text-[#191A23]",
      borderColor: "border-[#191A23]",
      image: "/assets/services/search-engine.svg",
    },
    {
      title: ["Pay-per-click", "advertising"],
      bgColor: "bg-[#B9FF66]",
      titleBgColor: "bg-white",
      titleTextColor: "text-[#191A23]",
      iconBgColor: "bg-[#191A23]",
      iconColor: "text-[#B9FF66]",
      learnMoreColor: "text-[#191A23]",
      borderColor: "border-[#191A23]",
      image: "/assets/services/pay-per-click.svg",
    },
    {
      title: ["Social Media", "Marketing"],
      bgColor: "bg-[#191A23]",
      titleBgColor: "bg-white",
      titleTextColor: "text-[#191A23]",
      iconBgColor: "bg-white",
      iconColor: "text-[#191A23]",
      learnMoreColor: "text-white",
      borderColor: "border-white",
      image: "/assets/services/social-media.svg",
    },
    {
      title: ["Email", "Marketing"],
      bgColor: "bg-white",
      titleBgColor: "bg-[#B9FF66]",
      titleTextColor: "text-[#191A23]",
      iconBgColor: "bg-[#191A23]",
      iconColor: "text-[#B9FF66]",
      learnMoreColor: "text-[#191A23]",
      borderColor: "border-[#191A23]",
      image: "/assets/services/email-marketing.svg",
    },
    {
      title: ["Content", "Creation"],
      bgColor: "bg-[#B9FF66]",
      titleBgColor: "bg-white",
      titleTextColor: "text-[#191A23]",
      iconBgColor: "bg-[#191A23]",
      iconColor: "text-[#B9FF66]",
      learnMoreColor: "text-[#191A23]",
      borderColor: "border-[#191A23]",
      image: "/assets/services/content-creation.svg",
    },
    {
      title: ["Analytics and", "Tracking"],
      bgColor: "bg-[#191A23]",
      titleBgColor: "bg-white",
      titleTextColor: "text-[#191A23]",
      iconBgColor: "bg-white",
      iconColor: "text-[#191A23]",
      learnMoreColor: "text-white",
      borderColor: "border-white",
      image: "/assets/services/analytics.svg",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start gap-8 mb-16"
        >
          {/* Title with green background */}
          <div className="inline-block bg-[#B9FF66] rounded-lg px-2 py-1">
            <h2 className="text-[#191A23] font-medium text-4xl lg:text-5xl m-0">
              Services
            </h2>
          </div>

          {/* Description */}
          <div className="lg:w-1/2">
            <p className="text-lg text-[#191A23] leading-relaxed">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title.join(" ")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card
                className={`${service.bgColor} ${service.borderColor} border-2 border-t-2 border-l-2 border-r-2 border-b-4 rounded-t-3xl rounded-b-[2rem] p-8 h-78 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl relative overflow-hidden`}
              >
                {/* Title Section */}
                <div className="space-y-0">
                  <div
                    className={`${service.titleBgColor} rounded-lg px-3 py-2 w-fit`}
                  >
                    <h3
                      className={`${service.titleTextColor} font-medium leading-tight`}
                    >
                      {service.title[0]}
                    </h3>
                  </div>
                  <div
                    className={`${service.titleBgColor} rounded-lg px-3 py-2 w-fit`}
                  >
                    <h3
                      className={`${service.titleTextColor} font-medium leading-tight`}
                    >
                      {service.title[1]}
                    </h3>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    className={`p-0 h-auto font-medium group-hover:gap-3 transition-all duration-300 ${service.learnMoreColor} hover:bg-transparent text-xl`}
                  >
                    <span className="flex items-center gap-3">
                      <div
                        className={`${service.iconBgColor} rounded-full p-3 group-hover:rotate-45 transition-transform duration-300`}
                      >
                        <ArrowUpRight
                          size={20}
                          className={`${service.iconColor} font-bold stroke-2`}
                        />
                      </div>
                      Learn more
                    </span>
                  </Button>
                </div>

                {/* Service Image */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <img
                    src={service.image}
                    alt={service.title.join(" ")}
                    className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
