// const Home = require('../pageobjects/home.page');
// const EmployeeHome = require('../pageobjects/employeeHome.page');

// describe('Employee page', ()=> {
//     beforeEach('should deploy the "TrackGENIX" employee page', async ()=> {
//         await Home.open('home');
//         await Home.employeeBtn.click();
//         await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
//     })

//     describe('Sidebar links functionality', ()=> {
//         it('"Home" sidebar link should redirect to the home employee page', async ()=> {
//             await Home.open();
//             await Home.employeeBtn.click();
//             await expect(EmployeeHome.homeSidebar).toBeClickable();
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
//     })

//     describe('Checking the "Profile" button', ()=> {
//         it('The button should redirect to the profile page', async ()=> {
//             await expect(EmployeeHome.profileBtn).toExist();
//             await expect(EmployeeHome.profileBtn).toBeClickable();
//             await expect(EmployeeHome.profileBtn).toHaveLink('/employee/profile')
//         })
//     })

//     describe('Checking the link of the "Profile" button', ()=> {
//         it('The link should redirect to the profile page', async ()=> {
//             await expect(EmployeeHome.profileLink).toExist();
//             await expect(EmployeeHome.profileLink).toBeClickable();
//             await expect(EmployeeHome.profileLink).toHaveLink('/employee/profile');
//             await EmployeeHome.profileLink.click();
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/profile');
//         })
//     })
// })