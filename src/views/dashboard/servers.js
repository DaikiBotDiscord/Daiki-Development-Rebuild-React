import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { Mosaic, ThreeDot } from 'react-loading-indicators'

import Footer from '../../components/footer'
import './servers.css'
import NavBarLI from '../../components/nav-bar-li'

const Servers = (props) => {
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
            height: '100%',
            width: '100%',
            marginTop: '100px',
        }}>
            <ThreeDot variant="bounce" color={["#6141ac", "#233dff", "#6845ba", "#3850ff"]} size="large" text="" textColor="" />
        </div>;
    }

    return (
        <div className="servers-container1">
            <Helmet>
                <title>Servers - Daiki Development</title>
                <meta property="og:title" content="Servers - Daiki Development" />
            </Helmet>
            <NavBarLI />
            <div className="servers-container2">
                <div className="servers-container3">
                    <div className="servers-container4">
                        <span className="servers-text28">
                            <span>Servers</span>
                            <br></br>
                        </span>
                    </div>
                    <a
                        href="https://daiki-bot.xyz/invite"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="servers-action1 thq-button-filled thq-button-animated"
                    >
                        <span>Invite Daiki</span>
                    </a>
                </div>
                <hr className="servers-separator"></hr>
                <div className="servers-container5">
                    {userData?.manageable_guilds?.map((guild) => (
                        <div className="servers-container6" key={guild.id}>
                            <img
                                src={
                                    guild.icon
                                        ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                                        : '/default-server-icon.png'
                                }
                                alt="Server Icon"
                                className="servers-image"
                            />
                            <div className="servers-container7">
                                <span className="servers-text32">
                                    <span>{guild.name}</span>
                                    <br />
                                </span>
                                <span className="servers-text35">
                                    <span>{guild.id}</span>
                                    <br />
                                </span>
                                <span className="servers-text38">
                                    <span>{guild.owner ? 'OWNER' : 'BOT MANAGER'}</span>
                                    <br />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Servers
