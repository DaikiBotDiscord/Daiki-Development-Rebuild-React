import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import CommandsDropDowns from '../components/commands-drop-downs'
import Footer from '../components/footer'
import './commands.css'

const Commands = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetch('https://dash.api.daiki-bot.xyz/api/users/@me', {
            credentials: 'include'
        })
            .then(res => {
                if (res.ok) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            })
            .catch(() => setIsLoggedIn(false));
    }, []);

    return (
        <div className="commands-container1">
            <Helmet>
                <title>Commands - Daiki Development</title>
                <meta property="og:title" content="Commands - Daiki Development" />
            </Helmet>
            {isLoggedIn ? <NavBarLI id="top" /> : <NavBar id="top" />}
            <div className="commands-container2">
                <div className="commands-container3">
                    <div className="commands-container4">
                        <span className="commands-text22">
                            <span>Commands</span>
                            <br></br>
                        </span>
                    </div>
                </div>
                <div className="commands-container5">
                    <CommandsDropDowns />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Commands
