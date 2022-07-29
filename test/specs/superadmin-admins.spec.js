const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const superAdminAdmins = require('../pageobjects/superadmin-admins.page');
const loginPage = require('../pageobjects/login.page');

describe('Testing Super-Admin Admins', () => {
  beforeAll('Go to Super-Admin Admins', () => {
    homePage.openBrowser();
    header.loginBtn.click();
    loginPage.login('testSuperadmin@radium.com', 'superadmin123');
    header.headerBurger.click();
    sidebar.spAdminsTab.click();
  });
  describe('Testing Titles', () => {
    it('Checking header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Trackgenix');
    });
    it('Checking Super-Admin home title', async () => {
      await expect(superAdminAdmins.adminsTitle).toExist();
      await expect(superAdminAdmins.adminsTitle).toHaveText('ADMINS');
    });
  });
  describe('Testing Table', () => {
    it('Table exists', async () => {
      await expect(superAdminAdmins.adminsTable).toExist();
    });
    it('Table header to contain text', async () => {
      await expect(superAdminAdmins.headerTable).toExist();
      await expect(superAdminAdmins.headerTable).toHaveTextContaining(
        'First Name',
        'Last Name',
        'Email'
      );
    });
    it('Table header color', async () => {
      const headerColor = await superAdminAdmins.headerTable.getCSSProperty('background-color');
      await expect(headerColor.value).toBe('rgba(228,228,228,1)');
    });
  });
  describe('Add an Admin', () => {
    it('Add button', async () => {
      await expect(superAdminAdmins.addAdminBtn).toExist();
      await expect(superAdminAdmins.addAdminBtn).toBeClickable();
      await superAdminAdmins.addAdminBtn.click();
      await expect(superAdminAdmins.addModal).toBeDisplayed();
    });
    it('Try to create an Admin with empty fields', async () => {
      await superAdminAdmins.addAdmin('', '', '', '');
      await expect(
        superAdminAdmins.addFNameMsg,
        superAdminAdmins.addLNameMsg,
        superAdminAdmins.addEmailMsg,
        superAdminAdmins.addPasswordMsg
      ).toBeDisplayed;
      await expect(superAdminAdmins.addFNameMsg).toHaveText('First name is a required field');
      await expect(superAdminAdmins.addLNameMsg).toHaveText('Last name is a required field');
      await expect(superAdminAdmins.addEmailMsg).toHaveText('Email is a required field');
      await expect(superAdminAdmins.addPasswordMsg).toHaveText('Password is a required field');
    });
    it('Try to create an Admin with only First Name', async () => {
      await superAdminAdmins.addAdmin('Ariana', '', '', '');
      await expect(
        superAdminAdmins.addLNameMsg,
        superAdminAdmins.addEmailMsg,
        superAdminAdmins.addPasswordMsg
      ).toBeDisplayed;
      await expect(superAdminAdmins.addLNameMsg).toHaveText('Last name is a required field');
      await expect(superAdminAdmins.addEmailMsg).toHaveText('Email is a required field');
      await expect(superAdminAdmins.addPasswordMsg).toHaveText('Password is a required field');
    });
    it('Try to create an Admin with only Last Name', async () => {
      await superAdminAdmins.addAdmin('', 'Maldonado', '', '');
      await expect(
        superAdminAdmins.addFNameMsg,
        superAdminAdmins.addEmailMsg,
        superAdminAdmins.addPasswordMsg
      ).toBeDisplayed;
      await expect(superAdminAdmins.addFNameMsg).toHaveText('First name is a required field');
      await expect(superAdminAdmins.addEmailMsg).toHaveText('Email is a required field');
      await expect(superAdminAdmins.addPasswordMsg).toHaveText('Password is a required field');
    });
    it('Try to create an Admin with only email', async () => {
      await superAdminAdmins.addAdmin('', '', 'randomemail3@radiumrocket.com', '');
      await expect(
        superAdminAdmins.addFNameMsg,
        superAdminAdmins.addLNameMsg,
        superAdminAdmins.addPasswordMsg
      ).toBeDisplayed;
      await expect(superAdminAdmins.addFNameMsg).toHaveText('First name is a required field');
      await expect(superAdminAdmins.addLNameMsg).toHaveText('Last name is a required field');
      await expect(superAdminAdmins.addPasswordMsg).toHaveText('Password is a required field');
    });
    it('Try to create an Admin with only Password', async () => {
      await superAdminAdmins.addAdmin('', '', '', 'testing123');
      await expect(
        superAdminAdmins.addFNameMsg,
        superAdminAdmins.addLNameMsg,
        superAdminAdmins.addEmailMsg
      ).toBeDisplayed;
      await expect(superAdminAdmins.addFNameMsg).toHaveText('First name is a required field');
      await expect(superAdminAdmins.addLNameMsg).toHaveText('Last name is a required field');
      await expect(superAdminAdmins.addEmailMsg).toHaveText('Email is a required field');
    });
    it('Try to create an Admin with valid data but first name with numbers', async () => {
      await superAdminAdmins.addAdmin(
        '123456',
        'Maldonado',
        'randomemail3@radiumrocket.com',
        'testing123'
      );
      await expect(superAdminAdmins.addFNameMsg).toBeDisplayed;
      await expect(superAdminAdmins.addFNameMsg).toHaveText(
        'Invalid name, it must contain only letters'
      );
    });
    it('Try to create an Admin with valid data but last name with numbers', async () => {
      await superAdminAdmins.addAdmin(
        'Ariana',
        '123456',
        'randomemail3@radiumrocket.com',
        'testing123'
      );
      await expect(superAdminAdmins.addLNameMsg).toBeDisplayed;
      await expect(superAdminAdmins.addLNameMsg).toHaveText(
        'Invalid last name, it must contain only letters'
      );
    });
    it('Try to create an Admin with valid data but no valid email', async () => {
      await superAdminAdmins.addAdmin('Ariana', 'Maldonado', 'radiumrocket.com', 'testing123');
      await expect(superAdminAdmins.addEmailMsg).toBeDisplayed;
      await expect(superAdminAdmins.addEmailMsg).toHaveText('Invalid email format');
    });
    it('Try to create an Admin with valid data but password with only letters', async () => {
      await superAdminAdmins.addAdmin(
        'Ariana',
        'Maldonado',
        'randomemail3@radiumrocket.com',
        'testingg'
      );
      await expect(superAdminAdmins.addPasswordMsg).toBeDisplayed;
      await expect(superAdminAdmins.addPasswordMsg).toHaveText(
        'Invalid password, it must contain both letters and numbers'
      );
    });
    it('Try to create an Admin with valid data but password with only numbers', async () => {
      await superAdminAdmins.addAdmin(
        'Ariana',
        'Maldonado',
        'randomemail3@radiumrocket.com',
        '12345678'
      );
      await expect(superAdminAdmins.addPasswordMsg).toBeDisplayed;
      await expect(superAdminAdmins.addPasswordMsg).toHaveText(
        'Invalid password, it must contain both letters and numbers'
      );
    });
    it('Try to create an Admin with valid data in all inputs', async () => {
      await superAdminAdmins.addAdmin(
        'Ariana',
        'Maldonado',
        'randomemail3@radiumrocket.com',
        'testing123'
      );
      await expect(superAdminAdmins.successModal).toBeDisplayed();
      await expect(superAdminAdmins.successModal).toHaveTextContaining('Success', 'Admin created');
      await superAdminAdmins.crossSuccessModal.click();
    });
  });
  describe('Edit an Admin', () => {
    it('Checking row and getting edit button', async () => {
      const row = await $('#root > div > div > section > table > tbody > tr:last-child');
      await expect(row).toHaveTextContaining(
        'ariana',
        'maldonado',
        'randomemail3@radiumrocket.com'
      );
      const rowEdit = await $(
        '#root > div > div > section > table > tbody > tr:last-child > td:nth-child(4) > button'
      );
      await expect(rowEdit).toExist();
      await expect(rowEdit).toBeClickable();
      await rowEdit.click();
      await expect(superAdminAdmins.editModal).toBeDisplayed();
    });
    it('Edit with no changes', async () => {
      await superAdminAdmins.editCreateBtn.click();
      await expect(superAdminAdmins.editErrorModal).toBeDisplayed();
      await expect(superAdminAdmins.editErrorModal).toHaveTextContaining(
        'Error',
        "There hasn't been any changes"
      );
      await superAdminAdmins.crossEditError.click();
      await expect(superAdminAdmins.editErrorModal).not.toBeDisplayed();
    });
    it('Edit an Admin', async () => {
      await superAdminAdmins.editAdmin(
        'Larisa',
        'Sangermano',
        'randomemail3@radiumrocket.com',
        'testing123'
      );
      await expect(superAdminAdmins.editSuccess).toBeDisplayed();
      await expect(superAdminAdmins.editSuccess).toHaveTextContaining(
        'Success',
        'The admin has been updated successfully'
      );
      await superAdminAdmins.crossEditSuccess.click();
      await expect(superAdminAdmins.editSuccess).not.toBeDisplayed();
    });
  });
  describe('Delete an Admin', () => {
    it('Delete button, delete modal and cancel delete', async () => {
      const rowDelete = await $(
        '#root > div > div > section > table > tbody > tr:last-child > td:nth-child(5) > button'
      );
      await rowDelete.click();
      await expect(superAdminAdmins.deleteModal).toBeDisplayed();
      await expect(superAdminAdmins.deleteModal).toHaveTextContaining(
        'Delete Admin',
        'Are you sure you want to delete this admin?'
      );
      await superAdminAdmins.cancelDelete.click();
      await expect(superAdminAdmins.deleteModal).not.toBeDisplayed();
    });
    it('Confirm delete', async () => {
      const rowDelete = await $(
        '#root > div > div > section > table > tbody > tr:last-child > td:nth-child(5) > button'
      );
      await rowDelete.click();
      await superAdminAdmins.confirmDelete.click();
      await expect(superAdminAdmins.successDelete).toBeDisplayed();
      await expect(superAdminAdmins.successDelete).toHaveTextContaining(
        'Success',
        'Admin with id deleted'
      );
      await superAdminAdmins.crossSuccessDelete.click();
      await expect(superAdminAdmins.successDelete).not.toBeDisplayed();
    });
  });
});
