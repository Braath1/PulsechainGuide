import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/prc201.png';
import PIC2 from '../images/prc202.png';
import PIC3 from '../images/prc203.png';
import PIC4 from '../images/prc204.png';
import PIC13 from '../images/plsx13.png';
import PIC15 from '../images/plsx15.png';
import PIC16 from '../images/plsx16.png';
import PIC17 from '../images/plsx17.png';
import PIC18 from '../images/plsx18.png';
import PIC19 from '../images/plsx19.png';
import PIC21 from '../images/plsx21.png';
import PIC22 from '../images/plsx22.png';
import PIC23 from '../images/plsx23.png';
import PIC24 from '../images/plsx24.png';
import PIC25 from '../images/plsx25.png';
import PIC26 from '../images/plsx26.png';

import './Prc20.css'; // Import the CSS file for the component

const Prc20 = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>How to claim PRC20 tokens:</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Have you added Pulsechain to Metamask yet?</span> If not check this guide on how to easily import Pulsechain network into your Metamask wallet.
</div>
<a href="/add-pulsechain"><button className="btn">How to add Pulsechain network</button></a>
<div className="content">
 If you have already added the Pulsechain network to your wallet continue below.
</div>
<div className="content">
<span className="bold">Step 1: Visit the Pulsechain Website</span> Go to the official Pulsechain website at <a href="https://pulsechain.com/" target="_blank" rel="noreferrer noopener">pulsechain.com</a>
</div>
<div className="content">
<span className="bold">Step 2: Search for prc20 tokens</span> Once on the pulsechain website click on explorer to be taken to the Beacon block explorer. 2) At the top in the middle click on Sacrifice Checker. 3) Click on the PRC20 Token Scanner tab just below.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC} caption="Click Explorer" />
<Polaroid imageSrc={PIC2} caption="Click Sacrifice Checker" />
<Polaroid imageSrc={PIC3} caption="Connect Metamask & click PRC20 Token Scanner" />
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC4} caption="Click Scan to search wallet for PRC20 tokens" />
<a href="/plsx"><button className="btn move">How to Swap tokens</button></a>
</div>
<br />
<h2>How to add PRC20 manually:</h2>
<div className="content">
<span className="bold">Step 1: Visit the PulseX Website</span> Go to the official PulseX website at <a href="https://app.pulsex.com/swap" target="_blank" rel="noreferrer noopener">app.pulsex.com/swap</a> 
</div>
<div className="content">
<span className="bold"> Check your tokens in the Pulsechain block explorer</span> The most reliable source is to check the Pulsechain block explorer where all transactions on the blockchain is recorded. 1) Click the three dots on top of the page. 2) Insert the token name or the token contract address. Here we type in PLSX and all the tokens and pools with that token shows up. Click on the PLSX token. 3) Click on View on Pulsescan to be redirected to the Pulsechain block explorer.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC21} caption="Click the three dots" />
<Polaroid imageSrc={PIC22} caption="Insert token name or contract address, then click on the icon" />
<Polaroid imageSrc={PIC23} caption="Click view on Pulsescan" />
</div>
<div className="content">
<span className="bold">Step 2: View address or contract on Pulsescan</span> 1) Insert your Metamask wallet address to see all tokens and transactions ever made on your address. You can insert any address or token contract address. 2) Click where it says tokens to see all the tokens in the address. Here is an example from the PLSX contract address. 3) Click the transactions tab to see all the transactions. If you are new this it`s often overwhelming so don`t worry, you do not need to understand everything. Just know where to find info on the blockchain. If you would like to learn more about this topic Youtube is a good resource. Here is a great video from CRYPTOGRAFX that explain more<br /><a href="https://www.youtube.com/watch?v=WEmJ12s5HOs">Youtube video: How to Import Tokens on PULSECHAIN into your wallet</a>
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC24} caption="Insert your Metamask wallet address" />
<Polaroid imageSrc={PIC25} caption="See all tokens in the provided address" />
<Polaroid imageSrc={PIC26} caption="Click transactions to see all the transactions" />
</div>
<div className="content">
<span className="bold">Step 3: How to find contract addresses</span> Pulsechain is a fork of the Ethereum network. All the tokens on Ethereum are also on Pulsechain. 1) If you want to find Ethereum tokens to look up on Pulsechain, you can for example go to <a href="https://coinpaprika.com/" target="_blank" rel="noreferrer noopener">coinpaprika.com</a> to find their token addresses. In this example we search for the token PEPE, and click on the PEPE picture to see that token in more detail. Note that the value are different on Ethereum and Pulsechain so be cautious before you buy any tokens. 2) Click on copy to copy the PEPE token address. 3) Go back to PulseX where you can swap, then click on the drop down next to the token, for example PLS and insert the token address you copied.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC13} caption="Insert token name top right, then click on the image of the token" />
<Polaroid imageSrc={PIC19} caption="Click copy address" />
<Polaroid imageSrc={PIC15} caption="Paste address into PulseX swap" />
</div>
<div className="content">
<span className="bold">Step 4: Import token</span> 1) Click import token to import PEPE. This is the copied version from Ethereum on Pulsechain, not the PEPE on Ethereum. If you want to get the PEPE that is on the Ethereum network then read the guide below on How to bridge tokens from Ethereum to Pulsechain. 2) Click I understand and then click Import. 3) Now you can see that PEPE token is imported into Pulsechain. If you want to see the $ value of the token, then just choose DAI from Ethereum for the token below and insert 1 PEPE token. Now you see the $ value of 1 PEPE on Pulsechain ($0.0000000380888 vs. $0.00000151 on Ethereum from coinpaprika.com).
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC16} caption="Click Import" />
<Polaroid imageSrc={PIC17} caption="Click I understand then click Import" />
<Polaroid imageSrc={PIC18} caption="See the $ value of imported token" />
</div>

<div className="content">
<span className="bold">Disclaimer:</span>
The information provided here is for informational purposes only and should not be considered financial or investment advice. Cryptocurrency transactions involve risks, and individuals should conduct their own research and exercise caution when using cryptocurrency exchange platforms.
</div>
<a href="/bridge"><button className="btn">How to Bridge tokens</button></a>
      </div>
    </div>
  );
}

export default Prc20;