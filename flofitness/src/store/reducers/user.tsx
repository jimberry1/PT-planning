import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { userType } from '../../types';

const initialState: userType = {
  uid: '',
  forename: '',
  personalInfo: null,
  workoutProgrammeId: '',
  email: '',
  isPT: false,
};

const setUser = (state: userType, action: any) => {
  return updateObject(state, {
    uid: action.uid,
    forename: action.forename,
    personalInfo: action.personalInfo,
    workoutProgrammeId: action.workoutProgrammeId,
    email: action.email,
    isPT: action.isPT,
  });
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return setUser(state, action);
    default:
      return state;
  }
};

export default userReducer;
