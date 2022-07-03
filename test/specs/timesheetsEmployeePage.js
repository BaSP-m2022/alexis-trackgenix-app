const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page');
const EmployeeHome = require('../pageobjects/employeeHome.page');
const TimesheetsEmployee = require('../pageobjects/timesheetsEmployee.page');

describe('Employee timesheet page', ()=> {
    beforeAll('Should login like a employee and go to the timesheets page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await Login.email('testEmployee@radium.com')
        await Login.password('employee123')
        await Login.loginBtn.click();
        await EmployeeHome.profileSidebar.click();
        await EmployeeHome.timesheetSidebar.click();
        await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/time-sheet');
    })

    describe('Elements should exist', ()=> {
        it('Checking the existence of the elements of the page', async ()=> {
            await expect(TimesheetsEmployee.timesheetsTitle).toBeDisplayedInViewport();
            await expect(TimesheetsEmployee.timesheetsTable).toBeDisplayedInViewport();
            await expect(TimesheetsEmployee.tableProject).toBeDisplayedInViewport();
            await expect(TimesheetsEmployee.tableApproval).toBeDisplayedInViewport();
            await expect(TimesheetsEmployee.tableHours).toBeDisplayedInViewport();
        })
    })
})