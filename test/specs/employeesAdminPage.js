const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page');
const AdminHome = require('../pageobjects/adminHome.page');
const Employees = require('../pageobjects/employees.page');

describe('Employees page', ()=> {
    beforeAll('Should deploy the "TrackGENIX" employees page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await Login.email('testAdmin@radium.com');
        await Login.password('admin123');
        await Login.loginBtn.click();
        await AdminHome.employeesSidebar.click();
    });

    describe('Checking the existence of the elements of the page', ()=> {
        it('Element should be displayed in viewport', async ()=> {
            await expect(Employees.employeeTitle).toBeDisplayedInViewport();
            await expect(Employees.firstTitle).toBeDisplayedInViewport();
            await expect(Employees.lastTitle).toBeDisplayedInViewport();
            await expect(Employees.phoneTitle).toBeDisplayedInViewport();
            await expect(Employees.emailTitle).toBeDisplayedInViewport();
            await expect(Employees.pmTitle).toBeDisplayedInViewport();
            await expect(Employees.activeTitle).toBeDisplayedInViewport();
            await expect(Employees.projectsTitle).toBeDisplayedInViewport();
            await expect(Employees.timesheetTitle).toBeDisplayedInViewport();
            await expect(Employees.editTableBtn).toExist();
            await expect(Employees.deleteTableBtn).toExist();
            await expect(Employees.addBtn).toExist();
        })
    })

    describe('Checking the functionality of the buttons of the page', ()=> {
        it('Button should open and close modals', async ()=> {
            await Employees.editTableBtn.click();
            await expect(Employees.editModalTitle).toBeDisplayedInViewport();
            await Employees.editCrossBtn.click();
            await Employees.deleteTableBtn.click();
            await expect(Employees.deleteModalTitle).toBeDisplayedInViewport();
            await Employees.deleteModalClose.click();
            await Employees.addBtn.click();
            await expect(Employees.addModalTitle).toBeDisplayedInViewport();
            await Employees.addCrossBtn.click();
        })
    })

    describe('Add new employee', ()=> {
        it('Checking the functionality of the error messages', async ()=> {
            await Employees.addBtn.click();
            await Employees.addFirst('');
            await Employees.addLast('');
            await Employees.addPhoneNum('');
            await Employees.addMail('');
            await Employees.addPass('');
            await Employees.addActiveCheck.click();
            await expect(Employees.addFirstMsg).toBeDisplayedInViewport();
            await expect(Employees.addLastMsg).toBeDisplayedInViewport();
            await expect(Employees.addPhoneMsg).toBeDisplayedInViewport();
            await expect(Employees.addEmailMsg).toBeDisplayedInViewport();
            await expect(Employees.addPasswordMsg).toBeDisplayedInViewport();
        })
        it('Checking the creation of a new employee', async ()=> {
            await Employees.addFirst('Leonel');
            await Employees.addLast('Listro');
            await Employees.addPhoneNum('3413081507');
            await Employees.addMail('leonellistro@gmail.com');
            await Employees.addPass('asdasd789');
            await Employees.addActiveCheck.click();
            await Employees.addCreateBtn.click();
            await expect(Employees.addSuccessTitle).toBeDisplayedInViewport();
            await Employees.addSuccessCross.click();
        })
    })

    describe('Edit the new employee', ()=> {
        it('Checking the new row', async ()=> {
            const row = await $('#root > div > div > section > div > table > tbody > tr:last-child')
            await expect(row).toHaveTextContaining('leonel');
        })
        it('Checking the functionality of the edit button', async ()=> {
            const rowEditBtn = await $(
                '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(9) > button'
            )
            await rowEditBtn.click();
            await expect(Employees.editModalTitle).toBeDisplayed();
            await Employees.editCrossBtn.click();
        })
        it('Checking the functionality of the delete button', async ()=> {
            const rowDeleteBtn = await $(
                '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(10) > button'
            )
            await rowDeleteBtn.click();
            await Employees.deleteModalConfirm.click();
            await expect(Employees.deleteSuccessTitle).toBeDisplayedInViewport();
            await Employees.deleteSuccessCross.click();
        })
    })

})