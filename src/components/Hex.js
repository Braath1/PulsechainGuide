import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/stake.png';
import PIC2 from '../images/mmicon.png';
import PIC3 from '../images/cb29.png';
import PIC4 from '../images/stake2.png';
import PIC5 from '../images/stake3.png';
import PIC6 from '../images/stake4.png';
import PIC7 from '../images/stake5.png';
import PIC8 from '../images/stake6.png';
// import PIC9 from '../images/stake7.png';
import PIC10 from '../images/stake8.png';
import PIC11 from '../images/stake9.png';
import PIC12 from '../images/stake10.png';
import PIC13 from '../images/stake11.png';
import PIC14 from '../images/stake12.png';
import PIC15 from '../images/bull3.png';
import PIC16 from '../images/tshares3.png';
import PIC17 from '../images/payout.png';
// import PIC18 from '../images/tshares.png';
import PIC19 from '../images/tshares2.png';
import PIC20 from '../images/stake13.png';
import PIC21 from '../images/stake14.png';
import PIC22 from '../images/stake15.png';
import PIC23 from '../images/stake16.png';
import PIC24 from '../images/stake17.png';
// import PIC25 from '../images/stake18.png';
import PIC26 from '../images/stake19.png';
import PIC27 from '../images/stake20.png';
// import PIC28 from '../images/stake21.png';
// import PIC29 from '../images/stake22.png';
import PIC30 from '../images/stake23.png';
import PIC31 from '../images/stake24.png';
// import PIC32 from '../images/stake25.png';
import PIC33 from '../images/stake26.png';
// import PIC34 from '../images/stake27.png';
import PIC35 from '../images/stake28.png';
import PIC36 from '../images/stake29.png';
import PIC37 from '../images/stake30.png';
// import PIC38 from '../images/stake31.png';
import PIC39 from '../images/stake32.png';
import PIC40 from '../images/stake33.png';
// import PIC41 from '../images/stake34.png';
// import PIC42 from '../images/stake35.png';
import PIC43 from '../images/stake36.png';
import PIC44 from '../images/stake37.png';
import PIC45 from '../images/plsvseth.png'

import './Hex.css'; // Import the CSS file for the component

