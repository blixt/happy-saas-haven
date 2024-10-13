import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers and transform your business today.</p>
        <Button size="lg" variant="secondary">Start Your Free Trial</Button>
      </div>
    </section>
  );
};

export default CTA;