import { h } from 'preact';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your dashboard</p>
    </div>
  )
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <div>Just a moment...</div>
})
