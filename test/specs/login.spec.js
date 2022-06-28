const { admin } = require('../pageobjects/login.page')
const LoginPage = require('../pageobjects/login.page')

describe('Login page testing', () => {

    beforeAll('Open browser', ()=> {
        browser.url('https://alexis-trackgenix-app.vercel.app/home')
    })

    describe('Admin user', () => {
        it('Click on admin button', async () => {
            await LoginPage.adminUser.click()
            await expect(browser.url('https://alexis-trackgenix-app.vercel.app/admin'))
        })
        it('Click on projects', async () => {
            await LoginPage.adminUser.click()
            await LoginPage.projectsBtn.click()
            await expect(browser.url('https://alexis-trackgenix-app.vercel.app/admin/projects'))
        })
        it('Click on projects title', async () => {
            await admin();
            await browser.pause(4000)
        })
    })
})