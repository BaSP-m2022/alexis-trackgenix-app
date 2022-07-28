const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const loginPage = require('../pageobjects/login.page');
const employeeTimesheets = require('../pageobjects/employee-timesheets.page');

describe('Testing Employee - Timesheets', () => {
  beforeAll('Go to Timesheets in Employee', async () => {
    homePage.openBrowser();
    header.loginBtn.click();
    loginPage.login('testEmployee@radium.com', 'employee123');
    loginPage.loginBtn.click();
    header.headerBurger.click();
    sidebar.empTimesheetsTab.click();
  });

  describe('Titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Trackgenix');
    });
    it('Employee Time-Sheets title', async () => {
      await expect(employeeTimesheets.title).toExist();
      await expect(employeeTimesheets.title).toHaveText('EMPLOYEE TIMESHEETS');
    });
  });

  describe('Table', () => {
    it('Table header', async () => {
      await expect(employeeTimesheets.headerTable).toExist();
      await expect(employeeTimesheets.bodyTable).toExist();
      await expect(employeeTimesheets.projects).toExist();
      await expect(employeeTimesheets.projects).toHaveText('Project');
      await expect(employeeTimesheets.approvalPM).toExist();
      await expect(employeeTimesheets.approvalPM).toHaveText('PMs approval');
      await expect(employeeTimesheets.workedHours).toExist();
      await expect(employeeTimesheets.workedHours).toHaveText('Worked hours');
      await expect(employeeTimesheets.period).toExist();
      await expect(employeeTimesheets.period).toHaveText('Period');
    });
  });

  describe('Add timesheet button', () => {
    it('The button should displayed the add modal', async () => {
      await employeeTimesheets.addTimeSheetBtn.click();
      await expect(employeeTimesheets.modalTitle).toBeDisplayedInViewport();
      await expect(employeeTimesheets.projectsInput).toBeDisplayedInViewport();
      await expect(employeeTimesheets.projectsInput).toBeClickable();
      await expect(employeeTimesheets.createBtn).toBeDisplayedInViewport();
      await expect(employeeTimesheets.crossBtn).toBeDisplayedInViewport();
    });
    it('Try to create a timesheet whit any project selected', async () => {
      await employeeTimesheets.createBtn.click();
      await expect(employeeTimesheets.projectsInputMsg).toBeDisplayedInViewport();
      await expect(employeeTimesheets.projectsInputMsg).toHaveText('Project is a required field');
    })
    it('Try to create a project whit a option selected', async () => {
      await employeeTimesheets.projectsInput.click();
      await employeeTimesheets.projectsInputOption.click();
      await employeeTimesheets.createBtn.click();
      await expect(employeeTimesheets.successAddModal).toBeDisplayedInViewport();
      await employeeTimesheets.successAddCrossBtn.click();
    })
  });

  describe('Delete timesheet button', () => {
    it('Try to delete the new timesheet', async () => {
      await employeeTimesheets.deleteBtn.click();
      await expect(employeeTimesheets.deleteModalTitle).toBeDisplayedInViewport();
      await expect(employeeTimesheets.deleteCloseBtn).toBeClickable();
      await employeeTimesheets.deleteConfirmBtn.click();
      await expect(employeeTimesheets.successDeleteTitle).toBeDisplayedInViewport();
      await employeeTimesheets.successDeleteCrossBtn.click();
    })
  })
});
