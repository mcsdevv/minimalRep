import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <footer className="footer-section pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-area">
                                    <div className="footer-heading">
                                        <h3>About Us</h3>
                                    </div>

                                    <p>We are a dynamic team of leads Generations and Activation EXPERTS. We generate audience data, marketing channels, design marketing ads, animation, and business website, all from a single platform.</p>

                                    <ul className="footer-social">
                                        <li>
                                            <Link href="#">
                                                <a className="bg-3955bc">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a className="bg-1da1f2">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a className="bg-004dff">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a className="bg-0273af">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-item-area">
                                    <div className="footer-heading">
                                        <h3>Important Links</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/about-us">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/projects">
                                                <a>Our Project</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/team">
                                                <a>Our Team</a>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>FAQ</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-item-area">
                                    <div className="footer-heading">
                                        <h3>Featured Service</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/services">
                                                <a>Facebook Marketing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>SMS Marketing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Email Marketing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Instagram Campaigns</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Social Media</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="mb-30">
                                    <div className="footer-heading">
                                        <h3>Contact</h3>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-call-answer"></i>
                                        <h3>Phone</h3>
                                        <span>(+44) 757-095-5946</span>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-envelope"></i>
                                        <h3>Email</h3>
                                        <span>adgipsey@gmail.com</span>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-placeholder-filled-point"></i>
                                        <h3>Nigeria</h3>
                                        <span className="mb-2">18 Donatus Odum street, Lekki Lagos State</span>
                                        
                                        <h3 className="mt-2">United Kingdom</h3>
                                        <span>88 Thornton Road, Bradford, England, BD1 2DW, United Kingdom</span>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="default-animation">
                        <div className="shape-img1">
                            <img src={require("../../images/shape/12.svg")} alt="image" />
                        </div>
                        <div className="shape-img2">
                            <img src={require("../../images/shape/13.svg")} alt="image" />
                        </div>
                        <div className="shape-img3">
                            <img src={require("../../images/shape/14.png")} alt="image" />
                        </div>
                        <div className="shape-img4">
                            <img src={require("../../images/shape/15.png")} alt="image" />
                        </div>
                        <div className="shape-img5">
                            <img src={require("../../images/shape/2.png")} alt="image" />
                        </div>
                    </div> 
                </footer>

                {/* Copyright footer */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p>
                                    © {currentYear} AdGipsey. All Rights Reserved by <a href="#" target="_blank">AdGipsey</a>
                                </p>
                            </div>

                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;