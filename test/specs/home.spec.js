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
            await expect(HomePage.socialTW).toHaveLink('https://twitter.com/');
        })
        it('Facebook', async () => {
            await expect(HomePage.socialFB).toHaveLink('https://www.facebook.com/');
        })
        it('Instagram', async () => {
            await expect(HomePage.socialIG).toHaveLink('https://www.instagram.com/');
        })
        it('Github', async () => {
            await expect(HomePage.socialGH).toHaveLink('https://github.com/BaSP-m2022/alexis-trackgenix-app');
        })
    })
    describe('Checking buttons', () => {
        it('Click on Trackgenix button', async () => {
            await HomePage.homeTG.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
        })

    })
});