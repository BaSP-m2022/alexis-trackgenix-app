import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Home from 'Components/Employee/Home';
import Timesheet from 'Components/Employee/Timesheet';
import EmployeesTimesheet from 'Components/Employee/PMTimesheet';
import EmployeesTasks from 'Components/Employee/PMTimesheet/Tasks';
import ProjectPage from 'Components/Employee/Projects/ProjectPage';
import MemberTimesheetPage from 'Components/Employee/Projects/ProjectPage/MemberTimesheetPage';
import MemberTasksPage from 'Components/Employee/Projects/ProjectPage/MemberTimesheetPage/MemberTasksPage';
import Layout from 'Components/Layout';
import Profile from 'Components/Employee/Profile';
import Projects from 'Components/Employee/Projects';
import Tasks from 'Components/Employee/Timesheet/Tasks';
import { faClock, faFolderClosed, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Employee = () => {
  const { url } = useRouteMatch();
  let windowsSize = window.screen.width;
  let employeesRoutes;

  const home = <FontAwesomeIcon icon={faHouse} />;
  const projects = <FontAwesomeIcon icon={faFolderClosed} />;
  const timesheets = <FontAwesomeIcon icon={faClock} />;
  const profile = <FontAwesomeIcon icon={faUser} />;

  if (location.pathname.substring(0, 9) === '/employee' && windowsSize <= 480) {
    employeesRoutes = [
      { icon: home, name: 'Home', path: '/employee' },
      { icon: projects, name: 'Projects', path: '/employee/projects' },
      { icon: timesheets, name: 'Time-Sheet', path: '/employee/time-sheet' },
      { icon: profile, name: 'Profile', path: '/employee/profile' }
    ];
  } else {
    employeesRoutes = [
      { icon: home, name: 'Home', path: '/employee' },
      { icon: projects, name: 'Projects', path: '/employee/projects' },
      { icon: timesheets, name: 'Time-Sheet', path: '/employee/time-sheet' }
    ];
  }

  return (
    <Layout routes={employeesRoutes} logout>
      <Switch>
        <Route exact path={`${url}/profile`} component={Profile} />
        <Route exact path={`${url}/projects`} component={Projects} />
        <Route exact path={`${url}/projects/id=:id`} component={ProjectPage} />
        <Route
          exact
          path={`${url}/projects/id=:id/members/id=:memberId`}
          component={MemberTimesheetPage}
        />
        <Route
          exact
          path={`${url}/projects/id=:id/members/id=:memberId/timesheets/id=:timesheetId`}
          component={MemberTasksPage}
        />
        <Route exact path={`${url}/time-sheet`} component={Timesheet} />
        <Route exact path={`${url}/time-sheet/:id`} component={Tasks} />
        <Route exact path={`${url}/employees/time-sheet`} component={EmployeesTimesheet} />
        <Route exact path={`${url}/employees/time-sheet/:id`} component={EmployeesTasks} />
        <Route exact path={`${url}/`} component={Home} />
        <Redirect to={`${url}`} />
      </Switch>
    </Layout>
  );
};

export default Employee;
