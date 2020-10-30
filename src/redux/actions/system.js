import * as actions from './actionTypes';

export const setSystemSocket = (sokcet) => {
   return {
      type: actions.setSystemSocket,
      payload: sokcet,
   };
};

export const enableNotificiation = (opt) => {
   return {
      type: actions.enableNotification,
      payload: opt,
   };
};
