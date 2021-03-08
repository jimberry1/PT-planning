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
export interface WeekWorkoutsProps {
  userId: string;
  workoutProgrammeId: string;
  changeRedirectPath: (redirectPath: string) => void;
}

const WeekWorkouts: React.SFC<WeekWorkoutsProps> = ({
  userId,
  workoutProgrammeId,
  changeRedirectPath,
}) => {
  const [uid, setUid]: any = useState(null);
  const [redirectTo, setRedirectTo] = useState('');
  const [workouts, setWorkouts]: any = useState(null);

  useEffect(() => {
    setUid(userId);
  }, [userId]);

  useEffect(() => {
    async function getWorkoutInformation() {
      await db
        .collection('workouts')
        .where('workoutProgrammeId', '==', workoutProgrammeId)
        .where('week', '==', 1)
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
    if (workoutProgrammeId) {
      getWorkoutInformation();
    }
  }, [workoutProgrammeId]);

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

const mapStateToProps = (state: any) => ({
  userId: state.user.uid,
  workoutProgrammeId: state.user.workoutProgrammeId,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeRedirectPath: (redirectPath: string) =>
      dispatch(setRedirectPath(redirectPath)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekWorkouts);
