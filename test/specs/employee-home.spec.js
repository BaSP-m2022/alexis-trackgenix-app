const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const employeeHome = require('../pageobjects/employee-home.page');
const loginPage = require('../pageobjects/login.page');

describe('Testing Employee - Timesheets', () => {
  beforeAll('Go to Timesheets in Employee', async () => {
    homePage.openBrowser();
    header.loginBtn.click();
    loginPage.login('testEmployee@radium.com', 'employee123');
    loginPage.loginBtn.click();
  });

  describe('Testing Titles', () => {
    it('Checking Employee home title', async () => {
      await expect(employeeHome.title).toExist();
      await expect(employeeHome.title).toHaveText('Welcome AriiEstuvoAquii No Editar');
    });
  });

  describe('Testing Sidebar', () => {
    it('Home tab', async () => {
      await header.headerBurger.click();
      await expect(sidebar.empHomeTab).toExist();
      await sidebar.empHomeTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
      browser.pause(4000);
    });
    it('Projects tab', async () => {
      await header.headerBurger.click();
      await expect(sidebar.empProjectsTab).toExist();
    });
    it('Timesheets tab', async () => {
      await header.headerBurger.click();
      await expect(sidebar.empTimesheetsTab).toExist();
      await sidebar.empTimesheetsTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/time-sheet');
    });
    it('Profile tab', async () => {
      await expect(header.profilePic).toExist();
      await header.profilePic.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/profile');
    });
  });
});
