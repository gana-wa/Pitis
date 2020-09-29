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
