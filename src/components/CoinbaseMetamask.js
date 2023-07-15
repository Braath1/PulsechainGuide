import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC11 from '../images/cb11.png';
import PIC17 from '../images/cb17.png';
import PIC25 from '../images/cb25.png';
import PIC26 from '../images/cb26.png';
import PIC27 from '../images/cb27.png';
import PIC28 from '../images/cb28.png';
import PIC29 from '../images/cb29.png';
import PIC30 from '../images/cb30.png';
import PIC31 from '../images/cb31.png';
import PIC32 from '../images/cb32.png';
import PIC33 from '../images/cb33.png';
import PIC34 from '../images/cb34.png';
import PIC35 from '../images/cb35.png';
import PIC36 from '../images/cb36.png';
import PIC37 from '../images/cb37.png';
import PIC38 from '../images/cb38.png';
import PIC39 from '../images/cb39.png';
import PIC40 from '../images/cb40.png';
import PIC41 from '../images/cb41.png';
import PIC42 from '../images/cb42.png';
import PIC44 from '../images/cb44.png';
import PIC53 from '../images/cb53.png';
import './CoinbaseMetamask.css'; // Import the CSS file for the component

const CoinbaseMetamask = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>Step-by-Step Guide on How to Send Tokens From Coinbase to Metamask:</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Step 1: Visit the Coinbase Website</span> Open your web browser and visit the Coinbase website at <a href="https://www.coinbase.com/" target="_blank" rel="noreferrer noopener">www.coinbase.com and login.</a>
</div>
<a href="/coinbase"><button className="btn">How to Setup Coinbase</button></a>
<div className="content">
<span className="bold">Step 2: How to send tokens</span> 1) Click on Send & Receive on the top right. 2) Make sure the tab says Send on the pop up. Then click on the drop down next to Bitcoin to choose tokens to send. 3) Select Ethereum by clicking it or type ETH into the input field.
</div>

<div className="polaroid">
<Polaroid imageSrc={PIC11} caption="Click on Send & Receive" />
<Polaroid imageSrc={PIC25} caption="Click on drop down next to Bitcoin" />
<Polaroid imageSrc={PIC26} caption="Click on Ethereum or type in ETH in input field" />
</div>
<div className="content">
<span className="bold">Step 2: How to get address to send to</span> After choosing the token to send you have to insert the amount of the token (Ethereum) you want to send. Then you need the address to send the tokens to. 1) Insert amount of token to send and find address to send to. 2) Click on the fox icon. 3) Insert Metamask password and login.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC27} caption="Insert token amount to send and find address to send to" />
<Polaroid imageSrc={PIC28} caption="Click fox icon on top right" />
<Polaroid imageSrc={PIC29} caption="Login to Metamask" />
</div>
<div className="content">
<span className="bold">Step 3: Copy address & send</span> 1) Copy your Metamask address or the address you want to send to from Coinbase. 2) Paste in the copied address into the To field in Coinbase and click Continue. 3) Review the transaction and make sure you have inserted the right address to send to and the amount of token to send. Click Send now.
</div>
<div className="content warning">
<span className="bold">Important!</span> Do NOT send Bitcoin or any other tokens than Ethereum or tokens on the Ethereum network to Metamask! If you do you will loose your funds. Metamask is an Ethereum wallet and you can only send tokens on the Ethereum network to Metamask. Here`s a list of the tokens you can send <a href="https://www.coinlore.com/token-types/erc20/all" target="_blank" rel="noreferrer noopener">coinlore.com/token-types/erc20/all.</a>
</div>
<br />
<div className="polaroid">
<Polaroid imageSrc={PIC30} caption="Copy address to send to" />
<Polaroid imageSrc={PIC31} caption="Paste in copied address & click Continue" />
<Polaroid imageSrc={PIC32} caption="Review amount and address & click Send now" />
</div>
<div className="content">
<span className="bold">Step 4: 2FA & Receipt</span> 1) Insert code from your Google Authenticator app. 2) Click Done or View transaction. You have now sent a transaction from Coinbase to Metamask!
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC33} caption="Click Get Started" />
<Polaroid imageSrc={PIC34} caption="Click Get Started" />
</div>
<br />
<h2>How to Receive Transactions On Coinbase from Metamask</h2>
<div className="content">
<span className="bold">Step 5: How to receive transactions</span> 1) On Coinbase click Send & Receive button on top right 2) Click Receive tab on top of pop up. 3) Click drop down next to Bitcoin.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC11} caption="Click Send & Receive" />
<Polaroid imageSrc={PIC35} caption="Click Receive" />
<Polaroid imageSrc={PIC36} caption="Click drop down next to Bitcoin" />
</div>
<div className="content">
<span className="bold">Step 6: How to send tokens</span> 1) Click on the token you would like to send or input token name in input field. 2) Read message carefully and click Got it. 3) Copy the token address. This is the address from Coinbase that you are going to paste in Metamask. This is the address that you are going to send tokens to. 
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC37} caption="Click the token to send or type in token name in input field" />
<Polaroid imageSrc={PIC38} caption="Read message & click Got it" />
<Polaroid imageSrc={PIC39} caption="Copy the address" />
</div>
<div className="content">
<span className="bold">Step 7: Send tokens from Metamask to Coinbase</span> 1) In Metamask click Send. 2) In the Send to field paste in the address you copied from Coinbase. You are now going to transfer tokens from Metamask to the Coinbase exchange. 3) Insert amount of tokens to send and click Next.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC40} caption="Click Send" />
<Polaroid imageSrc={PIC41} caption="Paste in address from Coinbase" />
<Polaroid imageSrc={PIC42} caption="Insert token amount & click Next" />
</div>
<div className="content">
<span className="bold">Step 8: Confirm & Receive tokens</span> 1) Click Confirm to Send the tokens from Metamask to Coinbase. 2) I fyou look at picture 1 you can see that the cost to send a token on Ethereum on 07.14.2023 was estimated to be $1.77. On Pulsechain it only cost $0.009 to send  token! You can see the gas price on Pulsechain here <a href="https://gopulse.com/gas" target="_blank" rel="noreferrer noopener">gopulse.com/gas.</a> 3) Go back to the Coinbase website and click on My assets to see your received tokens.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC44} caption="Click Confirm" />
<Polaroid imageSrc={PIC53} caption="Compare prices" />
<Polaroid imageSrc={PIC17} caption="Click My assets in Coinbase" />
</div>
<h4>Click button below to learn how you can easily swap one token for another in Metamask</h4>
<a href="/metamask-swap"><button className="btn">How to Swap on Metamask</button></a>
    </div>
    </div>
  );
}

export default CoinbaseMetamask;