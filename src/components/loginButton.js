import { h } from 'preact';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated) {
    return <div>Logged in as {user.name}.</div>
  } else {
    return <button onClick={ () => loginWithRedirect() }>Log In</button>;
  }
};

export default LoginButton;
