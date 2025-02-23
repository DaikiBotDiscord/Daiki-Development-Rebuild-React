import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Cookies from 'js-cookie';

import './style.css';
import PageNotFound from './views/page-not-found';
import Home from './views/home';
import Docs from './views/documentation';
import Contact from './views/contact';
import Commands from './views/commands';

// Dashboard Sync Component
const DashboardSync = () => {
  useEffect(() => {
    fetch('https://oauth2.daiki-bot.xyz/dashboard/check-session', {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("✅ Session Token Found:", data.session_token);
          Cookies.set('discord.oauth2', data.session_token, {
            domain: '.daiki-bot.xyz',
            path: '/',
            secure: true,
            sameSite: 'None'
          });

          window.location.href = "/dashboard"; // Redirect to frontend dashboard
        } else {
          console.warn("❌ No session found, redirecting...");
          window.location.href = 'https://oauth2.daiki-bot.xyz/auth';
        }
      }).catch(error => {
        console.error("❌ Error fetching session:", error);
        window.location.href = 'https://oauth2.daiki-bot.xyz/auth';
      });
  }, []);

  return <p>Syncing session, please wait...</p>;
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={DashboardSync} exact path="/dashboard-sync" />
        <Route component={Docs} exact path="/docs" />
        <Route component={Commands} exact path="/commands" />
        <Route component={Contact} exact path='/contact' />
        <Route component={PageNotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
