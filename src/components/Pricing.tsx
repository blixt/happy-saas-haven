import React from 'react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '$9',
    features: ['5 Users', '10GB Storage', 'Basic Support']
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['25 Users', '50GB Storage', 'Priority Support', 'Advanced Analytics']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Users', 'Unlimited Storage', '24/7 Support', 'Custom Integration']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></div>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <Button className="w-full">{plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;