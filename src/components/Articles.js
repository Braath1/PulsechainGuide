import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/installMM.png';
import PIC2 from '../images/buy.png';
import PIC3 from '../images/logo2.png';
import PIC4 from '../images/prc20.png';
import PIC5 from '../images/pls.png';
import PIC6 from '../images/plsx20.png';
import PIC7 from '../images/trezor.png';
import PIC8 from '../images/trezor2.png';
import PIC9 from '../images/bridge.png';
import PIC10 from '../images/trezor34.jpg';
import PIC11 from '../images/pls.png';
import PIC12 from '../images/trezor70.png';
import PIC13 from '../images/cb.png';
import PIC16 from '../images/cb11.png';
import PIC17 from '../images/cb45.png';
import PIC18 from '../images/stake5.png';
import Footer from './Footer';
import './Articles.css';

const Home = () => {
  return (
    <div className="container-articles">
        <Navbar />
      <div className="polaroid">
      <a href="/change-now" alt="How to buy Pulsechain"><Polaroid imageSrc={PIC2} caption="How to Buy Pulsechain Now" /></a>
      <a href="/prc20" alt="How to Claim Free Forked ERC20 Copies"><Polaroid imageSrc={PIC4} caption="Claim Free Forked ERC20 Copies" /></a>
      <a href="/five-steps" alt="Step by step guide to Pulsechain"><Polaroid imageSrc={PIC3} caption="Beginners Guide" /></a>
      </div>
      <div className="polaroid">
      <a href="/metamask" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC} caption="Guide: How to install Metamask" /></a>
      <a href="/add-pulsechain" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC5} caption="Guide: How to connect to Pulsechain" /></a>
      <a href="/plsx" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC6} caption="Guide: How to swap tokens on Pulsechain" /></a>
      </div>
      <div className="polaroid">
      <a href="/trezor" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC7} caption="Guide: Why use a hardware wallet?" /></a>
      <a href="/trezor-buy" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC8} caption="Guide: How to buy & use Trezor hardware wallet" /></a>
      <a href="/connect-trezor" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC12} caption="Guide: How to Connect Trezor hardware wallet to Metamask" /></a>
      </div>
      <div className="polaroid">
      <a href="/trezor-tx" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC10} caption="Guide: How to make transactions Trezor hardware wallet" /></a>
      <a href="/bridge" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC9} caption="Guide: How to bridge tokens" /></a>
      <a href="/add-pulsechain" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC11} caption="Guide: How to add Pulsechain to Metamask" /></a>
      </div>
      <div className="polaroid">
      <a href="/coinbase" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC13} caption="Guide: How to Buy On Coinbase Exchange" /></a>
      <a href="/coinbase-metamask" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC16} caption="Send Tokens From Coinbase to Metamask" /></a>
      <a href="/metamask-swap" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC17} caption="How to Swap Tokens On Metamask" /></a>
      </div>
      <div className="polaroid">
      <a href="/hex" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC18} caption="Guide: How to Mine HEX" /></a>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
