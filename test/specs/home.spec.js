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
      await expect(homePage.firstTitle).toExist();
      await expect(homePage.firstTitle).toHaveText('What is Trackgenix?');
    });
  });

  //HEADER
  describe('Checking header container', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Trackgenix');
    });
    it('Header Login link', async () => {
      await expect(header.loginBtn).toExist();
      await expect(header.loginBtn).toBeClickable();
      await header.loginBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/auth/login');
    });
    it('Header Sign Up link', async () => {
      await expect(header.signUpBtn).toExist();
      await expect(header.signUpBtn).toBeClickable();
      await header.signUpBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/auth/signup');
    });
    it('Trackgenix title link go to Home', async () => {
      await expect(header.headerTitle).toBeClickable();
      await header.headerTitle.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
    it('Header color', async () => {
      const headerColor = await header.headerContainer.getCSSProperty('background-color');
      await expect(headerColor.value).toBe('rgba(118,160,104,1)');
    });
    it('Scroll to top', async () => {
      await homePage.topBtn.scrollIntoView();
      await homePage.topBtn.click();
      await expect(homePage.firstTitle).toBeDisplayedInViewport();
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
});
