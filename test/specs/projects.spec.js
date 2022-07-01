const HomePage = require('../pageobjects/home.page')

const ProjectsPage = require('../pageobjects/projects.page')

describe('Projects', () => {
    beforeAll('open browser', ()=> {
        browser.url('https://alexis-trackgenix-app.vercel.app/home')
    })
    describe('Enter to admin user', () => {
        it('Project redirect', async () => {
            await HomePage.goToLogin.click();
            await HomePage.login('testAdmin@radium.com', 'admin123');
            await HomePage.loginBtn.click();
            await ProjectsPage.projectSidebar.click();
        })
    })
    describe('Add projects', () => {
        it('Click on add project', async () => {
            await ProjectsPage.addProject.click();
            await expect(ProjectsPage.projectForm).toExist();
        })
        it('Click on create project without data', async () => {
            await ProjectsPage.createBtn.click();
            await expect(ProjectsPage.errorContainerClient).toHaveText('Client name is a required field');
        })
        it('Click on create project with valid data', async () => {
            await ProjectsPage.create('Alejandro', 'Parker', '29/08/1920', '12/03/1955', 'Crazy saxophonist from the bebop era');
            await ProjectsPage.crossBtnEdit.click();
            await browser.pause(6000);
        })
        // it('Exit create form', async () => {
        //     await ProjectsPage.crossBtnEdit.click();
        //     await expect(ProjectsPage.editBtn).toExist();
        // })
    })

    describe('Edit projects', () => {
        it('Click on edit project', async () => {
            // const row = await $('#root > div > div > section > div > div > table > tbody > tr:last-child')
            const rowEdit = await $('table > tbody > tr:last-child > td:nth-child(8) > button')
            await rowEdit.click();
            await ProjectsPage.edit('Carleeees', 'Solaarii', '17/01/1949', '12/03/1980', 'Most iconic rock leader from Argentina');
            await browser.pause(4000);
            await ProjectsPage.editAcceptBtn.click();
            await ProjectsPage.crossBtnEdit.click();
        })
        // it('Click on edit withoud data', async () =>{
        //     await ProjectsPage.editAcceptBtn.click();
        //     // await expect(ProjectsPage.noChangesModal).toExist();
        //     await ProjectsPage.crossBtnEdit.click();
        // })
        // it('Click on edit project with valid data', async () => {
        //     await ProjectsPage.edit('Carleeees', 'Solaarii', '17/01/1949', '12/03/1980', 'Most iconic rock leader from Argentina');
        //     await browser.pause(4000);
        //     await ProjectsPage.crossBtnEdit.click();
        // })
    })
    describe('Team members', () => {
        it('Click on add member', async () =>{
            const rowEdit = await $('table > tbody > tr:last-child > td:nth-child(8) > button')
            await rowEdit.click();
            await expect(ProjectsPage.addMember).toExist();
            await ProjectsPage.addMember.click();
        })
        it('Click on submit with no data', async () =>{
            await ProjectsPage.submitBtn.click();
            // await browser.pause(2000)
            await expect(ProjectsPage.errorContainerRole).toHaveText('Role is a required field');
            await expect(ProjectsPage.errorContainerRate).toHaveText('Rate is a required field');
        })
        it('Click on submit with valid data', async () =>{
            await browser.pause(3000);
            const member1 = ProjectsPage.chooseMember;
            await member1.selectByAttribute("value", "62a9caa7134819a798e362b7")
            const role = ProjectsPage.chooseRole;
            await role.selectByAttribute("value", "QA")
            const rate = await $("div.input_inputContainer__Qsqmz > input")
            await rate.setValue('100');
            await ProjectsPage.submitBtn.click();
            await ProjectsPage.crossBtnEdit.click();
            //[BUG]When addidng a new member you cannot submit, so i click on X to leave form
            await ProjectsPage.exitModal.click();
        })
    })
    describe('Delete projects', () => {
        it('Testing close button', async () =>{
            // await browser.pause(3000)
            const rowDelete = await $('table > tbody > tr:last-child > td:nth-child(9) > button')
            await rowDelete.click();
            await expect(ProjectsPage.deleteModal).toExist();
            await ProjectsPage.closeDeleteBtn.click()
        })
        it('Confirm delete', async () =>{
            const rowDelete = await $('table > tbody > tr:last-child > td:nth-child(9) > button')
            await rowDelete.click();
            await expect(ProjectsPage.deleteModal).toExist();
            await ProjectsPage.confirmDeleteBtn.click()
        })
    })
})