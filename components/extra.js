import React, { Component } from 'react';
import Link from 'next/link';
// import FacebookSidebar from './FacebookSidebar';
// import FacebookImage from "../../images/adAbout.jpg"

class SingleFacebookContent extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={FacebookImage} alt="image" />
                                </div>

                                {/* Article details content */}
                                <div className="article-content">

                                    <h3>The Complete Guide to Getting Started with Facebook Ads</h3>

                                    <p>Facebook seems to be one of the most immediate ways to impact the reach of your content</p>

                                    <h3>Step 1: Set some goals for your Facebook Ads</h3>
                                    <p>Before you jump in and create any adverts, it’s important to first think about why you’re advertising and what you’re aiming to achieve. By setting yourself a few goals ahead of going live with ads, you also have something to measure your success against.</p>
                                    <p>For example, if you’re looking to increase downloads of your mobile app through Facebook Ads, you could set a goal of 100 downloads in the first month. This will also help you when it comes to choosing the correct objective for your Facebook Ads campaign</p>
                                    <blockquote className="wp-block-quote">
                                        <p>Facebook has over 2 billion users, this shows that you can get value for money spent on facebook advertising .</p>
                                        <cite>AdGipsey</cite>
                                    </blockquote>




                                    <h3>Step 2: Head over to Our Facebook Ad Portal</h3>
                                    <p>You can run your ad on Facebook, Instagram or both. To advertise on instagram , you'll first need to link an instagrambusiness profile to your Facebok page.</p>
                                    <p>You'll need Admin user permissions on your facebook Page to post as through AdGipsey</p>
                                    <p>AdGipsey's Facebook ads have a unique billing system. You'll set your budget and purchase your ad up front. If your instagram or Facebook ad doesnt fit Facebook ad requirements, Facebook can reject your ad</p>


                                    <blockquote className="wp-block-quote">
                                        <p>Please disable ad Blockers in your web browser to make sure AdGipsey Ad Builder runs smoothly</p>
                                        <cite>AdGipsey Team</cite>
                                    </blockquote>

                                    <h3>Step 3: Connect to Facebook</h3>
                                    <p>You will need to connect to facebook to give us permision to your facebook page to use  our ad Builder smoothly</p>
                                    <p>Note, that all connections are user prompted which means nothing is automatic. We strictly adhere to Facebook Terms</p>
                                    <p>Once you're connected to facebook, you can select where to show your ad. Facebook Only, Instagram only or Both</p>


                                    <blockquote className="wp-block-quote">
                                        <p>Kindly note that Once our system does not detect a connected page, there will be error thrown by our ad builder</p>
                                        <cite>AdGipsey Team</cite>
                                    </blockquote>

                                    <h3>Step 4: Set your budget</h3>
                                    <p>Now it's time to move on to the budget step of our ad builder where you will set your total budget.</p>
                                    <p>in the Budget step of the Ad Builder, click Edit Budget, select the schedule enter yout total budget and save </p>


                                    <blockquote className="wp-block-quote">
                                        <p>Setting your budget and schedule is very imort to your ad creation</p>
                                        <cite>AdGipsey Team</cite>
                                    </blockquote>

                                    <h3>Step 5: Design your content</h3>
                                    <p>Now it's time to design your ad in the Content step of our Ad Builder. You can create a simple ad with one GIF or static image.</p>
                                    <p>In the content step of the Ad Builder, click Add Content </p>
                                    <p>In the message section type a brief message for your ad viewers </p>
                                    <p>Select your image</p>
                                    <p>In the Link Field, type the URL, where you want your ad viewers to go. Be sure to avoid sing a facebook page for this field since this will cause ad rejection </p>
                                    <p>In the title field type a short headline for your ad </p>
                                    <p>Use the button dropdown to choose a call to action. choose no button to omit the call to action </p>
                                    <p>click save, submit and launch your campaign </p>






                                    <blockquote className="wp-block-quote">
                                        <p>Setting your budget and schedule is very imort to your ad creation</p>
                                        <cite>AdGipsey Team</cite>
                                    </blockquote>






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
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-12">
                            {/* <FacebookSidebar /> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SingleFacebookContent;