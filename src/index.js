import './style';
import App from './components/app';
import { Auth0Provider } from '@auth0/auth0-react';

const SecureApp = () => (
  <Auth0Provider
    domain="dev-imj8g6mp.us.auth0.com"
    clientId="dfx43OD6WJH7CAAdKulxEAk48lQjezUe"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)

export default SecureApp;
