import React, { Component } from 'react';
import Link from 'next/link';

class SidebarModal extends Component {
    state = {
        modal: false
    };
 
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <div className={`sidebar-modal ${this.props.active}`}>
                <div className="sidebar-modal-inner">
                    <div className="sidebar-about-area">
                        <div className="title">
                            <h2>About Us</h2>
                            <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of successful communication. The customer is king, their lives and needs are the inspiration.</p>
                        </div>
                    </div>

                    {/* Instagram feed */}
                    <div className="sidebar-instagram-feed">
                        <h2>Instagram</h2>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.1.jpg")} alt="image" /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.2.jpg")} alt="image" /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.3.jpg")} alt="image" /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.4.jpg")} alt="image" /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.5.jpg")} alt="image" /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.0.jpg")} alt="image" /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.3.jpg")} alt="image" /></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.1.jpg")} alt="image" /></a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="sidebar-contact-area">
                        <div className="contact-info">
                            <div className="contact-info-content">
                                <h2>
                                    <span className="info">(+44) 757-095-5946</span>
                                    <span className="or">OR</span>
                                    <span className="info">adgipsey@gmail.com</span>
                                </h2>
        
                                <ul className="social">
                                    <li>
                                        <Link href="https://twitter.com/adgipsey">
                                            <a target="_blank"><i className="fab fa-twitter"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://youtube.com/adgipsey">
                                            <a target="_blank"><i className="fab fa-youtube"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://facebook.com/adgipsey">
                                            <a target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://linkedin.com/adgipsey">
                                            <a target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://instagram.com/adgipsey">
                                            <a target="_blank"><i className="fab fa-instagram"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Close Modal */}
                    <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                        <i className="fas fa-times"></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default SidebarModal;