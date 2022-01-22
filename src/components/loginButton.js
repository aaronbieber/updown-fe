import { h } from 'preact';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'preact-router/match';
import style from './header/style.css'
import LogoutButton from './logoutButton.js'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>...</div>
  }

  if (isAuthenticated) {
    return <LogoutButton />
  } else {
    return <a onClick={ () => loginWithRedirect() }>Log in</a>
  }
};

export default LoginButton;
