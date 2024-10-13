import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Revolutionize Your Workflow</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Streamline your business processes and boost productivity with our cutting-edge SaaS solution.</p>
        <Button size="lg" variant="secondary">Start Free Trial</Button>
      </div>
    </section>
  );
};

export default Hero;