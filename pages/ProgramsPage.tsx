import React, { useState } from 'react';
import img3 from './images/img3.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img10 from './images/img10.jpg';

interface Program {
    title: string;
    short_desc: string;
    long_desc: string;
    img: string;
    color: string;
}

const programs: Program[] = [
  { title: 'Project Survival', short_desc: 'Health and nutrition programs for infants and mothers.', long_desc: 'Our Survival projects focus on reducing infant mortality and ensuring healthy development during the critical early years. We provide access to essential healthcare, nutritional support for mothers and children, and education on hygiene and sanitation practices in vulnerable communities.', img: img8, color: 'bg-primary' },
  { title: 'Education for All', short_desc: 'Providing quality education and learning resources.', long_desc: 'We believe education is the key to unlocking a child\'s potential. This program establishes learning centers, provides school supplies, and supports teacher training to create engaging and effective learning environments, especially for children from marginalized backgrounds.', img: img10, color: 'bg-primary' },
  { title: 'Child Protection Units', short_desc: 'Creating safe spaces and response systems against abuse.', long_desc: 'These units are dedicated to preventing and responding to child abuse, exploitation, and violence. We work with communities to build awareness, establish child-friendly reporting mechanisms, and provide legal and psychological support to victims.', img: img3, color: 'bg-primary' },
  { title: 'Youth Voice Forums', short_desc: 'Empowering children to participate in decision-making.', long_desc: 'This initiative creates platforms for children and adolescents to voice their opinions on issues that affect them. Through workshops, debates, and leadership training, we empower them to become active participants in their schools, communities, and local governance.', img: img7, color: 'bg-primary' },
];

const ProgramModal: React.FC<{ program: Program | null; onClose: () => void }> = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full relative transform transition-all duration-300 scale-95 animate-in fade-in-0 zoom-in-95" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-text-light hover:text-text-dark text-3xl">&times;</button>
        <img src={program.img} alt={program.title} className="w-full h-64 object-cover rounded-t-xl"/>
        <div className="p-8">
            <h2 className="text-3xl font-bold text-primary mb-4">{program.title}</h2>
            <p className="text-lg text-text-light">{program.long_desc}</p>
        </div>
      </div>
    </div>
  );
};

const ProgramsPage: React.FC = () => {
    const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <div>
        <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
      
      {/* Page Header */}
      <header className="bg-ice-blue text-center py-20">
        <h1 className="text-5xl font-bold text-text-dark">Our Programs & Initiatives</h1>
        <p className="text-xl text-text-light mt-4 max-w-3xl mx-auto">
          Targeted programs designed to address the core aspects of child rights and well-being.
        </p>
      </header>
      
      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {programs.map((program) => (
              <div key={program.title} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                <img src={program.img} alt={program.title} className="w-full h-56 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text-dark mb-3">{program.title}</h3>
                  <p className="text-text-light mb-6">{program.short_desc}</p>
                  <button onClick={() => setSelectedProgram(program)} className="bg-primary text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-rose-500 transition-all duration-300 transform group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
