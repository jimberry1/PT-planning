export type userType = {
  forename: string;
  uid: string;
  personalInfo: any; // needs defining
  workoutProgrammeId: string;
  email: string;
  isPT: boolean;
};

export type workoutProgrammeType = {
  clientId: string;
  clientName: string;
  start: any;
  status?: string;
  paid: boolean;
  paused: boolean;
  personalTrainerId: string;
};

export type workoutType = {
  workoutProgrammeId: string;
  title: string;
  status?: string;
  isSupervisedSession: boolean;
  timestamp: any;
  workoutNumber: number;
  week: number;
  isComplete: boolean;
}; // This also has a subcollection called exercises!

export type exerciseType = {
  title: string;
  index: number;
  exerciseOverviewId: string;
  equipment: equipemntType[];
  isWarmup: boolean;
  isCooldown: boolean;
  isSuperSet: boolean;
  sets: number;
  reps: number[];
  weight: number[];
};

export interface exerciseHolderType {
  id: string;
  data: exerciseType;
}

export type exerciseOverviewType = {
  name: string;
  description: string;
  muscleGroup: string;
  videoLink: string;
};

export type equipemntType = {
  name: string;
  weight?: number;
};
/**
 * User has a workoutProgrammeId which links them to their workoutProgramme.
 *
 * WorkoutProgrammes has an overview of the workout plan the customer is on
 *
 * Workout table stores all workouts, we are keeping this as a separate table for calendar comparisons. Workout table has a field called workoutProgrammeId which
 * links the document to the workout plan. Each workout has a subcollection of exercises
 *
 * TODO - add a type for nutrition and eating plan
 *
 * I am in pain for not committing yesterday
 *
 */
