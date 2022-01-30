import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
    state = { socialData: [
        { icon: 'fab fa-facebook-f', id: 1, link: "https://facebook.com/afrinifty" },
        { icon: 'fab fa-twitter', id: 2, link: 'https://twitter.com/afrinifty'},
        { icon: 'fab fa-instagram', id: 3, link: 'https://www.instagram.com/afrinifty'},
        // { icon: 'fab fa-discord', id: 3, link: 'https://www.instagram.com/afrinifty/' },
    ],
}
    render() {
        return (
            <footer className="footer-area">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div style={{ textAlign: 'center'}}className="footer-items">
                                    {/* Logo */}
                                    <a className="navbar-brand" href="/">
                                        <img style={{ height: 100, width: 100 }} src="img/logo.png" alt="afninifty logo" />
                                    </a>
                                    <p style={{ textAlign: 'left' }}>The first and largest ORIGINAL African NFT marketplace</p>
                                    {/* Social Icons */}
                                    <div className="social-icons d-flex">
                                        {this.state.socialData.map((item, idx) => {
                                            return (
                                                <a key={`sd_${idx}`} className={item.link} href={item.link}>
                                                    <i className={item.icon} />
                                                    <i className={item.icon} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title">Company</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Careers</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title">Community</h4>
                                    <ul>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Partners</a></li>
                                        <li><a href="#">Suggestions</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Newsletter</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-12 col-sm-6 col-lg-3">
                                
                                <div className="footer-items">
                                    
                                    <h4 className="footer-title">Subscribe to us</h4>
                                    
                                    <div className="subscribe-form d-flex align-items-center">
                                        <input type="email" className="form-control" placeholder="info@yourmail.com" />
                                        <button type="submit" className="btn"><i className="icon-paper-plane" /></button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left">©2022 AfriNifty, All Rights Reserved.</div>
                                    {/* Copyright Right */}
                                    {/* <div className="copyright-right">Made with <i className="fas fa-heart" /> In <a href="#">Themeland</a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;