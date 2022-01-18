import React from 'react';
// import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar1 />
      <About />
      <Services />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
