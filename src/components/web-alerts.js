import React, { useEffect, useRef, Fragment } from 'react'

import PropTypes from 'prop-types'

import './web-alerts.css'

const WebAlerts = (props) => {
  const alertRef = useRef(null);
  const alertText = process.env.REACT_APP_WEB_ALERT_TEXT || "";
  const alertLines = alertText.split('\n'); // or '\\n' if needed
  const alertLink = process.env.REACT_APP_WEB_ALERT_LINK || "/contact";
  const alertLinkText = process.env.REACT_APP_WEB_ALERT_LINK_TEXT || "Contact Support";
  const showButton = String(process.env.REACT_APP_WEB_ALERT_BUTTON).toLowerCase() === "true";

  useEffect(() => {
    const updateAlertHeight = () => {
      const height = alertRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty('--web-alert-height', `${height}px`);
    };

    document.body.classList.add('has-web-alert');
    updateAlertHeight();

    const resizeObserver = typeof ResizeObserver !== 'undefined' && alertRef.current
      ? new ResizeObserver(updateAlertHeight)
      : null;

    if (resizeObserver && alertRef.current) {
      resizeObserver.observe(alertRef.current);
    }

    window.addEventListener('resize', updateAlertHeight);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateAlertHeight);
      document.body.classList.remove('has-web-alert');
      document.documentElement.style.removeProperty('--web-alert-height');
    };
  }, []);

  return (
    <div className="web-alerts-web-alerts" ref={alertRef}>
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
