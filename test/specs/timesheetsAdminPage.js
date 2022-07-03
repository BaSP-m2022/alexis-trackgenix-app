// const Home = require('../pageobjects/home.page');
// const Login = require('../pageobjects/login.page');
// const AdminHome = require('../pageobjects/adminHome.page');
// const Timesheet = require('../pageobjects/timesheets.page');

// describe('Timesheet page', ()=> {
//     beforeAll('Should deploy the "TrackGENIX" timesheet page', async ()=> {
//         await Home.open();
//         await Home.sidebarLogin.click();
//         await Login.email('testAdmin@radium.com');
//         await Login.password('admin123');
//         await Login.loginBtn.click();
//         await AdminHome.timesheetSidebar.click();
//     });

//         describe('Checking the existence of the elements of the page', ()=> {
//         it('Element should be displayed in viewport', async ()=> {
//             await expect(Timesheet.timesheetTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.projectTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.taskIdTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.taskNameTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.startDateTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.hoursTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.descriptionTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.statusTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.pmApprovalTitle).toBeDisplayedInViewport();
//             await expect(Timesheet.editTableBtn).toBeClickable();
//             await expect(Timesheet.deleteTableBtn).toBeClickable();
//             await expect(Timesheet.addBtn).toBeClickable();
//         })
//     })

//         describe('Checking the functionality of the buttons of the page', ()=> {
//         it('Button should open and close modals', async ()=> {
//             await Timesheet.editTableBtn.click();
//             await expect(Timesheet.editModalTitle).toBeDisplayedInViewport();
//             await Timesheet.editModalCross.click();
//             await Timesheet.deleteTableBtn.click();
//             await expect(Timesheet.delModalTitle).toBeDisplayedInViewport();
//             await Timesheet.delModalClose.click();
//             await Timesheet.addBtn.click();
//             await expect(Timesheet.addModalTitle).toBeDisplayedInViewport();
//             await Timesheet.addModalCross.click();
//         })
//     })

//         describe('Add new timesheet', ()=> {
//         it('Checking the functionality of the error messages', async ()=> {
//             await Timesheet.addBtn.click();
//             await Timesheet.addProjectInput.click();
//             await Timesheet.addTaskInput.click();
//             await Timesheet.approvedCheck.click();
//             await expect(Timesheet.addProjectMsg).toBeDisplayedInViewport();
//             await expect(Timesheet.addTaskMsg).toBeDisplayedInViewport();
//         })
//         it('Checking the creation of a new timesheet', async ()=> {
//             await Timesheet.addProjectInput.click();
//             await Timesheet.projectOpt.click();
//             await Timesheet.addTaskInput.click();
//             await Timesheet.taskOpt.click();
//             await Timesheet.approvedCheck.click();
//             await Timesheet.addModalCreate.click();
//             await browser.pause(1000)
//             await expect(Timesheet.addSuccessMsg).toBeDisplayedInViewport();
//             await Timesheet.addSuccessCross.click();
//         })
//     })

//         describe('Edit the new timesheet', ()=> {
//         it('Checking the new row', async ()=> {
//             const row = await $('#root > div > div > section > div > table > tbody > tr:last-child')
//             await expect(row).toHaveTextContaining('Task 1024');
//         })
//         it('Checking the functionality of the edit button', async ()=> {
//             const row = await $('#root > div > div > section > div > table > tbody > tr:last-child')
//             const rowEditBtn = await $(
//                 '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(9) > button'
//             )
//             await rowEditBtn.click();
//             await expect(Timesheet.editModalTitle).toBeDisplayedInViewport();
//             await Timesheet.editTaskInput.click();
//             await Timesheet.editTaskOpt.click();
//             await Timesheet.editModalEdit.click();
//             await Timesheet.editSuccessCross.click();
//             await expect(row).toHaveTextContaining('Carls');
//         })
//         it('Checking the functionality of the delete button', async ()=> {
//             const rowDeleteBtn = await $(
//                 '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(10) > button'
//             )
//             await rowDeleteBtn.click();
//             await Timesheet.delModalConfirm.click();
//             await expect(Timesheet.delSuccessMsg).toBeDisplayedInViewport();
//             await Timesheet.delSuccessCross.click();
//         })
//     })
// })
