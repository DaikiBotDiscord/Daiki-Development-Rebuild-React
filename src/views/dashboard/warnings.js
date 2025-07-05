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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const formatDiscordTime = (unix) => {
        const date = new Date(unix * 1000); // Convert to milliseconds
        return date.toLocaleString(undefined, {
            timeZoneName: 'short',
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    useEffect(() => {
        axios.get("https://dash.api.daiki-bot.xyz/api/users/@me/warnings", {
            withCredentials: true
        })
            .then(res => {
                setWarningsData(res.data.warnings);
                setIsLoggedIn(true);
            })
            .catch(err => {
                console.error("❌ Error fetching user data:", err);
                window.location.href = "https://daiki-bot.xyz/dashboard-sync";
            });
    }, []);

    return (
        <div className="warnings-container1">
            <Helmet>
                <title>Warnings - Daiki Development</title>
                <meta property="og:title" content="Warnings - Daiki Development" />
            </Helmet>
            {isLoggedIn && <NavBarLI />}
            <div className="warnings-container2">
                <div className="warnings-container3">
                    <div className="warnings-container4">
                        <span className="warnings-text28">
                            <span>Warnings</span>
                            <br />
                        </span>
                    </div>
                </div>
                <hr className="warnings-separator" />
                <div className="warnings-container5">
                    {warnings && warnings.length > 0 ? (
                        warnings.map((warn, index) => (
                            <div key={index} className="warnings-container6">
                                <div className="warnings-container7">
                                    <span className="warnings-text31">
                                        <span>Warning ID: {warn.warningId}</span>
                                        <br />
                                    </span>
                                    <span className="warnings-text34">
                                        <span>Issuer ID: {warn.issuerId}</span>
                                        <br />
                                    </span>
                                    <span className="warnings-text37">
                                        <span>Server ID: {warn.guildId}</span>
                                        <br />
                                    </span>
                                    <span className='warnings-text37'>
                                        <span>Issued at: {formatDiscordTime(warn.discordTimecodeNum)}</span>
                                        <br />
                                    </span>
                                    <span className="warnings-text40">
                                        <span>Reason: {warn.reason}</span>
                                        <br />
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <span className='warnings-text28'>No warnings found.</span>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Warnings
