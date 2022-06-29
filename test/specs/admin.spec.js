const AdminPage = require('../pageobjects/admin.page')

describe('Login page testing', () => {
    beforeAll('open browser', () => {
        browser.url('https://alexis-trackgenix-app.vercel.app/home')
    })
    describe('Admin user', () => {
        it('Click on admin button', async () => {
            await AdminPage.adminUser.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
        })
        it('Click on projects', async () => {
            await AdminPage.projectsBtn.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/projects');
        })
        it('Add button should exist', async () => {
            await expect(AdminPage.addProject).toExist();
        })
    })
})