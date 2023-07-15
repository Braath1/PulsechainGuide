import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/meta.png';
import PIC2 from '../images/metamask4.png';
import PIC3 from '../images/meta2.png';
import PIC4 from '../images/meta3.png';
import PIC5 from '../images/meta4.png';
import PIC6 from '../images/meta5.png';
import PIC7 from '../images/meta6.png';
import PIC8 from '../images/meta7.png';
import PIC9 from '../images/meta8.png';
import PIC10 from '../images/meta9.png';
import PIC12 from '../images/meta11.png';
import PIC13 from '../images/meta12.png';
import PIC14 from '../images/meta13.png';
import PIC15 from '../images/meta14.png';
import PIC16 from '../images/meta15.png';
import PIC17 from '../images/meta16.png';
import PIC18 from '../images/meta17.png';
import PIC19 from '../images/meta18.png';
import ADDPLS from '../images/addPulsechain.png';
import './Metamask.css'; // Import the CSS file for the component

const Metamask = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>Step-by-Step Guide on How to Install MetaMask:</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Step 1: Open your web browser</span> Launch your preferred web browser (such as Chrome, Firefox).
</div>
<div className="content">
<span className="bold">Step 2: Visit the MetaMask website</span> Go to the official MetaMask website by entering <a href="https://metamask.io/" target="_blank" rel="noreferrer noopener">metamask.io</a> in the address bar and pressing Enter.
</div>
<div className="content">
<span className="bold">Step 3: Download MetaMask extension</span>  On the MetaMask homepage, you should see a "Get Started" or "Download" button. Click on it to initiate the download process.
<div className="content">
<span className="bold">Step 4: Choose your browser extension</span>  MetaMask offers browser extensions for various web browsers. Select the extension that matches your browser by clicking on the corresponding "Install MetaMask for (your browser name)" button.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC} caption="Click download button" />
<Polaroid imageSrc={PIC2} caption="Click add to Chrome/Your browser" />
</div>
</div>
<div className="content">
<span className="bold">Step 5: Add the extension to your browser</span> Add the extension to your browser
Follow the prompts to add the MetaMask extension to your browser. This typically involves confirming the installation and granting necessary permissions.
</div>
<div className="content warning">
<span className="bold">Warning! Before you continue make sure you read this guide on why you should use a hardware wallet to secure your crypto</span>
<a href="/trezor"><button className="btn">Why Use a Hardware Wallet</button></a>
</div>
<div className="content">
<span className="bold">If you have read the above message and understand the risk of not using a hardware wallet, then continue.</span> 
</div>
<div className="content">
<span className="bold">Step 6: Create a new MetaMask wallet</span> Create a new MetaMask wallet
After installing the extension, you'll see the MetaMask icon in your browser's toolbar. Click on the icon to launch MetaMask. The first time you open MetaMask, it will display a welcome screen. Click "Get Started" to proceed.
<div className="polaroid">
<Polaroid imageSrc={PIC3} caption="Click Create a new wallet" />
<Polaroid imageSrc={PIC4} caption="Click I agree button" />
</div>
</div>
<div className="content">
<span className="bold">Step 7: Create new wallet & Set up a password</span>Create a new wallet & Create a strong password for your MetaMask wallet. Enter the password, confirm it, agree to terms and click button
<div className="polaroid">
<Polaroid imageSrc={PIC5} caption="Create password, confirm & click Create a new wallet" />
<Polaroid imageSrc={PIC6} caption="Click Secure my wallet" />
</div>
</div>
<div className="content">
<span className="bold">Step 8: Backup your seed phrase</span>  MetaMask will present you with a seed phrase (also known as a recovery phrase) consisting of 12 or 24 words. Make sure you write them exactly as shown and in the exact sane order. This phrase is crucial for restoring access to your wallet if needed. Write down the seed phrase on a piece of paper and store it in a safe place. Do not save them electonically. Important! Do not share them with ANYBODY as they are like the PIN code to your bank account. Click "Next" once you have recorded the seed phrase.
<div className="polaroid">
<Polaroid imageSrc={PIC7} caption="Click reveal seed phrase" />
<Polaroid imageSrc={PIC8} caption="Write down seed phrase on paper" />
</div>
</div>
<div className="content">
<span className="bold">Step 9: Confirm your seed phrase</span>
In the next step, MetaMask will ask you to verify your seed phrase. Select the words in the correct order according to your recorded seed phrase. This step ensures that you have accurately written down your seed phrase. Once complete, click "Confirm" or "Verify."
<div className="content">
<span className="bold">Step 10: Accept terms of use</span> 
Read and review the MetaMask terms of use, privacy notice, and any other relevant information. If you agree, click "Accept" or a similar button to proceed.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC9} caption="Insert the missing seed words in exactly the same order & click Confirm" />
<Polaroid imageSrc={PIC10} caption="Click Got it button" />
</div>
</div>
<div className="content">
<span className="bold">Step 11: Congratulations!</span> You have successfully installed MetaMask and set up your wallet. You should now see your MetaMask wallet interface with your account balance and wallet address.
<div className="polaroid">
<Polaroid imageSrc={PIC12} caption="Your wallet address for receiving funds & wallet balance" />
<Polaroid imageSrc={PIC13} caption="Your wallet address for receiving funds & wallet balance" />
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC14} caption="Your wallet address for receiving funds & wallet balance" />
<Polaroid imageSrc={PIC15} caption="Your wallet address for receiving funds & wallet balance" />
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC16} caption="Your wallet address for receiving funds & wallet balance" />
<Polaroid imageSrc={PIC17} caption="Your wallet address for receiving funds & wallet balance" />
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC18} caption="Your wallet address for receiving funds & wallet balance" />
<Polaroid imageSrc={PIC19} caption="Your wallet address for receiving funds & wallet balance" />
</div>
<div className="content">
<span className="bold">Step 10: Add Pulsechain to Metamask</span> Click the image below for a guide on how to add Pulsechain to Metamask</div>
<a href="/add-pulsechain"><img className="add-pls" src={ADDPLS} alt="Click add to Chrome/Your browser" /></a>
<span className="bold"><br />
<br />
Important! Remember to keep your MetaMask password and seed phrase secure. Never share your seed phrase with anyone, as it provides access to your funds. It's also recommended to enable additional security measures such as two-factor authentication (2FA) within MetaMask for enhanced protection.</span>
</div>
      </div>
    </div>
  );
}

export default Metamask;
