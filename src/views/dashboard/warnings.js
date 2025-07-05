import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBarLI from '../../components/nav-bar-li';
import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'
import './warnings.css'
import axios from 'axios';
import { Mosaic, ThreeDot } from 'react-loading-indicators'

const Warnings = (props) => {
    const [warnings, setWarningsData] = useState(null);

    useEffect(() => {
        axios.get("https://dash.api.daiki-bot.xyz/api/users/@me/warnings", {
            withCredentials: true
        })
            .then(res => setWarningsData(res.data.warnings))
            .catch(err => {
                console.error("❌ Error fetching user data:", err);
                window.location.href = "https://daiki-bot.xyz/dashboard-sync";
            });
    }, []);
    return (
        <div className="warnings-container10">
            <Helmet>
                <title>Warnings - Daiki Development</title>
                <meta property="og:title" content="Warnings - Daiki Development" />
            </Helmet>
            <NavBar />
            <div className="warnings-container11">
                <div className="warnings-container12">
                    <div className="warnings-container13">
                        <span className="warnings-text118">
                            <span>Warnings</span>
                            <br></br>
                        </span>
                    </div>
                </div>
                <hr className="warnings-separator1"></hr>
                <div className="warnings-container14">
                    {warnings && warnings.map((warn, index) => (
                        <div key={index} className="warnings-container15">
                            <div className="warnings-container16">
                                <span className="warnings-text121">
                                    <span>Warning ID: {warn.warningId}</span>
                                    <br />
                                </span>
                                <span className="warnings-text124">
                                    <span>Issuer ID: {warn.issuerId}</span>
                                    <br />
                                </span>
                                <span className="warnings-text127">
                                    <span>Server ID: {warn.guildId}</span>
                                    <br />
                                </span>
                                <span className="warnings-text130">
                                    <span>Reason</span>
                                    <br />
                                </span>
                                <hr className="warnings-separator2" />
                                <span className="warnings-text133">{warn.reason}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Warnings
