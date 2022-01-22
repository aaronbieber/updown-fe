import { h } from 'preact';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    return <a onClick={ () => logout({ returnTo: window.location.origin }) }>Log Out</a>;
  } else {
    return <div>Not logged in yet</div>;
  }

};

export default LogoutButton;
