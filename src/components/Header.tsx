import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">YourSaaS</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
            <li><Button variant="outline">Sign In</Button></li>
            <li><Button>Get Started</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;