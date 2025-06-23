
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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
                                        className="nav-bar-li-link13 thq-body-small thq-link"
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
                                    <span className="nav-bar-li-text20 thq-body-small thq-link">
                                        Contact
                                    </span>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/commands">
                            {props.link4 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text21 thq-body-small thq-link">
                                        Commands
                                    </span>
                                </Fragment>
                            )}
                        </Link>
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
                                        <span className="nav-bar-li-text22">Invite Daiki</span>
                                    </Fragment>
                                )}
                            </span>
                        </a>
                    </div>
                    <div className="nav-bar-li-container">
                        <img
                            src={props.imageSrc}
                            alt={props.imageAlt}
                            className="nav-bar-li-image"
                        />
                        <span className="nav-bar-li-text11">
                            {props.text2 ?? (
                                <Fragment>
                                    <span className="nav-bar-li-text28">&lt;username&gt;</span>
                                </Fragment>
                            )}
                        </span>
                        <div
                            data-thq="thq-dropdown"
                            className="nav-bar-li-thq-dropdown list-item"
                        >
                            <div
                                data-thq="thq-dropdown-toggle"
                                className="nav-bar-li-dropdown-toggle1"
                            >
                                <div
                                    data-thq="thq-dropdown-arrow"
                                    className="nav-bar-li-dropdown-arrow"
                                >
                                    <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon10">
                                        <path d="M426 726v-428l214 214z"></path>
                                    </svg>
                                </div>
                            </div>
                            <ul
                                data-thq="thq-dropdown-list"
                                className="nav-bar-li-dropdown-list"
                            >
                                <li
                                    data-thq="thq-dropdown"
                                    className="nav-bar-li-dropdown1 list-item"
                                >
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="nav-bar-li-dropdown-toggle2"
                                    >
                                        <span className="nav-bar-li-text12">
                                            {props.text4 ?? (
                                                <Fragment>
                                                    <span className="nav-bar-li-text29">Account</span>
                                                </Fragment>
                                            )}
                                        </span>
                                    </div>
                                </li>
                                <li
                                    data-thq="thq-dropdown"
                                    className="nav-bar-li-dropdown2 list-item"
                                >
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="nav-bar-li-dropdown-toggle3"
                                    >
                                        <span className="nav-bar-li-text13">
                                            {props.text5 ?? (
                                                <Fragment>
                                                    <span className="nav-bar-li-text30">Warnings</span>
                                                </Fragment>
                                            )}
                                        </span>
                                    </div>
                                </li>
                                <li
                                    data-thq="thq-dropdown"
                                    className="nav-bar-li-dropdown3 list-item"
                                >
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="nav-bar-li-dropdown-toggle4"
                                    >
                                        <span className="nav-bar-li-text14">
                                            {props.text6 ?? (
                                                <Fragment>
                                                    <span className="nav-bar-li-text31">Servers</span>
                                                </Fragment>
                                            )}
                                        </span>
                                    </div>
                                </li>
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
                                alt={props.logoAlt}
                                src={props.logoSrc}
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
                                {props.link11 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text23 thq-body-small thq-link">
                                            Home
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/docs">
                                {props.link21 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text24 thq-body-small thq-link">
                                            Docs
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/contact">
                                {props.link31 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text25 thq-body-small thq-link">
                                            Contact
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
                            <Link to="/commands">
                                {props.link41 ?? (
                                    <Fragment>
                                        <span className="nav-bar-li-text26 thq-body-small thq-link">
                                            Commands
                                        </span>
                                    </Fragment>
                                )}
                            </Link>
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
    image1Alt: 'logo',
    image1Src: '/daiki6-1500h.png',
    link1: undefined,
    link2: undefined,
    link3: undefined,
    link4: undefined,
    action1Url: 'https://daiki-bot.xyz/invite',
    text: undefined,
    logoAlt: 'logo',
    logoSrc: '/daiki6-1500h.png',
    link11: undefined,
    link21: undefined,
    link31: undefined,
    link41: undefined,
    action1Url1: 'https://daiki-bot.xyz/invite',
    text1: undefined,
    imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
    imageAlt: 'image',
    text2: undefined,
    text4: undefined,
    text5: undefined,
    text6: undefined,
}

NavBarLI.propTypes = {
    rootClassName: PropTypes.string,
    image1Alt: PropTypes.string,
    image1Src: PropTypes.string,
    link1: PropTypes.element,
    link2: PropTypes.element,
    link3: PropTypes.element,
    link4: PropTypes.element,
    action1Url: PropTypes.string,
    text: PropTypes.element,
    logoAlt: PropTypes.string,
    logoSrc: PropTypes.string,
    link11: PropTypes.element,
    link21: PropTypes.element,
    link31: PropTypes.element,
    link41: PropTypes.element,
    action1Url1: PropTypes.string,
    text1: PropTypes.element,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    text2: PropTypes.element,
    text4: PropTypes.element,
    text5: PropTypes.element,
    text6: PropTypes.element,
}

export default NavBarLI
