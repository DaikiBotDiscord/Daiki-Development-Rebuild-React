import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Docs from '../components/docs'
import Footer from '../components/footer'
import './documentation.css'

const Documentation = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetch('/api/users/@me')
            .then(response => {
                if (response.ok) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            })
            .catch(() => setIsLoggedIn(false));
    }, []);

    return (
        <div className="documentation-container1">
            <Helmet>
                <title>Documentation - Daiki Development</title>
                <meta
                    property="og:title"
                    content="Documentation - Daiki Development"
                />
            </Helmet>
            {isLoggedIn ? <NavBarLI /> : <NavBar />}
            <div className="documentation-container2">
                <div className="documentation-container3">
                    <div className="documentation-container4">
                        <span className="documentation-text22">
                            <span>Documentation</span>
                            <br></br>
                        </span>
                    </div>
                </div>
                <div className="documentation-container5">
                    <Docs />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Documentation
