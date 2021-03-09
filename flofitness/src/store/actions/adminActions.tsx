import * as actionTypes from './actionTypes';

export const setRedirectPath = (redirectPath: string) => {
  return {
    type: actionTypes.SET_REDIRECT_PATH,
    redirectPath: redirectPath,
  };
};

export const setErrorMessage = (
  errorMessageTitle: string,
  errorMessageBody: string
) => {
  return {
    type: actionTypes.UPDATE_ERROR_MESSAGE,
    errorMessageBody: errorMessageBody,
    errorMessageTitle: errorMessageTitle,
  };
};
