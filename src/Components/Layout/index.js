import Header from '../Header/index';
import Footer from '../Footer/index';
import Admins from '../Admins/index';
import AdminsAdd from '../Admins/Add';
import AdminsEdit from '../Admins/Edit';
import SuperAdmins from '../SuperAdmins/index';
import SuperAdminsAdd from '../SuperAdmins/Add';
import SuperAdminsEdit from '../SuperAdmins/Edit';
import Home from '../Home/index';
import styles from './layout.module.css';
import Employees from '../Employees/index';
import Projects from '../Projects';
import ProjectsForm from '../Projects/Form/index';
import AddMember from '../Projects/Form/AddMember/AddMember';
import TimeSheets from '../TimeSheets';
import Tasks from '../Tasks/index';
import TaskForm from '../Tasks/Form/Form';
import TaskEdit from '../Tasks/Edit/Edit';

function Layout() {
  let currentScreen = <Home />;
  switch (window.location.pathname) {
    case '/admins':
      currentScreen = <Admins />;
      break;
    case '/admins/Add':
      currentScreen = <AdminsAdd />;
      break;
    case '/admins/Edit':
      currentScreen = <AdminsEdit />;
      break;
    case '/super-admins':
      currentScreen = <SuperAdmins />;
      break;
    case '/super-admins/add':
      currentScreen = <SuperAdminsAdd />;
      break;
    case '/super-admins/edit':
      currentScreen = <SuperAdminsEdit />;
      break;
    case '/employees':
      currentScreen = <Employees />;
      break;
    case '/projects':
      currentScreen = <Projects />;
      break;
    case '/projects/form':
      currentScreen = <ProjectsForm />;
      break;
    case '/projects/addmembers':
      currentScreen = <AddMember />;
      break;
    case '/time-sheets':
      currentScreen = <TimeSheets />;
      break;
    case '/tasks':
      currentScreen = <Tasks />;
      break;
    case '/tasks/add':
      currentScreen = <TaskForm />;
      break;
    case '/tasks/edit':
      currentScreen = <TaskEdit />;
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <Header />
      {currentScreen}
      <Footer />
    </div>
  );
}

export default Layout;
