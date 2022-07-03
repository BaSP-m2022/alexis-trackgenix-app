const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page');
const EmployeeHome = require('../pageobjects/employeeHome.page');
const ProjectsEmployee = require('../pageobjects/projectsEmployee.page');

describe('Employee projects page', ()=> {
    beforeAll('Should login like a employee and go to the projects page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await Login.email('testEmployee@radium.com')
        await Login.password('employee123')
        await Login.loginBtn.click();
        await EmployeeHome.profileSidebar.click();
        await EmployeeHome.projectsSidebar.click();
        await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/projects');
    })

    describe('Elements should exist', ()=> {
        it('Checking the existence of the elements of the page', async ()=> {
            await expect(ProjectsEmployee.projectsTitle).toBeDisplayedInViewport();
            await expect(ProjectsEmployee.projectsTable).toBeDisplayedInViewport();
            await expect(ProjectsEmployee.tableProject).toBeDisplayedInViewport();
            await expect(ProjectsEmployee.tableClient).toBeDisplayedInViewport();
            await expect(ProjectsEmployee.tableStart).toBeDisplayedInViewport();
            await expect(ProjectsEmployee.tableEnd).toBeDisplayedInViewport();
            await expect(ProjectsEmployee.tableActive).toBeDisplayedInViewport();
            await expect(ProjectsEmployee.tableRole).toBeDisplayedInViewport();
            await expect(ProjectsEmployee.tableRate).toBeDisplayedInViewport();
        })
    })
})