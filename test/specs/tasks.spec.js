const HomePage = require('../pageobjects/home.page');
const TasksPage = require('../pageobjects/tasks.page');


describe('Task tests', () => {
    beforeAll('open browser', () => {
        browser.url('https://alexis-trackgenix-app.vercel.app/home')
    })
    describe('Task create', () => {
        it('Go to task', async () => {
            await HomePage.adminAccess.click();
            await HomePage.asideTasks.click();
        })
        it('Add task', async () => {
            await TasksPage.addTask.click();
            await TasksPage.create('Carls', '17/01/2010', '100', 'Most iconic rock leader from Argentina');
            const taskSelect = TasksPage.inputStatus;
            await taskSelect.selectByAttribute("value", "To do")
            await TasksPage.createTask.click();
            await TasksPage.crossBtn.click()
        })
    })
    describe('Task edit', () => {
        it('Click on edit', async () => {
            const rowEdit = await $('table > tbody > tr:last-child > td:nth-child(6) > button');
            await rowEdit.click();
            browser.pause(3000)
            await TasksPage.create('Mariano', '17/01/2000', '90', 'Moreno');
            const taskSelect = TasksPage.inputStatus;
            await taskSelect.selectByAttribute("value", "Review")
            await TasksPage.submitBtn.click();
            await TasksPage.crossBtn.click();
        })
    })
    describe('Task delete', () => {
        it('Remove last task', async () => {
            const rowDelete = await $('table > tbody > tr:last-child > td:nth-child(7) > button');
            await rowDelete.click();
            browser.pause(3000)
            await TasksPage.confirmDelete.click();
        })
    })
});