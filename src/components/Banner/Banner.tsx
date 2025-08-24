'use client';

import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';

const socials = [
  {
    name: 'Github',
    icon: <FaGithub />,
    href: 'https://github.com/vorsakha',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/andreitf/',
  },
  {
    name: 'Email',
    icon: <MdEmail />,
    href: 'mailto:andreitf.dev@gmail.com',
  },
];

const Banner = () => {
  return (
    <div className="banner-container">
      <h1
        className="banner-title"
        style={{
          color: 'var(--theme-text)',
          textShadow: 'var(--color-gray-transparency) 0px 4px 18px, var(--color-gray-transparency) 0px 2px 10px',
        }}
      >
        Andrei T. Ferreira
      </h1>
      <p 
        className="banner-subtitle"
        style={{
          color: 'var(--color-gray-solid)',
        }}
      >
        Dev / Learner / Problem Solver
      </p>
      <div className="banner-socials">
        {socials.map((data, key) => {
          return (
            <a
              key={key}
              href={data.href}
              aria-label={data.name}
              rel="noopener noreferrer"
              target="_blank"
              className="banner-social-link"
              style={{
                filter: 'drop-shadow(0px 2px 6px var(--color-gray-transparency))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'var(--drop-shadow-primary-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0px 2px 6px var(--color-gray-transparency))';
              }}
            >
              {data.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
