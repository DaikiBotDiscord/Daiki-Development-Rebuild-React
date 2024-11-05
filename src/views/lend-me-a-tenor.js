import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './lend-me-a-tenor.css'

const LendMeATenor = (props) => {
  return (
    <html>
      <head>
        <title>Lend Me a Tenor - LHS Encore</title>
        <link rel="shortcut icon" href="/playground_assets/EncoreLogo.png" type="icon/png" sizes="32x32" />
        <meta
          property="og:title"
          content="Lend Me a Tenor - LHS Encore"
        />
        <meta
          property="og:description"
          content="Our organization of parents and teachers enjoy supporting the LHS Performing Arts program and its students. If your student will be involved in an instrumental group, choir, or theater, please join us at our monthly meetings for the latest updates, or sign up to donate or help out at concerts and performances."
        />
        <meta property='og:url' content="https://sites.google.com/view/lhsencore/home" />
        <meta property='og:image' content='/playground_assets/EncoreLogo.png' />
      </head>
      <div className="lend-me-a-tenor-container">
        <Helmet>
          <title>Lend Me a Tenor - LHS Encore</title>
          <link rel="shortcut icon" href="/playground_assets/EncoreLogo.png" type="icon/png" sizes="32x32" />
          <meta
            property="og:title"
            content="Lend Me a Tenor - LHS Encore"
          />
          <meta
            property="og:description"
            content="Our organization of parents and teachers enjoy supporting the LHS Performing Arts program and its students. If your student will be involved in an instrumental group, choir, or theater, please join us at our monthly meetings for the latest updates, or sign up to donate or help out at concerts and performances."
          />
        </Helmet>
        <div data-role="Header" className="lend-me-a-tenor-navbar-container">
          <div className="lend-me-a-tenor-navbar">
            <div className="lend-me-a-tenor-left-side">
              <a
                href="https://sites.google.com/view/lhsencore/home"
                target="_blank"
                rel="noreferrer noopener"
                className="lend-me-a-tenor-link"
              >
                <img
                  alt="image"
                  src="/playground_assets/EncoreLogo.png"
                  className="lend-me-a-tenor-image"
                />
              </a>
            </div>
          </div>
        </div>
        <span className="lend-me-a-tenor-text13">
          <span>Lend Me a Tenor has been Released</span>
          <br></br>
          <span>
            Please click button below to watch
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </span>
        <a href="https://youtu.be/goUAO7kKkvI" className="lend-me-a-tenor-link1 button">
          <span>
            <span>Watch Lend Me a Tenor</span>
            <br></br>
          </span>
        </a>
        <div className="lend-me-a-tenor-footer-container">
          <div className="lend-me-a-tenor-footer">
            <div className="lend-me-a-tenor-copyright-container">
              <svg viewBox="0 0 1024 1024" className="lend-me-a-tenor-icon2">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="lend-me-a-tenor-text23">LHS Encore</span>
              <span className="lend-me-a-tenor-text24">
                <span className="lend-me-a-tenor-text25">
                  All Rights Reserved, LHS Encore
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </ html>
  )
}

export default LendMeATenor