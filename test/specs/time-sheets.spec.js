const HomePage = require('../pageobjects/home.page');
const TimeSheetsPage = require('../pageobjects/time-sheets.page');

describe('Time-sheets', () => {
    beforeAll('open browser', () => {
        browser.url('https://alexis-trackgenix-app.vercel.app/home');
    })
    describe('Enter to admin user', () => {
        it('Project redirect', async () => {
            await HomePage.goToLogin.click();
            await HomePage.login('testAdmin@radium.com', 'admin123');
            await HomePage.loginBtn.click();
        })
    })
    describe('Go to timesheets', () => {
        it('Timesheets redirect', async () => {
            await HomePage.asideTimesheets.click();
        })
    })
    describe('Add timesheet', () => {
        it('Click on add timesheet', async () => {
            await TimeSheetsPage.addTimesheet.click();
            await expect(TimeSheetsPage.timesheetForm).toExist();
        })
        it('Click on create without data', async () => {
            await TimeSheetsPage.createBtn.click();
            await expect(TimeSheetsPage.chooseTaskError).toHaveText('Task is a required field');
        })
        it('Click on create with valid data', async () => {
            await browser.pause(4000);
            const chooseProject = TimeSheetsPage.chooseProject;
            await chooseProject.selectByAttribute("value", "62ba025430d79dbd5cb13cd0")
            const chooseTask = TimeSheetsPage.chooseTask;
            await chooseTask.selectByAttribute("value", "62a90fc97d879a5af00e7220")
            // await TimeSheetsPage.chooseProject.click();
            // await TimeSheetsPage.selectProject.click();
            // await TimeSheetsPage.chooseTask.click();
            // await TimeSheetsPage.selectTask.click();
            await TimeSheetsPage.approvedCheckbox.click();
            await TimeSheetsPage.createBtn.click();
            await expect(TimeSheetsPage.successMessage).toExist();
            await TimeSheetsPage.crossBtn.click();
        })
    })
    describe('Edit timesheet', () => {
        it('Click on edit timesheet', async () => {
            const rowEdit = await $('table > tbody > tr:last-child > td:nth-child(9) > button')
            await rowEdit.click();
            await expect(TimeSheetsPage.timesheetForm).toExist();
        })
        it('Click on edit timesheet button without data', async () => {
            await TimeSheetsPage.editBtn.click();
            await expect(TimeSheetsPage.successMessage).toExist();
            await TimeSheetsPage.crossBtn.click();
        })
        it('Click on edit timesheet button without data', async () => {
            const chooseProject = TimeSheetsPage.chooseProject;
            await chooseProject.selectByAttribute("value", "62ba0a1a7e7c138e1a7330a5")
            const chooseTask = TimeSheetsPage.chooseTask;
            await chooseTask.selectByAttribute("value", "62befb919ddd632be5da8204")
            await TimeSheetsPage.approvedCheckbox.click();
            await TimeSheetsPage.editBtn.click();
            await TimeSheetsPage.crossBtn.click();
        })
    })
    describe('Remove timesheet', () => {
        it('Click on remove timesheet', async () => {
            const rowDelete = await $('table > tbody > tr:last-child > td:nth-child(10) > button')
            await rowDelete.click();
            await expect(TimeSheetsPage.confirmationModal).toExist();
        })
        it('Click on close', async () => {
            await TimeSheetsPage.closeDelete.click();
            const rowDelete = await $('table > tbody > tr:last-child > td:nth-child(10) > button')
            await rowDelete.click();
        })
        it('Click on confirm', async () => {
            // await browser.pause(2000)
            await TimeSheetsPage.removeTimesheetBtn.click();
        })
    })
})