const homePage = require('../pageobjects/home.page');
const header = require('../pageobjects/header.page');
const loginPage = require('../pageobjects/login.page');
const employeeProfile = require('../pageobjects/employee-profile.page');

describe('Testing Employee - Timesheets', () => {
  beforeAll('Go to Timesheets in Employee', async () => {
    homePage.openBrowser();
    header.loginBtn.click();
    loginPage.login('testEmployee@radium.com', 'employee123');
    loginPage.loginBtn.click();
    header.profilePic.click();
  });

  describe('Titles and Pic', () => {
    it('Profile section title', async () => {
      await expect(employeeProfile.title).toExist();
      await expect(employeeProfile.title).toHaveText('Profile');
    });
    it('Picture', async () => {
      await expect(employeeProfile.profilePict).toExist();
    });
  });

  describe('Data table', () => {
    it('Table exists', async () => {
      await expect(employeeProfile.table).toExist();
    });
    it('First Name Field', async () => {
      await expect(employeeProfile.firstNameField).toExist();
      await expect(employeeProfile.firstNameField).toHaveText('First Name:');
    });
    it('First Name Data', async () => {
      await expect(employeeProfile.fNData).toExist();
      await expect(employeeProfile.fNData).toHaveText('AriiEstuvoAquii');
    });
    it('Last Name Field', async () => {
      await expect(employeeProfile.lastNameField).toExist();
      await expect(employeeProfile.lastNameField).toHaveText('Last Name:');
    });
    it('Last Name Data', async () => {
      await expect(employeeProfile.lNData).toExist();
      await expect(employeeProfile.lNData).toHaveText('No Editar');
    });
    it('Phone Field', async () => {
      await expect(employeeProfile.phoneField).toExist();
      await expect(employeeProfile.phoneField).toHaveText('Phone:');
    });
    it('Phone Data', async () => {
      await expect(employeeProfile.phoneData).toExist();
      await expect(employeeProfile.phoneData).toHaveText('3413070817');
    });
    it('Email Field', async () => {
      await expect(employeeProfile.emailField).toExist();
      await expect(employeeProfile.emailField).toHaveText('Email:');
    });
    it('Email Data', async () => {
      await expect(employeeProfile.emailData).toExist();
      await expect(employeeProfile.emailData).toHaveText('testEmployee@radium.com');
    });
    it('Status Field', async () => {
      await expect(employeeProfile.statusField).toExist();
      await expect(employeeProfile.statusField).toHaveText('Status:');
    });
    it('Status  Data', async () => {
      await expect(employeeProfile.statusData).toExist();
      await expect(employeeProfile.statusData).toHaveText('Active');
    });
    it('Is PM Field', async () => {
      await expect(employeeProfile.isPMField).toExist();
      await expect(employeeProfile.isPMField).toHaveText('Is Project Manager:');
    });
    it('Is PM Data', async () => {
      await expect(employeeProfile.statusData).toExist();
      await expect(employeeProfile.statusData).toHaveText('Active');
    });
    it('Address Field', async () => {
      await expect(employeeProfile.addressField).toExist();
      await expect(employeeProfile.addressField).toHaveText('Address:');
    });
    it('Address  Data', async () => {
      await expect(employeeProfile.addressData).toExist();
      await expect(employeeProfile.addressData).toHaveText('Not provided');
    });
    it('DNI Field', async () => {
      await expect(employeeProfile.dniField).toExist();
      await expect(employeeProfile.dniField).toHaveText('DNI:');
    });
    it('DNI Data', async () => {
      await expect(employeeProfile.dniData).toExist();
      await expect(employeeProfile.dniData).toHaveText('43225549');
    });
    it('DOB Field', async () => {
      await expect(employeeProfile.dobField).toExist();
      await expect(employeeProfile.dobField).toHaveText('Date of Birth:');
    });
    it('DOB Data', async () => {
      await expect(employeeProfile.dobData).toExist();
      await expect(employeeProfile.dobData).toHaveText('1998-07-21');
    });
  });

  describe('Edit btn and modal', () => {
    it('Edit button', async () => {
      await expect(employeeProfile.editBtn).toExist();
      await expect(employeeProfile.editBtn).toBeClickable();
      await employeeProfile.editBtn.click();
      await expect(employeeProfile.modalProfile).toBeDisplayed();
    });
    it('Modal for Profile edit', async () => {
      await expect(employeeProfile.modalProfile).toExist();
    });
    it('Modal header', async () => {
      await expect(employeeProfile.modalHeader).toExist();
      const modalHeaderColor = await employeeProfile.modalHeader.getCSSProperty('background-color');
      await expect(modalHeaderColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Modal title', async () => {
      await expect(employeeProfile.modalTitle).toExist();
      await expect(employeeProfile.modalTitle).toHaveText('Edit Personal Data');
    });
  });
  describe('Modal btns', () => {
    beforeEach('Open modal', () => {
      employeeProfile.editBtn.click();
    });
    it('Modal Cancel btn', async () => {
      await expect(employeeProfile.modalCancel).toExist();
      await employeeProfile.modalCancel.click();
    });
    it('Modal Cross btn', async () => {
      await expect(employeeProfile.crossBtnModal).toExist();
      await employeeProfile.crossBtnModal.click();
    });
  });
});
