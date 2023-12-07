import React from 'react';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO, Navigation } from '../components';

const About = () => {
  return (
    <m.section
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="about-section"
    >
      <SEO
        title="About"
        name="About Page"
        description="About page for Github Profile App."
        type="Info Page"
      />
      <Navigation />
      <h1>A propos</h1>
      <p>
Cette API sert à afficher les profiles github
      </p>
      <p>
    Informations à propos du repositories et du profile
      </p>
      <p>
        Seulement les informations publics sont affichés.
      </p>
      <div className="link">
        <Link to="/">
          <button>Retour </button>
        </Link>
      </div>
      <div className="about-image">
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png?width=480&format=webpll"
          alt="astrocat"
        />
        <p>credit: www.github.com</p>
      </div>
    </m.section>
  );
};

export default About;