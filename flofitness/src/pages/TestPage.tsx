import { useState } from 'react';
import { PageContainerStyles } from '../styles/genericStyles';
import db from '../firebase';
import { exerciseType, workoutProgrammeType, workoutType } from '../types';
import firebase from 'firebase';
export interface TestPageProps {}

const TestPage: React.SFC<TestPageProps> = () => {
  const [index, setIndex] = useState(0);

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

  const createExerciseDataForLegs = () => {
    const dummyExercise: exerciseType = {
      title: 'Squats',
      index: 0,
      exerciseOverviewId: 'blahblahblah',
      equipment: [{ name: 'Dumbbells' }],
      isWarmup: false,
      isCooldown: false,
      isSuperSet: false,
      sets: 3,
      reps: [8, 10, 8],
      weight: [50, 60, 50],
    };

    db.collection('workouts')
      .doc('7kkGsQHjprZWt6HEHCD6')
      .collection('exercises')
      .add({
        title: 'Band Walks',
        index: 2,
        exerciseOverviewId: 'blahblahblah',
        equipment: [{ name: 'Dumbbells' }],
        isWarmup: false,
        isCooldown: false,
        isSuperSet: false,
        sets: 3,
        reps: [8, 10, 8],
        weight: [50, 60, 50],
      });

    setIndex((curVal) => curVal + 1);
  };

  return (
    <PageContainerStyles>
      <button onClick={createWorkoutData}>Add workout</button>
      <button onClick={createExerciseDataForLegs}>
        Add exercise to legs workout
      </button>
    </PageContainerStyles>
  );
};

export default TestPage;
