import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './tos.css'

const TermsOfService = (props) => {
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
        <div className="terms-of-service-notification-containter">
          <span className="terms-of-service-notification-text">
            <span>
              Daiki has recently changed their terms of service in the section
              &quot;Prohibited Activities&quot;.
            </span>
            <br></br>
            <span>
              {' '}
              To view the changed TOS (Terms of Service) Please click the button
              below.
            </span>
            <br></br>
          </span>
          <a
            href="#recently-updated"
            className="terms-of-service-notification-button button"
          >
            <span>
              <span>View Recently Changed Terms of Service</span>
              <br></br>
            </span>
          </a>
        </div>
        <div className="terms-of-service-tos-document">
          <h1 className="terms-of-service-text007">Terms of Service</h1>
          <span className="terms-of-service-text008">
            <span>Last Updated: 6/22/2023</span>
            <br></br>
          </span>
          <div className="terms-of-service-separator"></div>
          <div className="terms-of-service-container1">
            <div className="terms-of-service-feature-card">
              <span className="terms-of-service-text011">
                <span>
                  These Terms of Use constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  ("you") and application developers (Bot Owners), doing business
                  as Daiki Bot (&quot;Daiki Bot&quot;, "we", "us", or "our"),
                  concerning your access to and use of the Daiki Bot as well as
                  any other media form, website, media channel, mobile website or
                  mobile application related, linked, or otherwise connected
                  thereto (collectively, the "Bot"). You agree that by accessing
                  the Bot, you have read, understood, and agree to be bound by all
                  of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE
                  TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                  BOT AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card01">
              <span className="terms-of-service-text014">
                <span>
                  Supplemental terms and conditions or documents that may be
                  posted on the website from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these Terms
                  of Use from time to time. We will alert you about any changes by
                  updating the "Last updated" date of these Terms of Use, and you
                  waive any right to receive specific notice of each such change.
                  Please ensure that you check the applicable Terms every time you
                  use our Bot so that you understand which Terms apply. You will
                  be subject to, and will be deemed to have been made aware of and
                  to have accepted, the changes in any revised Terms of Use by
                  your continued use of the Bot after the date such revised Terms
                  of Use are posted.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card02">
              <span className="terms-of-service-text017">
                <span>
                  The information provided on the Bot is not intended for
                  distribution to or use by any person or entity in any
                  jurisdiction or country where such distribution or use would be
                  contrary to law or regulation or which would subject us to any
                  registration requirement within such jurisdiction or country.
                  Accordingly, those persons who choose to access the Bot from
                  other locations do so on their own initiative and are solely
                  responsible for compliance with local laws, if and to the extent
                  local laws are applicable.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card03">
              <span className="terms-of-service-text020">
                <span>
                  The Bot is not tailored to comply with industry-specific
                  regulations (Health Insurance Portability and Accountability Act
                  (HIPAA), Federal Information Security Management Act (FISMA),
                  etc.), so if your interactions would be subjected to such laws,
                  you may not use this Bot. You may not use the Bot in a way that
                  would violate the Gramm-Leach-Bliley Act (GLBA).
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card04">
              <span className="terms-of-service-text023">
                <span>
                  The use of the application ("Bot") is not permitted for minors
                  under the age of 13, or under the age of legal consent for their
                  country. This is in compliance with the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://discord.com/terms"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="terms-of-service-link"
                >
                  Discord Terms Of Service
                </a>
                <span>
                  . No information will be knowingly stored from an underage user.
                  If it is found out that a user is underage we will take all
                  necessary action to delete the stored data and or prevent you
                  from using the application ("Bot"). Along with contacting
                  discord with information such as proof of underage and your
                  discord username / Id.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card05">
              <h2 className="terms-of-service-text027">
                <span>Intellectual Property Rights</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text030">
                Unless otherwise indicated, the Bot is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the Bot
                (collectively, the "Content") and the trademarks, service marks,
                and logos contained therein (the "Marks") are owned or controlled
                by us or licensed to us, and are protected by copyright and
                trademark laws and various other intellectual property rights and
                unfair competition laws of the United States, international
                copyright laws, and international conventions. The Content and the
                Marks are provided on the Bot "AS IS" for your information and
                personal use only. Except as expressly provided in these Terms of
                Use, no part of the Bot and no Content or Marks may be copied,
                reproduced, aggregated, republished, uploaded, posted, publicly
                displayed, encoded, translated, transmitted, distributed, sold,
                licensed, or otherwise exploited for any commercial purpose
                whatsoever, without our express prior written permission.
              </span>
              <span className="terms-of-service-text031">
                <span>
                  Provided that you are eligible to use the Bot, you are granted a
                  limited license to access and use the Bot and to download or
                  print a copy of any portion of the Content to which you have
                  properly gained access solely for your personal, non-commercial
                  use. We reserve all rights not expressly granted to you in and
                  to the Bot, the Content and the Marks.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card06">
              <h2 className="terms-of-service-text034">
                <span>User Representations</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text037">
                By using the Bot, you represent and warrant that: (1) you have the
                legal capacity and you agree to comply with these Terms of Use;
                (2) you are not under the age of 13; (3) you are not a minor in
                the jurisdiction in which you reside, or if a minor, you have
                received parental permission to use the Bot; (4) you will not
                access the Discord Bot through automated or non-human means,
                whether through a bot, script or otherwise; (5) you will not use
                the Bot for any illegal or unauthorized purpose; and (6) your use
                of the Bot will not violate any applicable law or regulation.
              </span>
              <span className="terms-of-service-text038">
                <span>
                  If you provide any information that is untrue, inaccurate, not
                  current, or incomplete, we have the right to suspend or
                  terminate your account and refuse any and all current or future
                  use of the Bot (or any portion thereof).
                </span>
                <br className="terms-of-service-text040"></br>
              </span>
            </div>
            <div
              id="recently-updated"
              className="terms-of-service-feature-card07"
            >
              <h2 className="terms-of-service-text041">
                <span>Prohibited Activities</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text044">
                <span>
                  You may not access or use the Bot for any purpose other than
                  that for which we make the Bot available. The Bot may not be
                  used in connection with any commercial endeavors except those
                  that are specifically endorsed or approved by us.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="terms-of-service-text046">
                  If you are to be seen breaking this part of the TOS (Terms of
                  Service), Daiki Development and it&apos;s staff, reserve the
                  right to remove the ability to run commands that are initiated
                  by the end user.
                </span>
                <br></br>
              </span>
              <span className="terms-of-service-text048">
                <span>As a user of the Bot, you agree not to:</span>
                <br className="terms-of-service-text050"></br>
                <br></br>
                <span>
                  - Systematically retrieve data or other content from the Bot to
                  create or compile, directly or indirectly, a collection,
                  compilation, database, or directory without written permission
                  from us.
                </span>
                <br className="terms-of-service-text053"></br>
                <br></br>
                <span>
                  - Trick, defraud, or mislead us and other users, especially in
                  any attempt to learn sensitive account information such as user
                  passwords.
                </span>
                <br className="terms-of-service-text056"></br>
                <br></br>
                <span className="terms-of-service-text058">
                  - Using bot commands in a disrespectful manner, or in such a
                  manner that the bot may cause harm to others. (Recently Added)
                </span>
                <br className="terms-of-service-text059"></br>
                <br></br>
                <span>
                  - Circumvent, disable, or otherwise interfere with
                  security-related features of the Bot, including features that
                  prevent or restrict the use or copying of any Content or enforce
                  limitations on the use of the Bot and/or the Content contained
                  therein.
                </span>
                <br className="terms-of-service-text062"></br>
                <br></br>
                <span>
                  - Disparage, tarnish, or otherwise harm, in our opinion, us
                  and/or the Bot
                </span>
                <br className="terms-of-service-text065"></br>
                <br></br>
                <span>
                  - Use any information obtained from the Bot in order to harass,
                  abuse, or harm another person.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Make improper use of our support services or submit false
                  reports of abuse or misconduct.
                </span>
                <br className="terms-of-service-text071"></br>
                <br></br>
                <span>
                  - Use the Bot in a manner inconsistent with any applicable laws
                  or regulations.
                </span>
                <br className="terms-of-service-text074"></br>
                <br></br>
                <span>
                  - Engage in unauthorized framing of or linking to the website.
                </span>
                <br className="terms-of-service-text077"></br>
                <br></br>
                <span>
                  - Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material, including excessive
                  use of capital letters and spamming (continuous posting of
                  repetitive text), that interferes with any party's uninterrupted
                  use and enjoyment of the Bot or modifies, impairs, disrupts,
                  alters, or interferes with the use, features, functions,
                  operation, or maintenance of the Bot.
                </span>
                <br className="terms-of-service-text080"></br>
                <br></br>
                <span>
                  - Engage in any automated use of the system, such as using
                  scripts to send comments or messages, or using any data mining,
                  robots, or similar data gathering and extraction tools.
                </span>
                <br className="terms-of-service-text083"></br>
                <br></br>
                <span>
                  - Delete the copyright or other proprietary rights notice from
                  any Content.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Attempt to impersonate another user or person or use the
                  username of another user.
                </span>
                <br className="terms-of-service-text089"></br>
                <br></br>
                <span>
                  - Upload or transmit (or attempt to upload or to transmit) any
                  material that acts as a passive or active information collection
                  or transmission mechanism, including without limitation, clear
                  graphics interchange formats ("gifs"), 1x1 pixels, web bugs,
                  cookies, or other similar devices (sometimes referred to as
                  "spyware" or "passive collection mechanisms" or "pcms").
                </span>
                <br></br>
                <br></br>
                <span>
                  - Interfere with, disrupt, or create an undue burden on the Bot
                  or the networks or services connected to the Bot.
                </span>
                <br className="terms-of-service-text095"></br>
                <br></br>
                <span>
                  - Harass, annoy, intimidate, or threaten any of our employees or
                  agents engaged in providing any portion of the Bot to you
                </span>
                <br></br>
                <br></br>
                <span>
                  - Attempt to bypass any measures of the Bot designed to prevent
                  or restrict access to the Bot, or any portion of the Bot.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Copy or adapt the Bot's software, including but not limited to
                  Flash, PHP, HTML, JavaScript, or other code.
                </span>
                <br className="terms-of-service-text104"></br>
                <br></br>
                <span>
                  - Except as permitted by applicable law, decipher, decompile,
                  disassemble, or reverse engineer any of the software comprising
                  or in any way making up a part of the Bot.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Except as may be the result of standard search engine or
                  Internet browser usage, use, launch, develop, or distribute any
                  automated system, including without limitation, any spider,
                  robot, cheat utility, scraper, or offline reader that accesses
                  the website, or using or launching any unauthorized script or
                  other software.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Use a buying agent or purchasing agent to make purchases on
                  the website.
                </span>
                <br className="terms-of-service-text113"></br>
                <br></br>
                <span>
                  - Make any unauthorized use of the Bot, including collecting
                  usernames and/or email addresses of users by electronic or other
                  means for the purpose of sending unsolicited email, or creating
                  user accounts by automated means or under false pretenses.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Use the Bot as part of any effort to compete with us or
                  otherwise use the Bot and/or the Content for any
                  revenue-generating endeavor or commercial enterprise.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Exchange virtual currency for real value in any way.
                </span>
                <br className="terms-of-service-text122"></br>
                <br></br>
                <span>- Initiate illegitimate chargebacks.</span>
                <br className="terms-of-service-text125"></br>
                <br></br>
                <span>
                  - Use any type of unauthorized automation within Discord.
                </span>
                <br className="terms-of-service-text128"></br>
                <br></br>
                <span>- Use the bot for unauthorized advertisements.</span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card08">
              <h2 className="terms-of-service-text132">
                <span>Contribution</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text135">
                <span>
                  You and the Bot agree that we may access, store, process, and
                  use any information and personal data that you provide following
                  the terms of the Privacy Policy and your choices (including
                  settings).
                </span>
                <br></br>
                <br></br>
                <span>
                  By submitting suggestions or other feedback regarding the Bot,
                  you agree that we can use and share such feedback for any
                  purpose without compensation to you.
                </span>
                <br className="terms-of-service-text140"></br>
                <br></br>
                <span>
                  We do not assert any ownership over your Contributions. You
                  retain full ownership of all of your Contributions and any
                  intellectual property rights or other proprietary rights
                  associated with your Contributions. We are not liable for any
                  statements or representations in your Contributions provided by
                  you in any area on the Bot. You are solely responsible for your
                  Contributions to the Bot and you expressly agree to exonerate us
                  from any and all responsibility and to refrain from any legal
                  action against us regarding your Contributions.
                </span>
              </span>
            </div>
            <div className="terms-of-service-feature-card09">
              <h2 className="terms-of-service-text143">
                <span>Third-Party Website and Content</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text146">
                <span>
                  The Bot may contain (or you may be sent via the Bot) links to
                  other websites (&quot;Third-Party Websites&quot;) as well as
                  articles, photographs, text, graphics, pictures, designs, music,
                  sound, video, information, applications, software, and other
                  content or items belonging to or originating from third parties
                  (&quot;Third-Party Content&quot;). Such Third-Party Websites and
                  Third-Party Content are not investigated, monitored, or checked
                  for accuracy, appropriateness, or completeness by us, and we are
                  not responsible for any Third-Party Websites accessed through
                  the Bot or any Third-Party Content posted on, available through,
                  or installed from the Bot, including the content, accuracy,
                  offensiveness, opinions, reliability, privacy practices, or
                  other policies of or contained in the Third-Party Websites or
                  the Third-Party Content. Inclusion of, linking to, or permitting
                  the use or installation of any Third-Party Websites or any
                  Third-Party Content does not imply approval or endorsement
                  thereof by us. If you decide to leave the Bot and access the
                  Third-Party Websites or to use or install any Third-Party
                  Content, you do so at your own risk, and you should be aware
                  these Terms of Use no longer govern. You should review the
                  applicable terms and policies, including privacy and data
                  gathering practices, of any website to which you navigate from
                  the Bot or relating to any applications you use or install from
                  the Bot. Any purchases you make through Third-Party Websites
                  will be through other websites and from other companies, and we
                  take no responsibility whatsoever in relation to such purchases
                  which are exclusively between you and the applicable third
                  party. You agree and acknowledge that we do not endorse the
                  products or services offered on Third-Party Websites and you
                  shall hold us harmless from any harm caused by your purchase of
                  such products or services. Additionally, you shall hold us
                  harmless from any losses sustained by you or harm caused to you
                  relating to or resulting in any way from any Third-Party Content
                  or any contact with Third-Party Websites.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card10">
              <h2 className="terms-of-service-text149">
                <span>Bot Management</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text152">
                <span>
                  We reserve the right, but not the obligation, to: (1) monitor
                  the Bot for violations of these Terms of Use; (2) take
                  appropriate legal action against anyone who, in our sole
                  discretion, violates the law or these Terms of Use, including
                  without limitation, reporting such user to law enforcement
                  authorities; (3) in our sole discretion and without limitation,
                  refuse, restrict access to, limit the availability of, or
                  disable (to the extent technologically feasible) any of your
                  Contributions or any portion thereof; (4) in our sole discretion
                  and without limitation, notice, or liability, to remove from the
                  Bot or otherwise disable all files and content that are
                  excessive in size or are in any way burdensome to our systems;
                  and (5) otherwise manage the Bot in a manner designed to protect
                  our rights and property and to facilitate the proper functioning
                  of the Bot.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card11">
              <h2 className="terms-of-service-text155">
                <span>Privacy Policy</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text158">
                <span>
                  We care about data privacy and security. Please review our
                  Privacy Policy: https://daiki-bot.xyz/privacy. By using the Bot,
                  you agree to be bound by our Privacy Policy, which is
                  incorporated into these Terms of Use. Please be advised the Bot
                  is hosted in America. If you access the Bot from any other
                  region of the world with laws or other requirements governing
                  personal data collection, use, or disclosure that differ from
                  applicable laws in America, then through your continued use of
                  the Bot, you are transferring your data to America, and you
                  agree to have your data transferred to and processed in America.
                  Further, we do not knowingly accept, request, or solicit
                  information from children or knowingly market to children.
                  Therefore, in accordance with the U.S. Children's Online Privacy
                  Protection Act, if we receive actual knowledge that anyone under
                  the age of 13 has provided personal information to us without
                  the requisite and verifiable parental consent, we will delete
                  that information from the Bot as quickly as is reasonably
                  practical.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card12">
              <h2 className="terms-of-service-text161">
                <span>Term and Termination</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text164">
                <span>
                  These Terms of Use shall remain in full force and effect while
                  you use the Bot. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
                  TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION
                  AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
                  BOT (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR
                  ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
                  BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
                  THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE
                  MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE
                  ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
                  WARNING, IN OUR SOLE DISCRETION.
                </span>
                <br></br>
                <br></br>
                <span>
                  If we terminate or suspend your access for any reason, you are
                  prohibited from using a new account under your name, a fake or
                  borrowed name, or the name of any third party, even if you may
                  be acting on behalf of the third party. In addition to
                  terminating or suspending your account, we reserve the right to
                  take appropriate legal action, including without limitation
                  pursuing civil, criminal, and injunctive redress.
                </span>
              </span>
            </div>
            <div className="terms-of-service-feature-card13">
              <h2 className="terms-of-service-text169">
                <span>Modifications and Interruptions</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text172">
                <span>
                  We reserve the right to change, modify, or remove the contents
                  of the bot at any time or for any reason at our sole discretion
                  without notice. However, we have no obligation to update any
                  information on our bot. We also reserve the right to modify or
                  discontinue all or part of the bot without notice at any time.
                  We will not be liable to you or any third party for any
                  modification, price change, suspension, or discontinuance of the
                  bot.
                </span>
                <br></br>
                <br></br>
                <span>
                  We cannot guarantee the bot will be available at all times. We
                  may experience hardware, software, or other problems or need to
                  perform maintenance related to the bot, resulting in
                  interruptions, delays, or errors. We reserve the right to
                  change, revise, update, suspend, discontinue, or otherwise
                  modify the bot at any time or for any reason without notice to
                  you. You agree that we have no liability whatsoever for any
                  loss, damage, or inconvenience caused by your inability to
                  access or use the bot during any downtime or discontinuance of
                  the bot. Nothing in these Terms of Use will be construed to
                  obligate us to maintain and support the bot or to supply any
                  corrections, updates, or releases in connection therewith.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card14">
              <h2 className="terms-of-service-text178">
                <span>Corrections</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text181">
                <span>
                  There may be information on the bot that contains typographical
                  errors, inaccuracies, or omissions, including descriptions,
                  pricing, availability, and various other information. We reserve
                  the right to correct any errors, inaccuracies, or omissions and
                  to change or update the information on the bot at any time,
                  without prior notice.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card15">
              <h2 className="terms-of-service-text184">
                <span>Disclaimer</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text187">
                <span>
                  THE BOT IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
                  AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR
                  SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM
                  ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE BOT
                  AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
                  ABOUT THE ACCURACY OR COMPLETENESS OF THE BOT'S CONTENT OR THE
                  CONTENT OF ANY WEBSITES LINKED TO THE BOT AND WE WILL ASSUME NO
                  LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
                  INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
                  PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
                  ACCESS TO AND USE OF THE BOT, (3) ANY UNAUTHORIZED ACCESS TO OR
                  USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
                  INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
                  INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
                  WEBSITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH
                  MAY BE TRANSMITTED TO OR THROUGH THE BOT BY ANY THIRD PARTY,
                  AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS
                  OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF
                  THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE
                  AVAILABLE VIA THE BOT. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR
                  ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                  OFFERED BY A THIRD PARTY THROUGH THE BOT, ANY HYPERLINKED
                  WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY
                  BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN
                  ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
                  YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS
                  WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
                  IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND
                  EXERCISE CAUTION WHERE APPROPRIATE.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card16">
              <h2 className="terms-of-service-text190">
                <span>Limitations of Liability</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text193">
                <span>
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                  LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                  CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                  DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                  OTHER DAMAGES ARISING FROM YOUR USE OF THE BOT, EVEN IF WE HAVE
                  BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING
                  ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU
                  FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE
                  ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY,
                  BY YOU TO US. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO
                  NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR
                  LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME
                  OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO
                  YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card17">
              <h2 className="terms-of-service-text196">
                <span>Indemnification</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text199">
                <span>
                  You agree to defend, indemnify, and hold us harmless, including
                  our subsidiaries, affiliates, and all of our respective
                  officers, agents, partners, and employees, from and against any
                  loss, damage, liability, claim, or demand, including reasonable
                  attorneys' fees and expenses, made by any third party due to or
                  arising out of: (1) use of the Bot; (2) breach of these Terms of
                  Use; (3) any breach of your representations and warranties set
                  forth in these Terms of Use; (4) your violation of the rights of
                  a third party, including but not limited to intellectual
                  property rights; or (5) any overt harmful act toward any other
                  user of the Bot with whom you connected via the Bot.
                  Notwithstanding the foregoing, we reserve the right, at your
                  expense, to assume the exclusive defense and control of any
                  matter for which you are required to indemnify us, and you agree
                  to cooperate, at your expense, with our defense of such claims.
                  We will use reasonable efforts to notify you of any such claim,
                  action, or proceeding which is subject to this indemnification
                  upon becoming aware of it.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card18">
              <h2 className="terms-of-service-text202">
                <span>User Data</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text205">
                <span>
                  We will maintain certain data that you transmit to the Bot for
                  the purpose of managing the performance of the Bot, as well as
                  data relating to your use of the Bot. Although we perform
                  regular routine backups of data, you are solely responsible for
                  all data that you transmit or that relates to any activity you
                  have undertaken using the Bot. You agree that we shall have no
                  liability to you for any loss or corruption of any such data,
                  and you hereby waive any right of action against us arising from
                  any such loss or corruption of such data.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card19">
              <h2 className="terms-of-service-text208">
                <span>Electric Communications Transactions and Signatures</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text211">
                <span>
                  Using the Bot, visiting the website, sending us emails, and
                  completing online forms constitute electronic communications.
                  You consent to receive electronic communications, and you agree
                  that all agreements, notices, disclosures, and other
                  communications we provide to you electronically, via email and
                  on the Bot, satisfy any legal requirement that such
                  communication be in writing. YOU HEREBY AGREE TO THE USE OF
                  ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND
                  TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF
                  TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE BOT. You
                  hereby waive any rights or requirements under any statutes,
                  regulations, rules, ordinances, or other laws in any
                  jurisdiction which require an original signature or delivery or
                  retention of non-electronic records, or to payments or the
                  granting of credits by any means other than electronic means.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card20">
              <h2 className="terms-of-service-text214">
                <span>Miscellaneous</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text217">
                <span>
                  These Terms of Use and any policies or operating rules posted by
                  us on the website or in respect to the Bot constitute the entire
                  agreement and understanding between you and us. Our failure to
                  exercise or enforce any right or provision of these Terms of Use
                  shall not operate as a waiver of such right or provision. These
                  Terms of Use operate to the fullest extent permissible by law.
                  We may assign any or all of our rights and obligations to others
                  at any time. We shall not be responsible or liable for any loss,
                  damage, delay, or failure to act caused by any cause beyond our
                  reasonable control. If any provision or part of a provision of
                  these Terms of Use is determined to be unlawful, void, or
                  unenforceable, that provision or part of the provision is deemed
                  severable from these Terms of Use and does not affect the
                  validity and enforceability of any remaining provisions. There
                  is no joint venture, partnership, employment or agency
                  relationship created between you and us as a result of these
                  Terms of Use or use of the Bot. You agree that these Terms of
                  Use will not be construed against us by virtue of having drafted
                  them. You hereby waive any and all defenses you may have based
                  on the electronic form of these Terms of Use and the lack of
                  signing by the parties hereto to execute these Terms of Use.
                </span>
                <br></br>
              </span>
            </div>
            <div className="terms-of-service-feature-card21">
              <h2 className="terms-of-service-text220">
                <span>Contact Us</span>
                <br></br>
              </h2>
              <span className="terms-of-service-text223">
                <span>
                  In order to resolve a complaint regarding the Bot or to receive
                  further information regarding use of the Bot, please contact us
                  at:
                </span>
                <br></br>
                <br></br>
                <span>
                  Email:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="mailto:support@daiki-bot.xyz?subject="
                  className="terms-of-service-link1"
                >
                  support@daiki-bot.xyz
                </a>
                <br></br>
                <span>
                  Phone:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="tel:+12675449563" className="terms-of-service-link2">
                  (267) 544-9565
                </a>
                <br></br>
                <span>Discord: bigtdm10</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default TermsOfService
