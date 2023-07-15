import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC2 from '../images/buy.png';
import PIC3 from '../images/logo2.png';
import PIC4 from '../images/prc20.png';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
        <Navbar />
      <h1>Welcome to the Pulsechain Guide!</h1>
      <div className="polaroid">
      <a href="/change-now" alt="How to buy Pulsechain"><Polaroid imageSrc={PIC2} caption="How to Buy Pulsechain Now" /></a>
      <a href="/prc20" alt="How to Claim Free Forked ERC20 Copies"><Polaroid imageSrc={PIC4} caption="Claim Free Forked ERC20 Copies" /></a>
      <a href="/five-steps" alt="Step by step guide to Pulsechain"><Polaroid imageSrc={PIC3} caption="Beginners Guide" /></a>
      </div>
      <p>
         Click one of the images above to get started
      </p>
      <Footer />
    </div>
  );
}

export default Home;
