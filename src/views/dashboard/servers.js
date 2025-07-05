import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../../components/nav-bar'
import Footer from '../../components/footer'
import './servers.css'

const Servers = (props) => {
    const [manageableGuilds, setManageableGuilds] = useState([]);

    useEffect(() => {
        const fetchGuilds = async () => {
            try {
                const response = await axios.get('https://dash.api.daiki-bot.xyz/api/users/@me');
                setManageableGuilds(response.data.manageable_guilds);
            } catch (error) {
                console.error('Error fetching manageable guilds:', error);
            }
        };

        fetchGuilds();
    }, []);

    return (
        <div className="servers-container1">
            <Helmet>
                <title>Servers - Daiki Development</title>
                <meta property="og:title" content="Servers - Daiki Development" />
            </Helmet>
            <NavBar />
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
                    {manageableGuilds.map((guild) => (
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
