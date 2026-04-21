import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './privacy.css'

const privacySections = [
  {
    title: '1. Overview',
    paragraphs: [
      'This Privacy Policy explains how Daiki Bot ("Bot") collects, uses, stores, and protects user data.',
    ],
  },
  {
    title: '2. Data Collected',
    paragraphs: ['We may collect and store the following information:'],
    bullets: [
      'Discord User ID',
      'Discord Username and Discriminator',
      'Email address (if provided via Discord or integrations)',
      'Server ID',
      'Command usage data',
      'Message content (only where required for features such as moderation or logging)',
    ],
  },
  {
    title: '3. Data Storage',
    paragraphs: [
      'All data is stored in a self-hosted MySQL database controlled and maintained by the Bot developers. Reasonable technical and organizational measures are implemented to protect data, but no system is completely secure.',
    ],
  },
  {
    title: '4. Use of Data',
    paragraphs: ['Data is used solely for:'],
    bullets: [
      'Providing Bot functionality',
      'Moderation and logging systems',
      'Maintenance, debugging, and improvements',
    ],
  },
  {
    title: '5. Data Sharing',
    paragraphs: [
      'We do not sell, rent, or give away user data. Data is not shared with third parties except:',
    ],
    bullets: [
      'When required to operate the service (e.g., hosting infrastructure)',
      'When required by law or valid legal process',
    ],
  },
  {
    title: '6. Legal Compliance',
    paragraphs: [
      'We may disclose user data if required to do so by law, including in response to a valid warrant, subpoena, or other legal request from a government authority.',
    ],
  },
  {
    title: '7. Data Retention',
    paragraphs: [
      'Data is retained only as long as necessary for the operation of the Bot and its features.',
    ],
  },
  {
    title: '8. Data Deletion Requests',
    paragraphs: [
      'Users may request deletion of their personal data by contacting support@daiki-bot.xyz. Deletion requests may take up to 30 days to process.',
      'Data eligible for deletion includes:',
    ],
    bullets: [
      'Discord User ID',
      'Username',
      'Email address',
      'Any other personally identifiable information',
    ],
    closing: 'Certain data will not be deleted, including:',
    closingBullets: ['Server moderation records (e.g., warnings, infractions)'],
  },
  {
    title: '9. User Rights',
    paragraphs: ['You have the right to:'],
    bullets: [
      'Request access to your stored data',
      'Request deletion of your personal data (subject to limitations above)',
    ],
  },
  {
    title: '10. Underage Users',
    paragraphs: [
      'The Bot is not intended for users under the age of 13. Any data identified as belonging to underage users will be removed.',
    ],
  },
  {
    title: '11. Security',
    paragraphs: [
      'We implement reasonable safeguards to protect user data; however, we cannot guarantee absolute security.',
    ],
  },
  {
    title: '12. Contact',
    paragraphs: ['For any privacy-related inquiries:'],
    contact: 'support@daiki-bot.xyz',
  },
]

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
              <span className="privacy-policy-text01">Last Updated: April 21, 2026</span>
            </div>

            {privacySections.map((section) => (
              <div key={section.title} className="privacy-policy-feature-card1">
                <h2 className="privacy-policy-text04">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="privacy-policy-text05">{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul className="privacy-policy-text05">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.closing ? <p className="privacy-policy-text05">{section.closing}</p> : null}
                {section.closingBullets?.length ? (
                  <ul className="privacy-policy-text05">
                    {section.closingBullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.contact ? (
                  <p className="privacy-policy-text05">
                    <a href={`mailto:${section.contact}`} className="privacy-policy-link1">
                      {section.contact}
                    </a>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
