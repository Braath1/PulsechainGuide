import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/plsx.png';
import PIC2 from '../images/plsx3.png';
import PIC3 from '../images/plsx2.png';
import PIC4 from '../images/plsx4.png';
import PIC5 from '../images/plsx5.png';
import PIC7 from '../images/plsx7.png';
import PIC8 from '../images/plsx8.png';
import PIC9 from '../images/plsx9.png';
import PIC11 from '../images/plsx11.png';
import PIC12 from '../images/plsx12.png';
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
import './Plsx.css'; // Import the CSS file for the component

const Plsx = () => {
  return (
    <div className="metamask-container">
      <Navbar />

      <div className="metamask-content">
      <h2>Step-by-Step Guide on How to swap tokens on PulseX</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Step 1: Visit the PulseX Website</span> Go to the official PulseX website at <a href="https://app.pulsex.com/swap" target="_blank" rel="noreferrer noopener">app.pulsex.com/swap</a> 
</div>
<div className="content">
<span className="bold">Step 2: Select the Cryptocurrency to swap/exchange</span> Just like on currency exchanges you can exchange one currency for another, for instance you can exchange USD for EUR. In crypto this is called a swap and here you can swap Pulsechain (PLS) for PLSX. PLSX is the exchange on the Pulsechain network, so if you own PLSX you own a part of the exchange.
</div>
<img className="guide" src={PIC} alt="Buy Crypto Changenow.io" />
<div className="content">
<span className="bold">Step 3: Choose tokens to swap & insert amount</span> 1) The token on top is the token you swap from (PLS). The token at the bottom is the token you swap to (PLSX). Click on drop down menu where you see PLS. If you want to swap other tokens search for them in the input field. 2) Insert the amount of tokens you would like to swap 3) Then click the green Swap button to make the swap.
<div className="polaroid">
<Polaroid imageSrc={PIC2} caption="Choose what token to swap" />
<Polaroid imageSrc={PIC3} caption="Insert amount of tokens to swap" />
<Polaroid imageSrc={PIC4} caption="Click Swap" />
</div>
</div>
<div className="content">
<span className="bold">Step 4: Confirm swap</span> 1) Click Add PLSX to Metamask to add the token to your Metamask wallet. 2) Click Confirm Swap. 3) The Metamask windows open up, just scroll down to the bottom and click Confirm.
</div>
<div className="polaroid">
<a href="/metamask" target="_blank" rel="noreferrer noopener">
<Polaroid imageSrc={PIC7} caption="Click Add PLSX to Metamask" /></a>
<Polaroid imageSrc={PIC5} caption="Click Confirm" />
<Polaroid imageSrc={PIC11} caption="Scroll down and click confirm in Metamask" />
</div>
<div className="content">
<span className="bold">Step 5: Confirm that tokens are received</span> 1) You can also add it by clicking the Metamask icon in the swap next to the token name. 2) Click the fox icon to open up Metamask and click the Tokens tab. Here you can see all the tokens that are listed in your wallet. 3) Confirm that the PLSX tokens are in your wallet.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC8} caption="Another way to add token to Metamask" />
<Polaroid imageSrc={PIC12} caption="Click tokens to see your PLSX tokens" />
<Polaroid imageSrc={PIC9} caption="Here you can see the PLSX tokens" />
</div>
<div className="content">
<span className="bold">Step 6: Check your tokens in the Pulsechain block explorer</span> The most reliable source is to check the Pulsechain block explorer where all transactions on the blockchain is recorded. 1) Click the three dots on top of the page. 2) Insert the token name or the token contract address. Here we type in PLSX and all the tokens and pools with that token shows up. Click on the PLSX token. 3) Click on View on Pulsescan to be redirected to the Pulsechain block explorer.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC21} caption="Click the three dots" />
<Polaroid imageSrc={PIC22} caption="Insert token name or contract address, then click on the icon" />
<Polaroid imageSrc={PIC23} caption="Click view on Pulsescan" />
</div>
<div className="content">
<span className="bold">Step 7: View address or contract on Pulsescan</span> 1) Insert your Metamask wallet address to see all tokens and transactions ever made on your address. You can insert any address or token contract address. 2) Click where it says tokens to see all the tokens in the address. Here is an example from the PLSX contract address. 3) Click the transactions tab to see all the transactions. If you are new this it`s often overwhelming so don`t worry, you do not need to understand everything. Just know where to find info on the blockchain. If you would like to learn more about this topic Youtube is a good resource. Here is a great video from CRYPTOGRAFX that explain more<br /><a href="https://www.youtube.com/watch?v=WEmJ12s5HOs">Youtube video: How to Import Tokens on PULSECHAIN into your wallet</a>
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC24} caption="Insert your Metamask wallet address" />
<Polaroid imageSrc={PIC25} caption="See all tokens in the provided address" />
<Polaroid imageSrc={PIC26} caption="Click transactions to see all the transactions" />
</div>
<div className="content">
<span className="bold">Step 8: How to find contract addresses</span> Pulsechain is a fork of the Ethereum network. All the tokens on Ethereum are also on Pulsechain. 1) If you want to find Ethereum tokens to look up on Pulsechain, you can for example go to <a href="https://coinpaprika.com/" target="_blank" rel="noreferrer noopener">coinpaprika.com</a> to find their token addresses. In this example we search for the token PEPE, and click on the PEPE picture to see that token in more detail. Note that the value are different on Ethereum and Pulsechain so be cautious before you buy any tokens. 2) Click on copy to copy the PEPE token address. 3) Go back to PulseX where you can swap, then click on the drop down next to the token, for example PLS and insert the token address you copied.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC13} caption="Insert token name top right, then click on the image of the token" />
<Polaroid imageSrc={PIC19} caption="Click copy address" />
<Polaroid imageSrc={PIC15} caption="Paste address into PulseX swap" />
</div>
<div className="content">
<span className="bold">Step 9: Import token</span> 1) Click import token to import PEPE. This is the copied version from Ethereum on Pulsechain, not the PEPE on Ethereum. If you want to get the PEPE that is on the Ethereum network then read the guide below on How to bridge tokens from Ethereum to Pulsechain. 2) Click I understand and then click Import. 3) Now you can see that PEPE token is imported into Pulsechain. If you want to see the $ value of the token, then just choose DAI from Ethereum for the token below and insert 1 PEPE token. Now you see the $ value of 1 PEPE on Pulsechain ($0.0000000380888 vs. $0.00000151 on Ethereum from coinpaprika.com).
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

export default Plsx;