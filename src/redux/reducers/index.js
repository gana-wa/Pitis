import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './user';
import transaction from './transaction';
import systemReducer from './system';

const indexReducer = combineReducers({
   auth: authReducer,
   user: userReducer,
   transaction: transaction,
   system: systemReducer,
});

export default indexReducer;
