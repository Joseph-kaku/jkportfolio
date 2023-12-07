import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Main from './main';
import Header from './header';
import './styles.css';

function Homepage() {
  return (
    <div class="homepage">
        <Navbar />
      <Header />
        <Main />
      <Footer />
    </div>
  );  
}

export default Homepage;
