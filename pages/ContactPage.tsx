import React from 'react';
import { MailIcon, PhoneIcon, LocationIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-background">
      <header className="bg-ice-blue text-center py-20">
        <h1 className="text-5xl font-bold text-text-dark">Contact Us</h1>
        <p className="text-xl text-text-light mt-4 max-w-3xl mx-auto">
          We'd love to hear from you. Reach out with any questions, or just to say hello.
        </p>
      </header>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-light font-semibold mb-2">Full Name</label>
                <input type="text" id="name" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-light font-semibold mb-2">Email Address</label>
                <input type="email" id="email" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-light font-semibold mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-rose-500">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Details</h3>
                 <ul className="space-y-4 text-text-light">
                    <li className="flex items-start">
                        <LocationIcon className="w-6 h-6 mr-4 mt-1 text-primary flex-shrink-0" />
                        <span>AWHO, D/16 102, Sandeep Vihar, Whitefield - Hoskote Rd, Post, Kannamangala, Bengaluru, Karnataka 560115</span>
                    </li>
                    <li className="flex items-center">
                        <PhoneIcon className="w-6 h-6 mr-4 text-primary" />
                        <a href="tel:9789030140" className="hover:text-primary transition-colors">97890 30140</a>
                    </li>
                    <li className="flex items-center">
                        <MailIcon className="w-6 h-6 mr-4 text-primary" />
                        <a href="mailto:childrightsfoundationindia@gmail.com" className="hover:text-primary transition-colors">childrightsfoundationindia@gmail.com</a>
                    </li>
                </ul>
             </div>
             <div className="rounded-xl shadow-xl overflow-hidden aspect-[16/9]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.318425203115!2d77.7818458748956!3d13.015494214227306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e1f70505b79%3A0x6bda8e8f81a733e8!2sAWHO%20Sandeep%20Vihar!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NGO Location"
                ></iframe>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
