const homePage = require('../pageobjects/home.page');
const header = require('../pageobjects/header.page');
const sidebar = require('../pageobjects/sidebar.page');
const loginPage = require('../pageobjects/login.page');
const adminProjects = require('../pageobjects/admin-projects.page');

describe('Testing Admin Projects Page', () => {
  beforeAll('Login as admin and go to Projects section', () => {
    homePage.openBrowser();
    sidebar.loginTab.click();
    loginPage.login('testAdmin@radium.com', 'admin123');
    sidebar.projectsTab.click();
  });

  describe('Testing titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Projects');
    });
    it('Section title', async () => {
      await expect(adminProjects.title).toExist();
      await expect(adminProjects.title).toHaveText('PROJECTS');
    });
  });

  describe('Testing table', () => {
    it('Table exist', async () => {
      await expect(adminProjects.table).toExist();
    });
    it('Table header', async () => {
      await expect(adminProjects.tableHeader).toExist();
      const tableHeaderColor = await adminProjects.tableHeader.getCSSProperty('background-color');
      await expect(tableHeaderColor.value).toBe('rgba(228,228,228,1)');
    });
    it('Table body', async () => {
      await expect(adminProjects.tableBody).toExist();
    });
  });

  describe('Testing add function', () => {
    it('Add a project', async () => {
      await adminProjects.addBtn.click();
      await expect(adminProjects.modal).toBeDisplayed();
    });
    it('Create a project modal', async () => {
      await adminProjects.createProject(
        'TestingTrackgenix',
        'RadiumRocket',
        '05-11-2020',
        '07-06-2022',
        'Devolope the e2e automated tests for the Trackgenix Web Server'
      );
      await expect(adminProjects.createdModal).toBeDisplayed();
      await expect(adminProjects.createdModal).toHaveTextContaining('Project created');
      await expect(adminProjects.createdModal).toHaveTextContaining('Success');
      await adminProjects.crossCreate.click();
      await expect(adminProjects.createdModal).not.toBeDisplayed();
    });
  });

  describe('Testing Edit function', () => {
    it('Edit button modal', async () => {
      const row = await $(
        '#root > div > div > section > div > div > table > tbody > tr:last-child'
      );
      console.log('ROW DATA', row);
      const rowEdit = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(8) > button'
      );
      await rowEdit.click();
      await expect(adminProjects.editProjectModal).toBeDisplayed();
      await expect(adminProjects.editProjectModal).toHaveTextContaining('Edit Project');
    });
    it('Try to edit with no changes', async () => {
      await adminProjects.editBtn.click();
      await expect(adminProjects.noChangesModal).toBeDisplayed();
      await expect(adminProjects.noChangesModal).toHaveTextContaining(
        'Error',
        "There hasn't been any changes"
      );
      await adminProjects.crossErrorEdit.click();
      await expect(adminProjects.noChangesModal).not.toBeDisplayed();
    });
    it('Try to edit a project', async () => {
      await adminProjects.setEditDescription('This is going to be the new description');
      await adminProjects.editBtn.click();
      await expect(adminProjects.successEdit).toBeDisplayed();
      await expect(adminProjects.successEdit).toHaveTextContaining(
        'The project has been updated succesfully'
      );
      await adminProjects.crossSuccess.click();
      await expect(adminProjects.successEdit).not.toBeDisplayed();
    });
  });

  describe('Testing delete function', () => {
    it('Button delete button', async () => {
      const deleteBtn = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(9) > button'
      );
      await expect(deleteBtn).toExist();
      await expect(deleteBtn).toBeClickable();
      await deleteBtn.click();
      await expect(adminProjects.confirmModal).toBeDisplayed();
      await expect(adminProjects.confirmModal).toHaveTextContaining(
        'Delete Project',
        'Are you sure you want to delete this project?'
      );
    });
    it('Cancel delete', async () => {
      await expect(adminProjects.cancelDelete).toExist();
      await expect(adminProjects.cancelDelete).toBeClickable();
      await adminProjects.cancelDelete.click();
      await expect(adminProjects.confirmModal).not.toBeDisplayed();
    });
    it('Confirm delete', async () => {
      const deleteBtn = await $(
        '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(9) > button'
      );
      await deleteBtn.click();
      await expect(adminProjects.confirmModal).toBeDisplayed();
      await expect(adminProjects.confirmDelete).toExist();
      await expect(adminProjects.confirmDelete).toBeClickable();
      await adminProjects.confirmDelete.click();
      await expect(adminProjects.successDelete).toBeDisplayed();
      await expect(adminProjects.successDelete).toHaveTextContaining(
        'Success',
        'The project was successfully deleted'
      );
      await adminProjects.crossDelete.click();
      await expect(adminProjects.successDelete).not.toBeDisplayed();
    });
  });
});
