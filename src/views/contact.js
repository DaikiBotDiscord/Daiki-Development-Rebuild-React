import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
    return (
        <div className="contact-container1"><Helmet>
            <title>Contact - Daiki Development</title>
            <meta
                property="og:title"
                content="Documentation - Daiki Development"
            />
        </Helmet>
            <NavBar />
            <div className="contact-container2">
                <div className="contact-container3">
                    <div className="contact-container4">
                        <span className="contact-text22">
                            <span>Contact</span>
                            <br></br>
                        </span>
                    </div>
                </div>
                <div className="contact-container5">
                    <div className="contact-contact20 thq-section-padding">
                        <div className="contact-max-width thq-section-max-width">
                            <div className="contact-section-title">
                                <div className="contact-content1">
                                    <h2 className="contact-text25 thq-heading-2">Contact Us</h2>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-content2">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        className="contact-icon1 thq-icon-medium"
                                    >
                                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                                    </svg>
                                    <div className="contact-contact-info1">
                                        <div className="contact-content4">
                                            <h3 className="contact-text26 thq-heading-3">Email</h3>
                                            <p className="contact-text27 thq-body-large">
                                                <span>Contact Daiki Development by emailing us!</span>
                                                <br></br>
                                                <span>
                                                    We generally respond within 1-2 business days
                                                </span>
                                                <br></br>
                                            </p>
                                        </div>
                                        <a
                                            href="mailto:support@daiki-bot.xyz?subject="
                                            className="contact-email thq-body-small"
                                        >
                                            support@daiki-bot.xyz
                                        </a>
                                    </div>
                                </div>
                                <div className="contact-content5">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        className="contact-icon3 thq-icon-medium"
                                    >
                                        <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                                    </svg>
                                    <div className="contact-contact-info2">
                                        <div className="contact-content6">
                                            <h3 className="contact-text32 thq-heading-3">Phone</h3>
                                            <p className="contact-text33 thq-body-large">
                                                <span>
                                                    Daiki Development now has a phone service! Feel free
                                                    to give us a call during business hours!
                                                </span>
                                                <br></br>
                                            </p>
                                        </div>
                                        <a
                                            href="tel:+12675449565"
                                            className="contact-phone thq-body-small"
                                        >
                                            <span>‪+1 (267) 544-9565‬</span>
                                            <br></br>
                                        </a>
                                    </div>
                                </div>
                                <div className="contact-content7">
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        className="contact-icon5"
                                    >
                                        <path
                                            d="M10.63 14.1a7 7 0 0 1 9.27-3.47a7 7 0 0 1 3.47 9.27A6.98 6.98 0 0 1 17 24c-2.7 0-5.17-1.56-6.33-4H1v-2c.06-1.14.84-2.07 2.34-2.82S6.72 14.04 9 14c.57 0 1.11.05 1.63.1M9 4c1.12.03 2.06.42 2.81 1.17S12.93 6.86 12.93 8s-.37 2.08-1.12 2.83s-1.69 1.12-2.81 1.12s-2.06-.37-2.81-1.12S5.07 9.14 5.07 8s.37-2.08 1.12-2.83S7.88 4.03 9 4m8 18a5 5 0 0 0 5-5a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5m-1-8h1.5v2.82l2.44 1.41l-.75 1.3L16 17.69z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div className="contact-contact-info3">
                                        <div className="contact-content8">
                                            <h3 className="contact-text38 thq-heading-3">Hours</h3>
                                            <p className="contact-text39 thq-body-large">
                                                <span>Daiki Developments Hours of Operation</span>
                                                <br></br>
                                            </p>
                                            <p className="contact-text42 thq-body-large">
                                                <span>Monday - Friday</span>
                                                <br></br>
                                                <span>8 AM - 6 PM MST</span>
                                                <br></br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
