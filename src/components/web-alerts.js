import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './web-alerts.css'

const WebAlerts = (props) => {
  return (
    <div className="web-alerts-web-alerts">
      <span className="web-alerts-text1">
        {props.text ?? (
          <Fragment>
            <span className="web-alerts-text2">
              <span className="web-alerts-text3">
                Daiki Developments website is still under development. Some
                pages may be unavailable at this time. If you believe you
                received this in error
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="web-alerts-text4"></br>
              <span className="web-alerts-text5">Please contact </span>
              <span className="web-alerts-text6">
                our support team at +1 ‪(267) 544-9565‬. Thank you!
              </span>
              <br></br>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

WebAlerts.defaultProps = {
  text: undefined,
}

WebAlerts.propTypes = {
  text: PropTypes.element,
}

export default WebAlerts
