import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';
import Cookies from 'js-cookie';

import './style.css';
import PageNotFound from './views/page-not-found';
import Home from './views/home';
import Docs from './views/documentation';
import Contact from './views/contact';
import Commands from './views/commands';

// Sync Session Component
const SyncSession = () => {
  const history = useHistory();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('https://oauth2.daiki-bot.xyz/get-session', {
          method: 'GET',
          credentials: 'include', // ✅ Ensures cookies are sent
        });

        const data = await response.json();

        if (data.session_token) {
          console.log("✅ Session token received:", data.session_token);

          // Store session token as a cookie
          Cookies.set('session_token', data.session_token, {
            domain: '.daiki-bot.xyz',
            path: '/',
            secure: true,
            sameSite: 'None',
          });

          history.push('/dashboard'); // ✅ Redirect user to dashboard
        } else {
          console.warn("❌ No session found, redirecting...");
          window.location.href = 'https://oauth2.daiki-bot.xyz/auth'; // ✅ Redirect to login
        }
      } catch (error) {
        console.error("❌ Error fetching session:", error);
        window.location.href = 'https://oauth2.daiki-bot.xyz/auth'; // ✅ Redirect to login
      }
    };

    checkSession();
  }, [history]);

  return <p>Syncing session, please wait...</p>;
};

const App = () => {
  return (
    <Router>
      <WebAlerts />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={SyncSession} path='sync-session' />
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
