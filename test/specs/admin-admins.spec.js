const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const adminAdmins = require('../pageobjects/admin-admins.page');
const loginPage = require('../pageobjects/login.page');

describe('Testing Admin - Admins', () => {
  beforeAll('Login and go to Admins', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testAdmin@radium.com', 'admin123');
    sidebar.adminTab.click();
  });

  describe('Testing Titles', () => {
    it('Checking Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Admins');
    });
    it('Checking Admins section title', async () => {
      await expect(adminAdmins.title).toExist();
      await expect(adminAdmins.title).toHaveText('ADMINS');
    });
  });
});
