import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/public.png';
import PIC2 from '../images/private.png';
import PIC3 from '../images/seeds2.png';
import './Trezor.css'; // Import the CSS file for the component

const Trezor = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>Why use the Trezor hardware wallet:</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Keep your seed phrase safe</span> The biggest reason to buy a hardware wallet is to secure your crypto keys which is your seed words in your Metamask wallet. These seed words consists of 12 or 24 words. 
Anybody that has these words have control of the wallet the keys belong to. 
</div>
<div className="content"> In every wallet there are two keys, the one you see in Metamask that are a public address. This is okay to share with anybody because you can only send funds to this address. The keys you must never share with anybody is your private keys. Anybody that have the private key can control the wallet and send the funds to another wallet. The 12 or 24 seed words is a representation of your private key to make it easier to store and handle than a 64 character long string of numbers and characters.
</div>
<div className="content"> 1) It is okay to share your public address. People can only send to this address, can`t send from the address. 2) When you create a Metamask wallet you set a password. To access your private key you have to enter in your password first. Never share your password and especially do NOT share your private keys with anybody. If a person says they need your keys for any reason, like support help, it`s a scam. Never give them to anybody. Write them down on a piece of paper and hide them. Never save them electronicaly, not on your computer and not in the cloud or on your phone.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC} caption="Public address okay to share, can only send funds to address" />
<Polaroid imageSrc={PIC2} caption="Never share your private keys with anybody!" />
<Polaroid imageSrc={PIC3} caption="NEVER SHARE YOUR SEEDS!" />
</div>
<div className="content"> When you store these seed words inside your hardware wallet they are on the hardware wallet and not on your computer or phone. You can then connect your hardware wallet to a new Metamask wallet you make that have different seed words, so that every time you make a transaction you use your hardware wallet to confirm every transaction.
</div>
<a href="/metamask"><button className="btn">Back to Metamask guide</button></a>
<a href="/trezor-buy"><button className="btn">How to Buy Hardware Wallet</button></a>
<div className="content"><span className="bold">Disclaimer:</span> If you on the other hand only use the 12 seed words from Metamask your seeds are now on your computer. If your computer get`s hacked then your seeds on your Metamask might be at risk. If a hacker get`s access to those seeds they can send all your funds to another wallet. 
</div>
      </div>
    </div>
  );
}

export default Trezor;