import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './tos.css'

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
        <span className="terms-of-service-text008">Last Updated: April 20, 2026</span>
        <div className="terms-of-service-separator"></div>

        <div className="terms-of-service-container1">
          <div className="terms-of-service-feature-card05">
            <h2 className="terms-of-service-text027">1. Agreement to Terms</h2>
            <span className="terms-of-service-text030">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and Daiki Bot ("we," "us," or "our"). By accessing or using the Bot, you agree to be bound by these Terms. If you do not agree, you must discontinue use immediately.
            </span>
          </div>

          <div className="terms-of-service-feature-card06">
            <h2 className="terms-of-service-text034">2. Disclaimer of Affiliation</h2>
            <span className="terms-of-service-text037">
              Daiki Bot is an independent service and is not affiliated with, endorsed by, or sponsored by Discord Inc.
            </span>
          </div>

          <div className="terms-of-service-feature-card07">
            <h2 className="terms-of-service-text041">3. Eligibility</h2>
            <span className="terms-of-service-text044">
              You must be at least 13 years old or meet the minimum legal age requirement in your jurisdiction to use the Bot.
            </span>
          </div>

          <div className="terms-of-service-feature-card08">
            <h2 className="terms-of-service-text132">4. Acceptable Use</h2>
            <span className="terms-of-service-text135">You agree not to:</span>
            <span className="terms-of-service-text140">
              <ul>
                <li>Use the Bot for any unlawful purpose</li>
                <li>Abuse, exploit, overload, or disrupt the Bot or its infrastructure</li>
                <li>Attempt to reverse engineer or bypass security measures</li>
                <li>Use the Bot to harass, harm, or spam other users</li>
              </ul>
            </span>
          </div>

          <div className="terms-of-service-feature-card09">
            <h2 className="terms-of-service-text143">5. Data Usage</h2>
            <span className="terms-of-service-text146">
              Your use of the Bot is also governed by our Privacy Policy. By using the Bot, you consent to the collection and use of data as described therein.
            </span>
          </div>

          <div className="terms-of-service-feature-card10">
            <h2 className="terms-of-service-text149">6. Service Availability and Modifications</h2>
            <span className="terms-of-service-text152">
              We reserve the right to modify, suspend, or discontinue any part of the Bot at any time without notice. We do not guarantee uptime or availability.
            </span>
          </div>

          <div className="terms-of-service-feature-card11">
            <h2 className="terms-of-service-text155">7. Termination</h2>
            <span className="terms-of-service-text158">
              We reserve the right to suspend or terminate your access to the Bot at any time, for any reason, without notice or liability.
            </span>
          </div>

          <div className="terms-of-service-feature-card12">
            <h2 className="terms-of-service-text161">8. Disclaimer of Warranties</h2>
            <span className="terms-of-service-text164">
              The Bot is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
            </span>
          </div>

          <div className="terms-of-service-feature-card13">
            <h2 className="terms-of-service-text169">9. Limitation of Liability</h2>
            <span className="terms-of-service-text172">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Bot.
            </span>
          </div>

          <div className="terms-of-service-feature-card14">
            <h2 className="terms-of-service-text178">10. Indemnification</h2>
            <span className="terms-of-service-text181">
              You agree to indemnify and hold harmless Daiki Bot and its operators from any claims, damages, or liabilities arising from your use of the Bot.
            </span>
          </div>

          <div className="terms-of-service-feature-card15">
            <h2 className="terms-of-service-text184">11. Governing Law</h2>
            <span className="terms-of-service-text187">
              These Terms shall be governed by and construed in accordance with the laws of the United States.
            </span>
          </div>

          <div className="terms-of-service-feature-card21">
            <h2 className="terms-of-service-text220">12. Contact</h2>
            <span className="terms-of-service-text223">
              Email:{' '}
              <a href="mailto:support@daiki-bot.xyz" className="terms-of-service-link1">
                support@daiki-bot.xyz
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermsOfService
