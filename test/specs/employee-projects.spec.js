const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const loginPage = require('../pageobjects/login.page');
const employeeProjects = require('../pageobjects/employee-projects.page');

describe('Testing Employee - Projects', () => {
  beforeAll('Go to Projects in Employee', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testEmployee@radium.com', 'employee123');
    sidebar.empProjectsTab.click();
  });

  describe('Titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Projects');
    });
    it('Employee projects title', async () => {
      await expect(employeeProjects.title).toExist();
      await expect(employeeProjects.title).toHaveText('EMPLOYEE PROJECTS');
    });
  });

  describe('Testing table', () => {
    it('Table container', async () => {
      await expect(employeeProjects.table).toExist();
    });
    it('Table header', async () => {
      await expect(employeeProjects.tableHeader).toExist();
      const headerColor = await employeeProjects.tableHeader.getCSSProperty('background-color');
      await expect(headerColor.value).toBe('rgba(228,228,228,1)');
    });
    it('Project cell', async () => {
      await expect(employeeProjects.projects).toExist();
      await expect(employeeProjects.projects).toHaveText('Project');
      const textColor = await employeeProjects.projects.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Client name cell', async () => {
      await expect(employeeProjects.clientName).toExist();
      await expect(employeeProjects.clientName).toHaveText('Client Name');
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
    it('Rate cell', async () => {
      await expect(employeeProjects.rate).toExist();
      await expect(employeeProjects.rate).toHaveText('Rate');
      const textColor = await employeeProjects.rate.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
  });
});
