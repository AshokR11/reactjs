import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from 'routes/Home';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      // <Route exact path="/mainpage" component={AboutUs} />
    </Switch>
  </main>
);

export default App;
