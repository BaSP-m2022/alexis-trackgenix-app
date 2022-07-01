const Home = require('../pageobjects/home.page');
const AdminHome = require('../pageobjects/adminHome.page');
const Admin = require('../pageobjects/admin.page');

describe('Admins table page', ()=> {
    beforeAll('Should deploy the admin sub page', async ()=> {
        await Home.open('home');
        await Home.adminBtn.click();
        await AdminHome.adminsSidebar.click();
        await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/admins');
    })

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
            const rowBtn = await $('#root > div > div > section > div > div > table > tbody > tr:last-child > td:nth-child(7) > button' )
            await expect(row).toHaveTextContaining('leonel');
            await rowBtn.click();
            await expect(Admin.editModalTitle).toBeDisplayed();
            await browser.pause(6000);
        })
    })

    describe('')
})
