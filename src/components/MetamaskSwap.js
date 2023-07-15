import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC29 from '../images/cb29.png';
import PIC45 from '../images/cb45.png';
import PIC46 from '../images/cb46.png';
import PIC47 from '../images/cb47.png';
import PIC48 from '../images/cb48.png';
import PIC49 from '../images/cb49.png';
import PIC50 from '../images/cb50.png';
import PIC51 from '../images/cb51.png';
import PIC52 from '../images/cb52.png';
import './MetamaskSwap.css'; // Import the CSS file for the component

const MetamaskSwap = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>Step-by-Step Guide on How to Swap Tokens On Metamask:</h2>
        {/* Rest of the content */}
        <h4>If you have not installed Metamask then click the button below or continue to step 1</h4>
        <a href="/metamask"><button className="btn">How to Install Metamask</button></a>
<div className="content">
<span className="bold">Step 1: How to swap tokens</span> 1) Click fox icon on top right of screen to open the Metamask wallet. Insert password & click Unlock. 2) Click on swap. 3) The token on top is the token that you are going to swap from. Click on the drop down menu next to the token name on the bottom token. This is the token that you are going to swap to. 
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC29} caption="Insert password & click Unlock" />
<Polaroid imageSrc={PIC45} caption="Click Swap" />
<Polaroid imageSrc={PIC46} caption="Click on drop down menu next to token" />
</div>
<div className="content">
<span className="bold">Step 2: Choose token to swap to</span> 1) In this example we are swaping from Ethereum token to HEX token. Insert HEX in the input field or click on the HEX token. 2) Insert amount of ETH to swap and click Swap. 3) Wait for transaction to go through and click Close. This can take up to 10 minutes but usualy go much quicker.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC47} caption="Click on token to swap or input token name" />
<Polaroid imageSrc={PIC48} caption="Insert amount of ETH to swap & click Swap" />
<Polaroid imageSrc={PIC49} caption="Click Close once transaction is finished" />
</div>
<div className="content">
<span className="bold">Step 3: Check transaction & tokens</span> 1) In the activity tab you can see that the swap has gone through. 2) Click on the tokens tab. 3) Verify that the HEX tokens are in your wallet!
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC50} caption="Transaction went through" />
<Polaroid imageSrc={PIC51} caption="Click on Tokens" />
<Polaroid imageSrc={PIC52} caption="Verify that tokens are in your wallet" />
</div>
<div className="content">
<span className="bold">Next you can bridge tokens to Pulsechain</span>
</div>
<a href="/bridge"><button className="btn">Bridge tokens to Pulsechain</button></a>
    </div>
    </div>
  );
}

export default MetamaskSwap;