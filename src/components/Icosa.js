import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/icosa.png';
import PIC2 from '../images/icsa2.png';
import PIC3 from '../images/icsa3.png';
import PIC4 from '../images/icsa4.png';
import PIC5 from '../images/icsa5.png';
import PIC6 from '../images/icsa6.png';
import PIC7 from '../images/icsa7.png';
import PIC8 from '../images/icsa8.png';
import PIC9 from '../images/icsa9.png';
import PIC10 from '../images/icsa10.png';
import PIC11 from '../images/icsa11.png';
import PIC12 from '../images/icsa12.png';
import PIC13 from '../images/icsa13.png';
import PIC14 from '../images/icsa14.png';
import PIC15 from '../images/icsa15.png';
import PIC16 from '../images/icsa16.png';
import PIC17 from '../images/icsa17.png';
import PIC18 from '../images/icsa18.png';
import PIC21 from '../images/icsa21.png';
import PIC22 from '../images/icsa22.png';
import PIC23 from '../images/icsa23.png';
import PIC24 from '../images/icsa24.png';
import PIC25 from '../images/icsa25.png';
import PIC26 from '../images/icsa26.png';
import PIC27 from '../images/icsa27.png';
import PIC28 from '../images/icsa28.png';
import PIC29 from '../images/icsa29.png';
import PIC30 from '../images/icsa30.png';
import PIC31 from '../images/icsa31.png';
import PIC32 from '../images/icsa32.png';

import './Icosa.css'; // Import the CSS file for the component

const Icosa = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>Icosa Crypto: How to Mine Icosa</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Have you mined HEX and got Hedron token?</span> If not check this guide on how to claim Hedron.
</div>
<a href="/hedron"><button className="btn">How to Claim Hedron</button></a>
<div className="content">
 If you have already added Hedron continue below.
</div>
<div className="content">
<span className="bold">Step 1: Visit the official Icosa Website</span> Go to the official Icosa website at <a href="https://app.icosa.pro" target="_blank" rel="noreferrer noopener">app.icosa.pro</a>
<br />The cool thing about this webpage is that you can mine your HEX on both Ethereum and Pulsechain from this site. You can also see your Hedron and mine them to get Icosa yield.
</div>
<div className="content">
<span className="bold">Step 2: Unlock Metamask</span> 1) You have to unlock Metamask wallet to interact with the HEX, Hedron and Icosa smart contracts. 2) The main page where you can choose between HEX, Hedron and Icosa on the left. 3) Here you see your native HEX miners. In the HEX article we started a miner for 4500 HEX as you can see below with 226 B-Shares mined for 772 days.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC4} caption="Unlock Metamask" />
<Polaroid imageSrc={PIC} caption="Menu On the Left" />
<Polaroid imageSrc={PIC2} caption="Info About HEX Miner" />
</div>
<div className="content">
<span className="bold">Step 3: See Your Hedron</span> 1) Click the Hedron tab on the left. 2) Here you see info about your HEX miner. 3) Here you can create a new stake/miner and mint your Hedron from your HEX miner. We already did this in the Hedron article so the mintable balance is 0, every day we have T-Shares we also get Hedron yield.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC3} caption="Click Hedron" />
<Polaroid imageSrc={PIC5} caption="Info HEX Miner" />
<Polaroid imageSrc={PIC6} caption="Info Create Miner & Mint Hedron" />
</div>
<div className="content">
<span className="bold">Step 4: Hedron & Icosa Mining</span> Let`s visit the Icosa part of the webpage. 1) Click Icosa tab on the left. 2) Click CREATE NEW HEDRON STAKE. 3) Insert the amount of Hedron you want to stake or click max. Then click APPROVE EXACT. If you approve unlimited you do not have to approve exact every time. As a rule of thumb you should never allow a contract to spend unlimited funds on your behalf. 
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC7} caption="Click Icosa Tab" />
<Polaroid imageSrc={PIC8} caption="Click CREATE NEW HEDRON STAKE" />
<Polaroid imageSrc={PIC9} caption="click APPROVE EXACT" />
</div>
<div className="content">
<span className="bold">Step 5: Mine Hedron & Approve In Metamask</span> Now the Metamask will pop up again. 1) Input Hedron amount or click max. Click Next. 2) Click Approve. 3) Once you have confirmed in Metamask then click CREATE NEW HDRN STAKE again.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC10} caption="Set Spending Cap & Click Next" />
<Polaroid imageSrc={PIC11} caption="Click Approve" />
<Polaroid imageSrc={PIC12} caption="Click CREATE NEW HDRN STAKE" />
</div>
<div className="content">
<span className="bold">Step 6: How to Overcome Website Bug?</span> Often when trying to stake Hedron the stake tab get`s grayed out. The solution? 1) Refresh webpage. 2) If the STAKE HDRN is blue click it. 3) Click Confirm in Metamask.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC13} caption="Refresh Webpage" />
<Polaroid imageSrc={PIC14} caption="Click STAKE HDRN" />
<Polaroid imageSrc={PIC15} caption="Click Confirm" />
</div>
<div className="content warning">
<span className="bold">Info Hedron Miner </span> When you mine Hedron you get Icosa in yield. You do not get any penalties if you leave the miner running after 30 days, it will just generate more Icosa yield. When you start a Hedron miner you lock in the B-Shares on the day you start the miner.<br /><br /> Since the share rate always increases over time it is always best to start a miner today compared to tomorrow. If you would like to end the miner and withdraw all your Hedron then click END HDRN STAKE (wait until the miner is finished by looking at minimum stake days remaining).<br /><br />To compound the yield over time you mine Hedron for 30 days (the time is longer if your position is larger). When the time is up which is 30 days in this example you withdraw the Icosa yield generated. Then you start the Hedron miner again by following the same steps as above. Then you start a Icosa miner and input the Icosa. When you mine Icosa you get Hedron & Icosa. If you do this every time the miners are finished you comound the interest and over time can grow your Hedron and Icosa bags exponentially! Patience is key. 
</div>
<br />
<div className="content">
<span className="bold">Step 7: Info Hedron Miner </span> 1) Here you can see the amount of Hedron that is currently mined. 2) Here you see the days that are left before you can withdraw the Hedron without penalties. 3) You can always add to the Hedron miner, this will increase the amount of Icosa you get in yield. You can add Hedron as many time as you like you only have to pay the transaction fee which is very low on Pulsechain.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC16} caption="Mined Hedron" />
<Polaroid imageSrc={PIC17} caption="Days Left Miner" />
<Polaroid imageSrc={PIC18} caption="Click ADD HDRN Stake to Add More" />
</div>
<div className="content">
<span className="bold">Step 8: Start Icosa Miner</span> When you have mined Hedron and gotten Icosa or you have bought Icosa in the open market, you can start to mine Icosa. 1) Click CREATE NEW ICSA STAKE. 2) Input amount of Icosa to mine and click STAKE ICSA. Confirm the transaction in Metamask. 3) See how much yield your Hedron and Icosa has generated.
<div className="polaroid">
<Polaroid imageSrc={PIC21} caption="Click CREATE NEW ICSA STAKE" />
<Polaroid imageSrc={PIC22} caption="Input Amount ICSA & Click STAKE ICSA" />
<Polaroid imageSrc={PIC23} caption="Hedron & Icosa Yield Generated" />
</div>
</div>

