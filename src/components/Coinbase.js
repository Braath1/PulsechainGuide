import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC2 from '../images/cb2.png';
import PIC3 from '../images/cb3.png';
import PIC4 from '../images/cb4.png';
import PIC5 from '../images/cb5.png';
import PIC6 from '../images/cb6.png';
import PIC7 from '../images/cb7.png';
import PIC9 from '../images/cb9.png';
import PIC10 from '../images/cb10.png';
import PIC12 from '../images/cb12.png';
import PIC13 from '../images/cb13.png';
import PIC14 from '../images/cb14.png';
import PIC15 from '../images/cb15.png';
import PIC16 from '../images/cb16.png';
import PIC17 from '../images/cb17.png';
import PIC18 from '../images/cb18.png';
import PIC19 from '../images/cb19.png';
import PIC20 from '../images/cb20.png';
import PIC21 from '../images/cb21.png';
import PIC22 from '../images/cb22.png';
import PIC23 from '../images/cb23.png';
import PIC54 from '../images/cb54.png';
import './Coinbase.css'; // Import the CSS file for the component

const Coinbase = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>Step-by-Step Guide on How to sign up and use Coinbase:</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Step 1: Visit the Coinbase Website</span> Open your web browser and visit the Coinbase website at <a href="https://www.coinbase.com/" target="_blank" rel="noreferrer noopener">www.coinbase.com.</a>
<div className="content">
<span className="bold">Step 2: Click on "Get started"</span> 1) On the Coinbase homepage, click on the "Get started" button located in the upper right corner. 2)  Fill out the registration form with your first name, last name, email address, and password. Ensure that the password meets the specified criteria for security purposes. Read and agree to the terms of service and privacy policy. 3) After submitting the registration form, Coinbase will send you an email with a verification link. Go to your email inbox, locate the email from Coinbase, and click on the verification link to confirm your email address.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC2} caption="Click Get Started" />
<Polaroid imageSrc={PIC3} caption="Fill in Info" />
<Polaroid imageSrc={PIC4} caption="Verify Email" />
</div>
</div>
<div className="content">
<span className="bold">Step 5: Complete Account Setup</span> Once your email is verified, Coinbase will prompt you to set up your account further. Follow the on-screen instructions to provide additional information such as your phone number, country of residence, and personal details. Coinbase may require additional identity verification steps, such as providing a photo of your identification document (passport, driver's license, etc.).
</div>
<br />
<div className="content">
<span className="bold">After setup is completed Login:</span> 
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC5} caption="Enter email" />
<Polaroid imageSrc={PIC6} caption="Enter password" />
<Polaroid imageSrc={PIC7} caption="Enter 2FA code from Google Authenticator app" />
</div>
<div className="content">
<span className="bold">Step 6: Enable Two-Factor Authentication (2FA)</span> To enhance the security of your Coinbase account, enable two-factor authentication (2FA). Coinbase provides options to enable 2FA through an authenticator app or SMS verification. Choose your preferred method and follow the instructions to set it up.
<div className="content">
  <br />
<span className="bold">How to find 2FA:</span> 
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC9} caption="Click the icon top right" />
<Polaroid imageSrc={PIC12} caption="Click on Settings" />
<Polaroid imageSrc={PIC13} caption="Click on Security" />
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC14} caption="Make sure 2FA is Enabled" />
<Polaroid imageSrc={PIC15} caption="Very secure is recommended" />
<Polaroid imageSrc={PIC16} caption="Click Account Limits to ensure all steps are complete" />
</div>  
</div>
<div className="content">
<span className="bold">Step 7: Link a Payment Method</span> To buy cryptocurrencies on Coinbase, you'll need to link a payment method. Coinbase supports various payment options, including bank accounts and credit/debit cards. Navigate to the "Settings" or "Payment Methods" section of your Coinbase account and follow the instructions to link your preferred payment method. Coinbase may require additional verification steps for payment methods.
</div>
<div className="content">
<span className="bold">Step 8: Buy or Sell Cryptocurrencies</span> Once your payment method is linked and verified, you can proceed to buy or sell cryptocurrencies. From the Coinbase dashboard, click on the "Buy/Sell" button. Select the cryptocurrency you wish to buy or sell, choose the desired payment method and amount, and review the transaction details. Confirm the transaction to execute the purchase or sale. 1) Add payment method under the payment methods tab in settings if you have not already added a payment method. 2) Click on the Buy & Sell button. 3) Click on the Bitcoin drop down.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC54} caption="Click Add a payment method" />
<Polaroid imageSrc={PIC10} caption="Click Buy & Sell" />
<Polaroid imageSrc={PIC18} caption="Click on Bitcoin drop down" />
</div>
<div className="content">
<span className="bold">Step 9: Choose Cryptocurreny to Buy</span> 1) Choose Ethereum. You can also buy any other token you`d like. If you want to buy a stable coin that is pegged to $1 (there is risk involved as these can depeg from their value) you can buy USDC or DAI token. 2) Insert DAI in the input box if you`d like to buy a stable coin. 3) Click Preview Buy.
</div> 
<div className="polaroid">
<Polaroid imageSrc={PIC19} caption="Click on Ethereum" />
<Polaroid imageSrc={PIC20} caption="Insert DAI if you want to buy a stable coin instead" />
<Polaroid imageSrc={PIC21} caption="Click Preview Buy" />
</div>   
<div className="content">
<span className="bold">Step 10: Finish Buy</span>  1) Click Buy Now. 2) Click Done your purchase is done! You might have to wait up to 10 minutes, usually the transaction takes less time. But don`t worry it depends on the traffic on the Ethereum network. Coinbase is one of the largest exchanges is the world for crypto, so your funds will arrive. Just have some patience. 3) Check if your Ethereum has arrived in your Coinbase wallet by clicking on My assets on the left side of the screen. Try to refresh the page after a while. You will also get a receipt to your email.
</div> 
<div className="polaroid">
<Polaroid imageSrc={PIC22} caption="Click Buy Now" />
<Polaroid imageSrc={PIC23} caption="Click Done" />
<Polaroid imageSrc={PIC17} caption="Click My assets" />
</div>

<a href="/coinbase-metamask"><button className="btn">Send from Coinbase to Metamask</button></a>
    </div>
    </div>
  );
}

export default Coinbase;