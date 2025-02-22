import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';
import Cookies from 'js-cookie'; // To manage cookies

import './style.css';
import PageNotFound from './views/page-not-found';
import Home from './views/home';
import LendMeATenor from './views/lend-me-a-tenor';
import TheWeddingSinger from './views/theweddingsinger';
import AroundTheWorld from './views/around-the-world';
import WebAlerts from './components/web-alerts';
import Docs from './views/documentation';
import Contact from './views/contact';
import Commands from './views/commands';

// Sync session component
const SyncSession = () => {
  const history = useHistory();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch('https://oauth2.daiki-bot.xyz/get-session', {
          method: 'GET',
          credentials: 'include', // Allow sending cookies
        });

        const data = await response.json();
        if (data.session_token) {
          // Store session token as a cookie
          Cookies.set('session_token', data.session_token, {
            domain: '.daiki-bot.xyz', // ✅ Allows all subdomains
            path: '/',
            secure: true,
            sameSite: 'None', // ✅ Allows cross-site access
          });

          // Redirect user to dashboard
          history.push('/dashboard');
        } else {
          console.error("Session token not received");
          history.push('/login'); // Redirect to login if token is missing
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        history.push('/login'); // Redirect to login on error
      }
    };

    fetchSession();
  }, [history]);

  return <p>Syncing session, please wait...</p>;
};

const App = () => {
  return (
    <Router>
      <WebAlerts />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Home} exact path="/home" />
        <Route component={Docs} exact path="/docs" />
        <Route component={Docs} exact path="/documentation" />
        <Route component={Commands} exact path="/commands" />
        <Route component={Contact} exact path='/contact' />
        <Route component={LendMeATenor} exact path="/lendmeatenor" />
        <Route component={TheWeddingSinger} exact path="/theweddingsinger" />
        <Route component={AroundTheWorld} exact path="/aroundtheworld" />

        {/* Add Sync Session Route */}
        <Route component={SyncSession} exact path="/sync-session" />

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
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
