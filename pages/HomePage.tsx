import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';

const HomePage: React.FC = () => {

  const actionTiles = [
    {
      title: "Provide Urgent Support",
      description: "Your contribution can provide education and safety to a child in need.",
  bgImage: img1,
      link: "/donate",
      btnText: "Donate Now"
    },
    {
      title: "Join Our Mission",
      description: "Become a volunteer and make a direct impact in your community.",
  bgImage: img8,
      link: "/get-involved",
      btnText: "Volunteer"
    },
    {
      title: "Discover Our Programs",
      description: "Learn how we create change through our focused initiatives.",
  bgImage: img6,
      link: "/programs",
      btnText: "Learn More"
    }
  ];

  const whoWeAreCards = [
    {
      title: "Survival",
      description: "Ensuring every child has access to essential healthcare and nutrition for a healthy start in life.",
  image: img1
    },
    {
      title: "Development",
      description: "Providing quality education and learning opportunities to help children realize their full potential.",
  image: img10
    },
    {
      title: "Protection",
      description: "Creating safe environments and protecting children from abuse, exploitation, and violence.",
  image: img5
    },
     {
      title: "Participation",
      description: "Empowering children to voice their opinions and participate in decisions that affect their lives.",
  image: img7
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
    style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-md">
            Every Child Deserves a <span className="text-primary">Voice</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow">
            We are dedicated to building a world where every child is safe, educated, and empowered to shape their own future.
          </p>
          <div className="space-x-4">
             <NavLink to="/donate" className="bg-primary text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105">
              Donate Now
            </NavLink>
            <NavLink to="/get-involved" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-text-dark transition-all duration-300">
              Volunteer Now
            </NavLink>
          </div>
        </div>
      </section>

      {/* Action Tiles Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {actionTiles.map((tile, index) => (
             <div key={index} className="relative h-64 md:h-80 bg-cover bg-center group" style={{backgroundImage: `url(${tile.bgImage})`}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-6">
                <h2 className="text-2xl font-semibold mb-2 drop-shadow-md">{tile.title}</h2>
                <p className="mb-4 text-gray-200 max-w-xs">{tile.description}</p>
                <NavLink to={tile.link} className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-rose-500 transition-all duration-300 transform hover:scale-105">
                  {tile.btnText}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-ice-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-text-dark mb-4">Our Pillars of Work</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-text-light max-w-3xl mx-auto mb-12">
            Our work is built on four core principles to ensure comprehensive child development and protection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeAreCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <img src={card.image} alt={card.title} className="w-full h-56 object-cover"/>
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-text-dark mb-3">{card.title}</h3>
                  <p className="text-text-light">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
