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

export const addReceiver = (data) => {
   return {
      type: actions.addReceiver,
      payload: data,
   };
};

export const inputAmount = (data) => {
   return {
      type: actions.inputAmount,
      payload: data,
   };
};

export const clearTransaction = () => {
   return {
      type: actions.clearTransaction,
   };
};