const Hex = () => {
  return (
    <div className="metamask-container">
      <Navbar />
      <div className="metamask-content">
      <h2>HEX Crypto: How to Mine HEX</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Have you bought HEX token?</span> If not check this guide on how to swap to HEX.
</div>
<a href="/metamask-swap"><button className="btn">How to Swap to HEX</button></a>
<div className="content">
 If you have already added HEX continue below.
</div>
<div className="content">
<span className="bold">Step 1: Visit the official HEX Website</span> Go to the official HEX miner website at <a href="https://go.hex.com/" target="_blank" rel="noreferrer noopener">go.hex.com</a>
</div>
<div className="content">
<span className="bold">Step 2: Unlock Metamask</span> 1) You have to unlock Metamask wallet to interact with the HEX smart contract. 2) Click fox icon on top right. 3) Insert your Metamask password and click Unlock.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC} caption="Unlock Metamask" />
<Polaroid imageSrc={PIC2} caption="Click fox icon" />
<Polaroid imageSrc={PIC3} caption="Enter password & click Unlock" />
</div>
<div className="content">
<span className="bold">Step 3: Connect to HEX smart Contract</span> 1) Click Connect button to start to connect to the HEX smart contract. hex.com is a trusted website so it is safe to connect to it. Never connect to a site that you do not trust or know anything about. 2) Click Next in Metamask when it pops up. 3) Click Connect in Metamask.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC4} caption="Click Connect" />
<Polaroid imageSrc={PIC5} caption="Click Next" />
<Polaroid imageSrc={PIC6} caption="Click Connect" />
</div>
<br />
<div className="content warning">
<span className="bold">Understand These Rules Before You Continue:</span><br /><br /> 1) When you start a Stake/Miner you have 24 hours before it turns Active. So for any reason if you want to end the miner do it before the 24 hours. If you end a miner after 24 hours you will loose most of your initial HEX. Make sure you are comfortable waiting 100% of the time you set. If you set a miner for 15 years, make sure you can afford to wait.<br /><br /> 2) Never End a miner before 90 days have passed. If you have a miner that is shorter than 90 days then wait until it is finished before you click the End Stake button.<br /><br /> 3) Make sure you do not end a miner before 50% of the time has passed. If you wait til 50% then you will get back your initial HEX but none of the yield generated. This is all calculated by the smart contract when you end the miner.<br /><br /> If you for example end the miner after 40% of the time passed you will get back less HEX than you started with. If you wait 60% of the time you will get back all your HEX and some of the yield generated. The longer you wait and the closer to 100% you wait, the more yield you get. If you wait until the miner is 100% finished then you will get back your initial HEX plus all the yield generated.<br /><br /> 4) AFter the miner is finished you have 10 days to End the Stake before any penalties. After the 10 days you will loose 1% every week until you End the miner. This is to prevent diluting the T-share pool and make people do what they say they will do.<br /><br /> Advanced users: You have an option to use the Good accounting function when a miner is finished. This will not end the miner but it takes the T-shares out of the pool and you will not incur any penalties. If you choose to good account the miner you pay a fee when you take the shares out of the pool and and a fee when you end the miner. <br /><br /> If you did not understand the good accounting function do not worry. This is an advanced topic, just make sure you understand that you have 10 days to end the stake by clicking the black end stake button. If you do that you will not incur any penalties!
</div>
<br />
<div className="content">
<span className="bold">Step 4: The HEX Webpage</span> On the front page you will se some graphs.<br /><br />  1) T-Share Daily Close Price in $USD shows how much it cost to aquire 1 T-Share. If you hoover the mouse over the last dot it shows that it cost $170 to aquire 1 T-Share on July 21st 2023. We can see that on day 33 it only cost $0.61 to aquire 1 T-Share. The share price fluctuates up and down but over time it goes up.<br /><br />  2) Daily HEX Payout per T-Share shows how many HEX you get in daily yield based on how many T-Shares you have. It slowly increases and is averaging above 6 HEX per T-Share in yield.<br /><br />  3) Daily Data shows how much the payout is. For example on day 1262 the Payout per T-Share was 6.615 Hex per T-share. So if you had 1 T-Share this day you would get 6.615 HEX in yield. The payout slowly increases with time as it get more expensive to aquire T-shares. Right now the payout is on average 6 HEX per T-Share. The T-Shares are deflationary and cost more as time goes by. The yield is also dynamic and is set by the number of miners. If the number of miners decrease the yield goes up, if the number of miners increase the yield goes down. The average stake length for the entire HEX eco system (july 2023) is 123000 active miners that have $1.3B locked up for an average of 6.98 years. To get the high APY of over 38% you need to lock up on average 7 years. The longer you wait the more risk you take and the more you get paid in yield.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC16} caption="Cost to aquire 1 T-Share" />
<Polaroid imageSrc={PIC17} caption="Payout per T-Share" />
<Polaroid imageSrc={PIC19} caption="Payout data" />
</div>
<div className="content">
<span className="bold">What You Should Know: Bitcoin 4 Year Cycle</span> Bitcoin has in the past followed a 4 year cycle based on it`s halvening. Every 4 years the supply of mined Bitcoin (BTC) get`s cut in half.<br /><br /> It started January 3rd 2009 with a payout of 50 BTC per block mined. The first halvening was November 28th 2012 where the reward was 25 BTC per block mined. Then May 11th 2020 it got cut to 6.25 BTC. The next halvening is around March 2024 where BTC miners get 3.125 BTC. Then in 2028 they get 1.56 BTC.<br /><br /> This continues until there is no more supply to be mined. Price has in the past moved up in anticipation of the halvening, followed by a sell off after the fact. And then there has been a blow off top a year after that. So if the history repeats we might get a blow off top in 2025/2026. The volatility has gone down in every cycle so the returns are deminishing. HEX has outperformed BTC as many tokens do, but they often follow Bitcoin as BTC is the biggest token and has the most liquidity.<br /><br /> According to Heart`s law tokens like Bitcoin and Ethereum move up and down together because they are bonded by the liquidity. The question is will history repeat? If it does then the next years will be filled with sideways and upside momentum!
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC13} caption="The 4 Year Bitcoin Cycle" />
<Polaroid imageSrc={PIC14} caption="Over 1 Year of Downside" />
<Polaroid imageSrc={PIC15} caption="Histrically 3 Years of Upside. Price Go UP!" />
</div>
<div className="content">
<span className="bold">Step 5: How Long Time to Mine? Visit HEX Vision</span> Go to the HEX Vision website at <a href="https://hex.vision/" target="_blank" rel="noreferrer noopener">hex.vision</a> Here you can see the mining supply the next 15 years. This is revolutionary and the first crypto where you can see the amounts of HEX supply being created by mining in the next 15 years. This is dynamic and change based on new miners being vreated and the actions of the market participants.<br /><br /> 1) Here is the miner supply for the next 7 years. When you make a new miner it is a good idea to put the length of the miner before any big spikes in the chart. This is because when there are big spikes, this means that there is more HEX coming to market and that potentialy can sell the price down more than in periods with less supply coming to market.<br /><br /> 2) Around august 2025 and august 2026 looks to be periods where there is less supply coming to market.<br /><br /> 3) Same for august 2029 looks to be before a big spike in supply of HEX coming to market. These years also looks good if we look at the 4 year Bitcoin cycle that has been present since 2009 when Bitcoin launched.
</div>
<div className="content">
<span className="bold">Step 6: Best Times to End Miners</span> If we assume that the cycle will continue we can try to time the market tops and have HEX miners coming out at the top of cycles because we want to take profits at higher prices. Here are the years paired so that for instance 2025/2026 = end of 2025. <br /><br />Future Cycle Tops? (year): 2025/2026, 2029/2030, 3033/3034, 3037/3038, 2041/2042, 2045/2046, 2049/2050. This is pure speculation and noone knows what the future holds. Do not invest any money that you can`t afford to loose.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC10} caption="7 Years of HEX Future Supply" />
<Polaroid imageSrc={PIC11} caption="Mine August 2025 & August 2026" />
<Polaroid imageSrc={PIC12} caption="Mine August 2029" />
</div>
<div className="content">
<span className="bold">Step 7: Insert HEX Amount & Length of Miner </span> Everybody would love to hold Bitcoin for 10-15 years. Now you can lock away your HEX to protect yourself from selling to early.<br /><br /> 1) Click on the Stake tab on top of the webpage. 2) The important part to notice is you can lock up your HEX to gain yield, but you don`t have to. If you don`t lock any you don`t get any yield. You can choose to lock between 1 and 5555 days. The longer you lock the more you get. The more you lock the more you get. But longer always pays better. Insert the number of HEX you would like to Mine. Insert number of days you would like to mine or click on the calendar to set the end date. Then click Stake. 3) When the Metamask pop up, review the fees and click Confirm.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC7} caption="Click Stake tab" />
<Polaroid imageSrc={PIC33} caption="Insert amount of HEX, Insert number of days & click Stake" />
<Polaroid imageSrc={PIC35} caption="Click Confirm" />
</div>
<div className="content">
<span className="bold">Step 8: Confirmation & Miner Details </span><br /><br /> 1) You will get a message that tells you that the miner is successfully started. You have 24 hours before the miner starts, if you end it before it starts you will get back your principal. Do not end the miner after 24 hours! Do not end it until it is finished without reading the rules above.<br /><br /> 2) If you scroll down on the page you will see details about your Active Miner. The start date is obviously the date you started the miner. The end date is the day will end the miner. You can hoover your mouse over the number to see the exact date it is finished. When a miner is finished it will move down to the Stake history tab below the active Stakes tab.<br /><br /> 3) Principal is the number of HEX you mined. T-shares show how many HEX you get per day per T-share. In this example the payout per T-share is 6.615 HEX and we have 0.226 T-shares, so we get 1.5 HEX in yield. The more T-shares you got, the more yield the smart contract generates. You can see there is a yield tab that shows your accumulated yield over time, it start at 0. Lastly you can see the total amount of HEX you have included yield and the current $ value of your miner. You can make as many miners as you like.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC36} caption="Miner Started Successfully!" />
<Polaroid imageSrc={PIC37} caption="Active Miners" />
<Polaroid imageSrc={PIC39} caption="Total HEX & Earnings" />
</div>
<div className="content">
<span className="bold">Step 9: Do NOT End Miner Before It Expire</span><br /><br /> 1) Do not end it until it is finished. If you end it before the time is up you need to know the consequences. See rules above.<br /><br /> 2) When the miner is finnished and 100% of the time has passed, the button will turn black. If you click it you will get two options. End stake or Good accounting. Ending a miner is a taxable event. If you choose Good accounting your HEX will not be minted but the T-shares will be taken out of the staked HEX supply and you will not incure any penalties and you can then End the miner whenever you would like to without risking your principal and you will get all your yield.<br /><br /> 3) If you hoover your mouse over the date you can see the exact date when the miner was started and the date it will end.
<div className="polaroid">
<Polaroid imageSrc={PIC40} caption="Do NOT Click End Stake Before It is 100% Finished" />
<Polaroid imageSrc={PIC43} caption="When 100% Finished Button Turn Black" />
<Polaroid imageSrc={PIC44} caption="Hoover Over to See Exact Date" />
</div>
</div>

<div className="content">
<span className="bold">Step 10: Examples HEX T-Shares</span> 1) Payout per T-share is 6.615 HEX, you get 6.615 HEX for every T-share you have. 2) Here is the payout you get if you mine 10000 HEX for 5555 days which is the max length. 3) You get 1.102 T-shares. So if you owned 1 T-share this day, you would get 6.615 HEX in yield.<br /><br /> To make this example easier we assume that the payout per day is 6 HEX (it will in increase over time), so if you get 6 HEX for 5555 days the yield will be 33330 HEX. If you owned 10 T-shares you would get 66.15 HEX in yield that day and 367463 HEX after 5555 days etc. Nobody knows what the price will be, but we can speculate that it will be higher than today ($0.010186 on Ethereum & $0.021396 on Pulsechain).
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC19} caption="The 4 Year Bitcoin Cycle" />
<Polaroid imageSrc={PIC20} caption="Over 1 Year of Downside" />
<Polaroid imageSrc={PIC21} caption="Payout to Mine HEX for 5555 Days (max)" />
</div>
<div className="content">
<span className="bold">Step 11: Payout for Different Mine Length</span> This is the payout you get for a 10 year mine, it is the same as a 15 year mine. So why would you mine over 10 years? Because you get yield for an extra 5 years and also get paid every time anyone else in the system Emergency End Stake (ending a stake too early). You also locked in your T-share rate when you started your miner. The number of HEX you need to aquire a T-share goes up over time. So if you mine for 10 years and end stake, then mine for 5 more years you will have to pay a lot more HEX to get the same number of T-shares. The system is designed to always make sure you get paid more if you mine for longer. It`s brilliant!<br /><br />1) For 10 years you get the same amount of T-shares as for a 15 year miner (5555 days) and 20000 HEX in bonus. 2) For 1 year you get 0.44 T-Shares and 2000 HEX in bonus. You can see that you get less T-Shares if your miner length is shorter. 3) For a 1 month miner you get 0.373 T-Shares and only 159 HEX in bonus.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC22} caption="Payout to Mine HEX for 10 Years" />
<Polaroid imageSrc={PIC23} caption="Payout to Mine HEX for 1 Year" />
<Polaroid imageSrc={PIC24} caption="Payout to Mine HEX for 1 Month" />
</div>
<div className="content">
<span className="bold">Step 12: Napkin Math - How Much HEX Would You Need to Make $10000 a Month?</span> The price of HEX on Pulsechain is 07.19.2023 is valued at $0.020081. This is the market price from coinpaprika.com.<br /><br /> 10000 / 0,020081 = 497983 HEX ($10000)<br />
497983 / 30 = 16600 HEX per day<br /><br />
How many T-shares to make 16600 HEX a day?
If we assume the average payout per T-share is 6 HEX per T-share<br /><br />
16600 / 6 = 2766 T-Shares<br />
What is the cost of 2766 T-shares?<br />
1 T-share cost 27212 HEX<br />
2766 * 27212 = 75,3M HEX
<br /><br />
That is a lot! You would have to pay $1,5M to get $10000 in monthly CF..
<br /><br />
But what if the price goes up? $0,10? You would need 100000 HEX in yield or 3333 HEX per day<br /><br />
3333 / 6 = 555,5 T-Shares<br />
555,5 * 27212 = 15,12M HEX<br />
15,12 * 0,1 = $1,5M<br /><br />

