import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/trezor2.png';
import PIC2 from '../images/trezor3.png';
import PIC3 from '../images/trezor4.png';
import PIC4 from '../images/trezor5.jpg';
import PIC5 from '../images/trezor6.jpg';
import PIC6 from '../images/trezor7.jpg';
import PIC7 from '../images/trezor8.jpg';
import PIC8 from '../images/trezor9.jpg';
import PIC9 from '../images/trezor10.jpg';
import PIC10 from '../images/trezor11.jpg';
import PIC11 from '../images/trezor12.jpg';
import PIC12 from '../images/trezor13.jpg';
import PIC13 from '../images/trezor14.jpg';
import PIC14 from '../images/trezor15.jpg';
import PIC15 from '../images/trezor16.jpg';
import PIC16 from '../images/trezor17.jpg';
import PIC17 from '../images/trezor18.jpg';
import PIC18 from '../images/trezor19.jpg';
import PIC19 from '../images/trezor20.jpg';
import PIC20 from '../images/trezor21.jpg';
import PIC21 from '../images/trezor22.jpg';
import PIC22 from '../images/trezor23.jpg';
import PIC23 from '../images/trezor24.jpg';
import PIC24 from '../images/trezor25.jpg';
import PIC25 from '../images/trezor26.jpg';
import PIC26 from '../images/trezor27.jpg';
import PIC27 from '../images/trezor28.jpg';


import './TrezorBuy.css'; // Import the CSS file for the component

const TrezorBuy = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>How to buy & use Trezor hardware wallet:</h2>
        {/* Rest of the content */}

<div className="content">
<span className="bold">Step 1: Visit the Trezor Website</span>
Go to the official Trezor website at <a href="https://trezor.io/" target="_blank" rel="noreferrer noopener">www.trezor.io</a>
</div>
<div className="content">
<span className="bold">Step 2: Buy Trezor Model T</span> Model T is a very good hardware wallet with easy to use touch screen. It is up to you if you want another wallet but this one is very good. 1) Click Get your Trezor. 2) Choose Trezor Model T. 3) Go to cart and follow checkout procedure
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC} caption="Click Get your Trezor Model T hardware wallet" />
<Polaroid imageSrc={PIC2} caption="Click Buy" />
<Polaroid imageSrc={PIC3} caption="Click Cart and follow checkout procedure" />
</div>
<div className="content">
<span className="bold">Step 3: Setup Trezor Model T hardware wallet</span> 1) Unbox your new Trezor Model T. 2) Unpack and make sure that the sticker under the Trezor is intact (if not then return the Trezor and get a new one), remove sticker and insert the USB cable. 3) Open a new window in your web browser and visit <a href="https://trezor.io/start" target="_blank" rel="noreferrer noopener">trezor.io/start</a> and click Download for desktop.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC4} caption="Unbox Trezor Model T hardware wallet" />
<Polaroid imageSrc={PIC5} caption="What`s inside" />
<Polaroid imageSrc={PIC6} caption="Go to trezor.io/start & click Download for desktop" />
</div>
<div className="content">
<span className="bold">Step 4: Connect the Trezor to Your Computer</span> Connect the Trezor hardware wallet to your computer using the provided USB cable. Make sure the device is securely connected. It is best practice to use a laptop or computer that you only use for crypto to reduce the risk of getting hacked, if you have the oportunity to do so.
</div>

<div className="polaroid">
<Polaroid imageSrc={PIC7} caption="Complete the setup" />
<Polaroid imageSrc={PIC8} caption="You are asked to connect your Trezor" />
<Polaroid imageSrc={PIC9} caption="Connect the Trezor to your computer" />
</div>
<div className="content">
<span className="bold">Step 5: Install firmware</span> 1) Click Setup Trezor. 2) Click Install firmware. 3) Click create new wallet.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC10} caption="Click Setup Trezor" />
<Polaroid imageSrc={PIC11} caption="Click Install firmware" />
<Polaroid imageSrc={PIC12} caption="Click create new wallet" />
</div>
<div className="content">
<span className="bold">Step 6: Backup your seed words</span> This is one of the most important things you have to do. The seed words are like your secret password that controll your funds. Do NOT share them with anybody. Write them down on paper and hide them well. Keep it hidden, keep it safe!  1) Click Standard seed backup. 2) Click CREATE WALLET. 3) Click Create backup.

</div>
<div className="polaroid">
<Polaroid imageSrc={PIC13} caption="Click Standard seed backup" />
<Polaroid imageSrc={PIC14} caption="Click CREATE WALLET" />
<Polaroid imageSrc={PIC15} caption="Click Create backup" />
</div>
<div className="content">
<span className="bold">Step 7: Write Down the Recovery Seed Phrase</span> It is extremely important that you write down the 12 words in the exact same order that you see in your Trezor device. Then hide the seed words where nobody will find them. A place where noone will clean, throw away or play. If you loose your Trezor wallet, these seed words are your only way to get them back. You then get a new wallet and instead of creating a new wallet you import an existing wallet and insert your seeds.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC16} caption="Read and tick off the 3 boxes, then click Begin backup" />
<Polaroid imageSrc={PIC17} caption="Click Ok, I understand" />
<Polaroid imageSrc={PIC18} caption="Write down your 12 seed words in the exact same order" />
</div>
<div className="content">
<span className="bold">Step 8: Confirm seed words on Trezor</span> Will not show the seed words. Write them down, double check them and when you are done go back on your Trezor and click on the words it asks for to check if you have written the seeds down correctly. 1) Click Continue. 2) Click Continue. 3) Click Continue to PIN.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC19} caption="Click Continue" />
<Polaroid imageSrc={PIC20} caption="Click Continue" />
<Polaroid imageSrc={PIC21} caption="Click Continue to PIN" />
</div>
<div className="content">
<span className="bold">Step 9: Create your PIN code</span> Type in your PIN code, make sure to write it down with your seeds, you need this PIN code to login to your Trezor every time you plug it in to your computer.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC22} caption="Click Set PIN" />
<Polaroid imageSrc={PIC23} caption="Click ENABLE" />
<Polaroid imageSrc={PIC24} caption="Enter your PIN code" />
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC25} caption="Click Continue" />
<Polaroid imageSrc={PIC26} caption="Click Continue" />
<Polaroid imageSrc={PIC27} caption="Click Complete setup" />
</div>
<div className="content">
<span className="bold">Step 10: Congrats! Your Trezor is ready to use</span> 1) Click Access suite to go to the Trezor suite app where you can see your Trezor accounts. 2) It is recommended to also set a passphrase for extra security, make sure you write it down with your PIN and seed words. Click on Hidden wallet and enter your passphrase. If you have not made a passphrase then click Standard wallet. 3) In your Trezor suite you can see the message that says that your wallet is ready to use.

</div>
<a href="/metamask"><button className="btn">Back to Metamask guide</button></a>
<a href="/connect-trezor"><button className="btn">Connect Trezor to Metamask</button></a>
      </div>
    </div>
  );
}

export default TrezorBuy;