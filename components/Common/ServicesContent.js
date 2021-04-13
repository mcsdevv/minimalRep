import React, { Component } from 'react';
import Link from 'next/link';
import ActiveLink from '../../utils/ActiveLink';

class ServicesContent extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Services</span>
                        <h3>How We Can Help?</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-faddd4">
                                        <i className="flaticon-landing-page"></i>
                                    </div>
                                    <h3>
                                            <Link href="/facebook">Facebook Campaigns</Link>
                                    </h3>
                                    <p>We target certain audience for your business and product advertisements, this reaches relevant users of your product on Facebook.</p>
                                </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-cafbf1">
                                    <i className="flaticon-goal"></i>
                                </div>
                                <h3>
                                        <Link href="/instagram">Instagram Campaigns</Link>
                                </h3>
                                <p>We provide strategies for your business as you take your brand into the market, to start relating with the world through instagram</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-ddd5fb">
                                    <i className="flaticon-contract"></i>
                                </div>
                                <h3>
                                        <Link href="/web">Web Designs</Link>
                                </h3>
                                <p>Helping businesses succeed through excellent digital services, focused on results designing top notch websites. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-fcdeee">
                                    <i className="flaticon-application"></i>
                                </div>
                                <h3>
                                        <Link href="/consulting">Digital Consulting</Link>
                                </h3>
                                <p>We help to know what works and what doesn't in thier various industries.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c5ebf9">
                                    <i className="flaticon-seo"></i>
                                </div>
                                <h3>
                                        <Link href="/email">Email Marketing</Link>
                                </h3>
                                <p>Convert people into members, customers or supporters with our Email Marketing portal </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5">
                                    <i className="flaticon-data-recovery"></i>
                                </div>
                                <h3>
                                        <Link href="/data">Data Scraping</Link>
                                </h3>
                                <p>Data is King, so we are very passionate about getting you the data you need</p>
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
            </section>
        );
    }
}

export default ServicesContent;