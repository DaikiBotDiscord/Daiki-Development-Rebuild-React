import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import { ThreeDot } from 'react-loading-indicators'

import './nav-bar-li.css'
import NavBar from './nav-bar'

const NavBarLI = (props) => {
    const [userData, setUserData] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        return <div >
            <NavBar />
        </div>;
    }

    return (
        <div className="nav-bar-li-nav-bar">
            <header data-thq="thq-navbar" className="nav-bar-li-navbar-interactive">
                <img
                    alt={props.image1Alt1}
                    src={props.image1Src1}
                    className="nav-bar-li-image1"
                />
                <div data-thq="thq-navbar-nav" className="nav-bar-li-desktop-menu">
                    <nav className="nav-bar-li-links1">
                        <Link to="/">
                            {props.link12 ?? (
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
                            {props.link22 ?? (
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
                            {props.link32 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text24 thq-body-small thq-link">
                                        Contact
                                    </span>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/commands">
                            {props.link43 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text25 thq-body-small thq-link">
                                        Commands
                                    </span>
                                </Fragment>
                            )}
                        </Link>
                        <a href="/dashboard" className="nav-bar-li-link51">
                            {props.link421 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text26 thq-body-small thq-link">
                                        Dashboard
                                    </span>
                                </Fragment>
                            )}
                        </a>
                    </nav>
                    <div className="nav-bar-li-buttons1">
                        <a
                            href={props.action1Url2}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="nav-bar-li-action11 thq-button-filled thq-button-animated"
                        >
                            <span>
                                {props.text2 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text27">Invite Daiki</span>
                                    </Fragment>
                                )}
                            </span>
                        </a>
                    </div>
                    <div className="nav-bar-li-container1">
                        <a href="/dashboard" className="nav-bar-li-link6">
                            <img
                                alt={props.imageAlt21112}
                                src={`https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`}
                                className="nav-bar-li-image2"
                            />
                        </a>
                        <span className="nav-bar-li-text11">
                            {props.text221112 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text38">{userData.displayName}</span>
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
                                    <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon10">
                                        <path d="M426 726v-428l214 214z"></path>
                                    </svg>
                                </div>
                            </div>
                            <ul
                                data-thq="thq-dropdown-list"
                                className="nav-bar-li-dropdown-list1"
                            >
                                <a href="/dashboard/account" className="nav-bar-li-dropdown1 list-item">
                                    <li
                                        data-thq="thq-dropdown"
                                    >
                                        <div
                                            data-thq="thq-dropdown-toggle"
                                            className="nav-bar-li-dropdown-toggle2"
                                        >
                                            <span className="nav-bar-li-text12">
                                                {props.text421112 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text39">Account</span>
                                                    </Fragment>
                                                )}
                                            </span>
                                        </div>
                                    </li>
                                </a>
                                <a href="/dashboard/warnings" className="nav-bar-li-dropdown1 list-item">
                                    <li
                                        data-thq="thq-dropdown"
                                    >
                                        <div
                                            data-thq="thq-dropdown-toggle"
                                            className="nav-bar-li-dropdown-toggle3"
                                        >
                                            <span className="nav-bar-li-text13">
                                                {props.text521112 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text40">Warnings</span>
                                                    </Fragment>
                                                )}
                                            </span>
                                        </div>
                                    </li>
                                </a>
                                <a href="/dashboard/servers" className="nav-bar-li-dropdown1 list-item">
                                    <li
                                        data-thq="thq-dropdown"
                                    >
                                        <div
                                            data-thq="thq-dropdown-toggle"
                                            className="nav-bar-li-dropdown-toggle4"
                                        >
                                            <span className="nav-bar-li-text14">
                                                {props.text621112 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text41">Servers</span>
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
                <div data-thq="thq-burger-menu" className="nav-bar-li-burger-menu" onClick={() => setIsMobileMenuOpen(true)}>
                    <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon12">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </div>
                <div data-thq="thq-mobile-menu" className={`nav-bar-li-mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
                    <div className="nav-bar-li-nav">
                        <div className="nav-bar-li-top">
                            <img
                                alt={props.logoAlt1}
                                src={props.logoSrc1}
                                className="nav-bar-li-logo"
                            />
                            <div data-thq="thq-close-menu" className="nav-bar-li-close-menu" onClick={() => setIsMobileMenuOpen(false)}>
                                <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon14">
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        <nav className="nav-bar-li-links2">
                            <Link to="/">
                                {props.link111 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text28 thq-body-small thq-link">
                                            Home
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/docs">
                                {props.link211 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text29 thq-body-small thq-link">
                                            Docs
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/contact">
                                {props.link311 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text30 thq-body-small thq-link">
                                            Contact
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/commands">
                                {props.link412 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text31 thq-body-small thq-link">
                                            Commands
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <a href="/dashboard" className="nav-bar-li-link52">
                                {props.link4111 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text32 thq-body-small thq-link">
                                            Dashboard
                                        </span>
                                    </Fragment>
                                )}
                            </a>
                        </nav>
                        <div className="nav-bar-li-buttons2">
                            <a
                                href={props.action1Url11}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="nav-bar-li-action12 thq-button-filled thq-button-animated"
                            >
                                <span>
                                    {props.text11 ?? (
                                        <Fragment>
                                            <span className="nav-bar-li-text33">Invite Daiki</span>
                                        </Fragment>
                                    )}
                                </span>
                            </a>
                        </div>
                        <div className="nav-bar-li-container2">
                            <a href="/dashboard" className="nav-bar-li-link10">
                                <img
                                    alt={props.imageAlt21111}
                                    src={`https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`}
                                    className="nav-bar-li-image3"
                                />
                            </a>
                            <span className="nav-bar-li-text16">
                                {props.text221111 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text34">{userData.displayName}</span>
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
                                        <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon16">
                                            <path d="M426 726v-428l214 214z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <ul
                                    data-thq="thq-dropdown-list"
                                    className="nav-bar-li-dropdown-list2"
                                >
                                    <a href="/dashboard/account" className="nav-bar-li-dropdown1 list-item">
                                        <li
                                            data-thq="thq-dropdown"
                                        >
                                            <div
                                                data-thq="thq-dropdown-toggle"
                                                className="nav-bar-li-dropdown-toggle6"
                                            >
                                                <span className="nav-bar-li-text17">
                                                    {props.text421111 ?? (
                                                        <Fragment>
                                                            <span className="nav-bar-li-text35">Account</span>
                                                        </Fragment>
                                                    )}
                                                </span>
                                            </div>
                                        </li>
                                    </a>
                                    <a href="/dashboard/warnings" className="nav-bar-li-dropdown1 list-item">
                                        <li
                                            data-thq="thq-dropdown"
                                        >
                                            <div
                                                data-thq="thq-dropdown-toggle"
                                                className="nav-bar-li-dropdown-toggle7"
                                            >
                                                <span className="nav-bar-li-text18">
                                                    {props.text521111 ?? (
                                                        <Fragment>
                                                            <span className="nav-bar-li-text36">
                                                                Warnings
                                                            </span>
                                                        </Fragment>
                                                    )}
                                                </span>
                                            </div>
                                        </li>
                                    </a>
                                    <a href="/dashboard/servers" className="nav-bar-li-dropdown1 list-item">
                                        <li
                                            data-thq="thq-dropdown"
                                        >
                                            <div
                                                data-thq="thq-dropdown-toggle"
                                                className="nav-bar-li-dropdown-toggle8"
                                            >
                                                <span className="nav-bar-li-text19">
                                                    {props.text621111 ?? (
                                                        <Fragment>
                                                            <span className="nav-bar-li-text37">Servers</span>
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
                    <div className="nav-bar-li-icon-group">
                        <svg
                            viewBox="0 0 950.8571428571428 1024"
                            className="thq-icon-x-small"
                        >
                            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                        <svg
                            viewBox="0 0 877.7142857142857 1024"
                            className="thq-icon-x-small"
                        >
                            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                        </svg>
                        <svg
                            viewBox="0 0 602.2582857142856 1024"
                            className="thq-icon-x-small"
                        >
                            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                        </svg>
                    </div>
                </div>
            </header>
        </div>
    )
}

NavBarLI.defaultProps = {
    rootClassName: '',
    image1Alt1: 'logo',
    image1Src1: '/daiki6-1500h.png',
    link12: undefined,
    link22: undefined,
    link32: undefined,
    link43: undefined,
    link421: undefined,
    action1Url2: 'https://daiki-bot.xyz/invite',
    text2: undefined,
    logoAlt1: 'logo',
    logoSrc1: '/daiki6-1500h.png',
    link111: undefined,
    link211: undefined,
    link311: undefined,
    link412: undefined,
    link4111: undefined,
    action1Url11: 'https://daiki-bot.xyz/invite',
    text11: undefined,
    imageAlt21111: 'image',
    imageSrc21111: 'https://play.teleporthq.io/static/svg/default-img.svg',
    text221111: undefined,
    text421111: undefined,
    text521111: undefined,
    text621111: undefined,
    imageAlt21112: 'image',
    imageSrc21112: 'https://play.teleporthq.io/static/svg/default-img.svg',
    text221112: undefined,
    text421112: undefined,
    text521112: undefined,
    text621112: undefined,
}

NavBarLI.propTypes = {
    rootClassName: PropTypes.string,
    image1Alt1: PropTypes.string,
    image1Src1: PropTypes.string,
    link12: PropTypes.element,
    link22: PropTypes.element,
    link32: PropTypes.element,
    link43: PropTypes.element,
    link421: PropTypes.element,
    action1Url2: PropTypes.string,
    text2: PropTypes.element,
    logoAlt1: PropTypes.string,
    logoSrc1: PropTypes.string,
    link111: PropTypes.element,
    link211: PropTypes.element,
    link311: PropTypes.element,
    link412: PropTypes.element,
    link4111: PropTypes.element,
    action1Url11: PropTypes.string,
    text11: PropTypes.element,
    imageAlt21111: PropTypes.string,
    imageSrc21111: PropTypes.string,
    text221111: PropTypes.element,
    text421111: PropTypes.element,
    text521111: PropTypes.element,
    text621111: PropTypes.element,
    imageAlt21112: PropTypes.string,
    imageSrc21112: PropTypes.string,
    text221112: PropTypes.element,
    text421112: PropTypes.element,
    text521112: PropTypes.element,
    text621112: PropTypes.element,
}

export default NavBarLI
