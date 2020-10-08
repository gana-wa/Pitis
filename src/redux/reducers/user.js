import * as actions from '../actions/actionTypes';

const initialState = {
   isPending: false,
   isSuccess: false,
   isRejected: false,
   msg: '',
   contact: {
      user_id: '',
      first_name: '',
      last_name: '',
      phone: '',
      photo: '',
   },
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.contactFetched + actions.pending:
         return {
            ...state,
            isPeding: true,
            msg: '...Loading',
         };
      case actions.contactFetched + actions.rejected:
         return {
            ...state,
            isRejected: true,
            isPending: false,
            msg: 'Fetch failed..!',
         };
      case actions.contactFetched + actions.fulfilled:
         if (action.payload.data.isSuccess) {
            return {
               ...state,
               isSuccess: true,
               isPending: false,
               msg: action.payload.data.data.msg,
               // conctact: {
               //    ...state.contact,
               //    user_id: action.payload.data.data.user_id,
               //    first_name: action.payload.data.data.first_name,
               //    last_name: action.payload.data.data.last_name,
               //    phone: action.payload.data.data.phone,
               //    photo: action.payload.data.data.photo,
               // },
               contact: action.payload.data.data,
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
      case actions.searchUser + actions.pending:
         return {
            ...state,
            isPeding: true,
            msg: '...Loading',
         };
      case actions.searchUser + actions.rejected:
         return {
            ...state,
            isRejected: true,
            isPending: false,
            msg: 'Search failed..!',
         };
      case actions.searchUser + actions.fulfilled:
         if (action.payload.data.isSuccess) {
            return {
               ...state,
               isSuccess: true,
               isPending: false,
               msg: action.payload.data.data.msg,
               // conctact: {
               //    ...state.contact,
               //    user_id: action.payload.data.data.user_id,
               //    first_name: action.payload.data.data.first_name,
               //    last_name: action.payload.data.data.last_name,
               //    phone: action.payload.data.data.phone,
               //    photo: action.payload.data.data.photo,
               // },
               contact: action.payload.data.data,
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
      default:
         return state;
   }
};

export default userReducer;
