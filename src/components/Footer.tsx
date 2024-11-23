import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <PawPrint className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">PetAgora</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming pet care with smart technology.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 PetAgora. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}