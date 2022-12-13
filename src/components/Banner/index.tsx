import React, { FC, ReactNode } from 'react';
import { BannerContainer, SocialLink, Socials } from './Banner.styles';

interface SocialsProps {
  socials: {
    name: string;
    icon: ReactNode;
    href: string;
  }[];
}

const Banner: FC<SocialsProps> = ({ socials }) => {
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
