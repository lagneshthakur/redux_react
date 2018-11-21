import React from 'react';
import {createStore, combineReducers} from 'redux';
import reducers from '../reducers/index.js';

export const store = createStore(
    combineReducers({
        reducedState: reducers  
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

