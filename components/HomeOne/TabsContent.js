import React, { Component } from 'react';
import Link from 'next/link';

class TabsContent extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="tab-section">
                <div className="container">
                    <div className="section-title">
                        <span>Boosting</span>
                        <h3>Outstanding Digital Experience</h3>
                    </div>

                    <div className="tab boosting-list-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <Link href="#tab1">
                                    <a>
                                        <i className="flaticon-analysis-2"></i>
                                        <span>Real-Time-Analytics</span>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab2')} className="bg-eff7e9">
                                <Link href="#tab2">
                                    <a>
                                        <i className="flaticon-hand"></i>
                                        <span>Lead Generation</span>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab3')} className="bg-fff8f0">
                                <Link href="#tab3">
                                    <a>
                                        <i className="flaticon-digital-marketing"></i>
                                        <span>Online Marketing</span>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab4')} className="bg-ecfaf7">
                                <Link href="#tab4">
                                    <a>
                                        <i className="flaticon-email"></i>
                                        <span>Email Marketing</span>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab5')} className="bg-f2f0fb">
                                <Link href="#tab5">
                                    <a>
                                        <i className="flaticon-network"></i>
                                        <span>Social Marketing</span>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab6')} className="bg-c5ebf9">
                                <Link href="#tab6">
                                    <a>
                                        <i className="flaticon-analysis-1"></i>
                                        <span>Data Scraping</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>

                        <div className="tab_content">
                            {/* Tabs Item 01 */}
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab/3.jpg")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Real-Time Analytics</h2>
                                            <p>Real-time data should be the cornerstone of any digital marketing strategy. Using real-time data leads to a quick, efficient and trackable marketing process, affording additional gains and performance improvements.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Know who your customers are. Target them in real time</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Find the right data to get your answers.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="https://dashboard.adgipsey.com">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src={require("../../images/tab/shape.png")} alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 02 */}
                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab/4.1.jpg")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Lead Generation</h2>
                                            <p>Power marketing programs that generate qualified leads and nurture sales opportunities. Improve Your Ability to Acquire Qualified Leads</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Acquire, nurture, and engage objectively qualified leads.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Building effective campaigns to improve customer acquisition and retention.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="https://dashboard.adgipsey.com">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <div className="tab-shape">
                                        <img src={require("../../images/tab/shape.png")} alt="image" />
                                    </div>
                                </div>
                            </div>
                        
                            {/* Tabs Item 03 */}
                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab/4.2.jpg")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Online Marketting</h2>
                                            <p>Leveraging our web application to spread a message about your company’s brand, products, or services to its potential customers.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Reach Large audiences at a fraction of traditional advertising budgets, allowing your business to create appealing consumer ads.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Our Online Marketing channels open your business to multiple options to generate lead for your business.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="https://dashboard.adgipsey.com">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src={require("../../images/tab/shape.png")} alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 04 */}
                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab/4.4.jpg")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Email Marketting</h2>
                                            <p>Email marketing is one of the most effective (and cost-effective) strategies for generating and nurturing leads. Get on top-of-mind with targeted email to custom audiences</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Converting people into members, customers or supporters with Email Marketting.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Email marketing allows business owners to reach a large number of consumers at a rate of nearly nothing per message.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="#">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src={require("../../images/tab/shape.png")} alt="image" />
                                </div>
                            </div>
                        
                            {/* Tabs Item 05 */}
                            <div id="tab5" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab/4.5.jpg")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Social Marketting</h2>
                                            <p>Develop and integrate marketing concepts. With our platform you can influence behaviors that benefit ypur business for the greater.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Target your resources cost-effectively, and select interventions that have the best impact over time.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Develop products, services and communications that fit people’s needs and motivations.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="https://dashboard.adgipsey.com">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src={require("../../images/tab/shape.png")} alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 06 */}
                            <div id="tab6" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab/4.6.jpg")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Data Scraping</h2>
                                            <p>In the world of digital marketing, targeting audience is very key to campaigns. Our Data Scraping mediums have been tested and trusted over time</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Instagram Data Scraping.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Facebook Data Scraping.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="https://dashboard.adgipsey.com">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src={require("../../images/tab/shape.png")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TabsContent;