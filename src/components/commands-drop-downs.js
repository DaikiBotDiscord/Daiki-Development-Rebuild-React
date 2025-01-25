import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './commands-drop-downs.css'

const CommandsDropDowns = (props) => {
  const [faq6Visible, setFaq6Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <div
      className={`commands-drop-downs-faq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="commands-drop-downs-max-width thq-section-max-width">
        <div className="thq-flex-column thq-section-max-width commands-drop-downs-container10">
          <div className="commands-drop-downs-list">
            <div className="commands-drop-downs-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="commands-drop-downs-trigger1"
              >
                <p className="commands-drop-downs-faq1-question1 thq-body-large">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="commands-drop-downs-text272">
                        <span>Fun</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="commands-drop-downs-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon10"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon12"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="commands-drop-downs-container13">
                  <span className="commands-drop-downs-text100 thq-body-small">
                    <span className="commands-drop-downs-text101">8-Ball:</span>
                    <span>
                      Ask Daiki a question and you shall receive an 8-ball
                      answer (Options: Question)
                    </span>
                    <br className="commands-drop-downs-text103"></br>
                    <span className="commands-drop-downs-text104">RPS:</span>
                    <span>
                      This is a pretty funny new command that allows you to
                      play rock – paper – scissors with other users. Options:
                      Choice
                    </span>
                    <br className="commands-drop-downs-text106"></br>
                    <span className="commands-drop-downs-text107">APOD:</span>
                    <span> Astronomy Picture of the Day from NASA</span>
                    <br className="commands-drop-downs-text109"></br>
                    <span className="commands-drop-downs-text110">Fact:</span>
                    <span> Displays a random interesting fact</span>
                    <br className="commands-drop-downs-text112"></br>
                    <span className="commands-drop-downs-text113">
                      Flip Coin:
                    </span>
                    <span> Flips the coin</span>
                    <br className="commands-drop-downs-text115"></br>
                    <span className="commands-drop-downs-text116">Hug:</span>
                    <span>
                      Sends a virtual hug to the mentioned user. Options: User
                    </span>
                    <br className="commands-drop-downs-text118"></br>
                    <span className="commands-drop-downs-text119">Image:</span>
                    <span>
                      Searches for an image based on the provided keyword and
                      displays it. Options: keyword
                    </span>
                    <br className="commands-drop-downs-text121"></br>
                    <span className="commands-drop-downs-text122">Joke:</span>
                    <span> Fetches and displays random joke</span>
                    <br className="commands-drop-downs-text124"></br>
                    <span className="commands-drop-downs-text125">Meme:</span>
                    <span> Sends funny meme, from Reddit</span>
                    <br className="commands-drop-downs-text127"></br>
                    <span className="commands-drop-downs-text128">Recipe:</span>
                    <span>
                      Search for recipes based on ingredients or cuisine type.
                      The bot fetches and displays relevant recipes from a
                      recipe API.
                    </span>
                    <br className="commands-drop-downs-text130"></br>
                    <span className="commands-drop-downs-text131">Reddit:</span>
                    <span>
                      Fetches and displays a random post from a specific
                      subreddit. Options: Subreddit
                    </span>
                    <br className="commands-drop-downs-text133"></br>
                    <span className="commands-drop-downs-text134">
                      Suggestion:
                    </span>
                    <span>
                      Daiki can be given suggestions that will be seen by the
                      main developer of Daiki for real good Ideas to improve
                      Daiki.
                    </span>
                    <br></br>
                  </span>
                </div>
              )}
            </div>
            <div className="commands-drop-downs-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="commands-drop-downs-trigger2"
              >
                <p className="commands-drop-downs-faq2-question1 thq-body-large">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="commands-drop-downs-text271">
                        Information
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="commands-drop-downs-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon14"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon16"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="commands-drop-downs-container16">
                  <span className="commands-drop-downs-text137 thq-body-small">
                    <span className="commands-drop-downs-text138">
                      Convert:
                    </span>
                    <span> Converts between different currencies</span>
                    <br className="commands-drop-downs-text140"></br>
                    <span className="commands-drop-downs-text141">Crypto:</span>
                    <span>
                      {' '}
                      retrieves and displays the current price and other
                      information about a specific cryptocurrency
                    </span>
                    <br className="commands-drop-downs-text143"></br>
                    <span className="commands-drop-downs-text144">
                      First Message:
                    </span>
                    <span> Shows first message in the current channel</span>
                    <br className="commands-drop-downs-text146"></br>
                    <span className="commands-drop-downs-text147">
                      Information:
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="commands-drop-downs-text149"></br>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;User - This gets basic user information (Options:
                      User)
                    </span>
                    <br className="commands-drop-downs-text151"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Server - This shows server information</span>
                    <br className="commands-drop-downs-text154"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Permissions - This gets user permission information
                      (Options: Target)
                    </span>
                    <br className="commands-drop-downs-text157"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Role - This gets user role information (Options: Role)
                    </span>
                    <br className="commands-drop-downs-text160"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Bot - This command will show you a list of bot stats that
                      are currently available
                    </span>
                    <br className="commands-drop-downs-text163"></br>
                    <span className="commands-drop-downs-text164">Invite:</span>
                    <span> Invite Daiki to another one of your servers!</span>
                    <br className="commands-drop-downs-text166"></br>
                    <span className="commands-drop-downs-text167">Quote:</span>
                    <span>
                      {' '}
                      Retrieves and displays a random inspirational or
                      motivational quote
                    </span>
                    <br className="commands-drop-downs-text169"></br>
                    <span className="commands-drop-downs-text170">
                      Server Avatar:
                    </span>
                    <span>
                      {' '}
                      Shows server avatar (Options: Target &lt;Optional&gt;)
                    </span>
                    <br className="commands-drop-downs-text172"></br>
                    <span className="commands-drop-downs-text173">
                      Support:
                    </span>
                    <span> Show a button to webpage for support</span>
                    <br className="commands-drop-downs-text175"></br>
                    <span className="commands-drop-downs-text176">Urban:</span>
                    <span>
                      {' '}
                      Searches the Urban Dictionary for the provided term and
                      displays the definition Options: Term
                    </span>
                    <br className="commands-drop-downs-text178"></br>
                    <span className="commands-drop-downs-text179">Voted:</span>
                    <span>
                      {' '}
                      Have you voted for Daiki on top.gg? Let&apos;s find out!
                    </span>
                    <br className="commands-drop-downs-text181"></br>
                    <span className="commands-drop-downs-text182">
                      Weather:
                    </span>
                    <span>
                      {' '}
                      Many different weather APIs, such as Weather API and Open
                      Weather Map, could be used to provide weather embeds to a
                      discord server. You could use slash commands to fetch the
                      current weather, or make a daily weather report channel if
                      a discord server is based in a single area.
                    </span>
                    <br className="commands-drop-downs-text184"></br>
                    <span className="commands-drop-downs-text185">Whois:</span>
                    <span>
                      {' '}
                      This gets basic user information (Options: User)
                    </span>
                    <br></br>
                  </span>
                </div>
              )}
            </div>
            <div className="commands-drop-downs-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="commands-drop-downs-trigger3"
              >
                <p className="commands-drop-downs-faq2-question2 thq-body-large">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="commands-drop-downs-text275">
                        <span>Moderation</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="commands-drop-downs-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon18"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon20"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="commands-drop-downs-container19">
                  <span className="commands-drop-downs-text188 thq-body-small">
                    <span className="commands-drop-downs-text189">Kick:</span>
                    <span>
                      {' '}
                      Kick a user from the discord server (Options: Target,
                      Reason)
                    </span>
                    <br className="commands-drop-downs-text191"></br>
                    <span className="commands-drop-downs-text192">Mute:</span>
                    <span>
                      {' '}
                      Mutes a given user (Options: Minutes, Target, Reason
                      &lt;Optional&gt;)
                    </span>
                    <br className="commands-drop-downs-text194"></br>
                    <span className="commands-drop-downs-text195">Role:</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="commands-drop-downs-text197"></br>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Add - Add a role to any given member (Options: Role)
                    </span>
                    <br className="commands-drop-downs-text199"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Remove - Remove a role from a given member (Options: Role)
                    </span>
                    <br className="commands-drop-downs-text202"></br>
                    <span className="commands-drop-downs-text203">
                      Slowmode:
                    </span>
                    <span>
                      {' '}
                      Set a slowmode in a channel (Options: Time, Reason
                      &lt;Optional&gt;)
                    </span>
                    <br className="commands-drop-downs-text205"></br>
                    <span className="commands-drop-downs-text206">Unban:</span>
                    <span>
                      {' '}
                      Unban a user from this discord server (Options: Target,
                      Reason)
                    </span>
                    <br className="commands-drop-downs-text208"></br>
                    <span className="commands-drop-downs-text209">Unmute:</span>
                    <span> Unmute a given user (Options: User, Reason)</span>
                    <br className="commands-drop-downs-text211"></br>
                    <span className="commands-drop-downs-text212">
                      Warnings:
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="commands-drop-downs-text214"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Show - Shows all warnings on a user (Options: User)
                    </span>
                    <br className="commands-drop-downs-text217"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Add - Warn a user (Options: Target, Reason)</span>
                    <br className="commands-drop-downs-text220"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Remove - Remove a warning by ID from a user (Options:
                      Target, Warning ID)
                    </span>
                    <br className="commands-drop-downs-text223"></br>
                  </span>
                </div>
              )}
            </div>
            <div className="commands-drop-downs-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="commands-drop-downs-trigger4"
              >
                <p className="commands-drop-downs-faq2-question3 thq-body-large">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="commands-drop-downs-text268">
                        <span>Server</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="commands-drop-downs-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon22"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon24"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="commands-drop-downs-container22">
                  <span className="commands-drop-downs-text224 thq-body-small">
                    <span className="commands-drop-downs-text225">Setup:</span>
                    <br></br>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Configured - Shows all configured settings for the
                      discord server
                    </span>
                    <br className="commands-drop-downs-text228"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Reset - Reset Server Configuration (Options: Setting
                      *Which setup setting*)
                    </span>
                    <br className="commands-drop-downs-text231"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Warnings - Configure the way warning commands are
                      interacted with (Options: Role)
                    </span>
                    <br className="commands-drop-downs-text234"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Mute - Configure the mute commands are interacted with
                      (Options: Role, Warn on Mute)
                    </span>
                    <br className="commands-drop-downs-text237"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Kick - Configure the way kick commands are interacted with
                      (Options: Role)
                    </span>
                    <br className="commands-drop-downs-text240"></br>
                    <span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Ban - Configure the way ban commands are interacted with
                      (Options: Role)
                    </span>
                    <br></br>
                  </span>
                </div>
              )}
            </div>
            <div className="commands-drop-downs-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="commands-drop-downs-trigger5"
              >
                <p className="commands-drop-downs-faq1-question2 thq-body-large">
                  {props.faq1Question1 ?? (
                    <Fragment>
                      <span className="commands-drop-downs-text267">Tools</span>
                    </Fragment>
                  )}
                </p>
                <div className="commands-drop-downs-icons-container5">
                  {!faq5Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon26"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon28"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="commands-drop-downs-container25">
                  <span className="commands-drop-downs-text244 thq-body-small">
                    <span className="commands-drop-downs-text245">AFK:</span>
                    <span>
                      {' '}
                      AFK is short for away from the keyboard and it will allow
                      Discord to send custom messages to other users who mention
                      you when you are not physically in front of your computer.
                      This is a great option when you have to use the restroom
                      or grab a short pause for lunch.
                    </span>
                    <br className="commands-drop-downs-text247"></br>
                    <span className="commands-drop-downs-text248">Clear:</span>
                    <span>
                      {' '}
                      Deletes a specified number of messages from a channel or
                      user (Options: Amount, Target)
                    </span>
                    <br className="commands-drop-downs-text250"></br>
                    <span className="commands-drop-downs-text251">
                      Generate Password:
                    </span>
                    <span>
                      {' '}
                      generates strong and secure passwords with customizable
                      options like length and character types. It helps users
                      create secure passwords.
                    </span>
                    <br className="commands-drop-downs-text253"></br>
                    <span className="commands-drop-downs-text254">
                      QR Code:
                    </span>
                    <span> generates QR codes for specified text or URLs</span>
                    <br className="commands-drop-downs-text256"></br>
                    <span className="commands-drop-downs-text257">
                      Shorten:
                    </span>
                    <span> Shortens long URLs</span>
                    <br></br>
                  </span>
                </div>
              )}
            </div>
            <div className="commands-drop-downs-faq6">
              <div
                onClick={() => setFaq6Visible(!faq6Visible)}
                className="commands-drop-downs-trigger6"
              >
                <p className="commands-drop-downs-faq1-question3 thq-body-large">
                  {props.faq1Question14 ?? (
                    <Fragment>
                      <span className="commands-drop-downs-text278">
                        <span>Utilities</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="commands-drop-downs-icons-container6">
                  {faq6Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon30"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq6Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="commands-drop-downs-icon32"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq6Visible === true && (
                <div className="commands-drop-downs-container28">
                  <span className="commands-drop-downs-text260 thq-body-small">
                    <span className="commands-drop-downs-text261">Embed:</span>
                    <span>
                      {' '}
                      Send an embed in a given chat (Options: Color, Channel)
                    </span>
                    <br className="commands-drop-downs-text263"></br>
                    <span className="commands-drop-downs-text264">Say:</span>
                    <span>
                      {' '}
                      Send a message in a given chat (Options: Channel
                      &lt;Optional&gt;)
                    </span>
                    <br className="commands-drop-downs-text266"></br>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CommandsDropDowns.defaultProps = {
  faq1Question1: undefined,
  faq4Question: undefined,
  faq2Question: undefined,
  faq1Question: undefined,
  faq3Question: undefined,
  faq1Question14: undefined,
  rootClassName: '',
}

CommandsDropDowns.propTypes = {
  faq1Question1: PropTypes.element,
  faq4Question: PropTypes.element,
  faq2Question: PropTypes.element,
  faq1Question: PropTypes.element,
  faq3Question: PropTypes.element,
  faq1Question14: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CommandsDropDowns
