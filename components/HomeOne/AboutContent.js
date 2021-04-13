import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src={require("../../images/1.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content">
                                <span>About Us</span>
                                <h3>We are a dynamic team of leads Generations and Activation EXPERTS</h3>
                                <strong>Generate audience data, marketing channels, design marketing ads, animation, and business website, all from a single platform.</strong>
                                <p>AdGipsey is a company made of dynamic Experts and Creatives who are tech-oriented and want to help individuals, groups, companies to generate data and make tech experience worth every click.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-6 col--6">
                                    <div className="single-fun-facts">
                                        <h3>
                                            165
                                            <span className="sign-icon">+</span>
                                        </h3>
                                        <p>Project Completed</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-6 col-6">
                                    <div className="single-fun-facts">
                                        <h3>
                                            165
                                            <span className="sign-icon">+</span>
                                        </h3>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        );
    }
}

export default AboutContent;