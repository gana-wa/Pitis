import * as actions from './actionTypes';
import * as api from '../../utils/linkAPI';

export const editUser = (id, data) => {
   return {
      type: actions.editUser,
      payload: api.editUser(id, data),
   };
};

export const showContact = (id) => {
   return {
      type: actions.contactFetched,
      payload: api.showContact(id),
   };
};

export const fetchBalance = (id) => {
   return {
      type: actions.fetchBalance,
      payload: api.fetchBalance(id),
   };
};
