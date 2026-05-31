import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './dashboard.css'

const dashboardCards = [
    {
        to: '/dashboard/account',
        label: 'Account',
        copy: 'Review your Discord profile, server totals, and Daiki account details.',
        icon: 'USER',
    },
    {
        to: '/dashboard/warnings',
        label: 'Warnings',
        copy: 'See moderation warnings connected to your account across servers.',
        icon: 'WARN',
    },
    {
        to: '/dashboard/servers',
        label: 'Servers',
        copy: 'Browse the servers you can manage and invite Daiki where needed.',
        icon: 'SRV',
    },
]

const Dashboard = () => {
    return (
        <div className="dashboard-container1 daiki-page">
            <Helmet>
                <title>Dashboard - Daiki Development</title>
                <meta property="og:title" content="Dashboard - Daiki Development" />
            </Helmet>
            <NavBarLI />

            <main className="daiki-page-shell">
                <section className="daiki-panel-hero">
                    <p className="daiki-eyebrow">Control center</p>
                    <h1>Dashboard</h1>
                    <p>Jump into the parts of your Daiki account that matter most.</p>
                </section>

                <section className="daiki-card-grid daiki-card-grid--three">
                    {dashboardCards.map((card) => (
                        <Link key={card.to} to={card.to} className="daiki-feature-card daiki-dashboard-card">
                            <span className="daiki-feature-card__icon">{card.icon}</span>
                            <h3>{card.label}</h3>
                            <p>{card.copy}</p>
                        </Link>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Dashboard
