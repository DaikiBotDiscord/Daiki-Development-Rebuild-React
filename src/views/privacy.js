import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './privacy.css'

const PrivacyPolicy = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch('https://dash.api.daiki-bot.xyz/api/users/@me', {
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      })
      .catch(() => setIsLoggedIn(false))
  }, [])

  return (
    <div className="privacy-policy-container">
      <Helmet>
              <title>Privacy Policy - Daiki Development</title>
              <meta property="og:title" content="Privacy Policy - Daiki Development" />
            </Helmet>
      {isLoggedIn ? <NavBarLI id="top" /> : <NavBar id="top" />}
      <div className="privacy-policy-container1">
        <h1 className="privacy-policy-text">Privacy Policy</h1>
        <div className="privacy-policy-separator"></div>
        <div className="privacy-policy-container2">
          <div className="privacy-policy-container3">
            <div className="privacy-policy-feature-card">
              <span className="privacy-policy-text01">
                <span>
                  The use of this application (&quot;Bot&quot;) in a server
                  requires the collection of some specific user data
                  (&quot;Data&quot;). The Data collected includes Discord User Id,
                  Discord Username, Discord User Discriminator. Use of the Bot is
                  considered an agreement to the terms of this Policy.
                </span>
                <br></br>
              </span>
            </div>
            <div className="privacy-policy-feature-card1">
              <h2 className="privacy-policy-text04">Access To Data</h2>
              <span className="privacy-policy-text05">
                <span>
                  Access to this collected data is only permitted to Bot
                  Developers (bigtdm10, norbono), and only in the scope
                  required for the development, testing, and implementation of
                  features of the application (Bot). Data is not sold, provided
                  to, or shared with a third party, except where required by Terms
                  of Service agreement. You can view the data upon request from
                  (bigtdm10)
                </span>
                <br></br>
              </span>
            </div>
            <div className="privacy-policy-feature-card2">
              <h2 className="privacy-policy-text08">Storage of Data</h2>
              <span className="privacy-policy-text09">
                <span>
                  Data is stored in a MongoDB database. The database is secured to
                  prevent external access, however no guarantee is provided and the
                  application (Bot) owners assume no liability for the
                  unintentional or malicious breach of Data. In the event of an
                  unauthorized Data access, users will be notified through the
                  Discord client application (Discord Bot)
                </span>
                <br></br>
              </span>
            </div>
            <div className="privacy-policy-feature-card3">
              <h2 className="privacy-policy-text12">User Rights</h2>
              <span className="privacy-policy-text13">
                <span>
                  At any time, you have the right to request to view the Data
                  pertaining to your Discord account. You may submit a request
                  through the Discord DM&apos;s with the application (Bot)
                  developers (bigtdm10, norbono). You have the right to
                  request the removal of relevant Data.
                </span>
                <br></br>
              </span>
            </div>
            <div className="privacy-policy-feature-card4">
              <h2 className="privacy-policy-text16">Underage Users</h2>
              <span className="privacy-policy-text17">
                <span>
                  The use of the application (Bot) is not permitted for minors
                  under the age of 13, or under the age of legal consent for their
                  country. This is in compliance with the{' '}
                </span>
                <a
                  href="https://discord.com/terms"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privacy-policy-link"
                >
                  Discord Terms Of Service
                </a>
                <span>
                  . No information will be knowingly stored from an underage user.
                  If it is found out that a user is underage we will take all
                  necessary action to delete the stored data and or prevent you
                  from using the application (Bot). Along with contacting discord
                  with information such as proof of underage and your discord
                  username / Id.
                </span>
                <br className="privacy-policy-text20"></br>
                <br></br>
              </span>
            </div>
            <div className="privacy-policy-feature-card5">
              <h2 className="privacy-policy-text22">Questions</h2>
              <span className="privacy-policy-text23">
                <span>
                  If you have any questions or are concerned about what data might
                  be being stored from your account contact @bigtdm10. For more
                  information check the{' '}
                </span>
                <a
                  href="https://discord.com/terms"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privacy-policy-link1"
                >
                  Discord Terms Of Service
                </a>
                <span>.</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy