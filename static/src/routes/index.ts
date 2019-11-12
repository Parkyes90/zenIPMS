import { ComponentType, lazy, LazyExoticComponent } from 'react';

const Analytic: LazyExoticComponent<ComponentType> = lazy(() =>
  import('pages/AnalyticPage'),
);
const Sales: LazyExoticComponent<ComponentType> = lazy(() =>
  import('pages/SalesPage'),
);
const Crypto: LazyExoticComponent<ComponentType> = lazy(() =>
  import('pages/CryptoPage'),
);
const Project: LazyExoticComponent<ComponentType> = lazy(() =>
  import('pages/ProjectPage'),
);
const HelpDesk: LazyExoticComponent<ComponentType> = lazy(() =>
  import('pages/HelpDeskPage'),
);

interface Route {
  exact: boolean;
  path: string;
  name: string;
  component: LazyExoticComponent<ComponentType>;
}

const routes: Route[] = [
  {
    exact: true,
    path: '/dashboard/default',
    name: 'Analytic',
    component: Analytic,
  },
  { exact: true, path: '/dashboard/sales', name: 'Sales', component: Sales },
  { exact: true, path: '/dashboard/crypto', name: 'Crypto', component: Crypto },
  {
    exact: true,
    path: '/dashboard/project',
    name: 'Project',
    component: Project,
  },
  {
    exact: true,
    path: '/dashboard/helpDesk',
    name: 'HelpDesk',
    component: HelpDesk,
  },
];

export default routes;
