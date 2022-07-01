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
            await AdminPage.create('Alejandro', 'Parker', '29/08/1920', '12/03/1955', 'Crazy saxophonist from the bebop era');
            await AdminPage.crossBtnEdit.click();
            await browser.pause(6000);
        })
        // it('Exit create form', async () => {
        //     await AdminPage.crossBtnEdit.click();
        //     await expect(AdminPage.editBtn).toExist();
        // })
    })

    describe('Edit projects', () => {
        it('Click on edit project', async () => {
            // const row = await $('#root > div > div > section > div > div > table > tbody > tr:last-child')
            const rowEdit = await $('table > tbody > tr:last-child > td:nth-child(8) > button')
            await rowEdit.click();
            await AdminPage.edit('Carleeees', 'Solaarii', '17/01/1949', '12/03/1980', 'Most iconic rock leader from Argentina');
            await browser.pause(4000);
            await AdminPage.editAcceptBtn.click();
            await AdminPage.crossBtnEdit.click();
        })
        // it('Click on edit withoud data', async () =>{
        //     await AdminPage.editAcceptBtn.click();
        //     // await expect(AdminPage.noChangesModal).toExist();
        //     await AdminPage.crossBtnEdit.click();
        // })
        // it('Click on edit project with valid data', async () => {
        //     await AdminPage.edit('Carleeees', 'Solaarii', '17/01/1949', '12/03/1980', 'Most iconic rock leader from Argentina');
        //     await browser.pause(4000);
        //     await AdminPage.crossBtnEdit.click();
        // })
    })
    describe('Team members', () => {
        it('Click on add member', async () =>{
            const rowEdit = await $('table > tbody > tr:last-child > td:nth-child(8) > button')
            await rowEdit.click();
            await expect(AdminPage.addMember).toExist();
            await AdminPage.addMember.click();
        })
        it('Click on submit with no data', async () =>{
            await AdminPage.submitBtn.click();
            // await browser.pause(2000)
            await expect(AdminPage.errorContainerRole).toHaveText('Role is a required field');
            await expect(AdminPage.errorContainerRate).toHaveText('Rate is a required field');
        })
        it('Click on submit with valid data', async () =>{


            await browser.pause(3000);
            const member1 = AdminPage.chooseMember;
            await member1.selectByAttribute("value", "62a9caa7134819a798e362b7")
            const role = AdminPage.chooseRole;
            await role.selectByAttribute("value", "QA")
            const rate = await $("div.input_inputContainer__Qsqmz > input")
            await rate.setValue('100');
            await AdminPage.submitBtn.click();
            await AdminPage.crossBtnEdit.click();
            //[BUG]When addidng a new member you cannot submit, so i click on X to leave form
            await AdminPage.exitModal.click();
        })
    })
    describe('Delete projects', () => {
        it('Testing close button', async () =>{
            // await browser.pause(3000)
            const rowDelete = await $('table > tbody > tr:last-child > td:nth-child(9) > button')
            await rowDelete.click();
            await expect(AdminPage.deleteModal).toExist();
            await AdminPage.closeDeleteBtn.click()
        })
        it('Confirm delete', async () =>{
            const rowDelete = await $('table > tbody > tr:last-child > td:nth-child(9) > button')
            await rowDelete.click();
            await expect(AdminPage.deleteModal).toExist();
            await AdminPage.confirmDeleteBtn.click()
        })
    })
})