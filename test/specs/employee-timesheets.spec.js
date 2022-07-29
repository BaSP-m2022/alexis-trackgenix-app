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
    it('Title should exist', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Trackgenix');
      await expect(employeeTimesheets.timesheetTitle).toExist();
      await expect(employeeTimesheets.timesheetTitle).toHaveText('MY TIMESHEETS');
    });
  });

    describe('Checking the buttons and the inputs', () => {
      it('Buttons should be clickables and inputs messages should be displayed if inputs are empty', async () => {
      await expect(employeeTimesheets.showMyTsBtn).toExist();
      await expect(employeeTimesheets.showMyTsBtn).toBeClickable();
      await expect(employeeTimesheets.showEmpTsBtn).toExist();
      await expect(employeeTimesheets.showEmpTsBtn).toBeClickable();
      await expect(employeeTimesheets.projectInput).toExist();
      await expect(employeeTimesheets.projectInput).toBeClickable();
      await expect(employeeTimesheets.periodInput).toExist();
      await expect(employeeTimesheets.periodInput).toBeClickable();
      await expect(employeeTimesheets.searchBtn).toExist();
      await expect(employeeTimesheets.searchBtn).toBeClickable();
      await expect(employeeTimesheets.resetBtn).toExist();
      await expect(employeeTimesheets.resetBtn).toBeClickable();
      await employeeTimesheets.projectInput.click();
      await employeeTimesheets.periodInput.click();
      await expect(employeeTimesheets.projectInputMsg).toBeDisplayedInViewport();
      await employeeTimesheets.projectInput.click();
      await expect(employeeTimesheets.periodInputMsg).toBeDisplayedInViewport();
    });
  });

  describe('Table', () => {
    it('Table header', async () => {
      await expect(employeeTimesheets.headerTable).toExist();
      await expect(employeeTimesheets.bodyTable).toExist();
      await expect(employeeTimesheets.deleteBtn).toExist();
      await expect(employeeTimesheets.projectSortDown).toBeClickable();
      await expect(employeeTimesheets.projectSortUp).toBeClickable();
      await expect(employeeTimesheets.row).toBeClickable();
    });
  });

  describe('Add timesheet button', () => {
    it('The button should displayed the add modal', async () => {
      await employeeTimesheets.addTimesheetBtn.click();
      await expect(employeeTimesheets.modalTitle).toBeDisplayedInViewport();
      await expect(employeeTimesheets.projectsInputModal).toBeClickable();
      await expect(employeeTimesheets.createModalBtn).toBeClickable();
      await expect(employeeTimesheets.crossModalBtn).toBeClickable();
    });
    it('Try to create a timesheet whit any project selected', async () => {
      await employeeTimesheets.createModalBtn.click();
      await expect(employeeTimesheets.projectsInputModalMsg).toBeDisplayedInViewport();
      await expect(employeeTimesheets.projectsInputModalMsg).toHaveText('Project is a required field');
    });
    it('Try to create a project whit a option selected', async () => {
      await employeeTimesheets.projectsInputModal.click();
      await employeeTimesheets.projectsInputModalOption.click();
      await employeeTimesheets.createModalBtn.click();
      await expect(employeeTimesheets.successAddModal).toBeDisplayedInViewport();
      await employeeTimesheets.successAddCrossBtn.click();
    });
  });

  describe('Delete timesheet button', () => {
    it('Try to delete the new timesheet', async () => {
      await employeeTimesheets.deleteBtn.click();
      await expect(employeeTimesheets.deleteTimeSheetTitle).toBeDisplayedInViewport();
      await expect(employeeTimesheets.deleteCloseBtn).toBeClickable();
      await employeeTimesheets.deleteConfirmBtn.click();
      await expect(employeeTimesheets.successDeleteTitle).toExist();
    });
  });

  describe('Timesheet table rows', () => {
    it('Row should redirect to the task page', async () => {
      await employeeTimesheets.row.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/time-sheet/62e30d782896ef9eeba9031a');
      await expect(employeeTimesheets.tasksTitle).toExist();
      await expect(employeeTimesheets.tasksInfo).toExist();
      await expect(employeeTimesheets.addTaskBtn).toBeClickable();
      await expect(employeeTimesheets.tasksTable).toExist();
      await expect(employeeTimesheets.editTaskBtn).toBeClickable();
      await expect(employeeTimesheets.deleteTaskBtn).toBeClickable();
    });
  });

  describe('Add new task', () => {
    it('Error messages should be displayed when create new task with empty fields ', async () => {
      await employeeTimesheets.addTaskBtn.click();
      await expect(employeeTimesheets.addModalTitle).toBeDisplayedInViewport();
      await expect(employeeTimesheets.createTaskBtn).toExist();
      await employeeTimesheets.createTaskBtn.click();
      await expect(employeeTimesheets.taskNameInputMsg).toBeDisplayedInViewport();
      await expect(employeeTimesheets.workedHoursInputMsg).toBeDisplayedInViewport();
      await expect(employeeTimesheets.descriptionInputMsg).toBeDisplayedInViewport();
      await expect(employeeTimesheets.statusInputMsg).toBeDisplayedInViewport();
    });
    it('Task should be created', async () => {
      await employeeTimesheets.addTask('Task 1', '4' , 'description');
      await expect(employeeTimesheets.successTaskModal).toBeDisplayedInViewport();
      await employeeTimesheets.successTaskCrossBtn.click();
    })
  });

  describe('Edit new task', () => {
    it('Edit modal should be opened and error modal should be displayed when you not change the data', async () => {
      const editRow = await $('#root > div > div > section > div.tasks_divContainer__433AO > table > tbody > tr:last-child > td:nth-child(7) > button');
      await editRow.click();
      await employeeTimesheets.editBtn.click();
      await expect(employeeTimesheets.editErrorModal).toBeDisplayedInViewport();
      await employeeTimesheets.editErrorModalCross.click();
    });
    it('Task should be edited', async () => {
      await employeeTimesheets.editTask('task edited', '2', 'description edited');
      await expect(employeeTimesheets.editSuccessModal).toBeDisplayedInViewport();
      await employeeTimesheets.editSuccessCrossModal.click();
    });
  });

  describe('Delete new task', () => {
    it('New row should be deleted', async () => {
      const deleteRow = await $('#root > div > div > section > div.tasks_divContainer__433AO > table > tbody > tr:last-child > td:nth-child(8) > button');
      await deleteRow.click();
      await expect(employeeTimesheets.deleteModalTitle).toBeDisplayedInViewport();
      await expect(employeeTimesheets.closeDeleteModalBtn).toBeClickable();
      await employeeTimesheets.confirmDeleteModalBtn.click();
      await expect(employeeTimesheets.successDeleteModal).toBeDisplayedInViewport();
      await employeeTimesheets.successDeleteCrossBtn.click();
    });
  });
});
