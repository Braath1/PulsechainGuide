import PIC36 from '../images/trezor37.png';
import PIC38 from '../images/trezor39.jpg';
import PIC39 from '../images/trezor40.jpg';
import PIC44 from '../images/trezor45.jpg';
import PIC45 from '../images/trezor46.jpg';
import PIC46 from '../images/trezor47.png';
import PIC49 from '../images/trezor50.jpg';
import PIC50 from '../images/trezor51.jpg';
import PIC51 from '../images/trezor52.jpg';
import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC52 from '../images/trezor53.jpg';
import PIC53 from '../images/trezor54.jpg';
import PIC54 from '../images/trezor55.jpg';
import PIC55 from '../images/trezor56.jpg';
import PIC56 from '../images/trezor57.jpg';
import PIC57 from '../images/trezor58.jpg';
import PIC58 from '../images/trezor59.jpg';
import PIC59 from '../images/trezor60.jpg';
import PIC60 from '../images/trezor61.jpg';
import PIC61 from '../images/trezor62.jpg';
import PIC62 from '../images/trezor63.jpg';
import PIC63 from '../images/trezor64.png';
import PIC64 from '../images/trezor65.jpg';
import PIC65 from '../images/trezor66.jpg';
import PIC66 from '../images/trezor67.jpg';
import PIC68 from '../images/trezor69.jpg';
import PIC70 from '../images/mmicon.png';
import './TrezorTx.css'; // Import the CSS file for the component

const TrezorTx = () => {
    return (
      <div className="metamask-container">
        <Navbar />
        <div className="metamask-content">
        <h2>How to Do Transactions With Trezor Hardware Wallet:</h2>
          {/* Rest of the content */}
  
  <div className="content">
  <span className="bold">Step 1: Login to Metamask</span> 1) Click on the fox icon. 2) Insert Password and click Unlock. 3) Click send. If you want to exchange one token for another then click swap.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC70} caption="Click Fox Icon" />
<Polaroid imageSrc={PIC68} caption="Enter Password & click Unlock" />
<Polaroid imageSrc={PIC36} caption="Click Send" />
</div>
<div className="content">
  <span className="bold">Step 2: Insert token & amount to send</span> 1) Insert address to send tokens too. 2) Insert amount of tokens to send & click Next. 3) Click Confirm.
  </div>
<div className="polaroid">
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC44} caption="Insert address to send tokens too" />
<Polaroid imageSrc={PIC45} caption="Insert amount of tokens to send & click Next" />
<Polaroid imageSrc={PIC46} caption="Click Confirm" />
</div>
<div className="content">
  <span className="bold">Step 3: Connect Trezor hardware wallet to computer (USB)</span> If you already have your Trezor connected you can skip this step. 1) Plug in your Trezor hardware wallet into the USB on your computer. 2) Touch the screen. 3) Enter PIN code.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC50} caption="Connect Trezor hardware wallet" />
<Polaroid imageSrc={PIC38} caption="Touch the screen" />
<Polaroid imageSrc={PIC39} caption="Enter PIN code" />
</div>
<div className="content">
  <span className="bold">Step 3: Approve with Trezor</span> 1) Click Confirm. 2) Click Allow once for this session. 3) Click export to export the public key, this is not the private key and is okay.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC49} caption="Click Confirm" />
<Polaroid imageSrc={PIC51} caption="Click Allow once" />
<Polaroid imageSrc={PIC52} caption="Click Export" />
</div>
<div className="content">
  <span className="bold">Step 4: More Approval</span> Do you have Trezor suite open? Then you might be asked to type your passphrase in the connected host, then you need to open the suite and click and confirm your wallet there. If not then continue to the next step. 1) If you have a passphrase set then click Hidden wallet and insert your passphrase. If you do not have a passphrase for extra security, then click Standard wallet. 2) Click Allow once for this session if this window opens again. 3) Go to your Trezor device to finish the transaction.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC53} caption="Click Hidden wallet & enter passphrase or click Standard wallet" />
<Polaroid imageSrc={PIC54} caption="Click Allow once" />
<Polaroid imageSrc={PIC55} caption="Follow instruction on Trezor device" />
</div>
<div className="content">
  <span className="bold">Step 5: Confirm transaction on Trezor</span> You have to make a lot of confirmations and approvals, this can be frustrating in the beginning but you`ll get used to it. 1) Click Continue. 2) Check that the amount of tokens is correct and Click Confirm. 3) This is the maximum fee for gas, Click Next.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC56} caption="Click CONTINUE" />
<Polaroid imageSrc={PIC57} caption="Click CONFIRM" />
<Polaroid imageSrc={PIC58} caption="Click NEXT" />
</div>
<div className="content">
  <span className="bold">Step 6: Confirm transaction on Trezor</span> 1) This is priority fee for gas, Click Continue. 2) If the address you send to, token amount and gas is correct then HOLD the green button until Confirmed. 3) You can see that the amount in your wallet has decreased and the transaction is sent.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC59} caption="Click NEXT" />
<Polaroid imageSrc={PIC60} caption=" Click & HOLD TO CONFIRM" />
<Polaroid imageSrc={PIC61} caption="Transaction is sent" />
</div>
<div className="content">
  <span className="bold">Step 7: Confirm transaction in Metamask</span> 1) Under the activity tab in your Metamask wallet you can see the receipt, if you click it you can open the transaction on the block explorer. 2) Click View on block explorer to open the Pulsechain block explorer. 3) If it says Success then the transaction went through. If there is a problem with a transaction, this is a great way to find out more about what the issue might be.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC62} caption="Click on Send transaction" />
<Polaroid imageSrc={PIC63} caption="Click View on block explorer" />
<Polaroid imageSrc={PIC64} caption="Success!" />
</div>
<div className="content">
  <span className="bold">Step 8: How to lock Metamask</span> You should lock your Metamask every time you are done using it. To unlock it just type in your password again the next time you use your wallet. 1) Click the three dots on top right. 2) Click Lock Metamask. 3) To unlock it just type in your password again the next time you use your wallet.
  </div>
<div className="polaroid">
<Polaroid imageSrc={PIC65} caption="Click the three dots" />
<Polaroid imageSrc={PIC66} caption="Click Lock Metamask" />
<Polaroid imageSrc={PIC68} caption="Unlock by typing in your password again" />
</div>

<div className="content">
<span className="bold">Disclaimer:</span> To interact with your Trezor hardware wallet, you'll need to install the Trezor Bridge (for Trezor One) or the Trezor Suite software (for Trezor Model T). Follow the instructions provided on the Trezor website to download and install the necessary software for your device.
Once the software is installed, open it on your computer and connect your Trezor device. Follow the instructions provided by the software to access and manage your cryptocurrencies. You can view your balances, send and receive funds, and manage your wallet settings through the Trezor software interface.

Remember to keep your Trezor device and recovery seed phrase secure. Regularly update the firmware of your device and stay informed about best practices for using hardware wallets. Always double-check the authenticity of the Trezor website and software to avoid phishing attempts.

It's important to note that this guide provides a general overview of the process. For detailed instructions specific to your Trezor model and the latest software versions, refer to the official Trezor documentation and user guides.
</div>
  
  <a href="/metamask"><button className="btn">Back to Metamask guide</button></a>
  <a href="/change-now"><button className="btn">How to buy Pulsechain token</button></a>
        </div>
      </div>
    );
  }
  
  export default TrezorTx;

