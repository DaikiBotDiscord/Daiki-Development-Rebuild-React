import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom'
import Cookies from 'js-cookie';

import './style.css'
import PageNotFound from './views/page-not-found'
import Home from './views/home'
import LendMeATenor from './views/lend-me-a-tenor'
import TheWeddingSinger from './views/theweddingsinger'
import AroundTheWorld from './views/around-the-world'
import WebAlerts from './components/web-alerts'
import Docs from './views/documentation'
import Contact from './views/contact'
import Commands from './views/commands'
import { Mosaic, ThreeDot } from 'react-loading-indicators'
import Dashboard from './views/dashboard';

const DashboardSync = () => {
  useEffect(() => {
    fetch('https://oauth2.daiki-bot.xyz/dashboard/check-session', {
      method: 'GET',
      credentials: 'include' // ✅ Send cookies with request
    }).then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("✅ Session Valid");
          window.location.href = "/dashboard"; // ✅ Redirect to actual dashboard
        } else {
          console.warn("❌ Session Invalid, redirecting...");
          window.location.href = 'https://oauth2.daiki-bot.xyz/auth';
        }
      }).catch(error => {
        console.error("❌ Error checking session:", error);
        window.location.href = 'https://oauth2.daiki-bot.xyz/auth';
      });
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%', // Full viewport height
      width: '100%',  // Full viewport width
      marginTop: '100px',
    }}>
      <ThreeDot variant="bounce" color={["#6141ac", "#233dff", "#6845ba", "#3850ff"]} size="large" text="" textColor="" />
    </div>
  );
};

const sysCheck = () => {
  useEffect(() => {
    fetch("https://dash.api.daiki-bot.xyz/api/users/626257744466280469/warnings", {
      method: "GET",
      credentials: "include", // ✅ Required for sending cookies
    })
      .then(response => response.json())
      .then(data => console.log("Session Check:", data))
      .catch(err => console.error("Session Check Failed:", err));

  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%', // Full viewport height
      width: '100%',  // Full viewport width
      marginTop: '100px',
    }}>
      <ThreeDot variant="bounce" color={["#6141ac", "#233dff", "#6845ba", "#3850ff"]} size="large" text="" textColor="" />
    </div>
  );
};

/* const DashboardSync = () => {
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token') || localStorage.getItem('discord.oauth2');

    if (!token) {
      console.warn("❌ No token found, redirecting...");
      window.location.href = 'https://oauth2.daiki-bot.xyz/auth';
      return;
    }

    // ✅ Validate token with backend
    fetch(`https://oauth2.daiki-bot.xyz/dashboard/check-session?token=${token}`, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("✅ Token is valid:", token);
          localStorage.setItem('discord.oauth2', token);
          history.push('/');
        } else {
          console.warn("❌ Invalid token, redirecting...");
          localStorage.removeItem('discord.oauth2');
          window.location.href = 'https://oauth2.daiki-bot.xyz/auth';
        }
      })
      .catch(error => {
        console.error("❌ Error checking session:", error);
        window.location.href = 'https://oauth2.daiki-bot.xyz/auth';
      });

  }, [history]);

  return <p>Syncing session, please wait...</p>;
}; */

const App = () => {
  return (
    <Router>
      <WebAlerts />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={DashboardSync} exact path="/dashboard-sync" />
        <Route component={sysCheck} exact path="/syscheck" />
        <Route component={Home} exact path="/home" />
        <Route component={Docs} exact path="/docs" />
        <Route component={Docs} exact path="/documentation" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Commands} exact path="/commands" />
        <Route component={Contact} exact path='/contact' />
        <Route component={LendMeATenor} exact path="/lendmeatenor" />
        <Route component={TheWeddingSinger} exact path="/theweddingsinger" />
        <Route component={AroundTheWorld} exact path="/aroundtheworld" />
        {/* <Route component={Status} exact path={"/status"} /> */}
        {/* <Route component={Staff} exact path="/staff" /> */}
        {/*AED CLASS <Route path="/requests" component={() => {
          window.location.href = "https://forms.gle/3R5XF9RYWy2Wnx3Y7"
        }} /> */}
        {/* <Route path='/status' component={() => {
          window.location.href = 'https://status.daiki-bot.xyz';
          return null;
        }} /> */}
        <Route path='/staff' component={() => {
          window.location.href = 'https://admin.dashboard.daiki-bot.xyz';
          return null;
        }} />
        <Route path='/invite' component={() => {
          window.location.href = 'https://top.gg/bot/839287174482362438/invite/';
          return null;
        }} />
        <Route path='/support' component={() => {
          window.location.href = 'https://discord.com/invite/nWUB8RNB72';
          return null;
        }} />
        <Route path='/top/vote' component={() => {
          window.location.href = 'https://top.gg/bot/839287174482362438/vote'
        }} />
        <Route path='/top/main' component={() => {
          window.location.href = 'https://top.gg/bot/839287174482362438'
        }} />
        <Route component={PageNotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))