const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const superAdminHome = require('../pageobjects/employee-home.page');
const loginPage = require('../pageobjects/login.page');

describe('Testing Super Admin Home Page', () => {
  beforeAll('Go to Super Admin Home', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testSuperadmin@radium.com', 'superadmin123');
  });

  describe('Testing Titles', () => {
    it('Checking header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Super-Admin');
    });
    it('Checking Super-Admin home title', async () => {
      await expect(superAdminHome.title).toExist();
      await expect(superAdminHome.title).toHaveText('Welcome NoBorrar NoEditar');
    });
  });
  describe('Checking sidebar', () => {
    it('Home tab', async () => {
      await expect(sidebar.spHomeTab).toExist();
      await expect(sidebar.spHomeTab).toBeClickable();
      await sidebar.spHomeTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/super-admin');
    });
    it('Admins tab', async () => {
      await expect(sidebar.spAdminsTab).toExist();
      await expect(sidebar.spAdminsTab).toBeClickable();
      await sidebar.spAdminsTab.click();
      await expect(browser).toHaveUrl(
        'https://alexis-trackgenix-app.vercel.app/super-admin/admins'
      );
    });
    it('Log out tab', async () => {
      await expect(sidebar.spLogOutTab).toExist();
      await expect(sidebar.spLogOutTab).toBeClickable();
      await sidebar.spLogOutTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
  });
});
