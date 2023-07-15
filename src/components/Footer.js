import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>&copy; {currentYear} Pulsechain Guide.</div>
      <div>Donations: 0x137640caDD0710379D741949c166c36410adfcbF</div>
    </footer>
  );
};

export default Footer;