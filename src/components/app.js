import { h } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import AsyncRoute from 'preact-async-route';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Dashboard from '../routes/dashboard'

const App = () => (
  <div id="app">
    <Header />
    <div id="content">
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />

        <AsyncRoute
          path="/:id"
          component={Profile} />
      </Router>
    </div>
  </div>
)

export default App;
