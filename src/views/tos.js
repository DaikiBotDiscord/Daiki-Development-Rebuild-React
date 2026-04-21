import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './tos.css'

const tosSections = [
  {
    title: '1. Agreement to Terms',
    paragraphs: [
      'These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and Daiki Bot ("we," "us," or "our"). By accessing or using the Bot, you agree to be bound by these Terms. If you do not agree, you must discontinue use immediately.',
    ],
  },
  {
    title: '2. Disclaimer of Affiliation',
    paragraphs: [
      "Daiki Bot is an independent service and is not affiliated with, endorsed by, or sponsored by Discord Inc. Use of the Bot is also subject to Discord's Terms of Service and Community Guidelines.",
    ],
  },
  {
    title: '3. Eligibility',
    paragraphs: [
      'You must be at least 13 years old or meet the minimum legal age in your jurisdiction to use the Bot.',
    ],
  },
  {
    title: '4. Access and Use of the Bot',
    paragraphs: [
      'We grant you a limited, non-exclusive, non-transferable, revocable license to use the Bot for its intended purposes.',
      'We reserve the right to:',
    ],
    bullets: [
      'Restrict or revoke access at any time',
      'Limit functionality or usage',
      'Modify or remove features without notice',
    ],
  },
  {
    title: '5. Acceptable Use',
    paragraphs: [
      'You agree NOT to:',
    ],
    bullets: [
      'Use the Bot for any unlawful purpose',
      'Abuse, exploit, or overload the Bot or its infrastructure',
      'Attempt to reverse engineer or bypass security measures',
      'Use automated scripts or bots to interact with the Bot',
      'Use the Bot to harass, threaten, or harm others',
      'Use the Bot for spam, advertising, or unauthorized promotions',
      "Interfere with or disrupt the Bot's operation",
    ],
    closing: 'We reserve the right to take action, including termination, for violations.',
  },
  {
    title: '6. Data and Privacy',
    paragraphs: [
      'Your use of the Bot is also governed by our Privacy Policy.',
      'By using the Bot, you acknowledge that:',
    ],
    bullets: [
      'Data may be collected and stored in a self-hosted database',
      'Data is used to provide functionality, moderation, and improvements',
      'You consent to this data processing',
    ],
  },
  {
    title: '7. User Content and Contributions',
    paragraphs: [
      'You retain ownership of any content you provide.',
      'However, you grant us permission to:',
    ],
    bullets: [
      'Use, store, and process such content as needed to operate the Bot',
    ],
    closing: 'We are not responsible for user-generated content.',
  },
  {
    title: '8. Third-Party Services',
    paragraphs: [
      'The Bot may rely on third-party services (e.g., hosting, APIs). We are not responsible for the actions, content, or policies of third-party services.',
    ],
  },
  {
    title: '9. Service Availability',
    paragraphs: [
      'We do not guarantee:',
    ],
    bullets: [
      'Continuous uptime',
      'Error-free operation',
      'Availability of any specific feature',
    ],
    closing: 'The Bot may be interrupted, modified, or discontinued at any time.',
  },
  {
    title: '10. Termination',
    paragraphs: [
      'We reserve the right to:',
    ],
    bullets: [
      'Suspend or terminate access at any time',
      'Remove data or content associated with misuse',
    ],
    closing: 'Termination may occur without notice or liability.',
  },
  {
    title: '11. Disclaimer of Warranties',
    paragraphs: [
      'The Bot is provided "AS IS" and "AS AVAILABLE" without warranties of any kind.',
    ],
  },
  {
    title: '12. Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, we shall not be liable for:',
    ],
    bullets: [
      'Loss of data',
      'Service interruptions',
      'Indirect or consequential damages',
    ],
    closing: 'Your use of the Bot is at your own risk.',
  },
  {
    title: '13. Indemnification',
    paragraphs: [
      'You agree to defend and hold harmless Daiki Bot and its operators from any claims, damages, or liabilities arising from:',
    ],
    bullets: [
      'Your use of the Bot',
      'Your violation of these Terms',
      'Your violation of any law or third-party rights',
    ],
  },
  {
    title: '14. Legal Compliance',
    paragraphs: [
      'We reserve the right to cooperate with law enforcement and comply with legal obligations, including responding to valid warrants or legal requests.',
    ],
  },
  {
    title: '15. Modifications to Terms',
    paragraphs: [
      'We may update these Terms at any time. Continued use of the Bot after changes constitutes acceptance of the updated Terms.',
    ],
  },
  {
    title: '16. Governing Law',
    paragraphs: [
      'These Terms shall be governed by and interpreted in accordance with the laws of the United States.',
    ],
  },
  {
    title: '17. Contact',
    paragraphs: ['For questions or concerns:'],
    contact: 'support@daiki-bot.xyz',
  },
]

const TermsOfService = () => {
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
    <div className="terms-of-service-container">
      <Helmet>
        <title>Terms of Service - Daiki Development</title>
        <meta property="og:title" content="Terms of Service - Daiki Development" />
      </Helmet>
      {isLoggedIn ? <NavBarLI id="top" /> : <NavBar id="top" />}
      <div className="terms-of-service-tos-document">
        <h1 className="terms-of-service-text007">Terms of Service</h1>
        <span className="terms-of-service-text008">Last Updated: April 21, 2026</span>
        <div className="terms-of-service-separator"></div>

        <div className="terms-of-service-container1">
          {tosSections.map((section) => (
            <div key={section.title} className="terms-of-service-feature-card05">
              <h2 className="terms-of-service-text027">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="terms-of-service-text030">{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul className="terms-of-service-text030">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {section.closing ? <p className="terms-of-service-text030">{section.closing}</p> : null}
              {section.contact ? (
                <p className="terms-of-service-text030">
                  <a href={`mailto:${section.contact}`} className="terms-of-service-link1">
                    {section.contact}
                  </a>
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermsOfService
