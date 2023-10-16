'use client';

import {
  BannerContainer,
  SocialLink,
  Socials,
} from '@components/Banner/Banner.styles';
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
    <BannerContainer>
      <h1>Andrei T. Ferreira</h1>
      <p>Dev / Learner / Problem Solver </p>
      <Socials>
        {socials.map((data, key) => {
          return (
            <SocialLink
              key={key}
              href={data.href}
              aria-label={data.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              {data.icon}
            </SocialLink>
          );
        })}
      </Socials>
    </BannerContainer>
  );
};

export default Banner;
