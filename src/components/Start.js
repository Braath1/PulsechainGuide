import React from 'react';
import Navbar from './Navbar';
import Polaroid from './Polaroid';
import PIC from '../images/psychology.jpg';
import PIC2 from '../images/stake11.png';
import PIC3 from '../images/stake12.png';
import PIC4 from '../images/bull3.png';
import PIC5 from '../images/start.png';
import PIC6 from '../images/question.jpg';
import PIC7 from '../images/wait.jpg';
import PIC8 from '../images/cry.avif';
import PIC9 from '../images/money.jpg';
import './Start.css'; // Import the CSS file for the component

const Start = () => {
  return (
    <div className="metamask-container">
      <Navbar />

      <div className="metamask-content">
      <h2>Is Cryptocurrency For You?</h2>
        {/* Rest of the content */}
<div className="content">
<span className="bold">Before You Start:</span> There are risks involved with investing & trading in crypto. The volatility/swings in the markets will be brutal. You have to stomache 70%-90% price swings to the downside.<br /><br />
<div className="content">
<span className="bold">Is This a Good Buy? Or Sell?</span> Do you know what to look for in a chart? Would you buy Pulsechain (PLS) by looking at this chart?
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC5} caption="Would You Buy Or Sell?" />
<Polaroid imageSrc={PIC6} caption="Would You Buy?" />
</div>
 Many people believe that crypto is a get rich quick scheme but it is the oposite. If you have a short time frame you will probably loose your money. If you want to invest in crypto your time frame should be many years. You should be willing to hold a position for years. It is very easy to say that you will have a long time perspective but when your position is down 70% will you be able to sleep? Will you blame everybody else than yourself? You have to take responsibility for your own decisions. Never invest money that you can`t afford to loose.<br /><br /> The best mindset is to invest the money and consider it gone, you will not see them in many years. It is expected to have strong emotional reactions to the market swings but you can`t act on them. You got to learn to see down periods as oportunities and they should be expected not feared. You have to buy when you are scared and sell when you are greedy and it seems like the price will go up forever.<br /><br /> Never expect the markets to behave the way you want and don`t expect things to go as planned. It is important to have a plan, but plan for multiple outcomes. Always have a plan for entry and exit before you enter a position. Most people think they are smarter than the market, smarter than the average and that they are not part of the sheep. 90% of people loose their money trading. Fear and greed are the feelings you must overcome. 
 <br /><br />
 <div className="polaroid">
<Polaroid imageSrc={PIC8} caption="Learn to Controll Your Emotions" />
<Polaroid imageSrc={PIC7} caption="Patience Is Key" />
</div>
 <br /><br />One of the most difficult things to do and one of the most important skills to have is patience and the ability to not chase all the shiny objects that surely will try to lead you off your path. Luckily for you there are some tools available that will make this journey easier. HEX crypto will force you to become patient and stay commited to your plan. Another thingh with crypto is that everything is up to you. There are no middle men that hold your funds, you hold your own keys and have full controll of your funds, it is like you have your own bank. There is no support you can call to reset your password. It is all your responsibility. You have to be willing to take this responsibility and guard your own keys. Where there is risk there is also reward.
</div>
<div className="content">
<span className="bold">What You Should Know: Bitcoin 4 Year Cycle</span> Bitcoin has in the past followed a 4 year cycle based on it`s halvening. Every 4 years the supply of mined Bitcoin (BTC) get`s cut in half.<br /><br /> This continues until there is no more supply to be mined. Price has in the past moved up in anticipation of the halvening, followed by a sell off after the fact. And then there has been a blow off top a year after that. So if the history repeats we might get a blow off top in 2025/2026. The volatility has gone down in every cycle so the returns are deminishing. HEX has outperformed BTC as many tokens do, but they often follow Bitcoin as BTC is the biggest token and has the most liquidity.<br /><br /> According to Heart`s law tokens like Bitcoin and Ethereum move up and down together because they are bonded by the liquidity. The question is will history repeat? If it does then the next years will be filled with sideways and upside momentum!
</div>
<div className="polaroid">
<Polaroid imageSrc={PIC2} caption="The 4 Year Bitcoin Cycle" />
<Polaroid imageSrc={PIC3} caption="Over 1 Year of Downside" />
<Polaroid imageSrc={PIC4} caption="Histrically 3 Years of Upside. Price Go UP!" />
</div>
<div className="content">
<span className="bold">The Psychology of Trading</span> This chart is probably the most important chart of them all. It shows how market swings are related to emotions. If you have been in the markets for a while and have some experience you will know that this chart is very accurate. First question you should ask yourself before buying anything is where are we on the chart? With time try to recognize where we are in the cycle because the cycles repeat just like the seasons in the weather.
</div>
<img className="guide" src={PIC} alt="Buy Crypto Changenow.io" />

<div className="content">
<span className="bold">What Have You Learned?</span> 1) Revisit the chart below, do you think it is a good buy? Or a sell? 
<br /><br />
<div className="polaroid">
<Polaroid imageSrc={PIC5} caption="High Potential for Earning" />
<Polaroid imageSrc={PIC9} caption="High Potential for Earning" />
</div>
<br /><br />
The only way to succeed is to make up your own mind and trust your own judgement. Follow people that have a track record and is known to be right way more than they are wrong. Best advice I could give is to listen to Richard Heart and accept that there are people that are smarter than you. Might as well learn from them! <br /><br />It is up to you if you want to invest in crypto currency or not. There`s a lot of freedom and blockchain is censorship resistant. In crypto, censorship resistance refers to the freedom to transact, the freedom from confiscation, and transaction immutability. No middle men can tell you what to do, everyone is free to use the blockchain and everyone have the same opportunities. You need money to invest in crypto but anyone with a computer and internet connection can do transactions, borrow and lend money, send transactions to anyone, more securely 24 hours a day all over the globe without anyone being able to stop the transactions. That is powerfull. I hope you find this guide usefull. Good Luck!
</div>

<div className="content">
<span className="bold">Disclaimer:</span>
The information provided here is for informational purposes only and should not be considered financial or investment advice. Cryptocurrency transactions involve risks, and individuals should conduct their own research and exercise caution when using cryptocurrency exchange platforms.
</div>

      </div>
    </div>
  );
}

export default Start;