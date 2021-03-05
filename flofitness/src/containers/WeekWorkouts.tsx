import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { PageContainerStyles } from '../styles/genericStyles';
import db from '../firebase';
import WorkoutOverview from '../components/workoutOverview';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FadeUpAndInWithExitUp } from '../styles/animations';
import { CentrallyAlignedMotionContainer } from '../styles/animatedStyles';
export interface WeekWorkoutsProps {
  userId: string;
  workoutProgrammeId: string;
}

const WorkoutsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WeekWorkouts: React.SFC<WeekWorkoutsProps> = ({
  userId,
  workoutProgrammeId,
}) => {
  const [uid, setUid]: any = useState(null);
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

  return (
    <PageContainerStyles>
      <WorkoutsContainer>
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
                  title={workout.data.title}
                  isSupervisedSession={workout.data.isSupervisedSession}
                  isComplete={workout.data.isComplete}
                />
              </CentrallyAlignedMotionContainer>
            );
          })}
      </WorkoutsContainer>
    </PageContainerStyles>
  );
};

const mapStateToProps = (state: any) => ({
  userId: state.user.uid,
  workoutProgrammeId: state.user.workoutProgrammeId,
});

export default connect(mapStateToProps)(WeekWorkouts);
