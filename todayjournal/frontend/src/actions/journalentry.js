import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_ENTRIES, DELETE_ENTRIES, ADD_ENTRIES, EDIT_ENTRIES } from './types';

// GET ENTRIES
export const getEntries = () => (dispatch, getState) => {
    axios
        .get('/api/todayentry/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_ENTRIES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE ENTRIES
export const deleteEntries = id => (dispatch, getState) => {
    axios
        .delete(`/api/todayentry/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteEntry: 'Entry deleted' }));
            dispatch({
                type: DELETE_ENTRIES,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD ENTRIES
export const addEntries = entry => (dispatch, getState) => {
    axios
        .post('/api/todayentry/', entry, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addEntry: 'Entry created' }));
            dispatch({
                type: ADD_ENTRIES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// EDIT ENTRIES
export const editEntries = (id, entry) => (dispatch, getState) => {
    axios
        .put(`/api/todayentry/${id}/`, entry, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ editEntry: 'Entry edited' }));
            dispatch({
                type: EDIT_ENTRIES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};


