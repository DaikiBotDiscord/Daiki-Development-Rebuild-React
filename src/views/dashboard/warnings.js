import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet'

import NavBarLI from '../../components/nav-bar-li';
import Footer from '../../components/footer'
import './warnings.css'
import axios from 'axios';

const Warnings = (props) => {
    const [warnings, setWarningsData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const formatWarningTime = (timestamp) => {
        if (!timestamp) return 'Unknown';

        const date = new Date(timestamp);
        if (Number.isNaN(date.getTime())) return 'Unknown';

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
                        warnings.map((warn) => (
                            <div key={warn.id} className="warnings-container6">
                                <div className="warnings-container7">
                                    <span className="warnings-text31">
                                        <span>Warning ID: {warn.id}</span>
                                        <br />
                                    </span>
                                    <span className="warnings-text34">
                                        <span>Moderator ID: {warn.moderator_id}</span>
                                        <br />
                                    </span>
                                    <span className="warnings-text37">
                                        <span>Server ID: {warn.guild_id}</span>
                                        <br />
                                    </span>
                                    <span className='warnings-text37'>
                                        <span>Issued at: {formatWarningTime(warn.created_at)}</span>
                                        <br />
                                    </span>
                                    <span className='warnings-text37'>
                                        <span>User ID: {warn.user_id}</span>
                                        <br />
                                    </span>
                                    {warn.receiverUsername && (
                                        <span className='warnings-text37'>
                                            <span>Username: {warn.receiverUsername}</span>
                                            <br />
                                        </span>
                                    )}
                                    <span className="warnings-text40">
                                        <span>Reason: {warn.reason || 'No reason provided.'}</span>
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