<div className="content">
<span className="bold">Step 9: How to Sell HEX Stake Instance (HSI)</span> In the Hedron article we discussed how to tokenize your HEX stake. If you want to sell it this is how you do it. 1) Scroll down on the webpage until you see HSI Buy-Back. 2) Click SELL ALL. 3) Insert amount of HSI you want to sell and follow instructions. In this example there is no HSI in the wallet.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC24} caption="Scroll Down to HSI Buy-Back" />
<Polaroid imageSrc={PIC25} caption="Click SELL ALL" />
<Polaroid imageSrc={PIC29} caption="Insert Amount to Sell & Confirm" />
</div>
<div className="content">
<span className="bold">Step 10: The HSI Auction</span> When anybody sell an HSI to the Icosa contract and get Icosa in return, the contract will take out a max loan on the HSI stake. The contract then waits for 90 days without paying the debt owed. What will then happen is the HSI will be sent to the auction where anybody can bid and win the HSI!<br /><br /> 1) Click HSI Auctions. 2) Look for HSI with high T-Share rate, they can be hard to win since the competition is steep. Also look for HSI`s with high HDRN Bonus where 10X is the highest. 3) If we look at the 3rd HSI it is 40000 HEX and the starting bid is 30M Hedron. What is the cost of 40000 HEX vs. 30M Hedron on Pulsechain? Let`s check on pulsecoinlist.com. Currently 40000 HEX cost $732 and 30M Hedron cost $16,74! Starting bid is $16 for an asset valued at $732. Keep in mind that this is the starting bid but there are oportunities for those that seek it!
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC26} caption="Click HSI Auctions" />
<Polaroid imageSrc={PIC27} caption="Review HSI Auction List" />
<Polaroid imageSrc={PIC28} caption="Find Good Deals" />
</div>
<div className="content">
<span className="bold">Step 11: Active HSI Auctions</span> If you scroll down further you will see the Active HSI Auctions. It shows the number of shares, progress in time, amount of HEX mined, the Icosa value and the current bid. 1) Here we see the current bid is 55M Hedron. 2) You can see if there is a discount compared to HEX and Hedron. Click ACTIONS then Bid to make a new bid. 3) Review the bid and Confirm transaction.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC30} caption="Current Bid" />
<Polaroid imageSrc={PIC31} caption="Click ACTIONS & Bid" />
<Polaroid imageSrc={PIC32} caption="Review Bid & Confirm In Metamask" />
</div>
<div className="content">
<span className="bold">More Resources</span> If you would like to learn more about these topics in more detail please<a href="/resources"> visit the Resources section on this page</a> and watch videos from Crypto Coffee, CRYPTOGRAFX & Richard Heart.
</div>
<div className="content">
<span className="bold"></span> If you do not know how to swap tokens and want Pulsechain HEX, then click the button below for a guide. Just use HEX as the token instead of PEPE.
</div>
<a href="/plsx"><button className="btn">How to Swap Tokens</button></a>
<div className="content">
<span className="bold">Disclaimer:</span>
The information provided here is for informational purposes only and should not be considered financial or investment advice. Cryptocurrency transactions involve risks, and individuals should conduct their own research and exercise caution when using cryptocurrency exchange platforms.
</div>
      </div>
    </div>
  );
}

export default Icosa;