import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';
import ModalVideo from 'react-modal-video';

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="main-banner-content">
                                            <h1>Do it all with AdGipsey</h1>
                                            <p>Generate audience data, marketing channels, design marketing ads, animation, and business website, all from a single platform.</p>

                                            <div className="banner-btn">
                                                <Link href="/about-us">
                                                    <a className="default-btn-one">More About Us</a>
                                                </Link>

                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                                        className="video-btn popup-youtube"
                                                    > 
                                                        Watch Video <i className="flaticon-play-button"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* If you want to change the video need to update below videoID */}
                                   
                                   
                                    <div className="col-lg-6 col-md-12">
                                        <div className="banner-image">
                                            

                                            <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                <img src={require("../../images/saas-image/girl1.png")} alt="The First Girl" />
                                            </ReactWOW>

                                            <ReactWOW animation='zoomIn' delay='0.5s'>
                                                <img src={require("../../images/saas-image/girl2.png")} alt="The Second Girl" />
                                            </ReactWOW>

                                             <ReactWOW animation='fadeInRight' delay='0.5s'>
                                                 <img src={require("../../images/saas-image/monitor.png")} alt="monitor" />
                                             </ReactWOW>

                                             <ReactWOW animation='zoomIn' delay='0.5s'>
                                                 <img src={require("../../images/saas-image/4.png")} alt="4" />
                                             </ReactWOW>
                                            
                                            <ReactWOW animation='zoomIn' delay='0.5s'>
                                                <img src={require("../../images/saas-image/7.png")} alt="7" />
                                            </ReactWOW>
                                            
                                            {/* Main Image */}
                                            
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="banner-bg-text">ADGIPSEY</div> */}
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                   
                    <div className="shape-img9">
                        <img src={require("../../images/shape/7.png")} alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src={require("../../images/shape/5.png")} alt="image" />
                    </div>
                    <div className="shape-img11">
                        <img src={require("../../images/shape/11.png")} alt="image" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainBanner;
