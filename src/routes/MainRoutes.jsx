import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Customer = Loadable(lazy(() => import('pages/component-overview/Customer')));
const Employee = Loadable(lazy(() => import('pages/component-overview/Employee')));
const User = Loadable(lazy(() => import('pages/component-overview/User')));
const Vehicle = Loadable(lazy(() => import('pages/component-overview/Vehicle')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'user',
      element: <User />
    },
    {
      path: 'vehicle',
      element: <Vehicle />
    },
    {
      path: 'employee',
      element: <Employee />
    },
    {
      path: 'company',
      element: <Customer />
    }
  ]
};

export default MainRoutes;
