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
          <li><a href="https://www.linkedin.com/in/michael-schwartz-b8039b12/">LinkedIn</a></li>
          <li><a href="https://github.com/MichaelSchwar3">Github</a></li>
          <li><a href="https://angel.co/michael-schwartz-43">AngelList</a></li>
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
          <li><a href="https://www.mschwartz.io">Portfolio Site</a></li>
          <li><a href="https://www.athlinks.com/athletes/292342385">Athlinks</a></li>
          <li><a href="https://www.newyorkcares.org/">New York Cares</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
