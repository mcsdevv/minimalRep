import React, { Component } from 'react';

class AnalysisFormContent extends Component {
    render() {
        return (
            <section className="analysis-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-image">
                                <img src={require("../../images/6.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-area-content">
                                <span>ADGIPSEY</span>
                                <h3>Contact Us</h3>
                                <p>We care about you, kindly fill in the form below if you want to tell us, ask anything. Our Team is available 24/7 to respond to your enquiries.</p>
                            </div>

                            <form className="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="text" id="text" className="form-control" placeholder="Email *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="phone" className="form-control" placeholder="Phone *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="website" className="form-control" placeholder="Website *" />
                                        </div>
                                    </div>
                                </div>

                                <div className="send-btn">
                                    <button type="submit" className="default-btn-one">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AnalysisFormContent;