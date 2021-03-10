import { useState, useEffect } from 'react';
import EditableExercise from '../../components/exerciseComponents/editableExercise';
import Exercise from '../../components/exerciseComponents/exercise';
import WorkoutOverview from '../../components/workoutOverview';
import { fetchAllExercisesForWorkoutId } from '../../config/firebaseQueries';
import db from '../../firebase';
import { PageContainerStyles } from '../../styles/genericStyles';
import { exerciseType } from '../../types';

export interface ManageExercisesForWorkoutContainerProps {
  workoutId: string;
}

const ManageExercisesForWorkoutContainer: React.SFC<ManageExercisesForWorkoutContainerProps> = ({
  workoutId,
}) => {
  const [exercises, setExercises]: any = useState([]);

  useEffect(() => {
    const fetchExerciseInformationFromFirebase = async () => {
      await fetchAllExercisesForWorkoutId(workoutId)
        .get()
        .then((exercisesSnapshot: any) => {
          setExercises(
            exercisesSnapshot.docs.map((exercise: any) => ({
              id: exercise.id,
              data: exercise.data(),
            }))
          );
        });
    };

    if (workoutId) {
      fetchExerciseInformationFromFirebase();
    }
  }, [workoutId]);

  return (
    <PageContainerStyles>
      {exercises &&
        exercises.map((exercise: { id: string; data: exerciseType }) => {
          return (
            // <Exercise exercise={exercise.data} exerciseClicked={() => {}} />
            <EditableExercise
              exercise={exercise.data}
              valueChanged={() => {}}
            />
          );
        })}
    </PageContainerStyles>
  );
};

export default ManageExercisesForWorkoutContainer;
