import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Login from './Login';
import { userType } from './types';
import LandingPage from './pages/LandingPage';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  if (!user) {
    return (
      <Login
        displayErrorHandler={(error: string) => setError(error)}
        changeUser={(user: userType) => setUser(user)}
      />
    );
  } else {
    return (
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
