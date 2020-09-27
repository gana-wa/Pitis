import * as actions from '../actions/actionTypes';

const initialState = {
   isLoggedIn: false,
   isPending: false,
   isSuccess: false,
   isRejected: false,
   msg: '',
   user: {
      user_id: '',
      balance: '',
      first_name: '',
      last_name: '',
      phone: '',
      photo: '',
      token: '',
   },
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.loggedIn + actions.pending:
         return {
            ...state,
            isPeding: true,
            msg: '...Loading',
         };
      case actions.loggedIn + actions.rejected:
         return {
            ...state,
            isRejected: true,
            isPending: false,
            msg: 'Login failed..!',
         };
      case actions.loggedIn + actions.fulfilled:
         if (action.payload.data.isSuccess) {
            return {
               ...state,
               isLoggedIn: true,
               isSuccess: true,
               isPending: false,
               msg: action.payload.data.data.msg,
               user: {
                  ...state.user,
                  user_id: action.payload.data.data.user_id,
                  balance: action.payload.data.data.balance,
                  first_name: action.payload.data.data.first_name,
                  last_name: action.payload.data.data.last_name,
                  phone: action.payload.data.data.phone,
                  photo: action.payload.data.data.photo,
                  token: action.payload.data.data.token,
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
      default:
         return state;
   }
};

export default authReducer;
