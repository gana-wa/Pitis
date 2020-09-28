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

export const insert_transaction = 'INSERT_TRANSACTION';
export const topUp = 'TOP_UP';
export const historyFetched = 'HISTORY_FETCHED';

