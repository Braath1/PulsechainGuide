import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Resources.css';
import Navbar from './Navbar';
import PIC1 from '../images/rh.jpg';
import PIC2 from '../images/coffee.png';
import PIC3 from '../images/grfx.png';

const Resources = () => {
  return (
    <div>
        <Navbar />
        <div className="container-links">
          <div className="images-links">
            <h2 className="title">Crypto Coffee Youtube</h2>
            <Link to="https://www.youtube.com/@CryptoCoffee369/videos" target="_blank" rel="noreferrer noopener">
              <img className="image" src={PIC2} alt="Richard Heart Youtube" />
            </Link>
          </div>
          <div className="images-links">
            <h2 className="title">CRYPTOGRFX Youtube</h2>
            <Link to="https://www.youtube.com/@CRYPTOGRFX/videos" target="_blank" rel="noreferrer noopener">
              <img className="image" src={PIC3} alt="Richard Heart Youtube" />
            </Link>
          </div>
          <div className="images-links">
            <h2 className="title">Richard Heart Youtube</h2>
            <Link to="https://www.youtube.com/@RichardHeart/videos" target="_blank" rel="noreferrer noopener">
              <img className="image" src={PIC1} alt="Richard Heart Youtube" />
            </Link>
          </div>
        </div>
        <div className="links">
        <Link to="https://www.howtopulse.com/" target="_blank" rel="noreferrer noopener">
        <h2>howtopulse.com</h2>
        </Link>
        <Link to="https://pulsechain.com/" target="_blank" rel="noreferrer noopener">
        <h2>pulsechain.com</h2>
        </Link>
        <Link to="https://hex.com/" target="_blank" rel="noreferrer noopener">
        <h2>hex.com</h2>
        </Link>
        <Link to="https://app.powerbi.com/view?r=eyJrIjoiYWZiMzg4ZDUtOTBlMC00ZjRiLTkxMzAtMWY0ZmNiYmIxZDg4IiwidCI6IjFjOGUxYTkyLThjMDUtNGY2Mi05YTIzLWRmMGI5YjZkNjIzOCIsImMiOjF9" target="_blank" rel="noreferrer noopener">
        <h2>hexfire.io</h2>
        </Link>
        <Link to="https://hex.vision/" target="_blank" rel="noreferrer noopener">
        <h2>hex.vision</h2>
        </Link>
        <Link to="https://gopulse.com/" target="_blank" rel="noreferrer noopener">
        <h2>gopulse.com</h2>
        </Link>
        <Link to="https://pulsecoinlist.com/" target="_blank" rel="noreferrer noopener">
        <h2>pulsecoinlist.com</h2>
        </Link>
        </div>
        <Footer />
    </div>
  )
}

export default Resources;