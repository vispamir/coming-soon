import React from 'react';
import { ReactComponent as Logo } from './assets/icons/logo.svg';
import { ReactComponent as IconLinkedIn } from './assets/icons/linkedin.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconInstagram } from './assets/icons/instagram.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="."><Logo className="icon" /></a>
          </div>
          <div className="social">
            <a href="https://facebook.com/in/cashemireuniform" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <IconLinkedIn className="icon" />
            </a>
            <a href="https://twitter.com/cashemireuniform" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://instagram.com/cashemireuniform" title="Instagram" target="_blank" rel="noopener noreferrer">
              <IconInstagram className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:info@cashemire.org">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made for <a className="underlined" href="https://cashemire.org" target="_blank" rel="noopener noreferrer">Cashemire</a></span>
        </div>
      </div>
    );
  }
}

export default App;