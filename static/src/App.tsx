import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import fontAwesomeIcon from 'utils/fontawesome';
import MainPage from './pages/MainPage';
import routes from './routes';
import Spinner from './molecules/Spinner';

library.add(...fontAwesomeIcon);

const App: React.FC = () => {
  const menu = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        component={route.component}
      />
    ) : null;
  });
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {menu}
        <Route path="/" component={MainPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
