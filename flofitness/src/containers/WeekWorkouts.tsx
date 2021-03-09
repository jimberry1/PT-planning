import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { PageContainerStyles } from '../styles/genericStyles';
import db from '../firebase';
import WorkoutOverview from '../components/workoutOverview';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FadeUpAndInWithExitUp } from '../styles/animations';
import { CentrallyAlignedMotionContainer } from '../styles/animatedStyles';
import { setRedirectPath } from '../store/actions/adminActions';
import { Redirect } from 'react-router';
import { GeneralFullWidthColumnContainer } from '../styles/genericStyles';
import { fetchWorkoutsForWorkoutProgrammeIdAndCurrentWeek } from '../config/firebaseQueries';
export interface WeekWorkoutsProps {
  userId: string;
  workoutProgrammeId: string;
  week: number;
  changeRedirectPath: (redirectPath: string) => void;
}

const WeekWorkouts: React.SFC<WeekWorkoutsProps> = ({
  userId,
  workoutProgrammeId,
  changeRedirectPath,
  week,
}) => {
  const [uid, setUid]: any = useState(null);
  const [redirectTo, setRedirectTo] = useState('');
  const [workouts, setWorkouts]: any = useState(null);

  useEffect(() => {
    setUid(userId);
  }, [userId]);

  useEffect(() => {
    async function getWorkoutInformation() {
      await fetchWorkoutsForWorkoutProgrammeIdAndCurrentWeek(
        workoutProgrammeId,
        week
      )
        .get()
        .then((docSnapshot) => {
          setWorkouts(
            docSnapshot.docs.map((workout) => ({
              id: workout.id,
              data: workout.data(),
            }))
          );
        });
    }
    if (workoutProgrammeId && week > 0) {
      getWorkoutInformation();
    }
  }, [workoutProgrammeId, week]);

  const workoutClickedHandler = (workoutId: string) => {
    setRedirectTo(`/workout?id=${workoutId}`);
  };

  return (
    <PageContainerStyles>
      {redirectTo && <Redirect push to={redirectTo} />}
      <GeneralFullWidthColumnContainer>
        {workouts &&
          workouts.map((workout: any, index: number) => {
            return (
              <CentrallyAlignedMotionContainer
                variants={FadeUpAndInWithExitUp}
                transition={{ delay: 1 + 0.3 * index }}
                initial="hidden"
                animate="visible"
                key={workout.id}
              >
                <WorkoutOverview
                  clicked={() => workoutClickedHandler(workout.id)}
                  workout={workout.data}
                />
              </CentrallyAlignedMotionContainer>
            );
          })}
        {!workoutProgrammeId && (
          <div style={{ border: '1px solid gray', padding: 10, width: '80%' }}>
            You currently have no assigned workout programme. Contact your
            personal trainer for more information!
          </div>
        )}
      </GeneralFullWidthColumnContainer>
    </PageContainerStyles>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeRedirectPath: (redirectPath: string) =>
      dispatch(setRedirectPath(redirectPath)),
  };
};

export default connect(mapDispatchToProps)(WeekWorkouts);
