import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">YourSaaS</h3>
            <p className="text-sm">Empowering businesses with innovative solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="#features">Features</a></li>
              <li className="mb-2"><a href="#pricing">Pricing</a></li>
              <li className="mb-2"><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Careers</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">Privacy Policy</a></li>
              <li className="mb-2"><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          © {new Date().getFullYear()} YourSaaS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;