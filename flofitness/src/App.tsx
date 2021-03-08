import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Login from './Login';
import LandingPage from './pages/LandingPage';
import { connect } from 'react-redux';
import TestPage from './pages/TestPage';
import WorkoutPage from './pages/WorkoutPage';
import ExerciseInformationPage from './pages/ExerciseInformationPage';
import ActionBar from './UI/ActionBar/ActionBar';
import styled from 'styled-components';
import PersonalTrainerControlPage from './pages/PersonalTrainerControlPage';
import ManageWorkoutProgrammePage from './pages/ManageWorkoutProgrammePage';
import AddOrEditWorkoutPage from './pages/PersonalTrainerOnlyPages.tsx/AddOrEditWorkoutPage';
import {
  CONTROL,
  EXERCISE_INFORMATION,
  ADD_OR_EDIT_WORKOUT,
  MANAGE_WORKOUT_PROGRAMME,
  WORKOUT,
} from './config/pageRoutes';
const AppContainerStyles = styled.div`
  height: 100vh;
`;

const PageDisplayContainer = styled.div`
  height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

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
      <AppContainerStyles>
        <PageDisplayContainer>
          <Switch>
            <Route path="/test" component={TestPage} />
            <Route path={WORKOUT} component={WorkoutPage} />
            <Route
              path={EXERCISE_INFORMATION}
              component={ExerciseInformationPage}
            />
            <Route path={CONTROL} component={PersonalTrainerControlPage} />
            <Route
              path={MANAGE_WORKOUT_PROGRAMME}
              component={ManageWorkoutProgrammePage}
            />
            <Route
              path={ADD_OR_EDIT_WORKOUT}
              component={AddOrEditWorkoutPage}
            />
            <Route path="/" component={LandingPage} />
          </Switch>
        </PageDisplayContainer>
        <ActionBar />
      </AppContainerStyles>
    );
  }
};

const mapStateToProps = (state: any) => ({
  uid: state.user.uid,
  redirectPath: state.admin.redirectPath,
});

export default connect(mapStateToProps)(App);
