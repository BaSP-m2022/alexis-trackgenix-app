import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './routes.module.css';
import { Header, Footer, Preloader } from 'Components/Shared';
import SideBarRoutes from 'Components/Routes/SideBarRoutes';

const Home = lazy(() => import('Components/Home'));
const AdminRoutes = lazy(() => import('./admin'));
const EmployeeRoutes = lazy(() => import('./employee'));

function Routes() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.currentScreen}>
        <Switch>
          <Suspense fallback={Preloader}>
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin" component={AdminRoutes} />
            <Route exact path="/employee" component={EmployeeRoutes} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Suspense>
        </Switch>
      </div>
      <Footer />
      <div className={styles.sidebar}>
        <SideBarRoutes titles={['Admin', 'Employee']} directions={['/admin', '/employee']} />
      </div>
    </div>
  );
}

export default Routes;
