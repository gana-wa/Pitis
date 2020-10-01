import * as actions from '../actions/actionTypes';

const intialState = {
   history: '',
   isPending: false,
   isSuccess: false,
   isRejected: false,
   msg: '',
   transaction: {
      category: '',
      type: '',
      sender_id: '',
      receiver_id: '',
      amount: '',
      notes: '',
      date: '',
   },
   receiver: {
      receiver_id: '',
      first_name: '',
      last_name: '',
      phone: '',
      photo: '',
   },
};

const transaction = (state = intialState, action) => {
   switch (action.type) {
      case actions.insert_transaction + actions.pending:
         return {
            ...state,
            isPeding: true,
            msg: '...Loading',
         };
      case actions.insert_transaction + actions.rejected:
         return {
            ...state,
            isRejected: true,
            isPending: false,
            msg: 'Transfer failed..!',
         };
      case actions.insert_transaction + actions.fulfilled:
         if (action.payload.data.isSuccess) {
            return {
               ...state,
               isLoggedIn: true,
               isSuccess: true,
               isPending: false,
               msg: action.payload.data.data.msg,
               transaction: {
                  ...state.transaction,
                  category: action.payload.data.data.category,
                  type: action.payload.data.data.type,
                  sender_id: action.payload.data.data.sender_id,
                  receiver_id: action.payload.data.data.receiver_id,
                  amount: action.payload.data.data.amount,
                  notes: action.payload.data.data.notes,
                  date: action.payload.data.data.date,
               },
            };
         } else {
            return {
               ...state,
               isSuccess: false,
               isPending: false,
               isLoggedIn: false,
               msg: action.payload.data.data.msg,
            };
         }
      case actions.addReceiver:
         return {
            ...state,
            receiver: {
               ...state.receiver,
               receiver_id: action.payload.receiver_id,
               first_name: action.payload.first_name,
               last_name: action.payload.last_name,
               phone: action.payload.phone,
               photo: action.payload.photo,
            },
            transaction: {
               ...state.transaction,
               sender_id: action.payload.sender_id,
               receiver_id: action.payload.receiver_id,
               category: 'Transfer',
               type: 'out',
            },
         };
      case actions.inputAmount:
         return {
            ...state,
            transaction: {
               ...state.transaction,
               amount: action.payload.amount,
               notes: action.payload.notes,
            },
         };
      case actions.clearTransaction:
         return {
            ...state,
            isPending: false,
            isSuccess: false,
            isRejected: false,
            msg: '',
            transaction: {
               category: '',
               type: '',
               sender_id: '',
               receiver_id: '',
               amount: '',
               notes: '',
               date: '',
            },
            receiver: {
               receiver_id: '',
               first_name: '',
               last_name: '',
               phone: '',
               photo: '',
            },
         };
      default:
         return state;
   }
};

export default transaction;
