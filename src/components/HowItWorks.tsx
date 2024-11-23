import { motion } from 'framer-motion';

const steps = [
  {
    title: "Equip Your Pet with the PetPace Collar",
    description: "Start monitoring your pet's health by equipping them with the advanced PetPace Collar.",
    image: "/images/how-it-works/smart-collar.svg"
  },
  {
    title: "Data Transmission",
    description: "The collar collects vital health data and transmits it wirelessly to your smartphone.",
    image: "/images/how-it-works/data-transmission.svg"
  },
  {
    title: "Upload Data to the Cloud",
    description: "All health data is securely uploaded to the cloud for storage and advanced analysis.",
    image: "/images/how-it-works/cloud-upload.svg"
  },
  {
    title: "AI-Powered Analysis",
    description: "Our advanced Gen AI algorithms analyze the data to detect anomalies and provide actionable insights.",
    image: "/images/how-it-works/ai-analysis.svg"
  },
  {
    title: "Personal Health Advisor Suggestions",
    description: "Your AI-based Personal Health Advisor suggests the best training, food, and routine for your pet.",
    image: "/images/how-it-works/health-advisor.svg"
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          How PetAgora's Technology Works to Keep Your Pet Healthy
        </h2>
        
        <div className="relative overflow-x-auto pb-8">
          <div className="flex gap-8 min-w-max px-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-80 relative"
              >
                {index < steps.length - 1 && (
                  <div className="absolute -right-5 top-1/2 -translate-y-1/2">
                    <svg 
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="text-emerald-600"
                    >
                      <path 
                        d="M5 12h10M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                
                <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-6 relative h-48 w-full"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-emerald-600 opacity-50"
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
}