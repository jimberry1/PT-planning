import { exerciseHolderType, exerciseType } from '../types';

export const orderExercisesByIndex = (exerciseA: any, exerciseB: any) => {
  if (exerciseA.data.index < exerciseB.data.index) {
    return -1;
  } else if (exerciseA.data.index > exerciseB.data.index) {
    return 1;
  } else return 0;
};
