import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import menu from 'routes';
import Spinner from '../Spinner';

interface Props {
  defaultPath: string;
}

const MainRoute: React.FC<Props> = (props: Props) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {menu.map((obj, i) => {
        return obj.component ? (
          <Route
            key={i}
            exact={obj.exact}
            path={obj.path}
            component={obj.component}
          />
        ) : null;
      })}
      <Redirect from="/" to={props.defaultPath} />
    </Switch>
  </Suspense>
);

export default MainRoute;
