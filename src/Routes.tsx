
import React from 'react'
import { connect } from 'react-redux';
import {BrowserRouter,  Switch, Route } from 'react-router-dom';
// import Home from './pages/Home/index';
import {RootState} from './store';



const Router = () => {
    const ConnectedSwitch = connect((state: RootState) => ({
        location: state.router.location,
    }))(Switch);
    
    return (
        <BrowserRouter>
            <ConnectedSwitch>
                {/* <Route path="/" component={Home} /> */}
             </ConnectedSwitch>
        </BrowserRouter>
    )
}
export default Router;