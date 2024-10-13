import React from 'react';
import { Zap, Shield, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: 'Lightning Fast',
    description: 'Experience unparalleled speed and efficiency in your daily operations.'
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: 'Secure & Reliable',
    description: 'Rest easy knowing your data is protected with state-of-the-art security measures.'
  },
  {
    icon: <BarChart className="h-10 w-10 text-blue-600" />,
    title: 'Insightful Analytics',
    description: 'Make data-driven decisions with our powerful analytics and reporting tools.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;