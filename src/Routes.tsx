
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import Home from './pages/Home/index';
import BillDetail from './pages/BillDetail';
import Summary from './pages/Summary';
import {history} from './store';


const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/detail" component={BillDetail} exact/>
                <Route path="/summary" component={Summary} />
             </Switch>
        </ConnectedRouter>
    )
}
export default Router;