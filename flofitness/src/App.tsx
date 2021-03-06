import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Login from './Login';
import LandingPage from './pages/LandingPage';
import { connect } from 'react-redux';
import TestPage from './pages/TestPage';
import WorkoutPage from './pages/WorkoutPage';
import ExerciseInformationPage from './pages/ExerciseInformationPage';

const App = (props: any) => {
  const [user, setUser]: any = useState(null);
  const [error, setError] = useState('');
  const [uid, setUid]: any = useState(null);

  useEffect(() => {
    setUid(props.uid);
  }, [props.uid]);

  if (!uid) {
    return <Login displayErrorHandler={(error: string) => setError(error)} />;
  } else {
    return (
      <Switch>
        <Route path="/test" component={TestPage} />
        <Route path="/workout" component={WorkoutPage} />
        <Route
          path="/exerciseInformation"
          component={ExerciseInformationPage}
        />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
};

const mapStateToProps = (state: any) => ({
  uid: state.user.uid,
  redirectPath: state.admin.redirectPath,
});

export default connect(mapStateToProps)(App);
