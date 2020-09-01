import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import NotFound from 'containers/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route compponent={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
