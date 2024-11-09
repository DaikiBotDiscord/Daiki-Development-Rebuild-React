import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './docs.css'

const Docs = (props) => {
    const [faq6Visible, setFaq6Visible] = useState(false)
    const [faq1Visible, setFaq1Visible] = useState(false)
    const [faq5Visible, setFaq5Visible] = useState(false)
    const [faq4Visible, setFaq4Visible] = useState(false)
    const [faq3Visible, setFaq3Visible] = useState(false)
    const [faq2Visible, setFaq2Visible] = useState(false)
    return (
        <div className={`docs-faq8 thq-section-padding ${props.rootClassName} `}>
            <div className="docs-max-width thq-section-max-width">
                <div className="thq-flex-column thq-section-max-width docs-container10">
                    <div className="docs-list">
                        <div className="docs-faq1">
                            <div
                                onClick={() => setFaq1Visible(!faq1Visible)}
                                className="docs-trigger1"
                            >
                                <p className="docs-faq1-question1 thq-body-large">
                                    {props.faq1Question ?? (
                                        <Fragment>
                                            <span className="docs-text245">
                                                <span>Information</span>
                                                <br></br>
                                            </span>
                                        </Fragment>
                                    )}
                                </p>
                                <div className="docs-icons-container1">
                                    {!faq1Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon10">
                                                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                    {faq1Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon12">
                                                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {faq1Visible && (
                                <div className="docs-container13">
                                    <span className="docs-text100 thq-body-small">
                                        <span className="docs-text101">Daiki Bot</span>
                                        <br className="docs-text102"></br>
                                        <span>
                                            • Daiki is a Discord bot created with
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a
                                            href="https://discord.js.org/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="docs-link1"
                                        >
                                            Discord.JS
                                        </a>
                                        <br></br>
                                        <span>• Want to invite Daiki? </span>
                                        <a
                                            href="https://short.daiki-bot.xyz/daiki/invite"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="docs-link2"
                                        >
                                            Invite Here
                                        </a>
                                        <a
                                            href="https://short.daiki-bot.xyz/daiki/invite"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <br className="docs-text106"></br>
                                        </a>
                                        <span>
                                            • Need help with Daiki?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a
                                            href="https://daiki-bot.xyz/support"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="docs-link4"
                                        >
                                            Get Support Here
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <span className="docs-text110">Requirements</span>
                                        <br></br>
                                        <span>
                                            Daiki requires the correct permissions to function
                                            properly and that&apos;s it!
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="docs-faq2">
                            <div
                                onClick={() => setFaq2Visible(!faq2Visible)}
                                className="docs-trigger2"
                            >
                                <p className="docs-faq2-question1 thq-body-large">
                                    {props.faq2Question ?? (
                                        <Fragment>
                                            <span className="docs-text248">Permissions</span>
                                        </Fragment>
                                    )}
                                </p>
                                <div className="docs-icons-container2">
                                    {!faq2Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon14">
                                                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                    {faq2Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon16">
                                                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {faq2Visible && (
                                <div className="docs-container16">
                                    <span className="docs-text114 thq-body-small">
                                        <span className="docs-text115">Bot Permissions</span>
                                        <br className="docs-text116"></br>
                                        <span>
                                            All permissions listed below are required for Daiki to
                                            function properly
                                        </span>
                                        <br className="docs-text118"></br>
                                        <br></br>
                                        <span>• Manage Server</span>
                                        <br></br>
                                        <span>• Manage Roles</span>
                                        <br></br>
                                        <span>• Manage Channels</span>
                                        <br></br>
                                        <span>• Kick Members</span>
                                        <br></br>
                                        <span>• Ban Members</span>
                                        <br></br>
                                        <span>• Create Invite</span>
                                        <br></br>
                                        <span>• Manage Nicknames</span>
                                        <br></br>
                                        <span>• Change Nicknames</span>
                                        <br></br>
                                        <span>• Manage Webhooks</span>
                                        <br></br>
                                        <span>• View Audit Logs</span>
                                        <br></br>
                                        <span>• Read Messages</span>
                                        <br></br>
                                        <span>• Moderate Members</span>
                                        <br></br>
                                        <span>• Send Messages</span>
                                        <br></br>
                                        <span>• Manage Messages</span>
                                        <br></br>
                                        <span>• Embed Links</span>
                                        <br></br>
                                        <span>• Attach Files</span>
                                        <br></br>
                                        <span>• Read Message History</span>
                                        <br></br>
                                        <span>• Mention @everyone, @here, and All Roles</span>
                                        <br></br>
                                        <span>• Add Reactions</span>
                                        <br></br>
                                        <span>• Use External Emojis</span>
                                        <br></br>
                                        <span>• Connect</span>
                                        <br></br>
                                        <span>• Speak</span>
                                        <br></br>
                                        <span>• Mute Members</span>
                                        <br></br>
                                        <span>• Deafen Members</span>
                                        <br></br>
                                        <span>• Priority Speaker</span>
                                        <br></br>
                                        <span>• Use Voice Activity</span>
                                        <br></br>
                                        <span>• Move Members</span>
                                        <br></br>
                                        <span>• Embed Links</span>
                                        <br></br>
                                        <span>• Attach Files</span>
                                        <br></br>
                                        <span>• Read Message History</span>
                                        <br></br>
                                        <span>• Mention @everyone, @here, and All Roles</span>
                                        <br></br>
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="docs-faq3">
                            <div
                                onClick={() => setFaq3Visible(!faq3Visible)}
                                className="docs-trigger3"
                            >
                                <p className="docs-faq2-question2 thq-body-large">
                                    {props.faq3Question ?? (
                                        <Fragment>
                                            <span className="docs-text242">
                                                <span>Setup</span>
                                                <br></br>
                                            </span>
                                        </Fragment>
                                    )}
                                </p>
                                <div className="docs-icons-container3">
                                    {!faq3Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon18">
                                                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                    {faq3Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon20">
                                                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {faq3Visible && (
                                <div className="docs-container19">
                                    <span className="docs-text182 thq-body-small">
                                        <span className="docs-text183">Requirements</span>
                                        <br></br>
                                        <span>
                                            Daiki has no requirements besides the proper permissions
                                            to function properly. *
                                        </span>
                                        <span className="docs-text186">
                                            The required permissions can be found in the permission
                                            section
                                        </span>
                                        <span>*</span>
                                        <br></br>
                                        <br></br>
                                        <span className="docs-text190">
                                            Let&apos;s Setup Daiki!
                                        </span>
                                        <br></br>
                                        <span>
                                            1.
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a
                                            href="https://daiki-bot.xyz/invite"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="docs-link5"
                                        >
                                            Invite Daiki
                                        </a>
                                        <br></br>
                                        <span>
                                            2. Double check Daiki has all of the correct permissions *
                                        </span>
                                        <span className="docs-text195">
                                            The required permissions can be found in the permission
                                            section
                                        </span>
                                        <span>*</span>
                                        <br></br>
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="docs-faq4">
                            <div
                                onClick={() => setFaq4Visible(!faq4Visible)}
                                className="docs-trigger4"
                            >
                                <p className="docs-faq2-question3 thq-body-large">
                                    {props.faq4Question ?? (
                                        <Fragment>
                                            <span className="docs-text249">Help</span>
                                        </Fragment>
                                    )}
                                </p>
                                <div className="docs-icons-container4">
                                    {!faq4Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon22">
                                                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                    {faq4Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon24">
                                                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {faq4Visible && (
                                <div className="docs-container22">
                                    <span className="docs-text198 thq-body-small">
                                        <span className="docs-text199">Daiki Links</span>
                                        <br className="docs-text200"></br>
                                        <span>
                                            • Daiki is a Discord bot created with
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a
                                            href="https://discord.js.org/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="docs-link6"
                                        >
                                            Discord.JS
                                        </a>
                                        <br></br>
                                        <span>
                                            • Want to invite Daiki?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a
                                            href="https://daiki-bot.xyz/invite"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="docs-link7"
                                        >
                                            Invite Here
                                        </a>
                                        <br></br>
                                        <span>
                                            • Need help with Daiki?
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a
                                            href="https://daiki-bot.xyz/support"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="docs-link8"
                                        >
                                            Get Support Here
                                        </a>
                                        <br className="docs-text206"></br>
                                        <br className="docs-text207"></br>
                                        <span className="docs-text208">Troubleshooting</span>
                                        <br className="docs-text209"></br>
                                        <span>
                                            Daiki not responding to a command? Make sure that Daiki is
                                            not under a update or down, also make sure Daiki has all
                                            of the correct permissions. *
                                        </span>
                                        <span className="docs-text211">
                                            The required permissions can be found in the permission
                                            section
                                        </span>
                                        <span>*</span>
                                        <br></br>
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="docs-faq5">
                            <div
                                onClick={() => setFaq5Visible(!faq5Visible)}
                                className="docs-trigger5"
                            >
                                <p className="docs-faq1-question2 thq-body-large">
                                    {props.faq1Question1 ?? (
                                        <Fragment>
                                            <span className="docs-text241">Facts</span>
                                        </Fragment>
                                    )}
                                </p>
                                <div className="docs-icons-container5">
                                    {!faq5Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon26">
                                                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                    {faq5Visible && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon28">
                                                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {faq5Visible && (
                                <div className="docs-container25">
                                    <span className="docs-text214 thq-body-small">
                                        <span className="docs-text215">
                                            When was Daiki created?
                                        </span>
                                        <br className="docs-text216"></br>
                                        <span>
                                            The Daiki Development Project was started on May 4th, 2021
                                        </span>
                                        <br></br>
                                        <br></br>
                                        <span className="docs-text220">
                                            How many members use Daiki?
                                        </span>
                                        <br className="docs-text221"></br>
                                        <span>
                                            At the moment, there are over 100,000 members who use
                                            Daiki!
                                        </span>
                                        <br></br>
                                        <br></br>
                                        <span className="docs-text225">Why was Daiki created?</span>
                                        <br className="docs-text226"></br>
                                        <span>
                                            We created Daiki to be like most Discord bots but with out
                                            all of the premium paying, so all of our supporters can
                                            get the full experience with out the cost.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="docs-faq6">
                            <div
                                onClick={() => setFaq6Visible(!faq6Visible)}
                                className="docs-trigger6"
                            >
                                <p className="docs-faq1-question3 thq-body-large">
                                    {props.faq1Question14 ?? (
                                        <Fragment>
                                            <span className="docs-text250">
                                                <span>Resources</span>
                                                <br></br>
                                            </span>
                                        </Fragment>
                                    )}
                                </p>
                                <div className="docs-icons-container6">
                                    {faq6Visible === false && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon30">
                                                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                    {faq6Visible === true && (
                                        <div>
                                            <svg viewBox="0 0 1024 1024" className="docs-icon32">
                                                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {faq6Visible === true && (
                                <div className="docs-container28">
                                    <span className="docs-text229 thq-body-small">
                                        <span className="docs-text230">Packages Used</span>
                                        <br className="docs-text231"></br>
                                        <span>
                                            Discord.JS - This is a API used to have Daiki communicate
                                            with Discord and make Daiki functional.
                                        </span>
                                        <br></br>
                                        <span className="docs-text234">
                                            Daiki uses version: 14.14.1
                                        </span>
                                        <br></br>
                                        <br className="docs-text236"></br>
                                        <span>
                                            Mongoose - Database application that can be used for small
                                            applications and is free but for better quality and
                                            performance you will need to pay. To learn more please
                                            visit
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a
                                            href="https://mongodb.com"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="docs-link9"
                                        >
                                            mongodb.com
                                        </a>
                                        <br className="docs-text238"></br>
                                        <span className="docs-text239">
                                            Daiki uses version: 6.0.12
                                        </span>
                                        <br className="docs-text240"></br>
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

Docs.defaultProps = {
    faq1Question1: undefined,
    rootClassName: '',
    faq3Question: undefined,
    faq1Question: undefined,
    faq2Question: undefined,
    faq4Question: undefined,
    faq1Question14: undefined,
}

Docs.propTypes = {
    faq1Question1: PropTypes.element,
    rootClassName: PropTypes.string,
    faq3Question: PropTypes.element,
    faq1Question: PropTypes.element,
    faq2Question: PropTypes.element,
    faq4Question: PropTypes.element,
    faq1Question14: PropTypes.element,
}

export default Docs