$1 HEX? 10000 HEX and 333 HEX a day<br /><br />
333 / 6 = 55,5 T-Shares<br />
55,5 * 27212 = 1,51M HEX<br />
1,51 * 1 = $1,5M<br /><br />

The number of HEX you need to get T-Shares increases with time so it will get even more expensive in the future. It is a good plan to aquire as many T-Shares as possible and mine for as long as possible to capture the value of the T-Shares when the price of HEX rises.
<br /><br />
If you want to make $1000 in monthly CF then you would need $150k at current share rate and HEX price.
If you want to make $100 in monthly CF then you would need $15k at current share rate and HEX price.<br /><br />
So if you can get 1,5M HEX today for $30122 (0.020081 *1500000). If HEX is $1 then you would need 1,5M HEX to make $10000 in monthly CF (assuming todays share rate).<br /><br /> This is speculation so take it with a grain of salt, nobody knows what the price will do but historically the price goes up and to the right in a bull market.
<br /><br />Would you rather aquire T-shares and HEX now to potentialy earn $10000 in monthly CF + have the ability to sell your HEX for $1.5M in the future or would you sell the bottom for $30k now?
This is an extreme example but the reason for showing this is to focus on the mindset and the potential for a longer time horizon.<br /><br />
</div>
<h2>HEX On TWo Chains (Ethereum & Pulsechain):</h2>
<div className="content">
<span className="bold">Pulsechain Is a Fork of Ethereum</span> On May 10th 2023 Richard Heart & his team forked the Ethereum blockchain and Pulsechain sprang into excistence. This was a full system state hard fork meaning that all the state and all the tokens was copied over. Everyone that held Ethereum or tokens, NFT`s etc. prior to the fork got copies of everything from Ethereum on Pulsechain. So there is HEX on Ethereum and HEX on Pulsechain with the exact same code. You can move HEX from one chain to the other, but since they are two different chains you need to wrap the tokens to send them over. To do this we need to use a bridge. When we bridge HEX from Ethereum to Pulsechain we get a representation of the HEX from Ethereum on Pusechain. So you have the native HEX on Pulsechain and the bridged in version of HEX from Ethereum.
</div>
<div className="content">
<span className="bold">Mine HEX On Pulsechain?</span> If you are conserned with gas costs it`s much cheaper to transact on Pulsechain. 1) To start a miner in July 2023 it only cost $0.01 on Pulsechain & $12.37 on Ethereum. 2) To switch between Pulsechain and Ethereum network just click the Pulsechain Mainnet tab on top right of stake page. 3) If you have bought HEX on Ethereum and the balance shows 0, don`t worry. As an example this balance shows 0 HEX. This is because this wallet does not have HEX on Pulsechain. To get HEX on Pulsechain we can bridge HEX from Ethereum to Pulsechain. In the near future there will be cross chain swaps where it will be much easier to get tokens across chains. For now we need to bridge the HEX over.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC45} caption="Mine HEX Pulsechain Cost: $0.01 vs. $12.37 on Ethereum" />
<Polaroid imageSrc={PIC8} caption="Click Pulsechain Mainet to Change Chain" />
<Polaroid imageSrc={PIC26} caption="0 HEX on Pulsechain" />
</div>
<div className="content">
<span className="bold"></span> If you do not know how to use the bridge and want Pulsechain HEX, then click the button below for a guide.
</div>
<a href="/bridge"><button className="btn">How to Bridge tokens</button></a>
<div className="content">
<span className="bold">Step 13: Get Pulsechain HEX</span> 1) First we bridge the HEX over from Ethereum to Pulsechain. 2) Then we swap HEX from Ethereum to HEX on Pulsechain. 3) The HEX from Pulsechain can be seen on the stake page! Go to step 7 in this guide to start the miner.
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC30} caption="Bridged Over HEX From Ethereum" />
<Polaroid imageSrc={PIC31} caption="Swap eHEX to HEX" />
<Polaroid imageSrc={PIC27} caption="HEX From Pulsechain Balance" />
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

export default Hex;