import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './privacy.css'

const PrivacyPolicy = () => {
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
              <span className="privacy-policy-text01">Last Updated: April 20, 2026</span>
            </div>

            <div className="privacy-policy-feature-card1">
              <h2 className="privacy-policy-text04">1. Overview</h2>
              <span className="privacy-policy-text05">
                This Privacy Policy explains how Daiki Bot ("Bot") collects, uses, stores, and protects user data.
              </span>
            </div>

            <div className="privacy-policy-feature-card2">
              <h2 className="privacy-policy-text08">2. Data Collected</h2>
              <span className="privacy-policy-text09">We may collect and store the following information:</span>
              <span className="privacy-policy-text09">
                <ul>
                  <li>Discord User ID</li>
                  <li>Discord Username and Discriminator</li>
                  <li>Email address (if provided via Discord or integrations)</li>
                  <li>Server ID</li>
                  <li>Command usage data</li>
                  <li>Message content (only where required for features such as moderation or logging)</li>
                </ul>
              </span>
            </div>

            <div className="privacy-policy-feature-card3">
              <h2 className="privacy-policy-text12">3. Data Storage</h2>
              <span className="privacy-policy-text13">
                All data is stored in a self-hosted MySQL database controlled and maintained by the Bot developers. Reasonable technical and organizational measures are implemented to protect data, but no system is completely secure.
              </span>
            </div>

            <div className="privacy-policy-feature-card4">
              <h2 className="privacy-policy-text16">4. Use of Data</h2>
              <span className="privacy-policy-text17">Data is used solely for:</span>
              <span className="privacy-policy-text17">
                <ul>
                  <li>Providing Bot functionality</li>
                  <li>Moderation and logging systems</li>
                  <li>Maintenance, debugging, and improvements</li>
                </ul>
              </span>
            </div>

            <div className="privacy-policy-feature-card5">
              <h2 className="privacy-policy-text22">5. Data Sharing</h2>
              <span className="privacy-policy-text23">
                We do not sell, rent, or give away user data. Data is not shared with third parties except:
              </span>
              <span className="privacy-policy-text23">
                <ul>
                  <li>When required to operate the service (e.g., hosting infrastructure)</li>
                  <li>When required by law or valid legal process</li>
                </ul>
              </span>
            </div>

            <div className="privacy-policy-feature-card1">
              <h2 className="privacy-policy-text04">6. Legal Compliance</h2>
              <span className="privacy-policy-text05">
                We may disclose user data if required to do so by law, including in response to a valid warrant, subpoena, or other legal request from a government authority.
              </span>
            </div>

            <div className="privacy-policy-feature-card2">
              <h2 className="privacy-policy-text08">7. Data Retention</h2>
              <span className="privacy-policy-text09">
                Data is retained only as long as necessary for the operation of the Bot and its features.
              </span>
            </div>

            <div className="privacy-policy-feature-card3">
              <h2 className="privacy-policy-text12">8. Data Deletion Requests</h2>
              <span className="privacy-policy-text13">
                Users may request deletion of their personal data by contacting support@daiki-bot.xyz. Deletion requests may take up to 30 days to process.
              </span>
              <span className="privacy-policy-text13">Data eligible for deletion includes:</span>
              <span className="privacy-policy-text13">
                <ul>
                  <li>Discord User ID</li>
                  <li>Username</li>
                  <li>Email address</li>
                  <li>Any other personally identifiable information</li>
                </ul>
              </span>
              <span className="privacy-policy-text13">Certain data will not be deleted, including:</span>
              <span className="privacy-policy-text13">
                <ul>
                  <li>Server moderation records (e.g., warnings, infractions)</li>
                </ul>
              </span>
            </div>

            <div className="privacy-policy-feature-card4">
              <h2 className="privacy-policy-text16">9. User Rights</h2>
              <span className="privacy-policy-text17">You have the right to:</span>
              <span className="privacy-policy-text17">
                <ul>
                  <li>Request access to your stored data</li>
                  <li>Request deletion of your personal data (subject to limitations above)</li>
                </ul>
              </span>
            </div>

            <div className="privacy-policy-feature-card5">
              <h2 className="privacy-policy-text22">10. Underage Users</h2>
              <span className="privacy-policy-text23">
                The Bot is not intended for users under the age of 13. Any data identified as belonging to underage users will be removed.
              </span>
            </div>

            <div className="privacy-policy-feature-card1">
              <h2 className="privacy-policy-text04">11. Security</h2>
              <span className="privacy-policy-text05">
                We implement reasonable safeguards to protect user data; however, we cannot guarantee absolute security.
              </span>
            </div>

            <div className="privacy-policy-feature-card5">
              <h2 className="privacy-policy-text22">12. Contact</h2>
              <span className="privacy-policy-text23">
                For any privacy-related inquiries:{' '}
                <a href="mailto:support@daiki-bot.xyz" className="privacy-policy-link1">
                  support@daiki-bot.xyz
                </a>
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
