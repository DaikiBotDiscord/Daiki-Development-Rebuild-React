import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page-not-found.css'
import Footer from '../components/footer'
import NavBar from '../components/nav-bar'

const PageNotFound = (props) => {
  return (
    <div className="page-not-found-container1">
      <Helmet>
        <title>Page Not Found - Daiki Development</title>
        <meta
          property="og:title"
          content="Page-Not-Found - Daiki Development"
        />
      </Helmet>
      <NavBar />
      <div className="page-not-found-container2">
        <div className="page-not-found-container3">
          <div className="page-not-found-container4">
            <span className="page-not-found-text20">
              <span>Page Not Found</span>
              <br></br>
            </span>
            <Link
              to="/"
              className="page-not-found-action13 thq-button-filled thq-button-animated"
            >
              <span>
                <span>Go To Home Page</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageNotFound
