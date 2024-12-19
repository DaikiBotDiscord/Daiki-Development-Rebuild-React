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
            <span className="web-alerts-text12">
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
        className="web-alerts-navlink thq-button-animated button thq-button-filled"
      >
        <span>
          {props.button ?? (
            <Fragment>
              <span className="web-alerts-text19">Contact Support</span>
            </Fragment>
          )}
        </span>
      </Link>
    </div>
  )
}

WebAlerts.defaultProps = {
  text: undefined,
  button: undefined,
}

WebAlerts.propTypes = {
  text: PropTypes.element,
  button: PropTypes.element,
}

export default WebAlerts
