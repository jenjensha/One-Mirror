import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
        <footer id="myFooter">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <img src="/1520357247-picsay.png" alt="restart_logo" style={{width: '250px', height: '125px',margin:'0px'}} />
              </div>
              <div className="col-sm-2">
                <h5>Restart Network</h5>
                <ul>
                  <li><a href="https://restart.network/about">About</a></li>
                  <li><a href="javascript:void(0)">Press</a></li>
                  <li><a href="#" onclick="vex.dialog.alert({ unsafeMessage: '<b>Thanks for your interest in Restart Network</b><p> Email is the best way to reach us. We are a small team working on a dream, and that takes a lot of time. We will try to reach back as soon as possible.</p><br><p>Partnerships: teodor@restart.network</p><p>Admissions & Program Info: fred@restart.network</p><p>Press & Media: telma@restart.network</p>' }); return false">Contact</a></li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h5>ONE Program</h5>
                <ul>
                  <li><a href="https://restart.network/one/">Discover Restart ONE</a></li>
                  <li><a href="https://restart.network/one/curriculum.html">Curriculum</a></li>
                  <li><a href="https://restart.network/one/admissions.html">Apply</a></li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h5>Get Involved</h5>
                <ul>
                  <li><a href="#" onclick="vex.dialog.alert({ unsafeMessage: '<b>Drive Social Change and Hire People You Will Love</b><p> We work with leading tech companies in the Netherlands to drive social change and expand educational opportunity.</p><p>If you want to learn more about our Developer Period, and how your company can lead the way towards a more inclusive tech industry, reach out directly to Teodor at: <b><center>teodor@restart.network</center></b></p>' }); return false">Hire</a></li>
                  <li><a href="https://useplink.com/payment/cR9BfsmzWQ7hFDzU7bjC" target="_blank">Donate</a></li>
                  <li><a className="typeform-share link" href="https://restartone.typeform.com/to/RyATbT" data-mode="popup" target="_blank">Volunteer </a> </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <div className="social-networks">
                  <a href="https://twitter.com/Restart_Network" className="twitter"><i className="fa fa-twitter" /><img src="/twitter_white-transparent-logo.png" height="50px" width="50px" /></a>
                  <a href="https://www.facebook.com/restartnetwork" className="facebook"><i className="fa fa-facebook" /><img src="/facebook-radius-transparent-logo-15.png" height="50px" width="50px" /></a>
                  <a href="https://instagram.com/restartnetwork/" className="instagram"><i className="fa fa-instagram" /><img src="/instagram-512.png" height="50px" width="50px" /></a>
                </div>
                <button type="button" className="btn btn-default"><a href="https://useplink.com/payment/cR9BfsmzWQ7hFDzU7bjC" target="_blank">Donate</a></button>
              </div>
            </div>
          </div>
        <div className="footer-copyright">
          <p>On a global mission started with <i style={{color: 'red'}} className="heart" aria-hidden="true" />
in Rotterdam, The Netherlands </p>
        </div>
        </footer>

        </div>
        )
    }
}

export default Footer;