import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_ENTRIES, DELETE_ENTRIES, ADD_ENTRIES } from './types';

// GET ENTRIES
export const getEntries = () => dispatch => {
    axios
        .get('/api/todayentry/')
        .then(res => {
            dispatch({
                type: GET_ENTRIES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE ENTRIES
export const deleteEntries = (id) => dispatch => {
    axios
        .delete(`/api/todayentry/${id}/`)
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
export const addEntries = (entry) => dispatch => {
    axios
        .post('/api/todayentry/', entry)
        .then(res => {
            dispatch(createMessage({ addEntry: 'Entry created' }));
            dispatch({
                type: ADD_ENTRIES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
