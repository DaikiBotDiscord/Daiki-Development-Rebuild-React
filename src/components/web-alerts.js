import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './web-alerts.css'

const WebAlerts = (props) => {
  const alertText = process.env.REACT_APP_WEB_ALERT_TEXT || "";
  const alertLines = alertText.split('\n'); // or '\\n' if needed
  const alertLink = process.env.REACT_APP_WEB_ALERT_LINK || "/contact";
  const alertLinkText = process.env.REACT_APP_WEB_ALERT_LINK_TEXT || "Contact Support";
  const showButton = String(process.env.REACT_APP_WEB_ALERT_BUTTON).toLowerCase() === "true";
  return (
    <div className="web-alerts-web-alerts">
      <span className="web-alerts-text13">
        <Fragment>
          {alertLines.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))
          }
        </Fragment>
      </span>
      {showButton && (
        <a
          href={alertLink}
          className="web-alerts-navlink button thq-button-filled thq-button-animated"
        >
          <span>{alertLinkText}</span>
        </a>
      )}
    </div>
  );
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
