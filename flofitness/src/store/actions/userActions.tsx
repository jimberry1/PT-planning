import { userType } from '../../types';
import * as actionTypes from './actionTypes';

export const setUserOnInitialLoad = (user: userType) => {
  return {
    type: actionTypes.SET_USER,
    uid: user.uid,
    forename: user.forename,
    personalInfo: user.personalInfo,
    workoutProgrammeId: user.workoutProgrammeId,
    email: user.email,
  };
};
