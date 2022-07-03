const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const employeeHome = require('../pageobjects/employee-home.page');
const loginPage = require('../pageobjects/login.page');

describe('Testing Employee Home Page', () => {
  beforeAll('Go to Employee Home', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testEmployee@radium.com', 'employee123');
  });

  describe('Testing Titles', () => {
    it('Checking header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Employee');
    });
    it('Checking Employee home title', async () => {
      await expect(employeeHome.title).toExist();
      await expect(employeeHome.title).toHaveText('Welcome NoBorrar NoEditar');
    });
  });

  describe('Testing Sidebar', () => {
    it('Home tab', async () => {
      await expect(sidebar.empHomeTab).toExist();
      await expect(sidebar.empHomeTab).toBeClickable();
      await sidebar.empHomeTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
    });
    it('Projects tab', async () => {
      await expect(sidebar.empProjectsTab).toExist();
      await expect(sidebar.empProjectsTab).toBeClickable();
      await sidebar.empProjectsTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/projects');
    });
    it('Timesheets tab', async () => {
      await expect(sidebar.empTimesheetsTab).toExist();
      await expect(sidebar.empTimesheetsTab).toBeClickable();
      await sidebar.empTimesheetsTab.click();
      await expect(browser).toHaveUrl(
        'https://alexis-trackgenix-app.vercel.app/employee/time-sheet'
      );
    });
    it('Profile tab', async () => {
      await expect(sidebar.empProfileTab).toExist();
      await expect(sidebar.empProfileTab).toBeClickable();
      await sidebar.empProfileTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/profile');
    });
  });
});
