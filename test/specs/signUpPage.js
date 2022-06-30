const Home = require('../pageobjects/home.page');
const SignUp = require('../pageobjects/signUp.page');

describe('Sign Up page', ()=> {
    beforeAll('Should deploy the "TrackGENIX" sign up page', async ()=> {
        await Home.open('home');
        await Home.signUpBtn.click();
        await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/signup');
    })

    describe('Checking the main title page', ()=> {
        it('The title should exist', async ()=> {
            await expect (SignUp.signUpTitle).toExist();
            await expect (SignUp.signUpTitle).toHaveTextContaining('Sign up');
        });
    })

    describe('Checking the functionality of the First Name input', ()=> {
        it('The input should work correctly', async ()=> {
            await expect(SignUp.firstNameTitle).toHaveTextContaining('First Name');
            await expect(SignUp.firstNameInput).toExist();
            await SignUp.firstName('');
            await SignUp.firstNameTitle.click();
            await expect(SignUp.firstNameMsg).toBeDisplayed();
            await SignUp.firstName('na@');
            await SignUp.firstNameTitle.click();
            await expect(SignUp.firstNameMsg).toBeDisplayed();
            await SignUp.firstName('Listro');
            await SignUp.firstNameTitle.click();
            await expect(SignUp.firstNameMsg).not.toBeDisplayed();
        });
    })

    describe('Checking the functionality of the Last Name input', ()=> {
        it('The input should work correctly', async ()=> {
            await expect(SignUp.lastNameTitle).toHaveTextContaining('Last Name');
            await expect(SignUp.lastNameInput).toExist();
            await SignUp.lastName('');
            await SignUp.lastNameTitle.click();
            await expect(SignUp.lastNameMsg).toBeDisplayed();
            await SignUp.lastName('na@');
            await SignUp.lastNameTitle.click();
            await expect(SignUp.lastNameMsg).toBeDisplayed();
            await SignUp.lastName('Leonel');
            await SignUp.lastNameTitle.click();
            await expect(SignUp.lastNameMsg).not.toBeDisplayed();
        });
    })

    describe('Checking the functionality of the Phone input', ()=> {
        it('The input should work correctly', async ()=> {
            await expect(SignUp.phoneTitle).toHaveTextContaining('Phone');
            await expect(SignUp.phoneInput).toExist();
            await SignUp.phone('');
            await SignUp.phoneTitle.click();
            await expect(SignUp.phoneMsg).toBeDisplayed();
            await SignUp.phone('34@');
            await SignUp.phoneTitle.click();
            await expect(SignUp.phoneMsg).toBeDisplayed();
            await SignUp.phone('3413081507');
            await SignUp.phoneTitle.click();
            await expect(SignUp.phoneMsg).not.toBeDisplayed();
        });
    })

    describe('Checking the functionality of the Email input', ()=> {
        it('The input should work correctly', async ()=> {
            await expect(SignUp.emailTitle).toHaveTextContaining('Email');
            await expect(SignUp.emailInput).toExist();
            await SignUp.email('');
            await SignUp.emailTitle.click();
            await expect(SignUp.emailMsg).toBeDisplayed();
            await SignUp.email('na@');
            await SignUp.emailTitle.click();
            await expect(SignUp.emailMsg).toBeDisplayed();
            await SignUp.email('leonellistro@gmail.com');
            await SignUp.emailTitle.click();
            await expect(SignUp.emailMsg).not.toBeDisplayed();
        });
    })

    describe('Checking the functionality of the Password input', ()=> {
        it('The input should work correctly', async ()=> {
            await expect(SignUp.passwordTitle).toHaveTextContaining('Password');
            await expect(SignUp.passwordInput).toExist();
            await SignUp.password('');
            await SignUp.passwordTitle.click();
            await expect(SignUp.passwordMsg).toBeDisplayed();
            await SignUp.password('na@');
            await SignUp.passwordTitle.click();
            await expect(SignUp.passwordMsg).toBeDisplayed();
            await SignUp.password('asdasd789');
            await SignUp.passwordTitle.click();
            await expect(SignUp.passwordMsg).not.toBeDisplayed();
        });
    })

    describe('Checking the functionality of the Repeat Password input', ()=> {
        it('The input should work correctly', async ()=> {
            await expect(SignUp.repeatTitle).toHaveTextContaining('Repeat password');
            await expect(SignUp.repeatInput).toExist();
            await SignUp.repeat('');
            await SignUp.repeatTitle.click();
            await expect(SignUp.repeatMsg).toBeDisplayed();
            await SignUp.repeat('asdasd');
            await SignUp.repeatTitle.click();
            await expect(SignUp.repeatMsg).toBeDisplayed();
            await SignUp.repeat('asdasd789');
            await SignUp.repeatTitle.click();
            await expect(SignUp.repeatMsg).not.toBeDisplayed();
        });
    })

    describe('Checking the functionality of the Create button', ()=> {
        it('Checking the functionality when the fields are empty', async ()=> {
            await SignUp.firstName('');
            await SignUp.lastName('');
            await SignUp.phone('');
            await SignUp.email('');
            await SignUp.password('');
            await SignUp.repeat('');
            await SignUp.createBtn.click();
            await expect(SignUp.firstNameMsg).toBeDisplayed();
            await expect(SignUp.lastNameMsg).toBeDisplayed();
            await expect(SignUp.phoneMsg).toBeDisplayed();
            await expect(SignUp.emailMsg).toBeDisplayed();
            await expect(SignUp.passwordMsg).toBeDisplayed();
            await expect(SignUp.repeatMsg).toBeDisplayed();
        })
        it('Checking the functionality when the fields have correct data', async ()=> {
            await SignUp.firstName('Leonel');
            await SignUp.lastName('Listro');
            await SignUp.phone('3413081507');
            await SignUp.email('leonellistro@gmail.com');
            await SignUp.password('asdasd789');
            await SignUp.repeat('asdasd789');
            await SignUp.createBtn.click();
        })
    })
})
