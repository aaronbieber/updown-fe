import { h } from 'preact';
import style from './style.css';
import LoginButton from '../../components/loginButton.js';
import LogoutButton from '../../components/logoutButton.js';

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
  </div>
);

export default Home;
