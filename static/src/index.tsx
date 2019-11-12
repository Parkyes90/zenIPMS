import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from 'store';
import './assets/fonts/feather/css/feather.css';
import 'flag-icon-css/sass/flag-icon.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './index.scss';
import Spinner from './molecules/Spinner';
import { configure } from './configure';

const store = createStore();
const App = lazy(() => import('App'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={configure.basename}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
