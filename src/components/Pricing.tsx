import { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    description: '1 Year',
    monthlyPrice: 11.9,
    collarPrice: 235,
    yearlyPrice: 142.8,
    features: [
      'Health record management',
      'Vaccination reminders',
      'Community access (limited)',
      'Basic activity tracking',
          '3-year option: Free collar with 11.900 TND/month',
    ],
  },

  {
    name: 'Free Collar',
    description: '2 Years Engagement',
    monthlyPrice: 11.9,
    yearlyPrice: 162,
    features: [
      'All Basic features',
      'Real-time health analytics',
      'Telehealth consultations',
      'Geofencing and GPS tracking',
      'Advanced activity insights',
    ],
    popular: true,
  },
  
  {
    name: 'Premium',
    description: 'For proactive pet care',
    monthlyPrice: 15,
    yearlyPrice: 162,
    features: [
      'All Basic features',
      'Real-time health analytics',
      'Telehealth consultations',
      'Geofencing and GPS tracking',
      'Advanced activity insights',
    ],

  },
  {
    name: 'Custom Add-ons',
    description: 'For personalized experiences',
    monthlyPrice: 200,
    yearlyPrice: 2400,
    features: [
      'Genetic Analysis (400 TND/report)',
      'Personalized Services (200 TND/month)',
      'One-time consultation (35 TND)',
      'Telehealth Session (35 TND/session)',
      'Telehealth Package (300 TND/year for 10 sessions)',
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-emerald-50">
      <div className="max-w-full mx-auto px-2">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Find the Right Plan for You and Your Pet</h2>
          <p className="mt-4 text-xl text-gray-600">Choose a plan that fits your pet care needs</p>
          
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className={`text-sm ${!isAnnual ? 'text-emerald-600 font-semibold' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 bg-emerald-600"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-emerald-600 font-semibold' : 'text-gray-500'}`}>
              Annual <span className="text-emerald-600 font-semibold">(Save 10%)</span>
            </span>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-stretch gap-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-3 shadow-lg w-[240px] ${
                plan.popular ? 'ring-2 ring-emerald-600' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-3 py-0.5 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-base font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-1 text-xs text-gray-500">{plan.description}</p>
                {plan.name === 'Basic' ? (
                  <div className="mt-2">
                    <p className="text-xs text-gray-600">Upfront: <span className="font-semibold">235 TND</span> for collar</p>
                    <p className="mt-1">
                      <span className="text-2xl font-bold text-gray-900">11.900</span>
                      <span className="text-xs text-gray-500"> TND/month</span>
                    </p>
                  </div>
                ) : (
                  <p className="mt-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-xs text-gray-500"> TND/{isAnnual ? 'year' : 'month'}</span>
                  </p>
                )}
              </div>

              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.location.href = '#checkout'}
                className={`mt-4 w-full rounded-lg px-3 py-1.5 text-center text-xs font-medium transition ${
                  plan.popular
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}