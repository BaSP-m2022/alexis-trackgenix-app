const AdminPage = require('../pageobjects/admin.page')
const HomePage = require('../pageobjects/home.page')

describe('Login page testing', () => {
    beforeAll('open browser', () => {
        browser.url('https://alexis-trackgenix-app.vercel.app/home')
    })
    describe('Enter to admin user', () => {
        it('Project redirect', async () => {
            await HomePage.goToLogin.click();
            await HomePage.login('testAdmin@radium.com', 'admin123');
            await HomePage.loginBtn.click();

        })
    })
    describe('Admin user', () => {
        it('Click on admin button', async () => {
            await HomePage.asideAdmins.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
        })
    })
})