const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const adminHome = require('../pageobjects/admin-home.page');
const loginPage = require('../pageobjects/login.page');

describe('Testing Admin Home', () => {
  beforeAll('Open admin home page', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testAdmin@radium.com', 'admin123');
  });

  describe('Checking titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Admin');
    });
    it('Section title', async () => {
      await expect(adminHome.title).toExist();
      await expect(adminHome.title).toHaveText('Welcome NoBorrar NoEditar');
    });
  });

  describe('Checking sidebar', () => {
    it('Home tab', async () => {
      await expect(sidebar.homeTab).toExist();
      await expect(sidebar.homeTab).toBeClickable();
      await sidebar.homeTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
    });
    it('Admins tab', async () => {
      await expect(sidebar.adminTab).toExist();
      await expect(sidebar.adminTab).toBeClickable();
      await sidebar.adminTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/admins');
    });
    it('Super Admins tab', async () => {
      await expect(sidebar.superAdminTab).toExist();
      await expect(sidebar.superAdminTab).toBeClickable();
      await sidebar.superAdminTab.click();
      await expect(browser).toHaveUrl(
        'https://alexis-trackgenix-app.vercel.app/admin/super-admins'
      );
    });
    it('Employee tab', async () => {
      await expect(sidebar.employeesTab).toExist();
      await expect(sidebar.employeesTab).toBeClickable();
      await sidebar.employeesTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/employees');
    });
    it('Projects tab', async () => {
      await expect(sidebar.projectsTab).toExist();
      await expect(sidebar.projectsTab).toBeClickable();
      await sidebar.projectsTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/projects');
    });
    it('Timesheets tab', async () => {
      await expect(sidebar.timesheetsTab).toExist();
      await expect(sidebar.timesheetsTab).toBeClickable();
      await sidebar.timesheetsTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/time-sheets');
    });
    it('Tasks tab', async () => {
      await expect(sidebar.tasksTab).toExist();
      await expect(sidebar.tasksTab).toBeClickable();
      await sidebar.tasksTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/tasks');
    });
    it('Log Out tab', async () => {
      await expect(sidebar.logOutTab).toExist();
      await expect(sidebar.logOutTab).toBeClickable();
      await sidebar.logOutTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
  });
});
