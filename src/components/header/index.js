import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../loginButton.js';



const Header = () => {
  return (
    <header class={style.header}>
      <h1>Up or Down?</h1>
      <nav>
        <LoginButton />
      </nav>
    </header>
  )
}

export default Header;
