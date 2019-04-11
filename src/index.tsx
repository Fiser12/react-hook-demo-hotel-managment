import * as React from 'React';
import * as ReactDOM from 'react-dom';

import {HashRouter, Switch, Route, BrowserRouter} from "react-router-dom";
import {LoginPage, HotelCollectionPage} from './scenes';
import {routerSwitchRoutes, SessionProvider} from 'core';

ReactDOM.render(
    <SessionProvider>
        <HashRouter>
            <Switch>
                <Route exact={true} path={routerSwitchRoutes.login} component={LoginPage}/>
                <Route path={routerSwitchRoutes.hotelCollection} component={HotelCollectionPage}/>
            </Switch>
        </HashRouter>
    </SessionProvider>,
    document.getElementById('root')
);