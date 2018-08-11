import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import PageHome from '../Pages/Home/index.jsx';
import PageCart from '../Pages/Cart/index.jsx';
import PageHistory from '../Pages/History/index.jsx';
import PageConfig from '../Pages/Config/index.jsx';
import Page404 from '../Pages/404/index.jsx';

export const RouterList = ()=> {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/config" component={PageConfig} />
                <Route exact path="/cart" component={PageCart} />
                <Route exact path="/history" component={PageHistory} />
                <Route exact path="/home" component={PageHome} />
                <Route path="*" component={Page404} />
            </Switch>
        </HashRouter>
    );
};