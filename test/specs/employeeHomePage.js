// const Home = require('../pageobjects/home.page');
// const Login = require('../pageobjects/login.page');
// const EmployeeHome = require('../pageobjects/employeeHome.page');

// describe('Employee page', ()=> {
//     beforeAll('Should deploy the "TrackGENIX" employee page', async ()=> {
//         await Home.open();
//         await Home.sidebarLogin.click();
//         await Login.email('testEmployee@radium.com')
//         await Login.password('employee123')
//         await Login.loginBtn.click();
//         await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
//     })

//     describe('Sidebar links functionality', ()=> {
//         it('"Home" sidebar link should redirect to the home employee page', async ()=> {
//             await EmployeeHome.projectsSidebar.click();
//             await EmployeeHome.homeSidebar.click();
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
//         });
//         it('"Projects" sidebar link should redirect to the projects employee page', async ()=> {
//             await expect(EmployeeHome.projectsSidebar).toExist();
//             await expect(EmployeeHome.projectsSidebar).toBeClickable();
//             await EmployeeHome.projectsSidebar.click();
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/projects');
//         });
//         it('"Time-Sheet" sidebar link should redirect to the projects employee page', async ()=> {
//             await expect(EmployeeHome.timesheetSidebar).toExist();
//             await expect(EmployeeHome.timesheetSidebar).toBeClickable();
//             await EmployeeHome.timesheetSidebar.click();
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/time-sheet');
//         })
//         it('"Profile"sidebar link should redirect to the projects employee page', async ()=> {
//             await expect(EmployeeHome.profileSidebar).toExist();
//             await expect(EmployeeHome.profileSidebar).toBeClickable();
//             await EmployeeHome.profileSidebar.click();
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/profile');
//         })
//     })

// })