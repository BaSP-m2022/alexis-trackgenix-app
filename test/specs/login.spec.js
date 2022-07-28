const homePage = require('../pageobjects/home.page');
const loginPage = require('../pageobjects/login.page');
const header = require('../pageobjects/header.page');

describe('Testing Login Page', () => {
  beforeAll('Go to Login Form', () => {
    homePage.openBrowser();
    header.loginBtn.click();
  });

  describe('Title and form', () => {
    it('Correct title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Trackgenix');
    });
    it('Form border', async () => {
      const borderColor = await loginPage.loginFormContainer.getCSSProperty('border');
      await expect(borderColor.value).toBe('3px solid rgb(118, 160, 104)');
    });
  });
  describe('Login', () => {
    beforeEach('Go to Login', () => {
      browser.url('https://alexis-trackgenix-app.vercel.app/auth/login');
    });
    it('Empty fields', async () => {
      await loginPage.login('', '');
      await expect(loginPage.errorEmail).toHaveText('Email is a required field');
      await expect(loginPage.errorPassword).toHaveText('Password is a required field');
    });
    it('Valid email and empty pw', async () => {
      await loginPage.login('arii.maldoando97@gmail.com', '');
      await expect(loginPage.errorPassword).toHaveText('Password is a required field');
    });
    it('Empty email and valid pw', async () => {
      await loginPage.login('', 'testing123');
      await expect(loginPage.errorEmail).toHaveText('Email is a required field');
    });
    it('Invalid email format and valid pw', async () => {
      await loginPage.login('Ariana', 'testing123');
      await expect(loginPage.errorEmail).toHaveText('Invalid email format');
    });
    it('Valid email and pw shorter than 8 characteres', async () => {
      await loginPage.login('arii.maldonado97@gmail.com', 'test123');
      await expect(loginPage.errorPassword).toHaveText(
        'Password must contain at least 8 characters'
      );
    });
    it('Valid email and pw with only numbers', async () => {
      await loginPage.login('arii.maldonado97@gmail.com', '12345678');
      await expect(loginPage.errorPassword).toHaveText(
        'Password must contain both letters and numbers'
      );
    });
    it('Valid email and pw with only letters', async () => {
      await loginPage.login('arii.maldonado97@gmail.com', 'testingg');
      await expect(loginPage.errorPassword).toHaveText(
        'Password must contain both letters and numbers'
      );
    });
    it('Valid email and pw but not registered', async () => {
      await loginPage.login('arii.maldonado97@gmail.com', 'testing123');
      await expect(loginPage.errorModal).toBeDisplayed();
      await expect(loginPage.errorModal).toHaveTextContaining('Wrong email or password');
      await loginPage.crossModal.click();
    });
    it('Valid and registered employee email and pw', async () => {
      await loginPage.login('testEmployee@radium.com', 'employee123');
      await expect(loginPage.errorModal).not.toBeDisplayed();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
    });
    it('Valid and registered admin email and pw', async () => {
      await loginPage.login('testAdmin@radium.com', 'admin123');
      await expect(loginPage.errorModal).not.toBeDisplayed();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
    });
    it('Valid and registered super admin email and pw', async () => {
      await loginPage.login('testSuperadmin@radium.com', 'superadmin123');
      await expect(loginPage.errorModal).not.toBeDisplayed();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/super-admin');
    });
  });
});
