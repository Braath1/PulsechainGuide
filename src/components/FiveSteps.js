import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import './FiveSteps.css'; // Import the CSS file for the component
import './Polaroid.css';
import PIC from '../images/installMM.png';
import PIC2 from '../images/pls.png';
import PIC3 from '../images/plsx20.png';
import PIC4 from '../images/prc20.png';
import PIC5 from '../images/buy.png';

const FiveSteps = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <div className="polaroid">
      <h2>5-step guide to get started with Pulsechain!</h2>
       </div>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Step 1: Download and Set Up Metamask Wallet</span>
</div>
<a href="/metamask" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC} caption="Guide: How to install Metamask" /></a>
<div className="content">
<span className="bold">Step 2: Connect to the Pulsechain Blockchain</span> 
</div>
<a href="/add-pulsechain" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC2} caption="Guide: How to connect to Pulsechain" /></a>
<div className="content">
<span className="bold">Step 3: Claim Free Forked ERC20 Copies</span> Pulsechain is a fork of Ethereum and if you had any tokens on the Ethereum network prior to May 10th 2023, you have FREE copies of your tokens on the Pulsechain network. If you did not hold any tokens before that you can skip this step.
</div>
<a href="/prc20" alt="How to Claim Free Forked ERC20 Copies" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC4} caption="Claim Free Forked ERC20 Copies" /></a>
<div className="content">
<span className="bold">Step 4: How to Buy Pulsechain</span>
</div>
<a href="/change-now" alt="How to buy Pulsechain" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC5} caption="How to Buy Pulsechain Now" /></a>
<div className="content">
<span className="bold">Step 5: Buy/Sell Tokens on PulseX</span>
</div>
<a href="/plsx" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC3} caption="Guide: How to swap tokens on Pulsechain" /></a>

      </div>
    </div>
  );
}

export default FiveSteps;