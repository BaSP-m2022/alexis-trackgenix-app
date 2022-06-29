const HomePage = require('../pageobjects/home.page');

describe('Home', () => {
    beforeAll('open browser', () => {
        browser.url('https://alexis-trackgenix-app.vercel.app/home')
    })
    describe('Checking titles', () => {
        it('Home title', async () => {
            await expect(HomePage.homeTitle).toBeDisplayed();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
        })
    })
    describe('Checking social media on footer', () => {
        it('Twitter', async () => {
            await HomePage.socialTW.click();
        })
    })
    describe('Checking buttons', () => {
        it('Click on admin button', async () => {
            await HomePage.adminAccess.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
        })
        it('Click on Trackgenix button', async () => {
            await HomePage.homeTG.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
        })
        it('Click on emlpoyee button', async () => {
            await HomePage.employeeAccess.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
        })
    })
});