const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const loginPage = require('../pageobjects/login.page');
const employeeTimesheets = require('../pageobjects/employee-timesheets.page');

describe('Testing Employee - Timesheets', () => {
  beforeAll('Go to Timesheets in Employee', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testEmployee@radium.com', 'employee123');
    sidebar.empTimesheetsTab.click();
  });

  describe('Titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Time-Sheet');
    });
    it('Employee Time-Sheets title', async () => {
      await expect(employeeTimesheets.title).toExist();
      await expect(employeeTimesheets.title).toHaveText('EMPLOYEE TIMESHEETS');
    });
  });

  describe('Table', () => {
    it('Table header', async () => {
      await expect(employeeTimesheets.tableHeader).toExist();
      const headerTable = await employeeTimesheets.tableHeader.getCSSproperty('background-color');
      await expect(headerTable.value).toBe('rgba(228,228,228,1)');
    });
    it('Table body', async () => {
      await expect(employeeTimesheets.bodyTable).toExist();
      const bodyTable = await employeeTimesheets.bodyTable.getCSSproperty('background-color');
      await expect(bodyTable.value).toBe('rgba(228,228,228,1)');
    });
    it('Project cell', async () => {
      await expect(employeeTimesheets.projects).toExist();
      await expect(employeeTimesheets.projects).toHaveText('Project');
      const textColor = await employeeTimesheets.projects.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('PMs Approval cell', async () => {
      await expect(employeeTimesheets.approvalPM).toExist();
      await expect(employeeTimesheets.approvalPM).toHaveText('PMs approval');
      const textColor = await employeeTimesheets.approvalPM.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Start Date cell', async () => {
      await expect(employeeTimesheets.workedHours).toExist();
      await expect(employeeTimesheets.workedHours).toHaveText('Worked hours');
      const textColor = await employeeTimesheets.workedHours.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
  });
});
