import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseMemo from './pages/UseMemo';
import UseCallBack from './pages/UseCallback';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/usestate" component={UseState} />
      <Route path="/useeffect" component={UseEffect} />
      <Route path="/usememo" component={UseMemo} />
      <Route path="/usecallback" component={UseCallBack} />
    </Switch>
  );
}
