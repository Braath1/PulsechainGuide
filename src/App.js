import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BridgeTokens from './components/BridgeTokens';
import Metamask from './components/Metamask';
import Coinbase from './components/Coinbase';
import Trezor from './components/Trezor';
import Ledger from './components/Ledger';
import Pulsechain from './components/Pulsechain';
import ChangeNow from './components/ChangeNow';
import FiveSteps from './components/FiveSteps';
import Resources from './components/Resources';
import AddPulsechain from './components/AddPulsechain';
import Plsx from './components/Plsx';
import TrezorBuy from './components/TrezorBuy';
import Prc20 from './components/Prc20';
import Articles from './components/Articles';
import TrezorTx from './components/TrezorTx';
import ConnectTrezor from './components/ConnectTrezor';
import CoinbaseMetamask from './components/CoinbaseMetamask';
import MetamaskSwap from './components/MetamaskSwap';
import Hex from './components/Hex';
import HexArticle from './components/HexArticle';
import Hedron from './components/Hedron';
import Icosa from './components/Icosa';
import Start from './components/Start';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bridge" element={<BridgeTokens />} />
        <Route path="/metamask" element={<Metamask />} />
        <Route path="/coinbase" element={<Coinbase />} />
        <Route path="/trezor" element={<Trezor />} />
        <Route path="/ledger" element={<Ledger />} />
        <Route path="/pulsechain" element={<Pulsechain />} />
        <Route path="/change-now" element={<ChangeNow />} />
        <Route path="/five-steps" element={<FiveSteps />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/add-pulsechain" element={<AddPulsechain />} />
        <Route path="/plsx" element={<Plsx />} />
        <Route path="/trezor-buy" element={<TrezorBuy />} />
        <Route path="/prc20" element={<Prc20 />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/trezor-tx" element={<TrezorTx />} />
        <Route path="/connect-trezor" element={<ConnectTrezor />} />
        <Route path="/coinbase" element={<Coinbase />} />
        <Route path="/coinbase-metamask" element={<CoinbaseMetamask />} />
        <Route path="/metamask-swap" element={<MetamaskSwap />} />
        <Route path="/hex" element={<Hex />} />
        <Route path="/hex-article" element={<HexArticle />} />
        <Route path="/hedron" element={<Hedron />} />
        <Route path="/icosa" element={<Icosa />} />
        <Route path="/start" element={<Start />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;