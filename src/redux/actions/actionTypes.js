import { ActionType } from 'redux-promise-middleware';

export const pending = `_${ActionType.Pending}`;
export const fulfilled = `_${ActionType.Fulfilled}`;
export const rejected = `_${ActionType.Rejected}`;

export const loggedIn = 'LOGGED_IN';
export const registered = 'REGISTERED';
export const updatePin = 'PIN_UPDATED';
export const loggedOut = 'LOGGED_OUT';

export const editUser = 'EDIT_USER';
export const contactFetched = 'CONTACT_FETCHED';
export const searchUser = 'SEARCH_USER';
export const fetchBalance = 'FETCH_BALANCE';
export const fetchEmail = 'FETCH_EMAIL';
export const sendOtp = 'SEND_OTP';
export const changePassword = 'CHANGE_PASSWORD';

export const addReceiver = 'ADD_RECEIVER';
export const inputAmount = 'INPUT_AMOUNT';
export const insert_transaction = 'INSERT_TRANSACTION';
export const topUp = 'TOP_UP';
export const historyFetched = 'HISTORY_FETCHED';
export const clearTransaction = 'CLEAR_TRANSACTION';

export const clearState = 'CLEAR_STATE';

export const setSystemSocket = 'SET_SYSTEM_SOCKET';
export const enableNotification = 'ENABLE_NOTIFICATION';
