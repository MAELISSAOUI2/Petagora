import React from 'react';
import { 
  MapPin, 
  Heart, 
  Phone, 
  Settings, 
  Users, 
  ShoppingBag, 
  Scissors, 
  PawPrint,
  AlertCircle,
  Activity,
  History,
  Dna
} from 'lucide-react';

const featureGroups = [
  {
    title: 'Smart Collar Features',
    description: 'Advanced tracking and monitoring for your pet\'s wellbeing',
    features: [
      {
        icon: Activity,
        title: 'Health Monitoring',
        description: 'Real-time vitals tracking and early warning system for potential health issues.',
        tier: 'Basic'
      },
      {
        icon: MapPin,
        title: 'GPS Tracking',
        description: 'Advanced location tracking with geofencing and movement history.',
        tier: 'Premium'
      },
      {
        icon: AlertCircle,
        title: 'Real-time Alerts',
        description: 'Instant notifications for unusual activity or health concerns.',
        tier: 'Premium'
      },
      {
        icon: Dna,
        title: 'Genetic Health Analysis',
        description: 'Detailed genetic health screening and personalized care recommendations.',
        tier: 'Custom'
      }
    ]
  },
  {
    title: 'Community Access',
    description: 'Connect with other pet owners and share experiences',
    features: [
      {
        icon: Users,
        title: 'Pet Community',
        description: 'Join local pet groups and share experiences with other pet owners.',
        tier: 'Basic'
      },
      {
        icon: Phone,
        title: 'Vet Telehealth',
        description: '24/7 access to veterinary professionals for instant consultation.',
        tier: 'Premium'
      },
      {
        icon: History,
        title: 'Health Records',
        description: 'Complete digital health history and vaccination tracking.',
        tier: 'Premium'
      },
      {
        icon: Settings,
        title: 'Personalized Care',
        description: 'Custom care plans and dedicated vet support.',
        tier: 'Custom'
      }
    ]
  },
  {
    title: 'Marketplace Access',
    description: 'Everything your pet needs in one place',
    features: [
      {
        icon: ShoppingBag,
        title: 'Pet Supplies',
        description: 'Access to premium pet food, toys, and essential supplies.',
        tier: 'Basic'
      },
      {
        icon: Scissors,
        title: 'Grooming Services',
        description: 'Book professional grooming services with verified partners.',
        tier: 'Premium'
      },
      {
        icon: Heart,
        title: 'Health Products',
        description: 'Curated selection of vet-approved health and wellness products.',
        tier: 'Premium'
      },
      {
        icon: PawPrint,
        title: 'Pet Services',
        description: 'Premium access to pet sitting, walking, and training services.',
        tier: 'Custom'
      }
    ]
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Complete Pet Care Solution</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need for your pet's health and happiness</p>
        </div>

        {featureGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900">{group.title}</h3>
              <p className="mt-2 text-gray-600">{group.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {group.features.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                    <span className={`mt-4 inline-block px-3 py-1 rounded-full text-sm ${
                      feature.tier === 'Basic' 
                        ? 'bg-gray-100 text-gray-600'
                        : feature.tier === 'Premium'
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-purple-100 text-purple-600'
                    }`}>
                      {feature.tier} Plan
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}