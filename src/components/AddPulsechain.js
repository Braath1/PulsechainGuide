import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/pls.png';
import PIC2 from '../images/pls2.png';
import PIC3 from '../images/pls3.png';
import PIC4 from '../images/pls4.png';
import PIC5 from '../images/pls6.png';
import PIC6 from '../images/pls7.png';
import PIC7 from '../images/pls8.png';
import PIC8 from '../images/pls9.png';
import PIC9 from '../images/pls10.png';
import PIC10 from '../images/pls11.png';
import './AddPulsechain.css'; // Import the CSS file for the component

const AddPulsechain = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>Step-by-Step Guide on How to add Pulsechain to Metamask:</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Step 1: Open your web browser</span> Launch your preferred web browser (such as Chrome, Firefox).
</div>
<div className="content">
<span className="bold">Step 2: Visit the Pulsechain website</span> Go to the official Pulsechain website by entering <a href="https://pulsechain.com/" target="_blank" rel="noreferrer noopener">pulsechain.com</a> in the address bar and pressing Enter.
</div>
<div className="content">
<span className="bold">Step 3: Click Add to Pulsechain button</span>  Click the "Add Pulsechain to Metamask" button to add the Pulsechain network to Metamask.
<div className="content">
<span className="bold">Step 4: Click Approve</span>  Approve the Pulsechain network to be added to your Metamask wallet
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC} caption="Click Add Pulsechain to Metamask button" />
<Polaroid imageSrc={PIC2} caption="Click Approve" />
</div>
</div>
<div className="content">
<span className="bold">Step 5: Click Switch Network button</span> Click the allow button to allow the Metamask wallet to switch to the Pulsechain network
</div>
<div className="content">
<span className="bold">Step 6: Congrats! You are now connected to Pulsechain</span> You are now connected to the Pulsechain network. It is that easy!<br />
<div className="polaroid">
<Polaroid imageSrc={PIC3} caption="Click fox icon to open Metamask" />
<Polaroid imageSrc={PIC4} caption="Click get started button" />
</div>
</div>
<div className="content">
<span className="bold">Step 7: Buy Pulsechain token</span> Click the button below to see a guide on how to buy Pulsechain token
<a href="/change-now"><button className="btn">How to buy Pulsechain token</button></a>
<span className="bold"><br />
<br />
Having troubles adding Pulsechain to Metamask?</span> If you experience any troubles when trying to add the Pulsechain network to your Metamask wallet, you can try to add the network manually.
</div>
<div className="content">
<span className="bold">Step 1: Click fox icon</span> Click the fox icon on top right of your screen to open your Metamask wallet
<div className="polaroid">
</div>
<div className="content">
<span className="bold">Step 2: Click network tab</span> Click the network tab on the top left in your Metamask wallet
</div>
<Polaroid imageSrc={PIC5} caption="Click fox icon to open Metamask" />
<Polaroid imageSrc={PIC4} caption="Click the networks tab" />
</div>
<div className="content">
<span className="bold">Step 3: Click Add Network</span> Click the "Add Network" button
</div>
<div className="content">
<span className="bold">Step 4: Click Add a network manually</span> Click the "Add a network manually" link
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC6} caption="Click the networks tab" />
<Polaroid imageSrc={PIC7} caption="Click Add a network manually" />
</div>
<div className="content">
<span className="bold">Step 5: Go to pulsechain.com website</span> Copy the network information on the Pulsechain website
</div>
<div className="content">
<span className="bold">Step 6: Paste the Pulschain network manually</span> Paste the exact same information you copied from Pulsechain website into Metamask and click save
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC8} caption="Copy network info from pulsechain.com" />
<Polaroid imageSrc={PIC9} caption="Paste in network info in Metamask & click save" />
</div>
<div className="content">
<span className="bold">Congrats! Pulsechain network is added to Metamask</span> You can now see that Pulsechain network is added to your Metamask wallet
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC10} caption="Pulsechain is added to Metamask wallet" />
</div>
<a href="/change-now"><button className="btn btn-move">How to buy Pulsechain token</button></a>
      </div>
    </div>
  );
}

export default AddPulsechain;
