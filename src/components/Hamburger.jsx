import { useState } from 'react';

import './Hamburger.css';

const Hamburger = ({ showMenu, setShowMenu }) => {
  const [hamburgerBtn, sethamburgerBtn] = useState(true);

  return (
    <button
      className={`hamburger ${hamburgerBtn ? '' : 'change'}`}
      onClick={() => {
        sethamburgerBtn(!hamburgerBtn);
        setShowMenu(!showMenu);
      }}
    >
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
    </button>
  );
};

export default Hamburger;
