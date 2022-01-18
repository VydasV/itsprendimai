import React from 'react';
// import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar1 />
      <Services />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
