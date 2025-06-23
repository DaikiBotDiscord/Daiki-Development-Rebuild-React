import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBarLI from '../components/nav-bar-li'
import './dashboard.css'

const Dashboard = (props) => {
    return (
        <div className="dashboard-container1">
            <Helmet>
                <title>Dashboard - Daiki Development</title>
                <meta property="og:title" content="Dashboard - Daiki Development" />
            </Helmet>
            <NavBarLI />
            <div className="dashboard-container2">
                <div className="dashboard-container3">
                    <div className="dashboard-container4">
                        <span className="dashboard-text26">
                            <span>Dashboard</span>
                            <br></br>
                        </span>
                    </div>
                </div>
                <hr className="dashboard-separator"></hr>
                <div className="dashboard-container5">
                    <div className="dashboard-container6">
                        <div className="dashboard-container7">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                className="dashboard-icon1"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                                ></path>
                            </svg>
                            <span className="dashboard-text29">
                                <span>Account</span>
                                <br></br>
                            </span>
                        </div>
                        <div className="dashboard-container8">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                className="dashboard-icon3"
                            >
                                <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M9.616 3.642c1.058-1.839 3.71-1.839 4.768 0l8.043 13.988c1.054 1.833-.27 4.12-2.384 4.12H3.957c-2.115 0-3.438-2.287-2.384-4.12zM12 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m.568 9.25a.75.75 0 0 0-1.115-1.003l-.01.011a.75.75 0 0 0 1.114 1.004z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="dashboard-text32">
                                <span>Warnings</span>
                                <br></br>
                            </span>
                        </div>
                        <div className="dashboard-container9">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                className="dashboard-icon5"
                            >
                                <path
                                    fill="currentColor"
                                    d="M15 17a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m9 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m9-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 6a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 11v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 17v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2a3 3 0 0 0 .78-2v-2a3 3 0 0 0-.78-2A3 3 0 0 0 22 7Zm-2 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-5-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1M9 5H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"
                                ></path>
                            </svg>
                            <span className="dashboard-text35">
                                <span>Servers</span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
