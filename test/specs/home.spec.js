const header = require('../pageobjects/header.page');
const footer = require('../pageobjects/footer.page');
const sidebar = require('../pageobjects/sidebar.page');
const homePage = require('../pageobjects/home.page');

describe('Home testing', () => {
  beforeAll('Open browser', () => {
    homePage.openBrowser();
  });

  describe('Correct browser url', () => {
    it('Browser', async () => {
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
    it('Home title', async () => {
      await expect(homePage.homeTitle).toExist();
      await expect(homePage.homeTitle).toHaveText('WELCOME TO TRACKGENIX');
    });
  });

  //HEADER
  describe('Checking header container', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Home');
    });
    it('Header Profile Pic', async () => {
      await expect(header.profilePic).toExist();
    });
    it('Header color', async () => {
      const headerColor = await header.headerContainer.getCSSProperty('background-color');
      await expect(headerColor.value).toBe('rgba(118,160,104,1)');
    });
  });

  //FOOTER
  describe('Checking footer container', () => {
    it('Footer color', async () => {
      const footerColor = await footer.footerContainer.getCSSProperty('background-color');
      await expect(footerColor.value).toBe('rgba(118,160,104,1)');
    });
    it('Twitter icon', async () => {
      await expect(footer.twitterIcon).toExist();
      await footer.twitterIcon.click();
      await browser.switchWindow('https://twitter.com/');
      await expect(browser).toHaveUrl('https://twitter.com/');
      await browser.switchWindow('https://alexis-trackgenix-app.vercel.app/home');
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
    it('Facebook icon', async () => {
      await expect(footer.facebookIcon).toExist();
      await footer.facebookIcon.click();
      await browser.switchWindow('https://www.facebook.com/');
      await expect(browser).toHaveUrl('https://www.facebook.com/');
      await browser.switchWindow('https://alexis-trackgenix-app.vercel.app/home');
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
    it('Instagram icon', async () => {
      await expect(footer.instagramIcon).toExist();
      await footer.instagramIcon.click();
      await browser.switchWindow('https://www.instagram.com/');
      await expect(browser).toHaveUrl('https://www.instagram.com/');
      await browser.switchWindow('https://alexis-trackgenix-app.vercel.app/home');
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
    it('GitHub icon', async () => {
      await expect(footer.githubIcon).toExist();
      await footer.githubIcon.click();
      await browser.switchWindow('https://github.com/BaSP-m2022/alexis-trackgenix-app');
      await expect(browser).toHaveUrl('https://github.com/BaSP-m2022/alexis-trackgenix-app');
      await browser.switchWindow('https://alexis-trackgenix-app.vercel.app/home');
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
  });

  describe('Location text', () => {
    it('Location text exists', async () => {
      await expect(footer.location).toExist();
    });
    it('Correct location text', async () => {
      await expect(footer.location).toHaveText('Rosario, Argentina');
    });
  });

  describe('Copyright text', () => {
    it('Copyright exist', async () => {
      await expect(footer.copyright).toExist();
    });
    it('Correct copyright text', async () => {
      await expect(footer.copyright).toHaveText(
        'Copyright © 2022 Trackgenix SA. All rights reserved.'
      );
    });
  });

  describe('Checking sidebar', () => {
    it('Sidebar exists', async () => {
      await expect(sidebar.sidebarContainer).toExist();
    });
    it('Sidebar header exists', async () => {
      await expect(sidebar.sidebarHeader).toExist();
      await expect(sidebar.sidebarHeader).toHaveTextContaining('TRACKGENIX');
    });
    it('Sidebar background color', async () => {
      const sidebarColor = await sidebar.sidebarContainer.getCSSProperty('background-color');
      await expect(sidebarColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Login button', async () => {
      await expect(sidebar.loginTab).toExist();
      await expect(sidebar.loginTab).toBeClickable();
      await sidebar.loginTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/auth/login');
      await expect(sidebar.homeTab).toBeDisplayed();
    });
    it('Home button', async () => {
      await expect(sidebar.homeTab).toExist();
      await expect(sidebar.homeTab).toBeClickable();
      await sidebar.homeTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
    it('Sign up button', async () => {
      await expect(sidebar.signUpTab).toExist();
      await expect(sidebar.signUpTab).toBeClickable();
      await sidebar.signUpTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/auth/signup');
    });
  });
});
