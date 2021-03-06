import { useState, useEffect } from 'react';
import {
  GeneralFullWidthColumnContainer,
  PageContainerStyles,
} from '../styles/genericStyles';
import db from '../firebase';
import { exerciseHolderType, exerciseType } from '../types';
import Exercise from '../components/exerciseComponents/exercise';
import { orderExercisesByIndex } from '../utilities/utilityFunctions';
import { CentrallyAlignedMotionContainer } from '../styles/animatedStyles';
import { FadeUpAndInWithExitUp } from '../styles/animations';
import { Redirect } from 'react-router';
export interface WorkoutExercisesContainerProps {
  workoutId: string;
  userId: string;
}

const WorkoutExercisesContainer: React.SFC<WorkoutExercisesContainerProps> = ({
  workoutId,
  userId,
}) => {
  const [exercises, setExercises]: any = useState([]);
  const [redirectTo, setRedirectTo] = useState('');

  useEffect(() => {
    const getExercisesInformationFromWorkoutTable = async () => {
      await db
        .collection('workouts')
        .doc(workoutId)
        .collection('exercises')
        .get()
        .then((exercisesSnapshot) => {
          const orderedArray = setExercises(
            exercisesSnapshot.docs.map((exercise) => ({
              id: exercise.id,
              data: exercise.data(),
            }))
          );
        });
    };

    if (workoutId) {
      getExercisesInformationFromWorkoutTable();
    }
  }, [workoutId]);

  const exerciseClickedHandler = (exerciseOverviewId: string) => {
    setRedirectTo(`/exerciseInformation?exerciseId=${exerciseOverviewId}`);
  };

  return (
    <PageContainerStyles>
      {redirectTo && <Redirect push to={redirectTo} />}
      <h2>Workout</h2>
      <GeneralFullWidthColumnContainer>
        {exercises[0] &&
          exercises.map((exercise: exerciseHolderType, index: number) => {
            return (
              <CentrallyAlignedMotionContainer
                variants={FadeUpAndInWithExitUp}
                transition={{ delay: 0.2 + 0.3 * index }}
                initial="hidden"
                animate="visible"
                key={exercise.id}
              >
                <Exercise
                  exercise={exercise.data}
                  exerciseClicked={(exerciseOverviewId: string) =>
                    exerciseClickedHandler(exerciseOverviewId)
                  }
                />
              </CentrallyAlignedMotionContainer>
            );
          })}
      </GeneralFullWidthColumnContainer>
    </PageContainerStyles>
  );
};

export default WorkoutExercisesContainer;
