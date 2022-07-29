const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const loginPage = require('../pageobjects/login.page');
const employeeProjects = require('../pageobjects/employee-projects.page');

describe('Testing Employee - Timesheets', () => {
  beforeAll('Go to Timesheets in Employee', async () => {
    homePage.openBrowser();
    header.loginBtn.click();
    loginPage.login('testEmployee@radium.com', 'employee123');
    loginPage.loginBtn.click();
    header.headerBurger.click();
    sidebar.empProjectsTab.click();
  });

  describe('Titles', () => {
    it('Employee projects title', async () => {
      await expect(employeeProjects.titlePage).toExist();
      await expect(employeeProjects.titlePage).toHaveText('ALL PROJECTS');
    });
  });

  describe('Buttons', () => {
    it('Buttons should be clickables', async () => {
      await expect(employeeProjects.showAllProjectsBtn).toExist();
      await expect(employeeProjects.showAllProjectsBtn).toBeClickable();
      await expect(employeeProjects.showPmProjects).toExist();
      await expect(employeeProjects.showPmProjects).toBeClickable();
    });
  });

  describe('Testing table', () => {
    it('Table container', async () => {
      await expect(employeeProjects.tablePage).toExist();
    });
    it('Project cell', async () => {
      await expect(employeeProjects.projects).toExist();
      await expect(employeeProjects.projects).toHaveText('Project name');
      const textColor = await employeeProjects.projects.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
      await expect(employeeProjects.projectsSortDown).toBeClickable();
      await expect(employeeProjects.projectsSortUp).toBeClickable();
    });
    it('Client name cell', async () => {
      await expect(employeeProjects.clientName).toExist();
      await expect(employeeProjects.clientName).toHaveText('Client');
      const textColor = await employeeProjects.clientName.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Start Date cell', async () => {
      await expect(employeeProjects.startDate).toExist();
      await expect(employeeProjects.startDate).toHaveText('Start Date');
      const textColor = await employeeProjects.startDate.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('End Date cell', async () => {
      await expect(employeeProjects.endDate).toExist();
      await expect(employeeProjects.endDate).toHaveText('End Date');
      const textColor = await employeeProjects.endDate.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Active cell', async () => {
      await expect(employeeProjects.active).toExist();
      await expect(employeeProjects.active).toHaveText('Active');
      const textColor = await employeeProjects.active.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Role cell', async () => {
      await expect(employeeProjects.role).toExist();
      await expect(employeeProjects.role).toHaveText('Role');
      const textColor = await employeeProjects.role.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
  });

  describe('Click on a row', () => {
    it('Row should redirect to the project id page', async () => {
      await employeeProjects.tableRow.click();
      await expect(employeeProjects.goBackBtn).toBeClickable();
      await expect(employeeProjects.title).toBeDisplayedInViewport();
      await expect(employeeProjects.table).toBeDisplayedInViewport();
      await expect(employeeProjects.membersTitle).toBeDisplayedInViewport();
      await expect(employeeProjects.memberTable).toExist();
      await expect(employeeProjects.addMemberBtn).toBeClickable();
      await expect(employeeProjects.nameMemberSortDown).toBeClickable();
      await expect(employeeProjects.nameMemberSortUp).toBeClickable();
      await expect(employeeProjects.editMemberBtn).toBeClickable();
      await expect(employeeProjects.deleteMemberBtn).toBeClickable();
    });
  });

  describe('Add member button', () => {
    it('Add member button should displayed the add modal, and it should work correctly', async () => {
      await employeeProjects.addMemberBtn.click();
      await expect(employeeProjects.employeeAddInput).toBeClickable();
      await expect(employeeProjects.roleAddInput).toBeClickable();
      await employeeProjects.addBtn.click();
      await expect(employeeProjects.employeeAddInputMsg).toBeDisplayedInViewport();
      await expect(employeeProjects.roleAddInputMsg).toBeDisplayedInViewport();
      await employeeProjects.crossBtn.click();
    });
  });

  describe('Edit member button', () => {
    it('Edit member button should displayed the edit modal, and it should work correctly', async () => {
      await employeeProjects.editMemberBtn.click();
      await expect(employeeProjects.modalEditMemberTitle).toBeDisplayedInViewport();
      await expect(employeeProjects.employeeInput).toExist();
      await expect(employeeProjects.roleInput).toBeClickable();
      await employeeProjects.editButton.click();
      await expect(employeeProjects.errorEditModal).toBeDisplayedInViewport();
      await employeeProjects.crossEditModal.click();
      await employeeProjects.crossEditBtn.click();
    });
  });

  describe('Delete member button', () => {
    it('Delete member button should displayed the edit modal, and it should work correctly', async () => {
      await employeeProjects.deleteMemberBtn.click();
      await expect(employeeProjects.modalDeleteMemberTitle).toBeDisplayedInViewport();
      await expect(employeeProjects.modalDeleteMemberConfirm).toBeClickable();
      await employeeProjects.modalDeleteMemberClose.click();
      await expect(employeeProjects.goBackBtn).toBeDisplayedInViewport();
    });
  });
});
