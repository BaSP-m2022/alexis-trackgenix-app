const homePage = require('../pageobjects/home.page');
const header = require('../pageobjects/header.page');
const sidebar = require('../pageobjects/sidebar.page');
const loginPage = require('../pageobjects/login.page');
const adminEmployees = require('../pageobjects/admin-employees.page');
const adminHome = require('../pageobjects/admin-home.page');

describe('Testing Admin Employees Page', () => {
  beforeAll('Login as admin and go to Employees section', () => {
    homePage.openBrowser();
    header.loginBtn.click();
    loginPage.login('testAdmin@radium.com', 'admin123');
    header.headerBurger.click();
    sidebar.employeesTab.click();
  });

  describe('Testing titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Trackgenix');
    });
    it('Section title', async () => {
      await expect(adminEmployees.title).toExist();
      await expect(adminEmployees.title).toHaveText('EMPLOYEES');
    });
  });

  describe('Testing table', () => {
    it('Table exist', async () => {
      await expect(adminEmployees.table).toExist();
    });
    it('Table header', async () => {
      await expect(adminEmployees.tableHeader).toExist();
      const tableHeaderColor = await adminEmployees.tableHeader.getCSSProperty('background-color');
      await expect(tableHeaderColor.value).toBe('rgba(228,228,228,1)');
      await expect(adminEmployees.tableHeader).toHaveTextContaining(
        'First Name',
        'Last Name',
        'Phone',
        'Email',
        'Active'
      );
    });
    it('Table body', async () => {
      await expect(adminEmployees.tableBody).toExist();
    });
  });
  describe('Testing delete function', () => {
    it('Button delete button', async () => {
      const deleteBtn = await $(
        '#root > div > div > section > table > tbody > tr:last-child > td.table_tdButton__2Vvae > button'
      );
      await expect(deleteBtn).toExist();
      await expect(deleteBtn).toBeClickable();
      await deleteBtn.click();
      await expect(adminEmployees.confirmModal).toBeDisplayed();
      await expect(adminEmployees.confirmModal).toHaveTextContaining(
        'Delete Employee',
        'Are you sure you want to delete this employee?'
      );
    });
    it('Cancel delete', async () => {
      await expect(adminEmployees.cancelDelete).toExist();
      await expect(adminEmployees.cancelDelete).toBeClickable();
      await adminEmployees.cancelDelete.click();
      await expect(adminEmployees.confirmModal).not.toBeDisplayed();
    });
    it('Confirm delete', async () => {
      const deleteBtn = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(10) > button'
      );
      await deleteBtn.click();
      await expect(adminEmployees.confirmModal).toBeDisplayed();
      await expect(adminEmployees.confirmDelete).toExist();
      await expect(adminEmployees.confirmDelete).toBeClickable();
      await adminEmployees.confirmDelete.click();
      await expect(adminEmployees.successDelete).toBeDisplayed();
      await expect(adminEmployees.successDelete).toHaveTextContaining(
        'Success',
        'Employee with id deleted.'
      );
      await adminEmployees.crossSuccessDelete.click();
      await expect(adminEmployees.successDelete).not.toBeDisplayed();
    });
  });
  describe('Row access', () => {
    it('Access to row', async () => {
      const row = await $('#root > div > div > section > table > tbody > tr:last-child');
      await row.click();
      await expect(browser).toHaveUrl(
        'https://alexis-trackgenix-app.vercel.app/admin/employees/62e2d4125d16992810099200'
      );
    });
    it('Table exists', async () => {
      await expect(adminEmployees.tableRow).toExist();
      await expect(adminEmployees.tableRow).toHaveTextContaining('Name', 'Last Name', 'DNI');
    });
    it('Titles', async () => {
      await expect(adminEmployees.projectsTitle).toExist();
      await expect(adminEmployees.projectsTitle).toHaveText('PROJECTS');
    });
    it('Go back button', async () => {
      await expect(adminEmployees.goBackBtn).toExist();
      await expect(adminEmployees.goBackBtn).toBeClickable();
      await adminEmployees.goBackBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/employees');
    });
  });
});
