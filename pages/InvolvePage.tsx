import React, { useState } from 'react';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="text-xl font-semibold text-text-dark">{title}</span>
                <span className={`transform transition-transform duration-300 text-2xl text-primary ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-4 text-text-light">
                    {children}
                </div>
            </div>
        </div>
    );
};


const InvolvePage: React.FC = () => {
  return (
    <div className="bg-background">
        <header className="bg-ice-blue text-center py-20">
            <h1 className="text-5xl font-bold text-text-dark">Get Involved</h1>
            <p className="text-xl text-text-light mt-4 max-w-3xl mx-auto">
                Be a part of the change. Your time, skills, and support can transform a child's life.
            </p>
        </header>
        
        <div className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Volunteer Form Section */}
                <div className="bg-white p-8 rounded-xl shadow-xl">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">Volunteer With Us</h2>
                    <p className="text-center text-text-light mb-6">Fill out the form below and we'll get in touch with you about volunteering opportunities.</p>
                     <div className="aspect-w-1 aspect-h-1">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6s2jHgN9ey03fip9KHIvOe7BjEFoCXb199GLTCVzOV-U9gA/viewform?embedded=true" width="640" height="1615" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>

                {/* Accordion Section */}
                <div>
                     <h2 className="text-3xl font-bold text-text-dark mb-6 text-center">More Ways to Help</h2>
                     <div className="bg-white p-8 rounded-xl shadow-xl">
                        <AccordionItem title="Partner With Us">
                           <p>We collaborate with corporates, educational institutions, and other NGOs to amplify our impact. If your organization shares our vision, let's connect to explore partnership opportunities.</p>
                        </AccordionItem>
                         <AccordionItem title="Donate">
                           <p>Your donation helps us continue our work in protecting and empowering children.  
                            It supports education, healthcare, nutrition, and safe spaces for those who need it most.  
                            Together, we can build a future where every child has the chance to thrive.</p>
                        </AccordionItem>
                         <AccordionItem title="Spread the Word">
                           <p>Follow us on social media, share our stories, and help raise awareness about child rights. Your voice can be a powerful tool for change.</p>
                        </AccordionItem>
                     </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InvolvePage;