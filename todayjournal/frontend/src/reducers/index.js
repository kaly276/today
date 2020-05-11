import { combineReducers } from 'redux';
import journalentry from './journalentry';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export const appReducer = combineReducers({
    journalentry,
    errors,
    messages,
    auth
});


