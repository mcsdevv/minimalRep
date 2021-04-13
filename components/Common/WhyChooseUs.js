import React, { Component } from 'react';
import Link from 'next/link';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="choose-content-area">
                                <span>Why Choose Us</span>
                                <h3>Outstanding Digital Experience</h3>
                                <p>At AdGipsey we have the people, the ideas and the know-how to get your business where you want it to be</p>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>Fast Working Process</h4>
                                    <p>We help brands Run and manage different campaigns simultaneously from your dashboard efficiently.</p>
                                </div>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>Dedicated Team Member</h4>
                                    <p>We have top experts that are ready to build your product and buisness, they are decdicated and capable.</p>
                                </div>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>24/7 Support</h4>
                                    <p>Our support system team is available at any time to attend and handle any to any request you may have.</p>
                                </div>

                                <div className="choose-btn">
                                    <Link href="https://dashboard.adgipsey.com">
                                        <a className="default-btn-one">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="choose-image">
                                <img src={require("../../images/2.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;