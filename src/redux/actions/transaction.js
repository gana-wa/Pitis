import * as actions from './actionTypes';
import * as api from '../../utils/linkAPI';

export const transaction = (data) => {
   return {
      type: actions.insert_transaction,
      payload: api.transfer(data),
   };
};

export const topUp = (data) => {
   return {
      type: actions.topUp,
      payload: api.topUp(data),
   };
};

export const history = (id) => {
   return {
      type: actions.historyFetched,
      payload: api.history(id),
   };
};
