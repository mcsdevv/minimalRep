import React, { Component } from 'react';
import Link from 'next/link';

class FeaturesContent extends Component {
    render() {
        return (
            <section className="features-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-content-area">
                                <span>Our Features</span>
                                <h3>Be Ahead with our Excellent Services</h3>
                                <p>
                                    At Adgipsey, we're all about action. What are the specific actions that fuel your company's growth? Do you need
                                    more consumer to buy your product? Want more people to subscribe to your list, download your app, or learn about
                                    your brand? Generate more leads for your products and services? whatever action youre targetting, Adgipsey can help
                                </p>

                                <div className="features-btn">
                                    <Link href="https://dashboard.adgipsey.com">
                                        <a className="features-btn-one">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f1eff8">
                                        <div className="icon">
                                            <i className="flaticon-seo"></i>
                                        </div>
                                        <h3>Content Generation</h3>
                                        <p>Helping brands tell their stories in such a unique manner that the audience can relate and achieve corporate objectives by facilitating engagement</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-fbe6d4">
                                        <div className="icon">
                                            <i className="flaticon-analytics"></i>
                                        </div>
                                        <h3>Email Marketing</h3>
                                        <p>Digital marketing done by sending emails to prospects and customers for your business/brand.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f0fffc">
                                        <div className="icon">
                                            <i className="flaticon-laptop"></i>
                                        </div>
                                        <h3>Social Media Marketing</h3>
                                        <p>Social media platforms and websites to promote our customers product or service.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f8e1eb">
                                        <div className="icon">
                                            <i className="flaticon-analysis-1"></i>
                                        </div>
                                        <h3>SMS Marketing</h3>
                                        <p>Text message marketing for businesses and organizations to send out special coupons, promotions, alerts and more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="features-animation">
                    <div className="shape-img1">
                        <img src={require("../../images/shape/8.png")} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={require("../../images/shape/5.png")} alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesContent;