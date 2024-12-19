import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './web-alerts.css'

const WebAlerts = (props) => {
  return (
    <div className="web-alerts-web-alerts">
      <span className="web-alerts-text10">
        {props.text ?? (
          <Fragment>
            <span className="web-alerts-text13">
              <span>
                Are you interested in a custom website? Well look no further,
                Daiki Development offers custom web development services
              </span>
              <br></br>
              <span>Along with web hosting of your custom website!</span>
              <br></br>
              <span>Contact our support team today</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </span>
      <Link
        to="/contact"
        className="web-alerts-navlink button thq-button-filled thq-button-animated"
      >
        <span>
          {props.button ?? (
            <Fragment>
              <span className="web-alerts-text12">Contact Support</span>
            </Fragment>
          )}
        </span>
      </Link>
    </div>
  )
}

WebAlerts.defaultProps = {
  button: undefined,
  text: undefined,
}

WebAlerts.propTypes = {
  button: PropTypes.element,
  text: PropTypes.element,
}

export default WebAlerts
