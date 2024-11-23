const SetupSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'DOWNLOAD FREE PETAGORA APP',
      description: 'More PETAGORA App',
      image: '/images/download-app.png'
    },
    {
      number: 2,
      title: 'PAIR PETAGORA WITH YOUR SMARTPHONE',
      description: '',
      image: '/images/pair-device.png'
    },
    {
      number: 3,
      title: 'DEFINE YOUR PET PROFILE',
      description: '',
      image: '/images/subscription.png'
    }
  ];

  return (
    <section id="setup" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        EASY SET UP!
        <span className="block text-lg font-normal mt-2 text-gray-600">
          Get started with PetAgora in just three simple steps
        </span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-12 relative">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center text-center relative">
            {/* Step number badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
              {step.number}
            </div>
            
            {/* Arrow between steps (except last) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2">
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
            
            {/* Image container */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 w-full aspect-square flex items-center justify-center">
              <img 
                src={step.image} 
                alt={`Step ${step.number}`} 
                className="w-full h-auto max-w-[200px] object-contain"
              />
            </div>
            
            {/* Text content */}
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              {step.description && (
                <a 
                  href="#" 
                  className="text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  {step.description}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SetupSteps; 