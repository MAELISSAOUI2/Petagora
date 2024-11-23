import React from 'react';

const HowItWorksSteps = [
  {
    title: "Smart Health Monitoring",
    description: "Monitor your pet's vital signs 24/7 with the advanced PetPace smart collar, tracking everything from heart rate to activity levels."
  },
  {
    title: "Real-Time Data Updates",
    description: "Health data is instantly transmitted to your smartphone, keeping you connected to your pet's wellbeing anywhere, anytime."
  },
  {
    title: "Secure Cloud Storage",
    description: "Your pet's health data is securely encrypted and stored in the cloud, creating a comprehensive health timeline."
  },
  {
    title: "AI-Powered Health Analysis",
    description: "Advanced Gen AI algorithms continuously analyze your pet's data, detecting patterns and potential health concerns before they become serious."
  },
  {
    title: "Personalized Care Recommendations",
    description: "Receive tailored recommendations for nutrition, exercise, and care routines based on your pet's unique health profile."
  },
  {
    title: "Global Pet Health Network",
    description: "Join the world's largest pet health database, contributing to groundbreaking research while accessing insights from millions of pet health records."
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How PetAgora's Technology Works to Keep Your Pet Healthy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HowItWorksSteps.map((step, index) => (
            <div 
              key={index}
              className="step-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="icon-wrapper mb-4">
                <i className={`text-4xl text-primary fa-solid fa-paw`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section> 
  );
} 