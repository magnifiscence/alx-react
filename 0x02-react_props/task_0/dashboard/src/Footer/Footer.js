import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
    </footer>
  );
}

export default Footer;