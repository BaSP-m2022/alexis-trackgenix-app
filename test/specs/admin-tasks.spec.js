const homePage = require('../pageobjects/home.page');
const header = require('../pageobjects/header.page');
const sidebar = require('../pageobjects/sidebar.page');
const loginPage = require('../pageobjects/login.page');
const adminTasks = require('../pageobjects/admin-tasks.page');

describe('Testing Admin Tasks Page', () => {
  beforeAll('Login as admin and go to Tasks section', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testAdmin@radium.com', 'admin123');
    sidebar.employeesTab.click();
    sidebar.tasksTab.click();
  });

  describe('Testing titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Tasks');
    });
    it('Section title', async () => {
      await expect(adminTasks.title).toExist();
      await expect(adminTasks.title).toHaveText('TASKS');
    });
  });

  describe('Testing table', () => {
    it('Table exist', async () => {
      await expect(adminTasks.table).toExist();
    });
    it('Table header', async () => {
      await expect(adminTasks.tableHeader).toExist();
      const tableHeaderColor = await adminTasks.tableHeader.getCSSProperty('background-color');
      await expect(tableHeaderColor.value).toBe('rgba(228,228,228,1)');
    });
    it('Table body', async () => {
      await expect(adminTasks.tableBody).toExist();
    });
  });

  describe('Testing add function', () => {
    it('Add a Task', async () => {
      await adminTasks.addBtn.click();
      await expect(adminTasks.createTaskModal).toBeDisplayed();
    });
    it('Cancel creation btn', async () => {
      await adminTasks.cancelBtn.click();
      await expect(adminTasks.createTaskModal).not.toBeDisplayed();
    });
    it('Create a task modal', async () => {
      await adminTasks.addBtn.click();
      await adminTasks.createTask(
        'TrackgenixAutomationTests',
        '05-21-2022',
        '15',
        'This taks consist on the develope of all trackgenix automated tests.'
      );
      await expect(adminTasks.successCreate).toBeDisplayed();
      await expect(adminTasks.successCreate).toHaveTextContaining('Success', 'Task created');
      await adminTasks.crossSuccessCreate.click();
      await expect(adminTasks.successCreate).not.toBeDisplayed();
    });
  });

  describe('Testing Edit function', () => {
    it('Edit button modal', async () => {
      const rowEdit = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(6) > button'
      );
      await rowEdit.click();
      await expect(adminTasks.editModal).toBeDisplayed();
      await expect(adminTasks.editModal).toHaveTextContaining('Edit Task');
    });
    it('Cancel edit btn', async () => {
      await adminTasks.cancelEditBtn.click();
      await expect(adminTasks.editModal).not.toBeDisplayed();
    });
    it('Try to edit with no changes should display error message', async () => {
      const rowEdit = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(6) > button'
      );
      await rowEdit.click();
      await adminTasks.editBtn.click();
      await expect(adminTasks.errorEdit).toBeDisplayed();
      await expect(adminTasks.errorEdit).toHaveTextContaining(
        'Error',
        "There haven't been any changes"
      );
      await adminTasks.crossErrorEdit.click();
    });
    it('Try to edit a task', async () => {
      await adminTasks.setEditTaskName('NewTaskName');
      await adminTasks.setEditWorkedHours('25');
      await adminTasks.editBtn.click();
      await expect(adminTasks.successEdit).toBeDisplayed();
      await expect(adminTasks.successEdit).toHaveTextContaining(
        'Success',
        'The task has been updated succesfully'
      );
      await adminTasks.crossSuccessEdit.click();
      await expect(adminTasks.successEdit).not.toBeDisplayed();
    });
  });
});
