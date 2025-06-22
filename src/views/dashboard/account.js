import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './account.css'
import React, { useState, useEffect } from 'react';
import NavBarLI from '../../components/nav-bar-li';
import Footer from '../../components/footer';
import './account.css';
import axios from 'axios';
import { Mosaic, ThreeDot } from 'react-loading-indicators'

const Account = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get("https://dash.api.daiki-bot.xyz/api/users/@me", {
            withCredentials: true
        })
            .then(res => setUserData(res.data))
            .catch(err => {
                console.error("❌ Error fetching user data:", err);
                window.location.href = "https://daiki-bot.xyz/dashboard-sync";
            });
    }, []);

    if (!userData) {
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Full viewport height
            width: '100%',  // Full viewport width
            marginTop: '100px',
        }}>
            <ThreeDot variant="bounce" color={["#6141ac", "#233dff", "#6845ba", "#3850ff"]} size="large" text="" textColor="" />
        </div>;
    }

    return (
        <div className="account-container1">
            <Helmet>
                <title>Account - Daiki Development</title>
                <meta property="og:title" content="Account - Daiki Development" />
            </Helmet>
            <NavBarLI />
            <div className="account-container2">
                <div className="account-container3">
                    <div className="account-container4">
                        <span className="account-text26">
                            <span>Account</span>
                            <br></br>
                        </span>
                    </div>
                </div>
                <hr className="account-separator1"></hr>
                <div className="account-container5">
                    <div className="account-container6">
                        <img
                            alt="image"
                            src="https://play.teleporthq.io/static/svg/default-img.svg"
                            className="account-image"
                        />
                        <div className="account-container7">
                            <span className="account-text29">
                                <span>&lt;{userData.displayName}&gt;</span>
                                <br></br>
                            </span>
                            <span className="account-text32">
                                <span className="account-text33">&lt;{userData.discordId}&gt;</span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                    <div className="account-container8">
                        <div className="account-container9">
                            <span className="account-text35">
                                <span className="account-text36"> Info</span>
                                <br></br>
                            </span>
                            <hr className="account-separator2"></hr>
                            <span className="account-text38">
                                <span>Email: &lt;{userData.email}&gt;</span>
                                <br></br>
                            </span>
                            <span className="account-text41">
                                <span>Total Servers: &lt;{userData.totalServers}&gt;</span>
                                <br></br>
                            </span>
                            <span className="account-text44">
                                <span>Total Servers with Daiki: &lt;{userData.mutualCount}&gt;</span>
                                <br></br>
                            </span>
                            <span className="account-text47">
                                <span>Total Manageable Servers: &lt;{userData.manageableCount}&gt;</span>
                                <br></br>
                            </span>
                            <span className="account-text50">
                                <span>Daiki Account Created: &lt;{new Date(userData.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}&gt;</span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Account
