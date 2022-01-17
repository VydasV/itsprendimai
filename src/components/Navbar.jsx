import { useState, useEffect } from 'react';
import './Navbar.css';
import './Hamburger';
import Hamburger from './Hamburger';

const menu = ['paslaugos', 'apie mus', 'kontaktai'];
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
  return (
    <nav>
      <div className="logo">ITsprendimai</div>
      <Hamburger toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {(toggleMenu || screenWidth > 720) && (
        <ul className="list">
          {menu.map((item, index) => {
            return (
              <li key={index + item} className="links">
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
