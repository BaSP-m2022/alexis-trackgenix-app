const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const adminHome = require('../pageobjects/admin-home.page');
const loginPage = require('../pageobjects/login.page');

describe('Testing Admin Home', () => {
  beforeAll('Open admin home page', () => {
    homePage.openBrowser();
    header.loginBtn.click();
    loginPage.login('testAdmin@radium.com', 'admin123');
  });

  describe('Checking titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Trackgenix');
    });
    it('Section title', async () => {
      await expect(adminHome.title).toExist();
      await expect(adminHome.title).toHaveText('Welcome Kent Dodds');
    });
  });

  describe('Checking sidebar', () => {
    beforeEach('Open sidebar', () => {
      header.headerBurger.click();
    });
    it('Home tab', async () => {
      await expect(sidebar.homeTab).toExist();
      await expect(sidebar.homeTab).toBeClickable();
      await sidebar.homeTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
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
    it('Restore tab', async () => {
      await expect(sidebar.restoreTab).toExist();
      await expect(sidebar.restoreTab).toBeClickable();
      await sidebar.restoreTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/restore');
    });
    it('Log Out tab', async () => {
      await expect(sidebar.logOutTab).toExist();
      await expect(sidebar.logOutTab).toBeClickable();
      await sidebar.logOutTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
  });
});
