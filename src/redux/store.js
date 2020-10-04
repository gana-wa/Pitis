import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import indexReducer from './reducers/index';

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
   whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, indexReducer);

export default () => {
   // let store = createStore(indexReducer, enhancers); //global state local
   let store = createStore(persistedReducer, enhancers); //persist storage
   let persistor = persistStore(store);
   return {
      store,
      persistor,
   };
};
