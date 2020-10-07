import * as actions from '../actions/actionTypes';

const initialState = {
   isLoggedIn: false,
   isPending: false,
   isSuccess: false,
   isRejected: false,
   msg: '',
   register_id: '',
   user: {
      user_id: '',
      username: '',
      email: '',
      balance: '',
      first_name: '',
      last_name: '',
      phone: '',
      photo: '',
      token: '',
      pin: '',
   },
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      // login
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
                  username: action.payload.data.data.username,
                  email: action.payload.data.data.email,
                  user_id: action.payload.data.data.user_id,
                  balance: action.payload.data.data.balance,
                  first_name: action.payload.data.data.first_name,
                  last_name: action.payload.data.data.last_name,
                  phone: action.payload.data.data.phone,
                  photo: action.payload.data.data.photo,
                  token: action.payload.data.data.token,
                  pin: action.payload.data.data.pin,
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
      // register
      case actions.registered + actions.pending:
         return {
            ...state,
            // isPeding: true,
            msg: '...Loading',
         };
      case actions.registered + actions.rejected:
         return {
            ...state,
            // isRejected: true,
            // isPending: false,
            msg: 'Register failed..!',
         };
      case actions.registered + actions.fulfilled:
         if (action.payload.data.isSuccess) {
            return {
               ...state,
               // isLoggedIn: false,
               isSuccess: true,
               register_id: action.payload.data.data.id,
               // isPending: false,
               msg: action.payload.data.data.msg,
            };
         } else {
            return {
               ...state,
               // isSuccess: false,
               // isPending: false,
               // isLoggedIn: false,
               msg: action.payload.data.data.msg,
            };
         }
      // update pin
      case actions.updatePin + actions.pending:
         return {
            ...state,
            isSuccess: false,
            // isPeding: true,
            msg: '...Loading',
         };
      case actions.updatePin + actions.rejected:
         return {
            ...state,
            // isRejected: true,
            // isPending: false,
            msg: 'Pin failed..!',
         };
      case actions.updatePin + actions.fulfilled:
         if (action.payload.data.isSuccess) {
            return {
               ...state,
               isSuccess: true,
               // isPending: false,
               msg: action.payload.data.data.msg,
            };
         } else {
            return {
               ...state,
               // isSuccess: false,
               // isPending: false,
               // isLoggedIn: false,
               msg: action.payload.data.data.msg,
            };
         }
      case actions.fetchBalance + actions.pending:
         return {
            ...state,
            isPeding: true,
            msg: '...Loading',
         };
      case actions.fetchBalance + actions.rejected:
         return {
            ...state,
            isRejected: true,
            isPending: false,
            msg: 'Fetch Balance failed..!',
         };
      case actions.fetchBalance + actions.fulfilled:
         return {
            ...state,
            isSuccess: true,
            isPending: false,
            isRejected: false,
            user: {
               ...state.user,
               balance: action.payload.data.data[0].balance,
            },
         };
      case actions.editUser + actions.pending:
         return {
            ...state,
            isPeding: true,
            msg: '...Loading',
         };
      case actions.editUser + actions.rejected:
         return {
            ...state,
            isRejected: true,
            isPending: false,
            msg: 'Edit user failed..!',
         };
      case actions.editUser + actions.fulfilled:
         return {
            ...state,
            isSuccess: true,
            isPending: false,
            isRejected: false,
            msg: action.payload.data.data.msg,
            user: {
               ...state.user,
               phone: action.payload.data.data.phone,
            },
         };
      case actions.fetchEmail + actions.pending:
         return {
            ...state,
            isPeding: true,
            msg: '...Loading',
         };
      case actions.fetchEmail + actions.rejected:
         return {
            ...state,
            isRejected: true,
            isPending: false,
            msg: 'Fetch email failed..!',
         };
      case actions.fetchEmail + actions.fulfilled:
         if (action.payload.data.isSuccess) {
            return {
               ...state,
               isSuccess: true,
               isPending: false,
               isRejected: false,
               user: {
                  ...state.user,
                  user_id: action.payload.data.data.user_id,
                  email: action.payload.data.data.email,
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
      case actions.changePassword + actions.pending:
         return {
            ...state,
            isPeding: true,
            msg: '...Loading',
         };
      case actions.changePassword + actions.rejected:
         return {
            ...state,
            isRejected: true,
            isPending: false,
            msg: 'Change password failed..!',
         };
      case actions.changePassword + actions.fulfilled:
         if (action.payload.data.isSuccess) {
            return {
               ...state,
               isSuccess: true,
               isPending: false,
               isRejected: false,
               msg: action.payload.data.data.msg,
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
      case actions.clearState:
         return {
            ...state,
            isLoggedIn: false,
            isPending: false,
            isSuccess: false,
            isRejected: false,
            msg: '',
            register_id: '',
         };
      default:
         return state;
   }
};

export default authReducer;
