import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
    return (
        <footer className="footer-footer thq-section-padding">
            <div className="footer-max-width thq-section-max-width">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img
                            alt={props.image1Alt}
                            src={props.image1Src}
                            className="footer-image1"
                        />
                    </div>
                    <div className="footer-links">
                        <Link to="/" className="footer-link1">
                            {props.link1 ?? (
                                <Fragment>
                                    <span className="footer-text6 thq-body-small">Home</span>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/docs" className="footer-link2">
                            {props.link2 ?? (
                                <Fragment>
                                    <span className="footer-text7 thq-body-small">Docs</span>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/contact" className="footer-link3">
                            {props.link3 ?? (
                                <Fragment>
                                    <span className="footer-text8 thq-body-small">Contact</span>
                                </Fragment>
                            )}
                        </Link>
                        <Link to="/commands" className="footer-link4">
                            {props.link4 ?? (
                                <Fragment>
                                    <span className="footer-text4 thq-body-small">Commands</span>
                                </Fragment>
                            )}
                        </Link>
                    </div>
                    <div className="footer-social-links">
                        <a
                            href={props.imageUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="footer-link5"
                        >
                            <img
                                alt={props.imageAlt}
                                src={props.imageSrc}
                                viewBox="0 0 1024 1024"
                                className="footer-image"
                            />
                        </a>
                    </div>
                </div>
                <div className="footer-credits">
                    <div className="footer-divider thq-divider-horizontal"></div>
                    <div className="footer-row">
                        <div className="footer-footer-links">
                            <span>
                                {props.content3 ?? (
                                    <Fragment>
                                        <span className="footer-content32 thq-body-small">
                                            <a
                                                href="https://app.copyrighted.com/website/OjYDIEkFxuoxr53E"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                ©
                                            </a>
                                            <span> 2024 Daiki Development</span>
                                        </span>
                                    </Fragment>
                                )}
                            </span>
                            <a href={props.link11Url}>
                                {props.link11 ?? (
                                    <Fragment>
                                        <span className="footer-text5 thq-body-small">
                                            Privacy Policy
                                        </span>
                                    </Fragment>
                                )}
                            </a>
                            <a href={props.link11Url1}>
                                {props.link111 ?? (
                                    <Fragment>
                                        <a
                                            href="https://daiki-bot.xyz/tos"
                                            className="footer-link113 thq-body-small"
                                        >
                                            <span>Terms of Service</span>
                                            <br></br>
                                        </a>
                                    </Fragment>
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    image1Alt: 'Daiki Development Footer Logo',
    content3: undefined,
    link111: undefined,
    link4: undefined,
    link11: undefined,
    link1: undefined,
    link2: undefined,
    link3: undefined,
    link11Url1: 'https://daiki-bot.xyz/tos',
    link11Url: 'https://daiki-bot.xyz/privacy',
    image1Src: '/footer-image-200h.png',
    imageUrl: 'https://daiki-bot.xyz/support',
    imageSrc: '/discord%20logo.svg',
    imageAlt: 'image',
}

Footer.propTypes = {
    image1Alt: PropTypes.string,
    content3: PropTypes.element,
    link111: PropTypes.element,
    link4: PropTypes.element,
    link11: PropTypes.element,
    link1: PropTypes.element,
    link2: PropTypes.element,
    link3: PropTypes.element,
    link11Url1: PropTypes.string,
    link11Url: PropTypes.string,
    image1Src: PropTypes.string,
    imageUrl: PropTypes.string,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
}

export default Footer
