const homePage = require('../pageobjects/home.page');
const header = require('../pageobjects/header.page');
const sidebar = require('../pageobjects/sidebar.page');
const loginPage = require('../pageobjects/login.page');
const adminEmployees = require('../pageobjects/admin-employees.page');

describe('Testing Admin Employees Page', () => {
  beforeAll('Login as admin and go to Employees section', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testAdmin@radium.com', 'admin123');
    sidebar.employeesTab.click();
  });

  describe('Testing titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Employees');
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
    });
    it('Table body', async () => {
      await expect(adminEmployees.tableBody).toExist();
    });
  });

  describe('Testing add function', () => {
    it('Add an employee', async () => {
      await adminEmployees.addBtn.click();
      await expect(adminEmployees.createEmployeeModal).toBeDisplayed();
    });
    it('Create an employee modal', async () => {
      await adminEmployees.createEmployee(
        'Ariana',
        'Maldonado',
        '3413693000',
        'arii.maldonado97@gmail.com',
        'testing123'
      );
      await expect(adminEmployees.successCreate).toBeDisplayed();
      await expect(adminEmployees.successCreate).toHaveTextContaining(
        'Success',
        'Employee created'
      );
      await adminEmployees.crossSuccessCreate.click();
      await expect(adminEmployees.successCreate).not.toBeDisplayed();
    });
    it('Error while creating an employee, same email', async () => {
      await adminEmployees.addBtn.click();
      await adminEmployees.createEmployee(
        'Ariana',
        'Maldonado',
        '3413693000',
        'arii.maldonado97@gmail.com',
        'testing123'
      );
      await expect(adminEmployees.errorCreate).toBeDisplayed();
      await expect(adminEmployees.errorCreate).toHaveTextContaining(
        'Error',
        'The email address is already in use by another account.'
      );
      await adminEmployees.crossErrorCreate.click();
      await expect(adminEmployees.errorCreate).not.toBeDisplayed();
      await adminEmployees.crossCreateModal.click();
    });
  });

  describe('Testing Edit function', () => {
    it('Edit button modal', async () => {
      const row = await $(
        '#root > div > div > section > div > div > table > tbody > tr:last-child'
      );
      console.log('ROW DATA', row);
      const rowEdit = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(9) > button'
      );
      await rowEdit.click();
      await expect(adminEmployees.editModal).toBeDisplayed();
      await expect(adminEmployees.editModal).toHaveTextContaining('Edit Employee');
    });
    it('Try to edit an employee', async () => {
      await adminEmployees.setEditFirstName('Larisa');
      await adminEmployees.setEditPw('testing123');
      await adminEmployees.editBtn.click();
      await expect(adminEmployees.successEdit).toBeDisplayed();
      await expect(adminEmployees.successEdit).toHaveTextContaining(
        'Success',
        'The employee has been updated succesfully'
      );
      await adminEmployees.crossSuccessEdit.click();
      await expect(adminEmployees.successEdit).not.toBeDisplayed();
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
});
