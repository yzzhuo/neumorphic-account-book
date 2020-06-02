import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import bills from './bills'
import category from './category';

import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();
const rootReducer = combineReducers({
	router: connectRouter(history),
    bills,
    category,
})

export const store = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
