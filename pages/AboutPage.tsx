import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import img01 from './images/image01.png';
import img1 from './images/img1.jpg';
import img4 from './images/img4.jpg';

const AboutPage: React.FC = () => {
    const [teamRef, isTeamVisible] = useOnScreen({ threshold: 0.1 });

    const timelineEvents = [
        { year: '2020', title: 'Foundation Laid', description: 'The Child Rights Foundation was established with a vision to protect and promote child rights in India.' },
        { year: '2021', title: 'First Program Launch', description: 'Launched our "Right to Education" initiative, reaching over 500 children in the first year.' },
        { year: '2022', title: 'Community Outreach', description: 'Expanded our reach through community workshops and partnerships with local schools.' },
        { year: '2023', title: 'National Recognition', description: 'Received an award for our innovative approach to child protection and advocacy.' },
    ];

  const teamMembers = [
    { name: 'Christopher Anthony', role: 'Founder & Director', img: img01 },
    { name: 'Lt.Col.Rita Donald (R )', role: 'Co-Founder & Signatory', img: img1 },
    { name: 'Pramila Vaz', role: 'Community Outreach Coordinator', img: img4 },
  ];

  return (
    <div className="bg-background">
      {/* Page Header */}
      <header className="bg-ice-blue text-center py-20">
        <h1 className="text-5xl font-bold text-text-dark">Our Story</h1>
        <p className="text-xl text-text-light mt-4 max-w-2xl mx-auto">
          Four years of dedication, growth, and unwavering commitment to children's rights.
        </p>
      </header>

      {/* Mission & Vision Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-text-light text-lg">To ensure that every child is protected, educated, and empowered to realize their full potential in a safe and supportive environment.</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg">
                 <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-text-light text-lg">A world where the rights of every child are respected and upheld, and every child's voice is heard and valued.</p>
            </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-ice-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-text-dark mb-16">4 Years of Impact</h2>
          <div className="relative">
             {/* The connecting line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/30 -translate-x-1/2"></div>
            
            {timelineEvents.map((event, index) => {
                 const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
                 const isOdd = index % 2 !== 0;
                 return (
                    <div key={index} ref={ref} className={`mb-16 flex items-center w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className={`w-1/2 flex ${isOdd ? 'justify-start' : 'justify-end'}`}>
                            <div className={`w-full md:w-10/12 p-6 bg-white rounded-xl shadow-xl transform ${isOdd ? 'md:translate-x-8' : 'md:-translate-x-8'}`}>
                                <h3 className="text-2xl font-bold text-text-dark">{event.title}</h3>
                                <p className="text-text-light mt-2">{event.description}</p>
                            </div>
                        </div>
                        <div className={`absolute left-1/2 -translate-x-1/2 z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-ice-blue`}>
                            {event.year}
                        </div>
                         <div className={`w-1/2 ${isOdd ? 'order-first' : ''}`}></div>
                    </div>
                 );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className={`py-20 container mx-auto px-6 text-center transition-opacity duration-1000 ${isTeamVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold text-text-dark mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
                <div key={member.name} className={`bg-white rounded-lg p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 delay-${index*150}`}>
                    <img src={member.img} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-primary/50 object-cover" />
                    <h3 className="text-xl font-bold text-text-dark">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
