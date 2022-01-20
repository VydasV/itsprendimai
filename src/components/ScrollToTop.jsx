import { useState, useEffect } from 'react';
import { ImCircleUp } from 'react-icons/im';

import './ScrollToTop.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <button
        className={`back-to-top ${showButton ? 'show_back-to-top' : ''}`}
        onClick={scrollToTop}
      >
        <ImCircleUp className="scroll-icon" />
      </button>
    </>
  );
};

export default ScrollToTop;
