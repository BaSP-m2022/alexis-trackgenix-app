const AdminPage = require('../pageobjects/admin.page')

describe('Projects', () => {
    beforeAll('open browser', ()=> {
        browser.url('https://alexis-trackgenix-app.vercel.app/home')
    })
    describe('Go to projects', () => {
        it('Project redirect', async () => {
            await AdminPage.adminUser.click();
            await AdminPage.projectSidebar.click();
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
        it('Click on edit project with valid data', async () => {
            await browser.pause(2000)
            await AdminPage.editBtn.click();
            await AdminPage.edit('Carlosss', 'Solari', '17/01/1949', '12/03/1980', 'Most iconic rock leader from Argentina');
            await AdminPage.editAcceptBtn.click();
        })
    })
    describe('Team members', () => {
        it('Click on add member', async () =>{
            await AdminPage.editBtn.click();
            await expect(AdminPage.addMember).toExist();
            await AdminPage.addMember.click();
        })
        it('Click on submit with no data', async () =>{
            await AdminPage.submitBtn.click();
            await browser.pause(2000)
            await expect(AdminPage.errorContainerRole).toHaveText('Role is a required field');
            await expect(AdminPage.errorContainerRate).toHaveText('Rate is a required field');
        })
        it('Click on submit with valid data', async () =>{
            await AdminPage.chooseMember.click();
            await AdminPage.chooseEmployee.click()
            await AdminPage.chooseRole.waitForClickable(1000)
            await AdminPage.chooseQA.click()
            await AdminPage.insertRateNumber('100');
            await AdminPage.submitBtn.click()
        })
    })
    describe('Delete projects', () => {
        it('Close button', async () =>{
            await browser.pause(3000)
            await AdminPage.deleteBtn.click();
            await expect(AdminPage.deleteModal).toExist();
            await AdminPage.closeDeleteBtn.click()
        })
        it('Confirm delete', async () =>{
            await AdminPage.deleteBtn.click();
            await expect(AdminPage.deleteModal).toExist();
            await AdminPage.confirmDeleteBtn.click()
        })
    })
})