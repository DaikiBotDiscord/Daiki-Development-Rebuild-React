import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import WebAlerts from '../components/web-alerts'
import NavBar from '../components/nav-bar'
import './dashboard.css'

const Dashboard = (props) => {
    return (
        <div className="dashboard-container1">
            <Helmet>
                <title>Dashboard - Daiki Development</title>
                <meta property="og:title" content="Dashboard - Daiki Development" />
            </Helmet>
            <NavBar />
            <div className="dashboard-container2">
                <div className="dashboard-container3">
                    <div className="dashboard-container4">
                        <span className="dashboard-text30">
                            <span className="dashboard-text31">Dashboard</span>
                            <br className="dashboard-text32"></br>
                            <span className="dashboard-text33">Coming Soon</span>
                            <br className="dashboard-text34"></br>
                        </span>
                        <Link
                            to="/"
                            className="dashboard-action1 thq-button-filled thq-button-animated"
                        >
                            <span>
                                <span>Go To Home Page</span>
                                <br></br>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
