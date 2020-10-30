import * as actions from './actionTypes';
import * as api from '../../utils/linkAPI';

export const register = (data) => {
   return {
      type: actions.registered,
      payload: api.register(data),
   };
};

export const updatePin = (id, data) => {
   return {
      type: actions.updatePin,
      payload: api.updatePin(id, data),
   };
};

export const login = (data) => {
   return {
      type: actions.loggedIn,
      payload: api.login(data),
   };
};

export const logOut = () => {
   return {
      type: actions.loggedOut,
   };
};

export const fetchEmail = (data) => {
   return {
      type: actions.fetchEmail,
      payload: api.fetchEmail(data),
   };
};

export const sendOtp = (data) => {
   return {
      type: actions.sendOtp,
      payload: api.sendOtp(data),
   };
};

export const changePassword = (id, data) => {
   return {
      type: actions.changePassword,
      payload: api.changePassword(id, data),
   };
};

export const clearState = () => {
   return {
      type: actions.clearState,
   };
};
