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
            <NavBarLI
                text={
                    <Fragment>
                        <span className="dashboard-text10">Invite Daiki</span>
                    </Fragment>
                }
                link1={
                    <Fragment>
                        <Link to="/" className="dashboard-link1 thq-body-small thq-link">
                            <span>Home</span>
                            <br></br>
                        </Link>
                    </Fragment>
                }
                link2={
                    <Fragment>
                        <Link
                            to="/docs"
                            className="dashboard-link2 thq-body-small thq-link"
                        >
                            <span>Docs</span>
                            <br></br>
                        </Link>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span className="dashboard-text15 thq-body-small thq-link">
                            Contact
                        </span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="dashboard-text16 thq-body-small thq-link">
                            Commands
                        </span>
                    </Fragment>
                }
                text1={
                    <Fragment>
                        <span className="dashboard-text17">Invite Daiki</span>
                    </Fragment>
                }
                text2={
                    <Fragment>
                        <span className="dashboard-text18">&lt;username&gt;</span>
                    </Fragment>
                }
                text4={
                    <Fragment>
                        <span className="dashboard-text19">Account</span>
                    </Fragment>
                }
                text5={
                    <Fragment>
                        <span className="dashboard-text20">Warnings</span>
                    </Fragment>
                }
                text6={
                    <Fragment>
                        <span className="dashboard-text21">Servers</span>
                    </Fragment>
                }
                link11={
                    <Fragment>
                        <span className="dashboard-text22 thq-body-small thq-link">
                            Home
                        </span>
                    </Fragment>
                }
                link21={
                    <Fragment>
                        <span className="dashboard-text23 thq-body-small thq-link">
                            Docs
                        </span>
                    </Fragment>
                }
                link31={
                    <Fragment>
                        <span className="dashboard-text24 thq-body-small thq-link">
                            Contact
                        </span>
                    </Fragment>
                }
                link41={
                    <Fragment>
                        <span className="dashboard-text25 thq-body-small thq-link">
                            Commands
                        </span>
                    </Fragment>
                }
                rootClassName="nav-bar-l-iroot-class-name"
            ></NavBarLI>
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
                <div className="dashboard-container5"></div>
            </div>
        </div>
    )
}

export default Dashboard
