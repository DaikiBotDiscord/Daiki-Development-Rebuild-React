import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import WebAlerts from '../components/web-alerts'
import NavBar from '../components/nav-bar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Daiki Development</title>
        <meta property="og:title" content="Daiki Development" />
      </Helmet>
      <NavBar
        text={
          <Fragment>
            <span className="home-text16">Invite Daiki</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-link1 thq-body-small thq-link">
              <span>Home</span>
              <br></br>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text19 thq-body-small thq-link">Docs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20 thq-body-small thq-link">Contact</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text21 thq-body-small thq-link">
              Commands
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text22">Invite Daiki</span>
          </Fragment>
        }
        link11={
          <Fragment>
            <span className="home-text23 thq-body-small thq-link">Home</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text24 thq-body-small thq-link">Docs</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="home-text25 thq-body-small thq-link">Contact</span>
          </Fragment>
        }
        link41={
          <Fragment>
            <span className="home-text26 thq-body-small thq-link">
              Commands
            </span>
          </Fragment>
        }
      ></NavBar>
      <div className="home-container2">
        <div className="home-container3">
          <div className="home-container4">
            <span className="home-text27">
              <span>Home</span>
              <br></br>
            </span>
            <a
              href="https://daiki-bot.xyz/invite"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <img
                alt="Exclude380"
                src="/external/exclude380-n6cl.svg"
                className="home-exclude"
              />
            </a>
          </div>
        </div>
        <div className="home-container5">
          <div className="home-container6">
            <a
              href="https://www.daiki-bot.xyz/docs"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <div className="home-container7">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 24 24"
                  className="home-icon1"
                >
                  <path
                    d="M4 4v18h16v2H4c-1.1 0-2-.9-2-2V4zm11 3h5.5L15 1.5zM8 0h8l6 6v12c0 1.11-.89 2-2 2H8a2 2 0 0 1-2-2V2c0-1.11.89-2 2-2m9 16v-2H8v2zm3-4v-2H8v2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text30">
                  <span>Documentation</span>
                  <br></br>
                </span>
              </div>
            </a>
            <a
              href="https://www.daiki-bot.xyz/contact"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <div className="home-container8">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 24 24"
                  className="home-icon3"
                >
                  <path
                    d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text33">
                  <span>Contact</span>
                  <br></br>
                </span>
              </div>
            </a>
            <a
              href="https://www.daiki-bot.xyz/commands"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <div className="home-container9">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 20 20"
                  className="home-icon5"
                >
                  <path
                    d="M3.25 3A2.25 2.25 0 0 0 1 5.25v9.5A2.25 2.25 0 0 0 3.25 17h13.5A2.25 2.25 0 0 0 19 14.75v-9.5A2.25 2.25 0 0 0 16.75 3zm.943 8.752a.75.75 0 0 1 .055-1.06L6.128 9l-1.88-1.693a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.06-.055M9.75 10.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
                    fill="currentColor"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span className="home-text36">
                  <span>Commands</span>
                  <br></br>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
