import * as actionTypes from './actionTypes';

export const setRedirectPath = (redirectPath: string) => {
  return {
    type: actionTypes.SET_REDIRECT_PATH,
    redirectPath: redirectPath,
  };
};
