import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/index';
import { LOGOUT_SUCCESS } from './actions/types';

const initialState = {};

const middleware = [thunk];

const rootReducer = (state, action) => {
    if (action.type == LOGOUT_SUCCESS) {
        state = undefined;
    }

    return appReducer(state, action);
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
