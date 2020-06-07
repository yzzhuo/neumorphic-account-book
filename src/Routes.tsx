
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import Navigation from 'components/Navigation';

import Home from './pages/Home/index';
import BillDetail from './pages/BillDetail';
import Summary from './pages/Summary';
import { history } from './store';
import styles from './Routes.module.scss';

const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <Navigation items={[
                {
                    label: '账单',
                    url: '/'
                },
                {
                    label: '统计',
                    url: '/summary'
                }
            ]} />
            <div className={styles.page}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/detail" component={BillDetail} exact />
                    <Route path="/summary" component={Summary} />
                </Switch>
            </div>
        </ConnectedRouter >
    )
}
export default Router;