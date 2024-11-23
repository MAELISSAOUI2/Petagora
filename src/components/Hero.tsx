import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const slides = [
  {
    title: 'Effortless Data Transmission',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80',
  },
  {
    title: 'Secure Cloud Storage',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
  },
  {
    title: 'Advanced Anomaly Detection',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80',
  },
  {
    title: 'World\'s Largest Pet Health Data Repository',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80',
  },
  {
    title: 'Instant Vet Alerts',
    image: 'https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&q=80',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transforming Pet Care with Smart Technology
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Monitor your pet's health in real-time with our advanced smart collar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-[400px] object-cover transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">{slides[currentSlide].title}</h3>
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <button 
                onClick={prevSlide}
                className="bg-white/80 p-2 rounded-full hover:bg-white transition"
              >
                <ArrowLeft className="h-5 w-5 text-gray-800" />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white/80 p-2 rounded-full hover:bg-white transition"
              >
                <ArrowRight className="h-5 w-5 text-gray-800" />
              </button>
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}