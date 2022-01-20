import React from 'react';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <Navbar1 />
      <About />
      {/* <Services />
      <Contacts /> */}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default App;
