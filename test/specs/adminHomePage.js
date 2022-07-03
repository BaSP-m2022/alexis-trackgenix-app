const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page')
const AdminHome = require('../pageobjects/adminHome.page');

describe('Admin page', ()=> {
    beforeAll('Should deploy the "TrackGENIX" admin page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await Login.email('testAdmin@radium.com')
        await Login.password('admin123')
        await Login.loginBtn.click();
        await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
    })

    describe('Checking the titles existence', ()=> {
        it('Header title and main page title should exist', async ()=> {
            await expect(AdminHome.adminTitle).toExist();
            await expect(AdminHome.adminTitle).toHaveText('Admin');
            await expect(AdminHome.mainTitle).toExist();
            await expect(AdminHome.mainTitle).toHaveText('Welcome NoBorrar NoEditar');
        })
    })

    describe('Sidebar title functionality', ()=> {
        it('"TRACKGENIX" sidebar title should redirect to the home page', async ()=> {
            await Home.sidebarTitle.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home')
        })
    })

    describe('Sidebar links functionality', ()=> {
        it('"Home" sidebar link should redirect to the home admin page', async ()=> {
            await Home.sidebarLogin.click();
            await Login.email('testAdmin@radium.com')
            await Login.password('admin123')
            await Login.loginBtn.click();
            await expect(AdminHome.homeSidebar).toBeClickable();
            await AdminHome.adminsSidebar.click();
            await AdminHome.homeSidebar.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
        });
        it('"Admins" sidebar link should redirect to the table admins page', async ()=> {
            await expect(AdminHome.adminsSidebar).toExist();
            await expect(AdminHome.adminsSidebar).toBeClickable();
            await AdminHome.adminsSidebar.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/admins');
        });
        it('"Super-Admins" sidebar link should redirect to the table super-admin page', async ()=> {
            await expect(AdminHome.superAdminsSidebar).toExist();
            await expect(AdminHome.superAdminsSidebar).toBeClickable();
            await AdminHome.superAdminsSidebar.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/super-admins');
        });
        it('"Employees" sidebar link should redirect to the table employees page', async ()=> {
            await expect(AdminHome.employeesSidebar).toExist();
            await expect(AdminHome.employeesSidebar).toBeClickable();
            await AdminHome.employeesSidebar.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/employees');
        });
        it('"Projects" sidebar link should redirect to the table projects page', async ()=> {
            await expect(AdminHome.projectsSidebar).toExist();
            await expect(AdminHome.projectsSidebar).toBeClickable();
            await AdminHome.projectsSidebar.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/projects');
        });
        it('"Timesheet" sidebar link should redirect to the table timesheet page', async ()=> {
            await expect(AdminHome.timesheetSidebar).toExist();
            await expect(AdminHome.timesheetSidebar).toBeClickable();
            await AdminHome.timesheetSidebar.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/time-sheets');
        });
        it('"Tasks" sidebar link should redirect to the table task page', async ()=> {
            await expect(AdminHome.tasksSidebar).toExist();
            await expect(AdminHome.tasksSidebar).toBeClickable();
            await AdminHome.tasksSidebar.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/tasks');
        });
        it('"Log out" sidebar link should redirect to the home page', async ()=> {
            await expect(AdminHome.logoutSidebar).toExist();
            await expect(AdminHome.logoutSidebar).toBeClickable();
            await AdminHome.logoutSidebar.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
        });
    })

})