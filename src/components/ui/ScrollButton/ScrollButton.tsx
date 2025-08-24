'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { BsArrowUp } from '@react-icons/all-files/bs/BsArrowUp';

const ScrollButton = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const theme = useTheme();

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleScroll() {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button 
      className={`${
        scrolled ? 'flex' : 'hidden'
      } z-[2] fixed bottom-[10vh] right-[6vw] cursor-pointer border-none h-[30px] w-[30px] rounded-full items-center justify-center max-md:right-[45vw] max-md:h-[40px] max-md:w-[40px] max-md:bottom-[5vh]`}
      style={{
        background: theme?.colors?.red?.solid,
        filter: 'drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5))'
      }}
      onClick={scrollToTop}
    >
      <BsArrowUp 
        className="text-2xl"
        style={{
          color: theme?.background
        }}
      />
    </button>
  );
};

export default ScrollButton;
