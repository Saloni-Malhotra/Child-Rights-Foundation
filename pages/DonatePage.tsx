import React from 'react';
import img9 from './images/qrcode.png';

const DonatePage: React.FC = () => {
  return (
    <div className="bg-background">
      <header className="bg-ice-blue text-center py-20 relative overflow-hidden">
        <h1 className="text-5xl font-bold text-text-dark">Make a Difference Today</h1>
        <p className="text-xl text-text-light mt-4 max-w-3xl mx-auto">
          Your donation empowers us to continue our work and create lasting change for children.
        </p>
      </header>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl grid md:grid-cols-2 gap-10 items-center">
          {/* QR Code Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Scan to Donate</h2>
            <div className="p-4 bg-gradient-to-br from-rose-100 to-orange-100 rounded-2xl inline-block shadow-lg relative">
              <img src={img9} alt="QR Code for Donation" className="w-64 h-64 rounded-xl relative z-10 object-cover" />
            </div>
            <p className="text-text-light mt-4">Use any UPI app to scan and donate.</p>
          </div>

          {/* Bank Details Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Bank Transfer</h2>
            <div className="space-y-4 text-text-light">
              <div>
                <p className="font-semibold text-text-dark">Account Name:</p>
                <p>Child Rights Foundation</p>
              </div>
              <div>
                <p className="font-semibold text-text-dark">Account Number:</p>
                <p>39374101517</p>
              </div>
              <div>
                <p className="font-semibold text-text-dark">Bank Name:</p>
                <p>State Bank of India</p>
              </div>
              <div>
                <p className="font-semibold text-text-dark">IFSC Code:</p>
                <p>SBIN0018789</p>
              </div>
            </div>
            <div className="mt-8 bg-ice-blue/50 p-4 rounded-xl text-center">
              <h3 className="font-bold text-text-dark">Tax Exemption</h3>
              <p className="text-sm text-text-light mb-3">All donations are eligible for tax exemption under Section 80G of the Income Tax Act.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
