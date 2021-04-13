import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
}

class TestimonialSection extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="testimonial-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="testimonial-content-area">
                                <span>Testimonial</span>
                                <h3>What Our Client Say</h3>
                                <p>We have worked with clients at from different places around the world. We make sure we deliver what is satisfactory always.</p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            {this.state.display ? <OwlCarousel 
                            className="testimonial-slides owl-carousel owl-theme"
                                {...options}
                            >
                                <div className="testimonial-single-item">
                                    <div className="testimonial-image">
                                        <img src={require("../../images/client-image/1.jpg")} alt="image" />
                                    </div>
                                    <div className="testimonial-content-text">
                                        <h3>Martin Adedayo</h3>
                                        <span>Product Manager</span>
                                        <div className="icon">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                        <p>The user experience done on my website was very sleek, I have referred more peope to AdGipsey just for this.</p>
                                    </div>
                                </div>

                                <div className="testimonial-single-item">
                                    <div className="testimonial-image">
                                        <img src={require("../../images/client-image/2.jpg")} alt="image" />
                                    </div>
                                    <div className="testimonial-content-text">
                                        <h3>Edward Chukwu</h3>
                                        <span>CEO & Founder</span>
                                        <div className="icon">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                        <p>At first, my app seemed like i wasn't sure of what i wanted. But when I explained to the  CTO at AdGipsey, he really made me have a clearer understanding.</p>
                                    </div>
                                </div> 

                                <div className="testimonial-single-item">
                                    <div className="testimonial-image">
                                        <img src={require("../../images/client-image/3.jpg")} alt="image" />
                                    </div>
                                    <div className="testimonial-content-text">
                                        <h3>Bala Mohammed</h3>
                                        <span>Ceo & Sustainable designer</span>
                                        <div className="icon">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                        <p>Not fully understanding the concept of data has been an issue. I finally found a company that could explain and deliver what i needed. Like they read my mind.</p>
                                    </div>
                                </div> 

                                <div className="testimonial-single-item">
                                    <div className="testimonial-image">
                                        <img src={require("../../images/client-image/4.jpg")} alt="image" />
                                    </div>
                                    <div className="testimonial-content-text">
                                        <h3>Mike Izu</h3>
                                        <span>Underwriter</span>
                                        <div className="icon">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                        <p>All i can say is, follow the first hunch that made you click this link to their site, It will do you a lot good as i am still enjoying the services they rendered without complaints</p>
                                    </div>
                                </div>

                                <div className="testimonial-single-item">
                                    <div className="testimonial-image">
                                        <img src={require("../../images/client-image/3.jpg")} alt="image" />
                                    </div>
                                    <div className="testimonial-content-text">
                                        <h3>Toritse Joy</h3>
                                        <span>Agent Manager</span>
                                        <div className="icon">
                                            <i className="flaticon-quote"></i>
                                        </div>
                                        <p>The suport system is truely available at any time, i remember not understanding how to go about some certain things, they didn't mind. I was wowed</p>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialSection;