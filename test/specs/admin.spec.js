const AdminPage = require('../pageobjects/admin.page')

describe('Login page testing', () => {
    beforeAll('open browser', ()=> {
        browser.url('https://alexis-trackgenix-app.vercel.app/home')
    })

    describe('Admin user', () => {
        it('Click on admin button', async () => {
            await AdminPage.adminUser.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
        })
        it('Click on projects', async () => {
            await AdminPage.projectsBtn.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/projects');
        })
        it('Add button should exist', async () => {
            await expect(AdminPage.addProject).toExist();
        })
    })
    describe('Add projects', () => {
        it('Click on add project', async () => {
            await AdminPage.addProject.click();
            await expect(AdminPage.projectForm).toExist();
        })
        it('Click on create project without data', async () => {
            await AdminPage.createBtn.click();
            await expect(AdminPage.errorContainerClient).toHaveText('Client name is a required field');
        })
        it('Click on create project with valid data', async () => {
            await AdminPage.create('Charlie', 'Parker', '29/08/1920', '12/03/1955', 'Crazy saxophonist from the bebop era');
        })
        it('Exit create form', async () => {
            await AdminPage.crossBtnEdit.click();
            await expect(AdminPage.editBtn).toExist();
        })
    })
    describe('Edit projects', () => {
        it('Click on edit project', async () =>{
            await AdminPage.editBtn.click();
            await expect(AdminPage.editForm).toExist();
        })
        it('Click on edit withoud data', async () =>{
            await AdminPage.editAcceptBtn.click();
            await expect(AdminPage.noChangesModal).toExist();
            await AdminPage.crossBtnEdit.click();
        })
        it('Edit project data', async () =>{
            await AdminPage.editAcceptBtn.click();
            await expect(AdminPage.noChangesModal).toExist();
            await AdminPage.crossBtnEdit.click();
        })
        it('Click on create project with valid data', async () => {
            await AdminPage.edit('Carlos', 'Solari', '17/01/1949', '12/03/1980', 'Most iconic rock leader from Argentina');
            await broser.pause(2000)
            await AdminPage.crossBtnEdit.click();
        })
    })
    describe('Delete projects', () => {
        it('Close button', async () =>{
            await browser.pause(3000)
            await AdminPage.deleteBtn.click();
            await expect(AdminPage.deleteModal).toExist();
            await AdminPage.closeDeleteBtn.click()
        })
        it('Confirm deleten', async () =>{
            await AdminPage.deleteBtn.click();
            await expect(AdminPage.deleteModal).toExist();
            await AdminPage.confirmDeleteBtn.click()
        })
    })

})