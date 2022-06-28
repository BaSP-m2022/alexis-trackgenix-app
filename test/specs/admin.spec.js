const AdminPage = require('../pageobjects/admin.page')

describe('Login page testing', () => {


    describe('Admin user', () => {
        it('Click on admin button', async () => {
            browser.url('https://alexis-trackgenix-app.vercel.app/home')
            await AdminPage.adminUser.click()
            await expect(browser.url('https://alexis-trackgenix-app.vercel.app/admin'))
        })
        it('Click on projects', async () => {
            await browser.pause(3000)
            await AdminPage.projectsBtn.click()
            await expect(browser.url('https://alexis-trackgenix-app.vercel.app/admin/projects'))
        })
        it('Click on projects title', async () => {
            await expect(AdminPage.addProject).toExist();
        })
    })
    describe('Add projects', () => {
        it('Click on add project', async () => {
            await AdminPage.addProject.click()
            await expect(AdminPage.projectForm).toExist()
        })
        it('Click on create project without data', async () => {
            await AdminPage.addProject.click()
            await expect(AdminPage.errorContainerClient).toHaveText('Client name is a required field')
        })
        it('Click on create project with valid data', async () => {
            await AdminPage.create('Charlie', 'Parker', '29/08/1920', '12/03/1955', 'Crazy saxophonist from the bebop era',  )
            await expect(AdminPage.errorContainerClient).toHaveText('Client name is a required field')
        })

    })

})