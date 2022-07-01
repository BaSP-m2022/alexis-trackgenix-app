const header = require('../pageobjects/header.page');
const footer = require('../pageobjects/footer.page');
const sidebar = require('../pageobjects/sidebar.page');
const homePage = require('../pageobjects/home.page');

describe('Home testing', () => {
  beforeAll('Open browser', () => {
    homePage.openBrowser();
  });

  describe('Correct browser url', () => {
    it('browser', async () => {
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/home');
    });
  });

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
      await expect(headerColor).toBe('#76a068');
    });
  });

  describe('Checking footer container', () => {
    it('Footer color', async () => {
      const footerColor = await footer.footerContainer.getCSSProperty('background-color');
      await expect(footerColor).toBe('#76a068');
    });
    it('Twitter icon', async () => {
      await expect(footer.twitterIcon).toExist();
      await footer.twitterIcon.click();
      await expect(browser).newWindow('https://twitter.com/home');
      await browser.switchWindow('http://alexis-trackgenix-app.vercel.app/home');
    });
    it('Facebook icon', async () => {
      await expect(footer.facebookIcon).toExist();
      await footer.facebookIcon.click();
      await expect(browser).newWindow('https://www.facebook.com/');
      await browser.switchWindow('http://alexis-trackgenix-app.vercel.app/home');
    });
    it('Instagram icon', async () => {
      await expect(footer.instagramIcon).toExist();
      await footer.instagramIcon.click();
      await expect(browser).newWindow('https://www.instagram.com/');
      await browser.switchWindow('http://alexis-trackgenix-app.vercel.app/home');
    });
    it('GitHub icon', async () => {
      await expect(footer.githubIcon).toExist();
      await footer.githubIcon.click();
      await expect(browser).newWindow('https://github.com/BaSP-m2022/alexis-trackgenix-app');
      await browser.switchWindow('http://alexis-trackgenix-app.vercel.app/home');
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
      await expect(sidebar.sidebarHeader).toExists();
      await expect(sidebar.sidebarHeader).toHaveTextContaining('TRACKGENIX');
    });
    it('Sidebar background color', async () => {
      const sidebarColor = await sidebar.sidebarContainer.getCSSProperty('background-color');
      await expect(sidebarColor).toBe('rgb(55, 56, 103)');
    });
  });

  describe('Entities buttons', () => {
    beforeEach('Position in home browser again', async () => {
      await browser.url('http://alexis-trackgenix-app.vercel.app/home');
    });

    it('Admin home button', async () => {
      await expect(homePage.adminBtn).toExist();
      await expect(homePage.adminBtn).toBeClickable();
      await homePage.adminBtn.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/admin');
    });
    it('Admin btn link', async () => {
      await expect(homePage.adminLink).toExist();
      await expect(homePage.adminLink).toBeClickable();
      await homePage.adminLink.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/admin');
    });
    it('Employee home button', async () => {
      await expect(homePage.employeeBtn).toExist();
      await expect(homePage.employeeBtn).toBeClickable();
      await homePage.employeeBtn.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee');
    });
    it('Employee btn link', async () => {
      await expect(homePage.employeeLink).toExist();
      await expect(homePage.employeeLink).toBeClickable();
      await homePage.employeeLink.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee');
    });
  });
});
