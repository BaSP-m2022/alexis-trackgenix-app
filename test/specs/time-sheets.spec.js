const HomePage = require('../pageobjects/home.page');
const TimeSheetsPage = require('../pageobjects/time-sheets.page');

describe('Time-sheets', () => {
    beforeAll('open browser', () => {
        browser.url('https://alexis-trackgenix-app.vercel.app/home');
    })
    describe('Go to timesheets', () => {
        it('Timesheets redirect', async () => {
            await HomePage.adminAccess.click();
            await TimeSheetsPage.timesheetSibedar.click();
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
            await TimeSheetsPage.chooseProject.click();
            await TimeSheetsPage.selectProject.waitForClickable({ timeout: 3000 });
            await TimeSheetsPage.chooseTask.click();
            await TimeSheetsPage.selectTask.waitForClickable({ timeout: 3000 });
            await TimeSheetsPage.approvedCheckbox.click();
            await TimeSheetsPage.createBtn.click();
            await expect(TimeSheetsPage.successMessage).toExist();
            await TimeSheetsPage.crossBtn.click();
        })
    })
    describe('Edit timesheet', () => {
        it('Click on edit timesheet', async () => {
            await TimeSheetsPage.editTimesheet.click();
            await expect(TimeSheetsPage.timesheetForm).toExist();
        })
        it('Click on edit timesheet button without data', async () => {
            await TimeSheetsPage.editBtn.click();
            await expect(TimeSheetsPage.successMessage).toExist();
            await TimeSheetsPage.crossBtn.click();
        })
        it('Click on edit timesheet button without data', async () => {
            await TimeSheetsPage.chooseProject.click();
            await TimeSheetsPage.selectProject.click();
            await TimeSheetsPage.chooseTask.click();
            await TimeSheetsPage.selectTask.click();
            await TimeSheetsPage.approvedCheckbox.click();
            await TimeSheetsPage.editBtn.click();
            await TimeSheetsPage.crossBtn.click();
        })
    })
    describe('Remove timesheet', () => {
        it('Click on remove timesheet', async () => {
            await TimeSheetsPage.removeTimesheet.click();
            await expect(TimeSheetsPage.confirmationModal).toExist();
        })
        it('Click on close', async () => {
            await TimeSheetsPage.closeDelete.click();
            await TimeSheetsPage.removeTimesheet.click();
        })
        it('Click on confirm', async () => {
            await TimeSheetsPage.removeTimesheetBtn.click();
            await TimeSheetsPage.successMessage.toExist();
        })
    })
})