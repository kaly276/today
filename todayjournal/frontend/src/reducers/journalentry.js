import { GET_ENTRIES, DELETE_ENTRIES, ADD_ENTRIES } from '../actions/types.js';

const initialState = {
    journalentry: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ENTRIES:
            return {
                ...state,
                journalentry: action.payload
            };
        case DELETE_ENTRIES:
            return {
                ...state,
                journalentry: state.journalentry.filter(entry => entry.id !== action.payload)
            };
        case ADD_ENTRIES:
            return {
                ...state,
                journalentry: [...state.journalentry, action.payload]
            };
        default:
            return state;
    }
}
