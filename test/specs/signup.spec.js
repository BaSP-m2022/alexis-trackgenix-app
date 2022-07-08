const homePage = require('../pageobjects/home.page');
const header = require('../pageobjects/header.page');
const sidebar = require('../pageobjects/sidebar.page');
const signUpPage = require('../pageobjects/signup.page');
const loginPage = require('../pageobjects/login.page');
const employeeHome = require('../pageobjects/employee-home.page');

describe('Testing Sign Up Page', () => {
  beforeAll('Go to Sign Up Form', () => {
    homePage.openBrowser();
    sidebar.signUpTab.click();
  });
  describe('Title', () => {
    it('Correct Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Signup');
    });
  });
  describe('Sign Up', () => {
    beforeEach('Go to Sign Up Page', () => {
      browser.url('https://alexis-trackgenix-app.vercel.app/auth/signup');
    });
  });
  it('Try to Sign Up with no data', async () => {
    await signUpPage.signUp('', '', '', '', '', '');
    await expect(
      signUpPage.errorName,
      signUpPage.errorLastName,
      signUpPage.errorPhone,
      signUpPage.errorEmail,
      signUpPage.errorPassword,
      signUpPage.errorRepeatPw
    ).toBeDisplayed();
    await expect(signUpPage.errorName).toHaveText('First name is a required field');
    await expect(signUpPage.errorLastName).toHaveText('Last name is a required field');
    await expect(signUpPage.errorPhone).toHaveText('Phone number is a required field');
    await expect(signUpPage.errorEmail).toHaveText('Email is a required field');
    await expect(signUpPage.errorPassword).toHaveText('Password is a required field');
    await expect(signUpPage.errorRepeatPw).toHaveText('Repeat Password is a required field');
  });
  it('Try to Sign Up with only name input', async () => {
    await signUpPage.signUp('Ariana', '', '', '', '', '');
    await expect(
      signUpPage.errorLastName,
      signUpPage.errorPhone,
      signUpPage.errorEmail,
      signUpPage.errorPassword,
      signUpPage.errorRepeatPw
    ).toBeDisplayed();
    await expect(signUpPage.errorLastName).toHaveText('Last name is a required field');
    await expect(signUpPage.errorPhone).toHaveText('Phone number is a required field');
    await expect(signUpPage.errorEmail).toHaveText('Email is a required field');
    await expect(signUpPage.errorPassword).toHaveText('Password is a required field');
    await expect(signUpPage.errorRepeatPw).toHaveText('Repeat Password is a required field');
  });
  it('Try to Sign Up with only last name input', async () => {
    await signUpPage.signUp('', 'Maldonado', '', '', '', '');
    await expect(
      signUpPage.errorName,
      signUpPage.errorPhone,
      signUpPage.errorEmail,
      signUpPage.errorPassword,
      signUpPage.errorRepeatPw
    ).toBeDisplayed();
    await expect(signUpPage.errorName).toHaveText('First name is a required field');
    await expect(signUpPage.errorPhone).toHaveText('Phone number is a required field');
    await expect(signUpPage.errorEmail).toHaveText('Email is a required field');
    await expect(signUpPage.errorPassword).toHaveText('Password is a required field');
    await expect(signUpPage.errorRepeatPw).toHaveText('Repeat Password is a required field');
  });
  it('Try to Sign Up with only phone input', async () => {
    await signUpPage.signUp('', '', '3413693000', '', '', '');
    await expect(
      signUpPage.errorName,
      signUpPage.errorLastName,
      signUpPage.errorEmail,
      signUpPage.errorPassword,
      signUpPage.errorRepeatPw
    ).toBeDisplayed();
    await expect(signUpPage.errorName).toHaveText('First name is a required field');
    await expect(signUpPage.errorLastName).toHaveText('Last name is a required field');
    await expect(signUpPage.errorEmail).toHaveText('Email is a required field');
    await expect(signUpPage.errorPassword).toHaveText('Password is a required field');
    await expect(signUpPage.errorRepeatPw).toHaveText('Repeat Password is a required field');
  });
  it('Try to Sign Up with only email input', async () => {
    await signUpPage.signUp('', '', '', 'arii.maldonado97@gmail.com', '', '');
    await expect(
      signUpPage.errorName,
      signUpPage.errorLastName,
      signUpPage.errorPhone,
      signUpPage.errorPassword,
      signUpPage.errorRepeatPw
    ).toBeDisplayed();
    await expect(signUpPage.errorName).toHaveText('First name is a required field');
    await expect(signUpPage.errorLastName).toHaveText('Last name is a required field');
    await expect(signUpPage.errorPhone).toHaveText('Phone number is a required field');
    await expect(signUpPage.errorPassword).toHaveText('Password is a required field');
    await expect(signUpPage.errorRepeatPw).toHaveText('Repeat Password is a required field');
  });
  it('Try to Sign Up with only password input', async () => {
    await signUpPage.signUp('', '', '', '', 'testing123', '');
    await expect(
      signUpPage.errorName,
      signUpPage.errorLastName,
      signUpPage.errorPhone,
      signUpPage.errorEmail,
      signUpPage.errorRepeatPw
    ).toBeDisplayed();
    await expect(signUpPage.errorName).toHaveText('First name is a required field');
    await expect(signUpPage.errorLastName).toHaveText('Last name is a required field');
    await expect(signUpPage.errorPhone).toHaveText('Phone number is a required field');
    await expect(signUpPage.errorEmail).toHaveText('Email is a required field');
    await expect(signUpPage.errorRepeatPw).toHaveText("Passwords don't match");
  });
  it('Try to Sign Up with no data', async () => {
    await signUpPage.signUp('', '', '', '', '', 'testing123');
    await expect(
      signUpPage.errorName,
      signUpPage.errorLastName,
      signUpPage.errorPhone,
      signUpPage.errorEmail,
      signUpPage.errorPassword,
      signUpPage.errorRepeatPw
    ).toBeDisplayed();
    await expect(signUpPage.errorName).toHaveText('First name is a required field');
    await expect(signUpPage.errorLastName).toHaveText('Last name is a required field');
    await expect(signUpPage.errorPhone).toHaveText('Phone number is a required field');
    await expect(signUpPage.errorEmail).toHaveText('Email is a required field');
    await expect(signUpPage.errorPassword).toHaveText('Password is a required field');
    await expect(signUpPage.errorRepeatPw).toHaveText('Repeat Password is a required field');
  });
  it('Try to Sign Up filling name with numbers', async () => {
    await signUpPage.signUp(
      'Ariana1',
      'Maldonado',
      '3413693000',
      'arii.maldonado97@gmail.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorName).toBeDisplayed();
    await expect(signUpPage.errorName).toHaveText('First name must contain only letters');
  });
  it('Try to Sign Up filling name with less than 3 letters', async () => {
    await signUpPage.signUp(
      'Ar',
      'Maldonado',
      '3413693000',
      'arii.maldonado97@gmail.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorName).toBeDisplayed();
    await expect(signUpPage.errorName).toHaveText('First name must contain more than 3 letters');
  });
  it('Try to Sign Up filling last name with numbers', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado1',
      '3413693000',
      'arii.maldonado97@gmail.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorLastName).toBeDisplayed();
    await expect(signUpPage.errorLastName).toHaveText('Last name must contain only letters');
  });
  it('Try to Sign Up filling last name with less than 3 letters', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Ma',
      '3413693000',
      'arii.maldonado97@gmail.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorLastName).toBeDisplayed();
    await expect(signUpPage.errorLastName).toHaveText('Last name must contain more than 3 letters');
  });
  it('Try to Sign Up filling phone with letters', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      'Ariana3000',
      'arii.maldonado97@gmail.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorPhone).toBeDisplayed();
    await expect(signUpPage.errorPhone).toHaveText('Phone number must contain only numbers');
  });
  it('Try to Sign Up filling phone with 9 numbers', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '123456789',
      'arii.maldonado97@gmail.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorPhone).toBeDisplayed();
    await expect(signUpPage.errorPhone).toHaveText('Phone number must contain 10 numbers');
  });
  it('Try to Sign Up filling phone with 11 numbers', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '12345678901',
      'arii.maldonado97@gmail.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorPhone).toBeDisplayed();
    await expect(signUpPage.errorPhone).toHaveText('Phone number must contain 10 numbers');
  });
  it('Try to Sign Up filling email with invalid email format', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '3413693000',
      'arianamaldonado',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorEmail).toBeDisplayed();
    await expect(signUpPage.errorEmail).toHaveText('Invalid email format');
  });
  it('Try to Sign Up filling email with invalid email format', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '3413693000',
      'arianamaldonado@radium',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorEmail).toBeDisplayed();
    await expect(signUpPage.errorEmail).toHaveText('Invalid email format');
  });
  it('Try to Sign Up filling password with less than 8 characters', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '3413693000',
      'arianamaldonado@radium.com',
      'testing',
      'testing'
    );
    await expect(signUpPage.errorPassword).toBeDisplayed();
    await expect(signUpPage.errorPassword).toHaveText(
      'Password must contain at least 8 characters'
    );
  });
  it('Try to Sign Up filling password with only letters', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '3413693000',
      'arianamaldonado@radium.com',
      'testingg',
      'testingg'
    );
    await expect(signUpPage.errorPassword).toBeDisplayed();
    await expect(signUpPage.errorPassword).toHaveText(
      'Password must contain both letters and numbers'
    );
  });
  it('Try to Sign Up filling password with only numbers', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '3413693000',
      'arianamaldonado@radium.com',
      '12345678',
      '12345678'
    );
    await expect(signUpPage.errorPassword).toBeDisplayed();
    await expect(signUpPage.errorPassword).toHaveText(
      'Password must contain both letters and numbers'
    );
  });
  it('Try to Sign Up filling password with valid data but repeat pw with different valid data', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '3413693000',
      'arianamaldonado@radium.com',
      'testing123',
      '123testing'
    );
    await expect(signUpPage.errorRepeatPw).toBeDisplayed();
    await expect(signUpPage.errorRepeatPw).toHaveText("Passwords don't match");
  });
  it('Try to Sign Up filling all inputs with valid data', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Maldonado',
      '3413693000',
      'arianamaldonado@radium.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.successModal).toBeDisplayed();
    await expect(signUpPage.successModal).toHaveTextContaining('Success', 'Employee created');
  });
  it('Try to Sign Up with an account already in use', async () => {
    await signUpPage.signUp(
      'Ariana',
      'Sangermano',
      '3413693000',
      'arianamaldonado@radium.com',
      'testing123',
      'testing123'
    );
    await expect(signUpPage.errorModal).toBeDisplayed();
    await expect(signUpPage.errorModal).toHaveTextContaining(
      'Error',
      'The email address is already in use by another account.'
    );
    await signUpPage.crossError.click();
    await expect(signUpPage.errorModal).not.toBeDisplayed();
  });
  it('Try to Login with the new account', async () => {
    await sidebar.loginTab.click();
    await loginPage.login('arianamaldonado@radium.com', 'testing123');
    await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
    await expect(employeeHome.title).toHaveText('Welcome Ariana Maldonado');
  });
});
