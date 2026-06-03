import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './nav-bar-li.css'
import NavBar from './nav-bar'

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/docs', label: 'Docs' },
    { to: '/contact', label: 'Contact' },
    { to: '/commands', label: 'Commands' },
    { to: '/dashboard', label: 'Dashboard' },
]

const accountItems = [
    { to: '/dashboard/account', label: 'Account' },
    { to: '/dashboard/warnings', label: 'Warnings' },
    { to: '/dashboard/servers', label: 'Servers' },
    { to: '/dashboard/music', label: 'Music' },
    { to: '/dashboard/logout', label: 'Logout' },
]

const NavBarLI = (props) => {
    const [userData, setUserData] = useState(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)

    useEffect(() => {
        axios.get('https://dash.api.daiki-bot.xyz/api/users/@me', {
            withCredentials: true,
        })
            .then((res) => setUserData(res.data))
            .catch((err) => {
                console.error('Error fetching user data:', err)
                window.location.href = 'https://daiki-bot.xyz/dashboard-sync'
            })
    }, [])

    if (!userData) {
        return <NavBar />
    }

    const avatarUrl = `https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`

    return (
        <div className="nav-bar-li-nav-bar">
            <header className="nav-bar-li-navbar-interactive">
                <Link to="/" aria-label="Daiki home" className="nav-bar-li-brand">
                    <img alt={props.image1Alt1} src={props.image1Src1} className="nav-bar-li-image1" />
                </Link>

                <nav className="nav-bar-li-links1" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <Link key={item.to} to={item.to} className="nav-bar-li-link">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="nav-bar-li-account">
                    <button
                        type="button"
                        className="nav-bar-li-account-toggle"
                        aria-label="Open account menu"
                        aria-expanded={isAccountMenuOpen}
                        onClick={() => setIsAccountMenuOpen((open) => !open)}
                    >
                        <img alt={`${userData.displayName} avatar`} src={avatarUrl} className="nav-bar-li-image2" />
                        <span>{userData.displayName}</span>
                        <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon10">
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                    </button>
                    <div className={`nav-bar-li-dropdown-list1 ${isAccountMenuOpen ? 'open' : ''}`}>
                        {accountItems.map((item) => (
                            <Link key={item.to} to={item.to} className="nav-bar-li-dropdown-link">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="nav-bar-li-burger-menu"
                    aria-label="Open menu"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon12">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </button>

                <div className={`nav-bar-li-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="nav-bar-li-top">
                        <img alt={props.logoAlt1} src={props.logoSrc1} className="nav-bar-li-logo" />
                        <button
                            type="button"
                            className="nav-bar-li-close-menu"
                            aria-label="Close menu"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg viewBox="0 0 1024 1024" className="nav-bar-li-icon14">
                                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="nav-bar-li-links2" aria-label="Mobile navigation">
                        {navItems.map((item) => (
                            <Link key={item.to} to={item.to} className="nav-bar-li-link" onClick={() => setIsMobileMenuOpen(false)}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="nav-bar-li-mobile-account">
                        <img alt={`${userData.displayName} avatar`} src={avatarUrl} className="nav-bar-li-image3" />
                        <span>{userData.displayName}</span>
                    </div>
                    <nav className="nav-bar-li-links2" aria-label="Account navigation">
                        {accountItems.map((item) => (
                            <Link key={item.to} to={item.to} className="nav-bar-li-link" onClick={() => setIsMobileMenuOpen(false)}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </div>
    )
}

NavBarLI.defaultProps = {
    image1Alt1: 'Daiki Development logo',
    image1Src1: '/daiki6-1500h.png',
    logoAlt1: 'Daiki Development logo',
    logoSrc1: '/daiki6-1500h.png',
}

export default NavBarLI
