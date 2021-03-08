import AddOrEditWorkoutForm from '../../components/workouts/AddOrEditWorkoutForm';
import { PageContainerStyles } from '../../styles/genericStyles';
import { useState, useEffect } from 'react';
import {
  addNewWorkout,
  fetchAllExercisesForWorkoutId,
  fetchWorkoutInformationForWorkoutId,
} from '../../config/firebaseQueries';
import { workoutType } from '../../types';
import { useHistory } from 'react-router';
import { ADD_OR_EDIT_WORKOUT } from '../../config/pageRoutes';

export interface AddOrEditWorkoutContainerProps {
  workoutId: string;
  workoutProgrammeId: string;
  workoutNumberIfAdding: number;
}

const AddOrEditWorkoutContainer: React.SFC<AddOrEditWorkoutContainerProps> = ({
  workoutId,
  workoutProgrammeId,
  workoutNumberIfAdding,
}) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [isSupervisedSession, setIsSupervisedSession] = useState(false);
  const [timestamp, setTimestamp] = useState(null);
  const [workoutNumber, setWorkoutNumber] = useState(workoutNumberIfAdding);
  const [status, setStatus]: any = useState('');
  const [week, setWeek] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setWorkoutNumber(workoutNumberIfAdding);
  }, [workoutNumberIfAdding]);

  useEffect(() => {
    const getWorkoutInformationFromFirebase = async () => {
      await fetchWorkoutInformationForWorkoutId(workoutId)
        .get()
        .then((workoutSnapshot: any) => {
          if (workoutSnapshot.exists) {
            const workoutData: workoutType = workoutSnapshot.data();

            setTimestamp(workoutSnapshot.data().timestamp);
            setTitle(workoutData.title);
            setIsSupervisedSession(workoutData.isSupervisedSession);
            setIsComplete(workoutData.isComplete);
            setStatus(workoutData.status);
            setWeek(workoutData.week);
            setWorkoutNumber(workoutData.workoutNumber);
          }
        });

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
      getWorkoutInformationFromFirebase();
    }
  }, [workoutId]);

  const handleWorkoutInformationChanged = (event: any, target: string) => {
    switch (target) {
      case 'title': {
        return setTitle(event.target.value);
      }
      case 'isSupervisedSession': {
        return setIsSupervisedSession((curVal) => !curVal);
      }
      case 'timestamp': {
        return setTimestamp(event.target.value);
      }
      case 'workoutNumber': {
        return setWorkoutNumber(event.target.value);
      }
      case 'status': {
        return setStatus(event.target.value);
      }
      case 'week': {
        return setWeek(event.target.value);
      }
      case 'isComplete': {
        return setIsComplete((curVal) => !curVal);
      }
      default:
        return;
    }
  };

  const addNewWorkoutToToWorkoutProgramme = () => {
    addNewWorkout()
      .add({
        title: title,
        isSupervisedSession: isSupervisedSession,
        isComplete: false,
        week: week,
        workoutNumber: workoutNumber,
        timestamp: timestamp,
        workoutProgrammeId: workoutProgrammeId,
      })
      .then((doc) => {
        console.log(doc.id);
        history.push(
          `${ADD_OR_EDIT_WORKOUT}?workoutId=${doc.id}&workoutProgrammeId=${workoutProgrammeId}`
        );
      });
  };

  const updateExistingWorkout = () => {};

  const workoutSubmitButtonHandler = () => {
    if (workoutId) {
      fetchWorkoutInformationForWorkoutId(workoutId)
        .update({
          title: title,
          isSupervisedSession: isSupervisedSession,
          isComplete: isComplete,
          week: week,
          workoutNumber: workoutNumber,
          timestamp: timestamp,
        })
        .then(() => {
          console.log('DONE!');
        });
    } else {
      if (title) {
        addNewWorkoutToToWorkoutProgramme();
      }
    }
  };

  return (
    <PageContainerStyles>
      <AddOrEditWorkoutForm
        workout={{
          title: title,
          timestamp: timestamp,
          isComplete: isComplete,
          isSupervisedSession: isSupervisedSession,
          week: week,
          workoutNumber: workoutNumber,
          status: status,
          workoutProgrammeId: workoutProgrammeId,
        }}
        workoutId={workoutId}
        onWorkoutValueChange={(event: any, target: string) =>
          handleWorkoutInformationChanged(event, target)
        }
        submitButtonClicked={workoutSubmitButtonHandler}
      />
    </PageContainerStyles>
  );
};

export default AddOrEditWorkoutContainer;
