const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page');
const AdminHome = require('../pageobjects/adminHome.page')
const Admin = require('../pageobjects/admins.page');

describe('Admins page', ()=> {
    beforeAll('Should deploy the "TrackGENIX" admin page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await Login.email('testAdmin@radium.com');
        await Login.password('admin123');
        await Login.loginBtn.click();
        await AdminHome.projectsSidebar.click();
        await AdminHome.adminsSidebar.click();
    });

    describe('Checking the existence of the elements', ()=> {
        it('The elements should exist', async ()=> {
            await expect(Admin.adminTitle).toExist();
            await expect(Admin.adminTable).toExist();
            await expect(Admin.idTable).toExist();
            await expect(Admin.firstNameTable).toExist();
            await expect(Admin.lastNameTable).toExist();
            await expect(Admin.emailTable).toExist();
            await expect(Admin.passwordTable).toExist();
            await expect(Admin.activeTable).toExist();
            await expect(Admin.editBtn).toExist();
            await expect(Admin.editBtn).toBeClickable();
            await expect(Admin.deleteBtn).toExist();
            await expect(Admin.deleteBtn).toBeClickable();
            await expect(Admin.addBtn).toExist();
            await expect(Admin.addBtn).toBeClickable();
        })
    })

    describe('Test the functionality of the add button', ()=> {
        it('The add button should deploy the modal and it should work correctly', async ()=> {
            await Admin.addBtn.click();
            await expect(Admin.modalTitle).toExist();
            await Admin.adminFirstName('Leonel');
            await Admin.adminLastName('Listro');
            await Admin.adminEmail('leonellistro@gmail.com');
            await Admin.adminPassword('asdasd789');
            await Admin.modalActive.click();
            await Admin.modalCreate.click();
            await expect(Admin.successTitle).toBeDisplayed();
            await Admin.successCross.click();
        })
    })

    describe('Test the functionality of the edit button', ()=> {
        it('Te edit button should deploy the correct modal and it should work correctly', async ()=> {
            const row = await $('#root > div > div > section > div > div > table > tbody > tr:last-child')
            const rowBtn = await $(
                '#root > div > div > section > div > div > table > tbody > tr:last-child > td:nth-child(7) > button'
            )
            await expect(row).toHaveTextContaining('leonel');
            await rowBtn.click();
            await expect(Admin.editModalTitle).toBeDisplayed();
        })
    })

    describe('Checking the edit modal functionality', ()=> {
        it('Edit modal elements should exist', async ()=> {
            await expect(Admin.firstNameEdit).toExist();
            await expect(Admin.lastNameEdit).toExist();
            await expect(Admin.emailEdit).toExist();
            await expect(Admin.passwordEdit).toExist();
        })
        it('Validations should be displayed correctly', async ()=> {
            await Admin.editFirstName('@');
            await Admin.editLastName('@');
            await Admin.editEmail('@');
            await Admin.editPassword('@');
            await expect(Admin.firstNameEditMsg).toBeDisplayedInViewport();
            await expect(Admin.lastNameEditMsg).toBeDisplayedInViewport();
            await expect(Admin.emailEditMsg).toBeDisplayedInViewport();
            await Admin.editModalBtn.click();
            await expect(Admin.passwordEditMsg).toBeDisplayedInViewport();
            await Admin.editFirstName('Leonela');
            await Admin.editLastName('listroa');
            await Admin.editEmail('leonelalistro@gmail.com');
            await Admin.editPassword('asdasd789a');
            await Admin.editModalBtn.click();
            await expect(Admin.successEditMsg).toExist();
            await Admin.crossSuccessEdit.click();
        })
    })

    describe('Checking the functionality of the delete button', ()=> {
        it('Admin should be deleted', async ()=> {
            const rowDeleteBtn = await $(
                '#root > div > div > section > div > div > table > tbody > tr:last-child > td:nth-child(8) > button'
            )
            await rowDeleteBtn.click();
            await expect(Admin.deleteTitle).toBeDisplayedInViewport();
            await expect(Admin.deleteP).toHaveTextContaining('Are you sure you want to delete this admin?')
            await Admin.deleteClose.click();
            await rowDeleteBtn.click();
            await Admin.deleteConfirm.click();
            await expect(Admin.successDeleteMsg).toBeDisplayedInViewport();
            await expect(Admin.successDeleteMsg).toHaveTextContaining('Success')
            await Admin.successDeleteCross.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/admins')
        })
    })

})
