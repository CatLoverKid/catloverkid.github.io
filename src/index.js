import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import BlackMesa from './components/BlackMesa';


const routes = (
  <Route exact={true} path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />
    <Route path="BlackMesa" mapMenuTitle="BlackMesa" component={BlackMesa} />
    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
