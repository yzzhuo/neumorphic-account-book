import React from 'react';
import { Provider } from "react-redux";
import {mount} from 'enzyme';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

export function render(children: React.ReactNode, state:any = {}) {
    const store = mockStore(state);
    return mount(
        <Provider store={store}>
            {children}
        </Provider>
    )
}