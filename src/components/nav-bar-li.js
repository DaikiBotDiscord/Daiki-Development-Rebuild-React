import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ThreeDot } from 'react-loading-indicators'
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
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Full viewport height
            width: '100%',  // Full viewport width
            marginTop: '100px',
        }}>
            <ThreeDot variant="bounce" color={["#6141ac", "#233dff", "#6845ba", "#3850ff"]} size="large" text="" textColor="" />
        </div>;
    }
    return (
        <div className={`nav-bar-li-nav-bar ${props.rootClassName} `}>
            <header data-thq="thq-navbar" className="nav-bar-li-navbar-interactive">
                <img
                    alt={props.image1Alt2}
                    src={props.image1Src2}
                    className="nav-bar-li-image1"
                />
                <div data-thq="thq-navbar-nav" className="nav-bar-li-desktop-menu">
                    <nav className="nav-bar-li-links1">
                        <Link to="/">
                            {props.link13 ?? (
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
                            {props.link23 ?? (
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
                            {props.link33 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text28 thq-body-small thq-link">
                                        Contact
                                    </span>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/commands">
                            {props.link44 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text29 thq-body-small thq-link">
                                        Commands
                                    </span>
                                </Fragment>
                            )}
                        </Link>
                        <a href="/dashboard" className="nav-bar-li-link51">
                            {props.link423 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text30 thq-body-small thq-link">
                                        Dashboard
                                    </span>
                                </Fragment>
                            )}
                        </a>
                    </nav>
                    <div className="nav-bar-li-buttons1">
                        <a
                            href={props.action1Url3}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="nav-bar-li-action11 thq-button-filled thq-button-animated"
                        >
                            <span>
                                {props.text8 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text31">Invite Daiki</span>
                                    </Fragment>
                                )}
                            </span>
                        </a>
                    </div>
                    <div className="nav-bar-li-container1">
                        <a href="/dashboard" className="nav-bar-li-link6">
                            <img
                                alt={props.imageAlt211}
                                src={`https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`}
                                className="nav-bar-li-image2"
                            />
                        </a>
                        <span className="nav-bar-li-text11">
                            {props.text2211 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text21">{userData.displayName}</span>
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
                                                {props.text4211 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text20">Account</span>
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
                                                {props.text5211 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text22">Warnings</span>
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
                                                {props.text6211 ?? (
                                                    <Fragment>
                                                        <span className="nav-bar-li-text23">Servers</span>
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
                    <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon12">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </div>
                <div data-thq="thq-mobile-menu" className="nav-bar-li-mobile-menu">
                    <div className="nav-bar-li-nav">
                        <div className="nav-bar-li-top">
                            <img
                                alt={props.logoAlt2}
                                src={props.logoSrc2}
                                className="nav-bar-li-logo"
                            />
                            <div data-thq="thq-close-menu" className="nav-bar-li-close-menu">
                                <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon14">
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        <nav className="nav-bar-li-links2">
                            <Link to="/">
                                {props.link112 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text32 thq-body-small thq-link">
                                            Home
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/docs">
                                {props.link212 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text33 thq-body-small thq-link">
                                            Docs
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/contact">
                                {props.link312 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text34 thq-body-small thq-link">
                                            Contact
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/commands">
                                {props.link413 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text35 thq-body-small thq-link">
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
                                {props.link4112 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text36 thq-body-small thq-link">
                                            Dashboard
                                        </span>
                                    </Fragment>
                                )}
                            </a>
                        </nav>
                        <div className="nav-bar-li-buttons2">
                            <a
                                href={props.action1Url12}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="nav-bar-li-action12 thq-button-filled thq-button-animated"
                            >
                                <span>
                                    {props.text12 ?? (
                                        <Fragment>
                                            <span className="nav-bar-li-text37">Invite Daiki</span>
                                        </Fragment>
                                    )}
                                </span>
                            </a>
                        </div>
                        <div className="nav-bar-li-container2">
                            <a href="/dashboard" className="nav-bar-li-link10">
                                <img
                                    alt={props.imageAlt2111}
                                    src={`https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`}
                                    className="nav-bar-li-image3"
                                />
                            </a>
                            <span className="nav-bar-li-text16">
                                {props.text22111 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text38">{userData.displayName}</span>
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
                                    <a href="/dashboard/account">
                                        <li
                                            data-thq="thq-dropdown"
                                            className="nav-bar-li-dropdown4 list-item"
                                        >
                                            <div
                                                data-thq="thq-dropdown-toggle"
                                                className="nav-bar-li-dropdown-toggle6"
                                            >
                                                <span className="nav-bar-li-text17">
                                                    {props.text42111 ?? (
                                                        <Fragment>
                                                            <span className="nav-bar-li-text39">Account</span>
                                                        </Fragment>
                                                    )}
                                                </span>
                                            </div>
                                        </li>
                                    </a>
                                    <a href="/dashboard/warnings">
                                        <li
                                            data-thq="thq-dropdown"
                                            className="nav-bar-li-dropdown5 list-item"
                                        >
                                            <div
                                                data-thq="thq-dropdown-toggle"
                                                className="nav-bar-li-dropdown-toggle7"
                                            >
                                                <span className="nav-bar-li-text18">
                                                    {props.text52111 ?? (
                                                        <Fragment>
                                                            <span className="nav-bar-li-text40">
                                                                Warnings
                                                            </span>
                                                        </Fragment>
                                                    )}
                                                </span>
                                            </div>
                                        </li>
                                    </a>
                                    <a href="/dashboard/servers">
                                        <li
                                            data-thq="thq-dropdown"
                                            className="nav-bar-li-dropdown6 list-item"
                                        >
                                            <div
                                                data-thq="thq-dropdown-toggle"
                                                className="nav-bar-li-dropdown-toggle8"
                                            >
                                                <span className="nav-bar-li-text19">
                                                    {props.text62111 ?? (
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
    imageAlt211: 'image',
    text4211: undefined,
    text2211: undefined,
    text5211: undefined,
    rootClassName: '',
    text6211: undefined,
    imageSrc211: 'https://play.teleporthq.io/static/svg/default-img.svg',
    image1Alt2: 'logo',
    image1Src2: '/daiki6-1500h.png',
    link13: undefined,
    link23: undefined,
    link33: undefined,
    link44: undefined,
    link423: undefined,
    action1Url3: 'https://daiki-bot.xyz/invite',
    text8: undefined,
    logoAlt2: 'logo',
    logoSrc2: '/daiki6-1500h.png',
    link112: undefined,
    link212: undefined,
    link312: undefined,
    link413: undefined,
    link4112: undefined,
    action1Url12: 'https://daiki-bot.xyz/invite',
    text12: undefined,
    imageAlt2111: 'image',
    imageSrc2111: 'https://play.teleporthq.io/static/svg/default-img.svg',
    text22111: undefined,
    text42111: undefined,
    text52111: undefined,
    text62111: undefined,
}

NavBarLI.propTypes = {
    imageAlt211: PropTypes.string,
    text4211: PropTypes.element,
    text2211: PropTypes.element,
    text5211: PropTypes.element,
    rootClassName: PropTypes.string,
    text6211: PropTypes.element,
    imageSrc211: PropTypes.string,
    image1Alt2: PropTypes.string,
    image1Src2: PropTypes.string,
    link13: PropTypes.element,
    link23: PropTypes.element,
    link33: PropTypes.element,
    link44: PropTypes.element,
    link423: PropTypes.element,
    action1Url3: PropTypes.string,
    text8: PropTypes.element,
    logoAlt2: PropTypes.string,
    logoSrc2: PropTypes.string,
    link112: PropTypes.element,
    link212: PropTypes.element,
    link312: PropTypes.element,
    link413: PropTypes.element,
    link4112: PropTypes.element,
    action1Url12: PropTypes.string,
    text12: PropTypes.element,
    imageAlt2111: PropTypes.string,
    imageSrc2111: PropTypes.string,
    text22111: PropTypes.element,
    text42111: PropTypes.element,
    text52111: PropTypes.element,
    text62111: PropTypes.element,
}

export default NavBarLI