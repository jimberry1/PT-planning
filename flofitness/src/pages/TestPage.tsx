import { PageContainerStyles } from '../styles/genericStyles';
import db from '../firebase';
import { workoutProgrammeType, workoutType } from '../types';
import firebase from 'firebase';
export interface TestPageProps {}

const TestPage: React.SFC<TestPageProps> = () => {
  const createWorkoutData = () => {
    const dummyWorkout: workoutType = {
      workoutProgrammeId: 'WVnrB6C4xUg4BJBm8ctM',
      title: 'Legs',
      isSupervisedSession: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      workoutNumber: 1,
      week: 1,
      isComplete: false,
    };

    db.collection('workouts').add({
      workoutProgrammeId: 'WVnrB6C4xUg4BJBm8ctM',
      title: 'Legs',
      isSupervisedSession: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      workoutNumber: 1,
      week: 1,
    });
  };

  return (
    <PageContainerStyles>
      <button onClick={createWorkoutData}>Add workout</button>
    </PageContainerStyles>
  );
};

export default TestPage;
