import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/bridge2.png';
import PIC2 from '../images/bridge3.png';
import PIC3 from '../images/bridge4.png';
import PIC4 from '../images/bridge5.png';
import PIC5 from '../images/bridge6.png';
import PIC6 from '../images/bridge8.png';
import PIC7 from '../images/bridge12.png';
import PIC8 from '../images/bridge13.png';
import PIC9 from '../images/bridge10.png';
import PIC10 from '../images/bridge14.png';
import PIC11 from '../images/bridge15.png';
import PIC12 from '../images/bridge16.png';
import PIC13 from '../images/bridge17.png';
import PIC14 from '../images/bridge18.png';
import PIC15 from '../images/bridge19.png';
import PIC16 from '../images/bridge20.png';
import PIC17 from '../images/bridge21.png';
import PIC18 from '../images/bridge22.png';
import PIC19 from '../images/bridge26.png';
import PIC20 from '../images/bridge27.png';
import PIC21 from '../images/bridge28.png';
import PIC22 from '../images/bridge29.png';
import PIC23 from '../images/bridge30.png';
import PIC24 from '../images/bridge31.png';
import PIC25 from '../images/bridge32.png';
import PIC26 from '../images/bridge33.png';
import PIC27 from '../images/bridge34.png';
import PIC28 from '../images/bridge35.png';
import './Bridge.css'; // Import the CSS file for the component

const BridgeTokens = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>Step-by-Step Guide on How to use Pulsechain bridge:</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Step 1: Visit the Pulsechain website</span> Go to the official Pulsechain website by entering <a href="https://pulsechain.com/" target="_blank" rel="noreferrer noopener">pulsechain.com</a> in the address bar and pressing Enter.
</div>
<div className="content">
<span className="bold">Step 2: Access the Pulsechain bridge</span> 1) Click the bridge link. Only use the link and bridge on the official pulsechain.com website, there`s a lot of scams and phishing websites out there. 2) Click connect to connect your Metamask wallet to the Pulsechain Bridge. 3) Click on the Metamask image.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC} caption="Click Bridge link" />
<Polaroid imageSrc={PIC2} caption="Click Connect Wallet" />
<Polaroid imageSrc={PIC3} caption="Click Metamask" />
</div>
<div className="content">
<span className="bold">Step 3: Connect Metamask wallet to Pulsechain Bridge and choose direction</span> 1) Click Next. 2) Click Connect. 3) Click the purple arrows in the middle to switch to bridge from Ethereum network to the Pulsechain network.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC4} caption="Click Next to Connect Wallet" />
<Polaroid imageSrc={PIC5} caption="Click Connect" />
<Polaroid imageSrc={PIC6} caption="Click purple arrows, then click Switch network" />
</div>
<div className="content">
<span className="bold">Step 4: Choose tokens to bridge</span> Click on drop down menu next to the token ticker (PLS). To bridge assets from Ethereum to Pulsechain takes about 30 minutes. 2) Insert token name or click on the token you would like to bridge over to Pulsechain from Ethereum. 2) Insert the amount of tokens you would like to send. 3) Click confirm to bridge tokens
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC7} caption="Make sure it`s from Ethereum at top, click drop down to choose token" />
<Polaroid imageSrc={PIC8} caption="Input token and click on the token you want to bridge over" />
<Polaroid imageSrc={PIC9} caption="Input the amount of token to bridge" />
</div>
<div className="content">
<span className="bold">Step 5: Wait for Confirmation</span> 1) Click Send. 2) Click Authorize Bridge to send tokens, 3) Insert amount of tokens the contract is allowed to spend on your behalf. Click on max if you are okay with the amount of tokens or type in your desired amount.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC10} caption="Click Send" />
<Polaroid imageSrc={PIC11} caption="Click Authorize Bridge button" />
<Polaroid imageSrc={PIC12} caption="Input the amount of token to bridge" />
</div>
<div className="content">
<span className="bold">Step 5: Approve & Send tokens</span> 1) Click Accept. 2) Click Approve. 3) Click Send to bridge tokens.
After the required confirmations on the source network, the crypto bridge will transfer your tokens to the target network. You should receive the bridged tokens in your wallet on the target network. The time it takes to complete the bridging process can vary but usualy is in your wallet within 30 minutes.
<div className="polaroid">
<Polaroid imageSrc={PIC13} caption="Click Send" />
<Polaroid imageSrc={PIC14} caption="Click Approve" />
<Polaroid imageSrc={PIC15} caption="Click Send" />
</div>
</div>
<div className="content">
<span className="bold">Step 6: Manage Bridged Tokens</span> 1) Click Send. 2) Close window. 3) Click on Transactions at the top of the bridge website. We will now check if the transaction has arrived from the Ethereum network.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC16} caption="Click Approve" />
<Polaroid imageSrc={PIC17} caption="Close window" />
<Polaroid imageSrc={PIC18} caption="Click Transactions" />
</div>
<div className="content">
<span className="bold">Step 7: Check transaction</span> 1) This is the transaction hash from the sending transaction from Pulsechain. If you can not see the receiving transaction, then the tokens are not bridged over yet. 2) Click on receiving transaction. When you see this address the tokens are bridged over to Pulsechain. 3) Click the fox icon and Add token button to add the HEX token from Ethereum to your Metamask wallet. You can now use this token on Pulsechain.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC19} caption="Info: This is the sending transaction" />
<Polaroid imageSrc={PIC20} caption="Click Receiving transaction address link" />
<Polaroid imageSrc={PIC28} caption="Click fox icon and Add Token to Metamask" />
</div>
<div className="content">
<span className="bold">Info: How to add token manually</span> 1) After clicking the receiving transaction link you will be taken to the pulsechain block explorer. Locate the amount of tokens that you bridged and click on the token name next to the amount. 2) Copy the token address on top. This is the token address from the bridged in token from Ethereum. This is a different address than the same asset on Pulsechain. For every token on Ethereum made before May 10th 2023, there is copy of that token on Pulsechain but with a different token address. 3) Go back to PulseX exchange, click on drop down menu next to token and paste in the address you copied
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC21} caption="Click on token name" />
<Polaroid imageSrc={PIC22} caption="Copy the token address" />
<Polaroid imageSrc={PIC23} caption="Input the token address in PulseX exchange" />
</div>
<div className="content">
<span className="bold">Add token to Metamask wallet</span> 1) Click fox icon and open your Metamask wallet, click on tokens and scroll down til you see an import tokens link and click it. 2) Paste in the token address you copied from the bridged token from Ethereum. Click Add Custom Token. 3) Click Import Token.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC24} caption="Click Import tokens" />
<Polaroid imageSrc={PIC25} caption="Paste in copied address & click Add Custom Token" />
<Polaroid imageSrc={PIC26} caption="Click Import Token" />
</div>
<div className="content">
<span className="bold">See your bridged in token</span> If you look at the tokens list in PulseX exchange you can now see your bridged in tokens and the amount of tokens you hold.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC27} caption="Your bridged in tokens from Ethereum now on Pulsechain!" />
</div>
<div className="content">
<span className="bold">Disclaimer:</span> Always refer to the official documentation, guides, or tutorials provided by the crypto bridge platform for detailed instructions on how to use their particular service. Additionally, be mindful of a 0.3% fee for using the bridge as well as the transaction costs to send from the Ethereum network which is much more expensive than the <a href="https://gopulse.com/gas" target="_blank" rel="noreferrer noopener">gas on the Pulsechain network</a>, ensure that you have a clear understanding of the risks involved, and double-check all transaction details before proceeding with any token transfers. 
</div>
      </div>
    </div>
  );
}

export default BridgeTokens