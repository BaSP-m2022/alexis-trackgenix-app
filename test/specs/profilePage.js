const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page');
const EmployeeHome = require('../pageobjects/employeeHome.page');
const Profile = require('../pageobjects/profile.page');

describe('Employee profile page', ()=> {
    beforeAll('Should login like a employee and go to the profile page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await Login.email('testEmployee@radium.com')
        await Login.password('employee123')
        await Login.loginBtn.click();
        await EmployeeHome.profileSidebar.click();
        await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee/profile');
    })

        describe('Elements should exist', ()=> {
        it('Checking the existence of the elements of the page', async ()=> {
            await expect(Profile.profileTitle).toBeDisplayedInViewport();
            await expect(Profile.profileImg).toBeDisplayedInViewport();
            await expect(Profile.profileTable).toBeDisplayedInViewport();
            await expect(Profile.profileFirstName).toBeDisplayedInViewport();
            await expect(Profile.profileLastName).toBeDisplayedInViewport();
            await expect(Profile.profilePhone).toBeDisplayedInViewport();
            await expect(Profile.profileEmail).toBeDisplayedInViewport();
            await expect(Profile.profileStatus).toBeDisplayedInViewport();
            await expect(Profile.profileIsPm).toBeDisplayedInViewport();
            await expect(Profile.profileAddress).toExist();
            await expect(Profile.profileDni).toExist();
            await expect(Profile.profileDate).toExist();
            await expect(Profile.editBtn).toExist();
        })
    })

    describe('Check the buttons', ()=> {
        it('Buttons should work correctly', async ()=> {
            await Profile.editBtn.click();
            await expect(Profile.editModalEdit).toBeClickable();
            await Profile.editModalCross.click();
        })
    })
})
