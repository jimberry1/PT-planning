import db from '../firebase';
import { WORKOUTS, WORKOUT_PROGRAMME } from './firebaseCollectionEndpoints';

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
