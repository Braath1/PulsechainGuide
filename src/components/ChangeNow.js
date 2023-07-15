import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/plsbuy.png';
import PIC2 from '../images/plsbuy2.png';
import PIC3 from '../images/plsbuy3.png';
import PIC4 from '../images/plsbuy4.png';
import PIC5 from '../images/plsbuy6.png';
import PIC6 from '../images/plsbuy7.png';
import PIC7 from '../images/installMM.png';
import PIC8 from '../images/plsbuy8.png';
import PIC9 from '../images/plsbuy9.png';
import PIC10 from '../images/plsbuy10.png';
import PIC11 from '../images/plsbuy11.png';
import PIC12 from '../images/plsbuy12.png';
import PIC13 from '../images/plsbuy13.png';
import PIC14 from '../images/plsbuy14.png';
import './ChangeNow.css'; // Import the CSS file for the component

const ChangeNow = () => {
  return (
    <div className="metamask-container">
      <Navbar />

      <div className="metamask-content">
      <h2>Step-by-Step Guide on How to buy Pulsechain Token (PLS) using ChangeNOW.io</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Step 1: Visit the ChangeNOW Website</span> Go to the official ChangeNOW website at <a href="https://changenow.app.link/referral?link_id=12ce65be3c6001" target="_blank" rel="noreferrer noopener">www.changenow.io.</a> This is an affiliate link. This means if you click on the link and purchase crypto, I will receive an affiliate commission at no extra cost to you. 
</div>
<div className="content">
<span className="bold">Step 2: Select the Cryptocurrency to Exchange or click Buy/Sell crypto if you want to buy directly using a credit card like VISA</span>, or select the cryptocurrency you want to exchange for Pulsechain Token (PLS). For example, if you have Bitcoin (BTC), select BTC as the "You Send" currency.
<img className="guide" src={PIC} alt="Buy Crypto Changenow.io" />
</div>
<div className="content">
<span className="bold">Step 3: Choose PLS as the Destination Currency</span> 1) Click on drop down menu where you see Bitcoin. 2) Type in "PLS". Double-check the symbol (PLS) to ensure accuracy. 3) Then click the green Buy button.
<div className="polaroid">
<Polaroid imageSrc={PIC2} caption="Click on drop down menu" />
<Polaroid imageSrc={PIC3} caption="Type in PLS" />
<Polaroid imageSrc={PIC4} caption="Click Buy" />
</div>
</div>
<div className="content">
<span className="bold">Step 4: Enter the Receiving Address</span> 1) If you do not have Metamask installed click the picture below for an easy setup guide. 2) Go to your Metamask wallet and copy your address. 3) Paste in the receiving address you just copied from your Metamask wallet. This is the wallet address where you want to receive the purchased PLS tokens. Make sure all the information is accurate before proceeding.
</div>
<div className="polaroid">
<a href="/metamask" target="_blank" rel="noreferrer noopener"><Polaroid imageSrc={PIC7} caption="Easy guide to install Metamask" /></a>
<Polaroid imageSrc={PIC5} caption="Copy address Metamask" />
<Polaroid imageSrc={PIC6} caption="Paste address from Metamask & click next" />
</div>
<div className="content">
<span className="bold">Step 5: Create an Account (if Required)</span> If you're a new user, you may need to create an account on ChangeNOW. Follow the instructions provided to set up your account. This includes KYC where you will have to prove your identity. Existing users can log in using their credentials.
</div>
<div className="content">
<span className="bold">Step 6: Confirm Payment</span> 1) Agree to the terms and click confirm that you want to buy Pulsechain (PLS). 2) Choose your prefered payment method and click Continue. 3) Insert your card details and click Pay. If you are exchanging cryptocurrencies, follow the instructions to send the specified amount of the sending cryptocurrency to the provided address. 
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC8} caption="Agree to terms & click Confirm" />
<Polaroid imageSrc={PIC9} caption="Agree to terms, choose payment method & click Continue" />
<Polaroid imageSrc={PIC10} caption="Fill in card details & click Pay" />
</div>
<div className="content">
<span className="bold">Step 7: Confirm payment</span> At last confirm payment. Once the transaction is initiated and confirmed, you can track the progress of the exchange. ChangeNOW will provide you with a transaction ID or a tracking link to monitor the status. The time it takes to receive the tokens may vary based on network congestion and other factors.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC11} caption="Click Confirm" />
<Polaroid imageSrc={PIC12} caption="Wait for confirmation" />
<Polaroid imageSrc={PIC13} caption="Success!" />
</div>
<div className="content">
It's important to note that the availability of Pulsechain Token (PLS) on ChangeNOW or any other exchange platform may vary. Always double-check the exchange's supported tokens and do your research to ensure the legitimacy and reputation of the platform.
</div>
<div className="content">
<span className="bold">Have you added Pulsechain network to your Metamask wallet?</span> If no then go to <a href="https://pulsechain.com/" target="_blank" rel="noreferrer noopener">pulsechain.com</a> and click the add to Pulsechain button or follow instructions on the page to add the network. Always reference and book mark this website for accurate network settings and links.
<div className="content">
<span className="bold">Here is a guide on how to add the Pulsechain network to Metamask if you need it</span>
</div>
<a href="/add-pulsechain"><button className="btn">How to add Pulsechain network</button></a>
</div>
<div className="content">
<span className="bold">Check your Metamask wallet</span> Go to your Metamask wallet by clicking the fox icon and confirm that the Pulsechain tokens (PLS) is in your wallet
</div>
<img src={PIC14} alt="Metamask balance" />
<br />
<div className="content">
<span className="bold">Disclaimer:</span>
The information provided here is for informational purposes only and should not be considered financial or investment advice. Cryptocurrency transactions involve risks, and individuals should conduct their own research and exercise caution when using cryptocurrency exchange platforms.
</div>
<a href="/plsx"><button className="btn">How to Swap tokens</button></a>
<a href="/coinbase"><button className="btn">How to Buy On Coinbase</button></a>

      </div>
    </div>
  );
}

export default ChangeNow;