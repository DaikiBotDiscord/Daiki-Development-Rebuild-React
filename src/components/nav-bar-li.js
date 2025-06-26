import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Mosaic, ThreeDot } from 'react-loading-indicators'
import PropTypes from 'prop-types'

import './nav-bar-li.css'

const NavBarLI = (props) => {
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
        return <div>
            <ThreeDot variant="bounce" color={["#6141ac", "#233dff", "#6845ba", "#3850ff"]} size="large" text="" textColor="" />
        </div>;
    }
    return (
        <div className={`nav-bar-li-nav-bar ${props.rootClassName} `}>
            <header data-thq="thq-navbar" className="nav-bar-li-navbar-interactive">
                <img
                    alt={props.image1Alt}
                    src={props.image1Src}
                    className="nav-bar-li-image1"
                />
                <div data-thq="thq-navbar-nav" className="nav-bar-li-desktop-menu">
                    <nav className="nav-bar-li-links1">
                        <Link to="/">
                            {props.link1 ?? (
                                <Fragment>
                                    <Link
                                        to="/"
                                        className="nav-bar-li-link16 thq-body-small thq-link"
                                    >
                                        <span>Home</span>
                                        <br></br>
                                    </Link>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/docs">
                            {props.link2 ?? (
                                <Fragment>
                                    <Link
                                        to="/docs"
                                        className="nav-bar-li-link23 thq-body-small thq-link"
                                    >
                                        <span>Docs</span>
                                        <br></br>
                                    </Link>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/contact">
                            {props.link3 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text31 thq-body-small thq-link">
                                        Contact
                                    </span>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/commands">
                            {props.link4 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text37 thq-body-small thq-link">
                                        Commands
                                    </span>
                                </Fragment>
                            )}
                        </Link>
                        <a href="/dashboard" className="nav-bar-li-link51">
                            {props.link42 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text21 thq-body-small thq-link">
                                        Dashboard
                                    </span>
                                </Fragment>
                            )}
                        </a>
                    </nav>
                    <div className="nav-bar-li-buttons1">
                        <a
                            href={props.action1Url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="nav-bar-li-action11 thq-button-filled thq-button-animated"
                        >
                            <span>
                                {props.text ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text36">Invite Daiki</span>
                                    </Fragment>
                                )}
                            </span>
                        </a>
                    </div>
                    <div className="nav-bar-li-container1">
                        <a href="/dashboard" className="nav-bar-li-link6">
                            <img
                                alt={props.imageAlt21}
                                src={props.imageSrc21}
                                className="nav-bar-li-image2"
                            />
                        </a>
                        <span className="nav-bar-li-text11">
                            {props.text221 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text23">&lt;username&gt;</span>
                                </Fragment>
                            )}
                        </span>
                        <div
                            data-thq="thq-dropdown"
                            className="nav-bar-li-thq-dropdown1 list-item"
                        >
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="nav-bar-li-dropdown-toggle1"
                            >
                                <div
                                    data-thq="thq-dropdown-arrow"
                                    className="nav-bar-li-dropdown-arrow1"
                                >
                                    <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon1">
                                        <path d="M426 726v-428l214 214z"></path>
                                    </svg>
                                </div>
                            </div>
                            <ul
                                data-thq="thq-dropdown-list"
                                className="nav-bar-li-dropdown-list1"
                            >
                                <a href="/dashboard/account">
                                    <li
                                        data-thq="thq-dropdown"
                                        className="nav-bar-li-dropdown1 list-item"
                                    >
                                        <div
                                            data-thq="thq-dropdown-toggle"
                                            className="nav-bar-li-dropdown-toggle2"
                                        >
                                            <span className="nav-bar-li-text12">
                                                {props.text421 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text22">Account</span>
                                                    </Fragment>
                                                )}
                                            </span>
                                        </div>
                                    </li>
                                </a>
                                <a href="/dashboard/warnings">
                                    <li
                                        data-thq="thq-dropdown"
                                        className="nav-bar-li-dropdown2 list-item"
                                    >
                                        <div
                                            data-thq="thq-dropdown-toggle"
                                            className="nav-bar-li-dropdown-toggle3"
                                        >
                                            <span className="nav-bar-li-text13">
                                                {props.text521 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text30">Warnings</span>
                                                    </Fragment>
                                                )}
                                            </span>
                                        </div>
                                    </li>
                                </a>
                                <a href="/dashboard/servers">
                                    <li
                                        data-thq="thq-dropdown"
                                        className="nav-bar-li-dropdown3 list-item"
                                    >
                                        <div
                                            data-thq="thq-dropdown-toggle"
                                            className="nav-bar-li-dropdown-toggle4"
                                        >
                                            <span className="nav-bar-li-text14">
                                                {props.text621 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text29">Servers</span>
                                                    </Fragment>
                                                )}
                                            </span>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-thq="thq-burger-menu" className="nav-bar-li-burger-menu">
                    <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon3">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </div>
                <div data-thq="thq-mobile-menu" className="nav-bar-li-mobile-menu">
                    <div className="nav-bar-li-nav">
                        <div className="nav-bar-li-top">
                            <img
                                alt={props.logoAlt}
                                src={props.logoSrc}
                                className="nav-bar-li-logo"
                            />
                            <div className="nav-bar-li-container2">
                                <a href="/dashboard" className="nav-bar-li-link10">
                                    <img
                                        alt={props.imageAlt2}
                                        src={props.imageSrc2}
                                        className="nav-bar-li-image3"
                                    />
                                </a>
                                <span className="nav-bar-li-text15">
                                    {props.text22 ?? (
                                        <Fragment>
                                            <span className="nav-bar-li-text32">
                                                &lt;username&gt;
                                            </span>
                                        </Fragment>
                                    )}
                                </span>
                                <div
                                    data-thq="thq-dropdown"
                                    className="nav-bar-li-thq-dropdown2 list-item"
                                >
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="nav-bar-li-dropdown-toggle5"
                                    >
                                        <div
                                            data-thq="thq-dropdown-arrow"
                                            className="nav-bar-li-dropdown-arrow2"
                                        >
                                            <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon5">
                                                <path d="M426 726v-428l214 214z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <ul
                                        data-thq="thq-dropdown-list"
                                        className="nav-bar-li-dropdown-list2"
                                    >
                                        <a
                                            href="/dashboard/account"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <li
                                                data-thq="thq-dropdown"
                                                className="nav-bar-li-dropdown4 list-item"
                                            >
                                                <div
                                                    data-thq="thq-dropdown-toggle"
                                                    className="nav-bar-li-dropdown-toggle6"
                                                >
                                                    <span className="nav-bar-li-text16">
                                                        {props.text42 ?? (
                                                            <Fragment>
                                                                <span className="nav-bar-li-text28">
                                                                    Account
                                                                </span>
                                                            </Fragment>
                                                        )}
                                                    </span>
                                                </div>
                                            </li>
                                        </a>
                                        <a
                                            href="/dashboard/warnings"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <li
                                                data-thq="thq-dropdown"
                                                className="nav-bar-li-dropdown5 list-item"
                                            >
                                                <div
                                                    data-thq="thq-dropdown-toggle"
                                                    className="nav-bar-li-dropdown-toggle7"
                                                >
                                                    <span className="nav-bar-li-text17">
                                                        {props.text52 ?? (
                                                            <Fragment>
                                                                <span className="nav-bar-li-text38">
                                                                    Warnings
                                                                </span>
                                                            </Fragment>
                                                        )}
                                                    </span>
                                                </div>
                                            </li>
                                        </a>
                                        <a
                                            href="/dashboard/servers"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <li
                                                data-thq="thq-dropdown"
                                                className="nav-bar-li-dropdown6 list-item"
                                            >
                                                <div
                                                    data-thq="thq-dropdown-toggle"
                                                    className="nav-bar-li-dropdown-toggle8"
                                                >
                                                    <span className="nav-bar-li-text18">
                                                        {props.text62 ?? (
                                                            <Fragment>
                                                                <span className="nav-bar-li-text24">
                                                                    Servers
                                                                </span>
                                                            </Fragment>
                                                        )}
                                                    </span>
                                                </div>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div data-thq="thq-close-menu" className="nav-bar-li-close-menu">
                                <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon7">
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        <nav className="nav-bar-li-links2">
                            <Link to="/">
                                {props.link11 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text40 thq-body-small thq-link">
                                            Home
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/docs">
                                {props.link21 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text35 thq-body-small thq-link">
                                            Docs
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/contact">
                                {props.link31 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text20 thq-body-small thq-link">
                                            Contact
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/commands">
                                {props.link41 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text41 thq-body-small thq-link">
                                            Commands
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <a
                                href="/dashboard"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="nav-bar-li-link52"
                            >
                                {props.link411 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text39 thq-body-small thq-link">
                                            Dashboard
                                        </span>
                                    </Fragment>
                                )}
                            </a>
                        </nav>
                        <div className="nav-bar-li-buttons2">
                            <a
                                href={props.action1Url1}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="nav-bar-li-action12 thq-button-filled thq-button-animated"
                            >
                                <span>
                                    {props.text1 ?? (
                                        <Fragment>
                                            <span className="nav-bar-li-text27">Invite Daiki</span>
                                        </Fragment>
                                    )}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

NavBarLI.defaultProps = {
    link31: undefined,
    action1Url: 'https://daiki-bot.xyz/invite',
    link42: undefined,
    imageAlt2: 'image',
    text421: undefined,
    text221: undefined,
    text62: undefined,
    link1: undefined,
    image1Alt: 'logo',
    text1: undefined,
    text42: undefined,
    imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
    rootClassName: '',
    text621: undefined,
    logoAlt: 'logo',
    text521: undefined,
    imageAlt21: 'image',
    link3: undefined,
    text22: undefined,
    image1Src: '/daiki6-1500h.png',
    imageSrc21: 'https://play.teleporthq.io/static/svg/default-img.svg',
    link2: undefined,
    logoSrc: '/daiki6-1500h.png',
    link21: undefined,
    text: undefined,
    link4: undefined,
    text52: undefined,
    link411: undefined,
    action1Url1: 'https://daiki-bot.xyz/invite',
    link11: undefined,
    link41: undefined,
}

NavBarLI.propTypes = {
    link31: PropTypes.element,
    action1Url: PropTypes.string,
    link42: PropTypes.element,
    imageAlt2: PropTypes.string,
    text421: PropTypes.element,
    text221: PropTypes.element,
    text62: PropTypes.element,
    link1: PropTypes.element,
    image1Alt: PropTypes.string,
    text1: PropTypes.element,
    text42: PropTypes.element,
    imageSrc2: PropTypes.string,
    rootClassName: PropTypes.string,
    text621: PropTypes.element,
    logoAlt: PropTypes.string,
    text521: PropTypes.element,
    imageAlt21: PropTypes.string,
    link3: PropTypes.element,
    text22: PropTypes.element,
    image1Src: PropTypes.string,
    imageSrc21: PropTypes.string,
    link2: PropTypes.element,
    logoSrc: PropTypes.string,
    link21: PropTypes.element,
    text: PropTypes.element,
    link4: PropTypes.element,
    text52: PropTypes.element,
    link411: PropTypes.element,
    action1Url1: PropTypes.string,
    link11: PropTypes.element,
    link41: PropTypes.element,
}

export default NavBarLI