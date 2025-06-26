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
            <NavBarLI
                text={
                    <Fragment>
                        <span className="account-text10">Invite Daiki</span>
                    </Fragment>
                }
                link1={
                    <Fragment>
                        <Link to="/" className="account-link1 thq-body-small thq-link">
                            <span>Home</span>
                            <br></br>
                        </Link>
                    </Fragment>
                }
                link2={
                    <Fragment>
                        <Link to="/docs" className="account-link2 thq-body-small thq-link">
                            <span>Docs</span>
                            <br></br>
                        </Link>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span className="account-text15 thq-body-small thq-link">
                            Contact
                        </span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="account-text16 thq-body-small thq-link">
                            Commands
                        </span>
                    </Fragment>
                }
                text1={
                    <Fragment>
                        <span className="account-text17">Invite Daiki</span>
                    </Fragment>
                }
                link11={
                    <Fragment>
                        <span className="account-text18 thq-body-small thq-link">Home</span>
                    </Fragment>
                }
                link21={
                    <Fragment>
                        <span className="account-text19 thq-body-small thq-link">Docs</span>
                    </Fragment>
                }
                link31={
                    <Fragment>
                        <span className="account-text20 thq-body-small thq-link">
                            Contact
                        </span>
                    </Fragment>
                }
                link41={
                    <Fragment>
                        <span className="account-text21 thq-body-small thq-link">
                            Commands
                        </span>
                    </Fragment>
                }
                link42={
                    <Fragment>
                        <span className="account-text22 thq-body-small thq-link">
                            Dashboard
                        </span>
                    </Fragment>
                }
                text22={
                    <Fragment>
                        <span className="account-text23">&lt;username&gt;</span>
                    </Fragment>
                }
                text42={
                    <Fragment>
                        <span className="account-text24">Account</span>
                    </Fragment>
                }
                text52={
                    <Fragment>
                        <span className="account-text25">Warnings</span>
                    </Fragment>
                }
                text62={
                    <Fragment>
                        <span className="account-text26">Servers</span>
                    </Fragment>
                }
                link411={
                    <Fragment>
                        <span className="account-text27 thq-body-small thq-link">
                            Dashboard
                        </span>
                    </Fragment>
                }
                text221={
                    <Fragment>
                        <span className="account-text28">&lt;username&gt;</span>
                    </Fragment>
                }
                text421={
                    <Fragment>
                        <span className="account-text29">Account</span>
                    </Fragment>
                }
                text521={
                    <Fragment>
                        <span className="account-text30">Warnings</span>
                    </Fragment>
                }
                text621={
                    <Fragment>
                        <span className="account-text31">Servers</span>
                    </Fragment>
                }
                rootClassName="nav-bar-l-iroot-class-name1"
            ></NavBarLI>
            <div className="account-container2">
                <div className="account-container3">
                    <div className="account-container4">
                        <span className="account-text32">
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
                            src={`https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`}
                            className="account-image"
                        />
                        <div className="account-container7">
                            <span className="account-text35">
                                <span>{userData.displayName}</span>
                                <br></br>
                            </span>
                            <span className="account-text38">
                                <span className="account-text39">{userData.discordId}</span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                    <div className="account-container8">
                        <div className="account-container9">
                            <span className="account-text41">
                                <span> Info</span>
                                <br></br>
                            </span>
                            <hr className="account-separator2"></hr>
                            <span className="account-text44">
                                <span>Email: {userData.email}</span>
                                <br></br>
                            </span>
                            <span className="account-text47">
                                <span>Total Servers: {userData.guildCount}</span>
                                <br></br>
                            </span>
                            <span className="account-text50">
                                <span>Total Servers with Daiki: {userData.mutualCount}</span>
                                <br></br>
                            </span>
                            <span className="account-text53">
                                <span>Total Manageable Servers: {userData.manageableCount}</span>
                                <br></br>
                            </span>
                            <span className="account-text56">
                                <span>Daiki Account Created: {new Date(userData.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
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
