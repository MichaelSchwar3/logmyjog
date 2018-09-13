import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div id="footer-bar">
      <div id="iphone-img">
        <img src={window.iphoneUrl}/>
      </div>
      <div id="footer-social">
        <ul>
          <li>SOCIAL</li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Github</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
      <div id="footer-help">
        <ul>
          <li>HELP</li>
          <li><Link to='/login'>Login/Register</Link></li>
          <li><a href="https://www.google.com">Google</a></li>
          <li><a href="https://www.stackoverflow.com">StackOverFlow</a></li>
        </ul>
      </div>
      <div id="footer-about">
        <ul>
          <li>ABOUT ME</li>
          <li><a href="#">NY Giants</a></li>
          <li><a href="#">Athlinks</a></li>
          <li><a href="#">Movies</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
