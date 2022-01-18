import { useState, useEffect } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

import './ScrollToTop.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <BsArrowUpCircle />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
