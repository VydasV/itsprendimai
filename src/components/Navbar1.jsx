import { useState, useRef, useEffect } from 'react';
import Hamburger from './Hamburger';
import './Navbar1.css';

const links = [
  {
    id: 1,
    url: '#about',
    text: 'apie',
  },
  {
    id: 2,
    url: '#services',
    text: 'paslaugos',
  },
  {
    id: 3,
    url: '#contacts',
    text: 'kontaktai',
  },
];
// const links = [];
const isLinks = links.length !== 0;

const Navbar1 = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">LOGO</div>
          {/* <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          > 
          </button> */}
          {isLinks && (
            <Hamburger showMenu={showLinks} setShowMenu={setShowLinks} />
          )}
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
