import { combineReducers } from 'redux';
import journalentry from './journalentry';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    journalentry,
    errors,
    messages
});
