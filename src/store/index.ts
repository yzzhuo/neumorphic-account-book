import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import bills from './bills'
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();
const rootReducer = combineReducers({
	router: connectRouter(history),
    bills,
})

export const store = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
