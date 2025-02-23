import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
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

const DashboardSync = () => {
  useEffect(() => {
    fetch('https://oauth2.daiki-bot.xyz/dashboard', {
      method: 'GET',
      credentials: 'include', // ✅ Include cookies in request
    }).then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("✅ Session Token Found:", data.session_token);
          localStorage.setItem('discord.oauth2', data.session_token); // ✅ Store token
          window.location.href = "/dashboard"; // ✅ Redirect
        } else {
          console.warn("❌ No session found, redirecting...");
          window.location.href = 'https://oauth2.daiki-bot.xyz/auth'; // ✅ Redirect to login
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
      <WebAlerts />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={DashboardSync} exact path="/dashboard-sync" /> {/* ✅ New Route */}
        <Route component={Home} exact path="/home" />
        <Route component={Docs} exact path="/docs" />
        <Route component={Docs} exact path="/documentation" />
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
