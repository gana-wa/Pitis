import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './user';
import transaction from './transaction';

const indexReducer = combineReducers({
   auth: authReducer,
   user: userReducer,
   transaction: transaction,
});

export default indexReducer;
