import React, { Component } from 'react'
import Link from 'next/link';
// import Data from './../../images/mine.PNG';



export default class Dat extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/mine.png" alt="Adgipsey Web Development" />

                                </div>

                                {/* Article details content */}
                                <div className="article-content">

                                    <h3>Data Scrapping & Mining</h3>

                                    <p>The number of active email users is forecasted to reach 4.3 billion in 2023. </p>

                                    <h3> Data Scraping</h3>
                                    <h4> As a company, we are very experienced with Data scraping. We specialise in </h4>
                                    <p> Automated Data Scraping</p>
                                    <p> Data Scraping with Dynamic web queries</p>




                                   

                                </div>

                                {/* Article footer */}
                                <div className="article-footer">
                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li>
                                                <Link href="#">
                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fadgipsey.com/facebook" target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                {/* <a href="http://www.twitter.com/share?url=http://mysite.org/foo.htm?bar=123&baz=456">Tweet</a> */}

                                                    <a href="http://www.twitter.com/share?url=hhtps://adgipsey.com/facebook" target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
