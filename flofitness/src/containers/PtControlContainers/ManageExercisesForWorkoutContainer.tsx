import { useState, useEffect } from 'react';
import EditableExercise from '../../components/exerciseComponents/editableExercise';
import Exercise from '../../components/exerciseComponents/exercise';
import WorkoutOverview from '../../components/workoutOverview';
import {
  connectToWorkoutExercisesForWorkoutId,
  fetchAllExercisesForWorkoutId,
} from '../../config/firebaseQueries';
import db from '../../firebase';
import {
  GeneralPageSubTitle,
  PageContainerStyles,
} from '../../styles/genericStyles';
import { exerciseType } from '../../types';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export interface ManageExercisesForWorkoutContainerProps {
  workoutId: string;
}

const ManageExercisesForWorkoutContainer: React.SFC<ManageExercisesForWorkoutContainerProps> = ({
  workoutId,
}) => {
  const [exercises, setExercises]: any = useState([]);
  const [workoutAdded, setWorkoutAdded] = useState(false);

  useEffect(() => {
    const fetchExerciseInformationFromFirebase = async () => {
      await fetchAllExercisesForWorkoutId(workoutId)
        .get()
        .then((exercisesSnapshot: any) => {
          setExercises(
            exercisesSnapshot.docs
              .sort((doc1: any, doc2: any) => {
                if (doc1.data().index < doc2.data().index) {
                  return -1;
                } else if (doc1.data().index > doc2.data().index) {
                  return 1;
                } else return 0;
              })
              .map((exercise: any) => ({
                id: exercise.id,
                data: exercise.data(),
              }))
          );
        });
    };

    if (workoutId) {
      fetchExerciseInformationFromFirebase();
    }
  }, [workoutId, workoutAdded]);

  const addExerciseToWorkoutHandler = () => {
    connectToWorkoutExercisesForWorkoutId(workoutId)
      .add({
        title: '',
        index: exercises.length,
        exerciseOverviewId: '',
        equipment: null,
        isWarmup: false,
        isCooldown: false,
        isSuperSet: false,
        sets: 1,
        reps: [0],
        weight: [0],
      })
      .then(() => {
        setWorkoutAdded((curVal) => !curVal);
      });
  };

  return (
    <PageContainerStyles>
      <GeneralPageSubTitle> Exercises</GeneralPageSubTitle>
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
      <AiOutlinePlusCircle size={50} onClick={addExerciseToWorkoutHandler} />
    </PageContainerStyles>
  );
};

export default ManageExercisesForWorkoutContainer;
