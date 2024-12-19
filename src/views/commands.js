import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import CommandsDropDowns from '../components/commands-drop-downs'
import Footer from '../components/footer'
import './commands.css'

const Commands = (props) => {
    return (
        <div className="commands-container1">
            <Helmet>
                <title>Commands - Daiki Development</title>
                <meta property="og:title" content="Commands - Daiki Development" />
            </Helmet>
            <NavBar />
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
