const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const loginPage = require('../pageobjects/login.page');
const employeeProfile = require('../pageobjects/employee-profile.page');
const { not } = require('joi');

describe('Testing Employee Profile', () => {
  beforeAll('Go to Profile screen', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testEmployee@radium.com', 'employee123');
    sidebar.empProfileTab.click();
  });

  describe('Titles and Pic', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Profile');
    });
    it('Profile section title', async () => {
      await expect(employeeProfile.title).toExist();
      await expect(employeeProfile.title).toHaveText('Profile');
    });
    it('Picture', async () => {
      await expect(employeeProfile.profilePic).toExist();
      const picture = await employeeProfile.profilePic.getCSSProperty('border');
      await expect(picture.value).toMatch('5px solid rgb(118, 160, 104)');
    });
  });

  describe('Data table', () => {
    it('Table exists', async () => {
      await expect(employeeProfile.table).toExist();
      const tableBorder = await employeeProfile.table.getCSSProperty('border');
      const tableBackground = await employeeProfile.table.getCSSProperty('background-color');
      await expect(tableBorder.value).toBe('5px solid rgb(118, 160, 104)');
      await expect(tableBackground.value).toBe('rgba(0,0,0,0)');
    });
    it('First Name Field', async () => {
      await expect(employeeProfile.firstNameField).toExist();
      await expect(employeeProfile.firstNameField).toHaveText('First Name:');
      const textColor = employeeProfile.firstNameField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('First Name Data', async () => {
      await expect(employeeProfile.fNData).toExist();
      await expect(employeeProfile.fNData).toHaveText('NoBorrar');
      const textColor = employeeProfile.fNData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Last Name Field', async () => {
      await expect(employeeProfile.lastNameField).toExist();
      await expect(employeeProfile.lastNameField).toHaveText('Last Name:');
      const textColor = employeeProfile.lastNameField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Last Name Data', async () => {
      await expect(employeeProfile.lNData).toExist();
      await expect(employeeProfile.lNData).toHaveText('NoEditar');
      const textColor = employeeProfile.lNData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Phone Field', async () => {
      await expect(employeeProfile.phoneField).toExist();
      await expect(employeeProfile.phoneField).toHaveText('Phone:');
      const textColor = employeeProfile.phoneField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Phone Data', async () => {
      await expect(employeeProfile.phoneData).toExist();
      await expect(employeeProfile.phoneData).toHaveText('3413070800');
      const textColor = employeeProfile.phoneData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Email Field', async () => {
      await expect(employeeProfile.emailField).toExist();
      await expect(employeeProfile.emailField).toHaveText('Email:');
      const textColor = employeeProfile.emailField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Email Data', async () => {
      await expect(employeeProfile.emailData).toExist();
      await expect(employeeProfile.emailData).toHaveText('testEmployee@radium.com');
      const textColor = employeeProfile.emailData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Status Field', async () => {
      await expect(employeeProfile.statusField).toExist();
      await expect(employeeProfile.statusField).toHaveText('Status:');
      const textColor = employeeProfile.statusField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Status  Data', async () => {
      await expect(employeeProfile.statusData).toExist();
      await expect(employeeProfile.statusData).toHaveText('Active');
      const textColor = employeeProfile.statusData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Is PM Field', async () => {
      await expect(employeeProfile.isPMField).toExist();
      await expect(employeeProfile.isPMField).toHaveText('Is Project Manager:');
      const textColor = employeeProfile.isPMField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Is PM Data', async () => {
      await expect(employeeProfile.statusData).toExist();
      await expect(employeeProfile.statusData).toHaveText('No');
      const textColor = employeeProfile.statusData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Address Field', async () => {
      await expect(employeeProfile.addressField).toExist();
      await expect(employeeProfile.addressField).toHaveText('Address:');
      const textColor = employeeProfile.addressField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Address  Data', async () => {
      await expect(employeeProfile.addressData).toExist();
      await expect(employeeProfile.addressData).toHaveText('asda 123');
      const textColor = employeeProfile.addressData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('DNI Field', async () => {
      await expect(employeeProfile.dniField).toExist();
      await expect(employeeProfile.dniField).toHaveText('DNI:');
      const textColor = employeeProfile.dniField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('DNI Data', async () => {
      await expect(employeeProfile.dniData).toExist();
      await expect(employeeProfile.dniData).toHaveText('12122001');
      const textColor = employeeProfile.dniData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('DOB Field', async () => {
      await expect(employeeProfile.dobField).toExist();
      await expect(employeeProfile.dobField).toHaveText('Date of Birth:');
      const textColor = employeeProfile.dobField.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
    });
    it('DOB Data', async () => {
      await expect(employeeProfile.dobData).toExist();
      await expect(employeeProfile.dobData).toHaveText('2022-06-29');
      const textColor = employeeProfile.dobData.getCSSProperty('color');
      await expect(textColor.value).toBe('rgba(55,56,103,1)');
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
      await expect(employeeProfile.modalHeader).toHaveTextContaining();
      const modalHeaderColor = await employeeProfile.modalHeader.getCSSProperty('background-color');
      await expect(modalHeaderColor.value).toBe('rgba(55,56,103,1)');
    });
    it('Modal title', async () => {
      await expect(employeeProfile.modalTitle).toExist();
      await expect(employeeProfile.modalTitle).toHaveText('Edit Personal Data');
      const textColor = employeeProfile.modalTitle.getCSSProperty('color');
      await expect(textColor.value).toMatch('rgba(0,0,0,0)');
    });
  });
  describe('Modal btns', () => {
    beforeEach('Open modal', () => {
      employeeProfile.editBtn.click();
    });
    it('Modal Cancel btn', async () => {
      await expect(employeeProfile.modalCancel).toExist();
      await expect(employeeProfile.modalCancel).toBeClickable();
      await employeeProfile.modalCancel.click();
      await expect(employeeProfile.modalProfile).not.toBeDisplayed();
    });
    it('Modal Cross btn', async () => {
      await expect(employeeProfile.crossBtnModal).toExist();
      await expect(employeeProfile.crossBtnModal).toBeClickable();
      await employeeProfile.crossBtnModal.click();
      await expect(employeeProfile.modalProfile).not.toBeDisplayed();
    });
    it('Edit button to save the data', async () => {
      await expect(employeeProfile.modalEdit).toExist();
      await expect(employeeProfile.modalEdit).toBeClickable();
      await employeeProfile.modalEdit.click();
      await expect(employeeProfile.errorModal).toBeDisplayed();
      await expect(employeeProfile.errorModal).toHaveText(/'There haven't been any changes'/);
    });
    it('Error modal cross btn', async () => {
      await expect(employeeProfile.crossBtnError).toExist();
      await expect(employeeProfile.crossBtnError).toBeClickable();
      await employeeProfile.crossBtnError.click();
      await expect(employeeProfile.errorModal).not.toBeDisplayed();
    });
  });
});
