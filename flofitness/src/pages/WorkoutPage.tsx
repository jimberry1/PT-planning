import { useState, useEffect } from 'react';
import { PageContainerStyles } from '../styles/genericStyles';
import { useLocation } from 'react-router-dom';
import WorkoutExercisesContainer from '../containers/WorkoutExercisesContainer';
import { connect } from 'react-redux';
import { userType } from '../types';

export interface WorkoutPageProps {
  userId: string;
}

/**
 * This page displays workout information for the client. It is accessed by clicking on an exercise from the landing page.
 * @param param
 */
const WorkoutPage: React.SFC<WorkoutPageProps> = ({ userId }) => {
  const location = useLocation();
  const [workoutId, setWorkoutId] = useState('');

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    setWorkoutId(parsed.id);
  }, [location]);
  return (
    <PageContainerStyles>
      <WorkoutExercisesContainer workoutId={workoutId} userId={userId} />
    </PageContainerStyles>
  );
};

const mapStateToProps = (state: any) => ({
  userId: state.user.uid,
});

export default connect(mapStateToProps)(WorkoutPage);
