export type userType = {
  forename: string;
  uid: string;
  personalInfo: any; // needs defining
  workoutProgrammeId: string;
  email: string;
};

export type workoutProgrammeType = {
  clientId: string;
  start: any;
  status?: string;
  workouts: any; // needs defining
  paid: boolean;
  paused: boolean;
};

export type workout = {
  title: string;
  exercise: any; // needs defining
  status: string;
  supervisedSession: boolean;
  timestamp: any;
};

export type exercise = {
  title: string;
  index: number;
  exerciseId: string;
  equipment: any[]; // needs defining
  isWarmup: boolean;
  isCooldown: boolean;
  sets: number[];
  reps: number[];
  weight: number[];
};

export type exerciseOverview = {
  name: string;
  description: string;
  muscleGroup: string;
  videoLink: string;
};
