const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page')

describe('Login page', ()=> {
    beforeEach('Should deploy the login page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/auth/login');
    })

    describe('Checking the functionality of the sidebar "Home" button', ()=> {
        it('The button should redirect to the home page', async ()=> {
            await Login.sidebarHome.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
        })
    })

    describe('Checking the existence of the main elements', ()=> {
        it('Subtitles, inputs and buttons should exist', async ()=> {
            await expect(Login.emailTitle).toExist();
            await expect(Login.emailInput).toExist();
            await expect(Login.emailInput).toBeClickable();
            await expect(Login.passwordTitle).toExist();
            await expect(Login.passwordInput).toExist();
            await expect(Login.passwordInput).toBeClickable();
            await expect(Login.loginBtn).toExist();
            await expect(Login.loginBtn).toBeClickable();
        })
    })

    describe('Checking the validations of the inputs', ()=> {
        it('Error message should be displayed it the data is not correct', async ()=> {
            await Login.email('');
            await Login.emailTitle.click();
            await expect(Login.emailMsg).toBeDisplayedInViewport();
            await Login.password('');
            await Login.emailTitle.click();
            await expect(Login.passwordMsg).toBeDisplayedInViewport();
            await Login.email('Leonel');
            await Login.emailTitle.click();
            await expect(Login.emailMsg).toBeDisplayedInViewport();
            await Login.password('asdasd');
            await Login.emailTitle.click();
            await expect(Login.passwordMsg).toBeDisplayedInViewport();
        })
    })

    describe('Checking the login whit an admin user', ()=> {
        it('Should login correctly', async ()=> {
            await Login.email('testAdmin@radium.com')
            await Login.password('admin123')
            await Login.loginBtn.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
        })
    })

    describe('Checking the login whit an employee user', ()=> {
        it('Should login correctly', async ()=> {
            await Login.email('testEmployee@radium.com')
            await Login.password('employee123')
            await Login.loginBtn.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
        })
    })

    describe('Checking the login whit an super admin user', ()=> {
        it('Should login correctly', async ()=> {
            await Login.email('testSuperadmin@radium.com')
            await Login.password('superadmin123')
            await Login.loginBtn.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/super-admin');
        })
    })

})