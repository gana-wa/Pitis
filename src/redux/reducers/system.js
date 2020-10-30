import * as actions from '../actions/actionTypes';

const initialState = {
   enableNotification: false,
   socket: null,
};

const systemReducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.enableNotification:
         return {
            ...state,
            enableNotification: action.payload,
         };
      case actions.setSystemSocket:
         return {
            ...state,
            socket: action.payload,
         };
      default:
         return state;
   }
};

export default systemReducer;
