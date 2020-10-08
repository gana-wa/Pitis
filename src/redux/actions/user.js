import * as actions from './actionTypes';
import * as api from '../../utils/linkAPI';

export const editUser = (id, data, config) => {
   return {
      type: actions.editUser,
      payload: api.editUser(id, data, config),
   };
};

export const showContact = (id) => {
   return {
      type: actions.contactFetched,
      payload: api.showContact(id),
   };
};

export const searchUser = (data) => {
   return {
      type: actions.searchUser,
      payload: api.searchUser(data),
   };
};

export const fetchBalance = (id) => {
   return {
      type: actions.fetchBalance,
      payload: api.fetchBalance(id),
   };
};
