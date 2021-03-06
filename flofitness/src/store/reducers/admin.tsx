import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  redirectPath: '',
  errorMessageTitle: '',
  errorMessageBody: '',
};

const changeRedirectLink = (state: any, action: any) => {
  return updateObject(state, {
    redirectPath: action.redirectPath,
  });
};

const updateErrorMessage = (state: any, action: any) => {
  return updateObject(state, {
    errorMessageTitle: action.errorMessageTitle,
    errorMessageBody: action.errorMessageBody,
  });
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_REDIRECT_PATH:
      return changeRedirectLink(state, action);
    case actionTypes.UPDATE_ERROR_MESSAGE:
      return updateErrorMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
