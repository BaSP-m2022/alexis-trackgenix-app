const homePage = require('../pageobjects/home.page');
const header = require('../pageobjects/header.page');
const sidebar = require('../pageobjects/sidebar.page');
const loginPage = require('../pageobjects/login.page');
const adminTimesheet = require('../pageobjects/admin-timesheets.page');

describe('Testing Admin Timesheets Page', () => {
  beforeAll('Login as admin and go to Timesheets section', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testAdmin@radium.com', 'admin123');
    sidebar.employeesTab.click();
    sidebar.timesheetsTab.click();
  });

  describe('Testing titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Time-Sheets');
    });
    it('Section title', async () => {
      await expect(adminTimesheet.title).toExist();
      await expect(adminTimesheet.title).toHaveText('TIMESHEETS');
    });
  });

  describe('Testing table', () => {
    it('Table exist', async () => {
      await expect(adminTimesheet.table).toExist();
    });
    it('Table header', async () => {
      await expect(adminTimesheet.tableHeader).toExist();
      const tableHeaderColor = await adminTimesheet.tableHeader.getCSSProperty('background-color');
      await expect(tableHeaderColor.value).toBe('rgba(228,228,228,1)');
    });
    it('Table body', async () => {
      await expect(adminTimesheet.tableBody).toExist();
    });
  });

  describe('Testing add function', () => {
    it('Add a timesheet modal', async () => {
      await adminTimesheet.addBtn.click();
      await expect(adminTimesheet.createTimesheetModal).toBeDisplayed();
    });
    it('Create a timesheet modal', async () => {
      await adminTimesheet.createTimesheet();
      await expect(adminTimesheet.successCreate).toBeDisplayed();
      await expect(adminTimesheet.successCreate).toHaveTextContaining(
        'Success',
        'Timesheet created'
      );
      await adminTimesheet.crossSuccessCreate.click();
      await expect(adminTimesheet.successCreate).not.toBeDisplayed();
    });
  });

  describe('Testing Edit function', () => {
    it('Edit button modal', async () => {
      const rowEdit = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(9) > button'
      );
      await rowEdit.click();
      await expect(adminTimesheet.editModal).toBeDisplayed();
      await expect(adminTimesheet.editModal).toHaveTextContaining('Edit Timesheet');
    });
    it('Try to edit with no changes', async () => {
      await adminTimesheet.editBtn.click();
      await expect(adminTimesheet.errorEdit).toBeDisplayed();
      await expect(adminTimesheet.errorEdit).toHaveTextContaining(
        'Error',
        "There haven't been any changes"
      );
      await adminTimesheet.crossErrorEdit.click();
      await expect(adminTimesheet.errorEdit).not.toBeDisplayed();
    });
    it('Try to edit a timesheet', async () => {
      await adminTimesheet.editProjectsSelector.click();
      await adminTimesheet.editProjectOption.click();
      await adminTimesheet.editTasksSelector.click();
      await adminTimesheet.editTaskOption.click();
      await adminTimesheet.editBtn.click();
      await expect(adminTimesheet.successEdit).toBeDisplayed();
      await expect(adminTimesheet.successEdit).toHaveTextContaining(
        'Success',
        'The timesheet has been updated succesfully'
      );
      await adminTimesheet.crossSuccessEdit.click();
      await expect(adminTimesheet.successEdit).not.toBeDisplayed();
    });
  });

  describe('Testing delete function', () => {
    it('Button delete button', async () => {
      const deleteBtn = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(10) > button'
      );
      await expect(deleteBtn).toExist();
      await expect(deleteBtn).toBeClickable();
      await deleteBtn.click();
      await expect(adminTimesheet.confirmModal).toBeDisplayed();
      await expect(adminTimesheet.confirmModal).toHaveTextContaining(
        'Delete Timesheet',
        'Are you sure you want to delete this timesheet?'
      );
    });
    it('Cancel delete', async () => {
      await expect(adminTimesheet.cancelDelete).toExist();
      await expect(adminTimesheet.cancelDelete).toBeClickable();
      await adminTimesheet.cancelDelete.click();
      await expect(adminTimesheet.confirmModal).not.toBeDisplayed();
    });
    it('Confirm delete', async () => {
      const deleteBtn = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(10) > button'
      );
      await deleteBtn.click();
      await expect(adminTimesheet.confirmModal).toBeDisplayed();
      await expect(adminTimesheet.confirmDelete).toExist();
      await expect(adminTimesheet.confirmDelete).toBeClickable();
      await adminTimesheet.confirmDelete.click();
      await expect(adminTimesheet.successDelete).toBeDisplayed();
      await expect(adminTimesheet.successDelete).toHaveTextContaining(
        'Success',
        'The timesheet has been successfully deleted .'
      );
      await adminTimesheet.crossSuccessDelete.click();
      await expect(adminTimesheet.successDelete).not.toBeDisplayed();
    });
  });
});
