import PIC32 from '../images/trezor33.jpg';
import PIC33 from '../images/trezor34.jpg';
import PIC34 from '../images/trezor35.jpg';
import PIC35 from '../images/trezor36.png';
import PIC36 from '../images/trezor37.jpg';
import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC68 from '../images/trezor69.jpg';
import PIC69 from '../images/trezor70.png';
import PIC70 from '../images/mmicon.png';
import PIC71 from '../images/trezor71.png';
import PIC72 from '../images/trezor72.png';
import './ConnectTrezor.css'; // Import the CSS file for the component

const ConnectTrezor = () => {
    return (
      <div className="metamask-container">
        <Navbar />
        <div className="metamask-content">
        <h2>How to Connect Trezor Hardware Wallet to Metamask:</h2>
          {/* Rest of the content */}
  
  <div className="content">
  <span className="bold">Step 1: Log in to Metamask</span> 1) Click the fox icon. 2) Enter password. 3) Click on account on top in Metamask.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC70} caption="Click fox icon" />
<Polaroid imageSrc={PIC68} caption="Enter password & click Unlock" />
<Polaroid imageSrc={PIC71} caption="Click on Account" />
</div>
<div className="content">
  <span className="bold">Step 2: Add Trezor hardware wallet</span> 1) Click Hardware wallet. 2) Click on Trezor then click Continue. 3) Your Trezor window pops up, click continue and plug in your Trezor to your computer.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC72} caption="Click Hardware wallet" />
<Polaroid imageSrc={PIC69} caption="Click on Trezor & click Continue" />
<Polaroid imageSrc={PIC32} caption="Click Continue" />
</div>
<div className="content">
  <span className="bold">Step 3: Select wallet to import</span> 1) Click Export. 2) Click on Hidden wallet if you have a passphrase, else click Standard wallet. 3) Select account 1 and click continue.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC33} caption="Click Export" />
<Polaroid imageSrc={PIC34} caption="Click Hidden wallet if you have passphrase or Standard wallet" />
<Polaroid imageSrc={PIC35} caption="Select account1 & Click Continue" />
</div>
<div className="polaroid">
<div className="content">
  <span className="bold">Congrats! Your Trezor hardware wallet is now connected to Metamask</span> You have now connected your Trezor wallet to Metamask. Your seeds with your tokens and value are in your Trezor. You have connected to a Metamask account with different seed words that do not hold any tokens or value (unless you send tokens to the addresses in the Metamask account). You should only send tokens to the Trezor address you see in Metamask. You are more secure than the average crypto user!
  </div>
<Polaroid imageSrc={PIC36} caption="Trezor is connected to Metamask" />
</div>
<a href="/metamask"><button className="btn">Back to Metamask guide</button></a>
<a href="/trezor-tx"><button className="btn">Transactions With Trezor</button></a> 

        </div>
      </div>
    );
  }
  
  export default ConnectTrezor;

