import db from '../firebase';
import {
  EXERCISES,
  WORKOUTS,
  WORKOUT_PROGRAMME,
} from './firebaseCollectionEndpoints';
import { WORKOUT } from './pageRoutes';

export const fetchWorkoutProgrammesByPersonalTrainerId = (
  personalTrainerId: string
) => {
  return db
    .collection(WORKOUT_PROGRAMME)
    .where('personalTrainerId', '==', personalTrainerId);
};

export const fetchWorkoutProgrammeInformationById = (
  workoutProgrammeId: string
) => {
  return db.collection(WORKOUT_PROGRAMME).doc(workoutProgrammeId);
};

export const fetchAllWorkoutsForWorkoutProgrammeId = (
  workoutProgrammeId: string
) => {
  return db
    .collection(WORKOUTS)
    .where('workoutProgrammeId', '==', workoutProgrammeId);
};

export const fetchWorkoutInformationForWorkoutId = (workoutId: string) => {
  return db.collection(WORKOUTS).doc(workoutId);
};

export const fetchAllExercisesForWorkoutId = (workoutId: string) => {
  return db.collection(WORKOUTS).doc(workoutId).collection(EXERCISES);
};

export const addNewWorkout = () => {
  return db.collection(WORKOUTS);
};

export const connectToWorkoutExercisesForWorkoutId = (workoutId: string) => {
  return db.collection(WORKOUTS).doc(workoutId).collection(EXERCISES);
};

export const fetchWorkoutsForWorkoutProgrammeIdAndCurrentWeek = (
  workoutProgrammeId: string,
  week: number
) => {
  return db
    .collection(WORKOUTS)
    .where('workoutProgrammeId', '==', workoutProgrammeId)
    .where('week', '==', week);
};
