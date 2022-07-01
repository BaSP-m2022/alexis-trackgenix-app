const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const adminHome = require('../pageobjects/admin-home.page');

describe('Testing Admin Home', () => {
  beforeAll('Open admin home page', () => {
    homePage.openBrowser();
    homePage.adminLink.click();
  });

  describe('Titles', () => {
    it('Header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Admin');
    });
    it('Admin home title', async () => {
      await expect(adminHome.title).toExist();
      await expect(adminHome.title).toHaveText('Admin Home');
    });
  });

  describe('Checking sidebar', () => {
    it('Home tab', async () => {
      await expect(sidebar.homeTab).toExist();
      await expect(sidebar.homeTab).toBeClickable();
      await sidebar.homeTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
    });
    it('Admins tab', async () => {
      await expect(sidebar.adminTab).toExist();
      await expect(sidebar.adminTab).toBeClickable();
      await sidebar.adminTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/admins');
    });
    it('Super Admins tab', async () => {
      await expect(sidebar.superAdminTab).toExist();
      await expect(sidebar.superAdminTab).toBeClickable();
      await sidebar.superAdminTab.click();
      await expect(browser).toHaveUrl(
        'https://alexis-trackgenix-app.vercel.app/admin/super-admins'
      );
    });
    it('Employee tab', async () => {
      await expect(sidebar.employeesTab).toExist();
      await expect(sidebar.employeesTab).toBeClickable();
      await sidebar.employeesTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/employees');
    });
    it('Projects tab', async () => {
      await expect(sidebar.projectsTab).toExist();
      await expect(sidebar.projectsTab).toBeClickable();
      await sidebar.projectsTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/projects');
    });
    it('Timesheets tab', async () => {
      await expect(sidebar.timesheetsTab).toExist();
      await expect(sidebar.timesheetsTab).toBeClickable();
      await sidebar.timesheetsTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/time-sheets');
    });
    it('Tasks tab', async () => {
      await expect(sidebar.tasksTab).toExist();
      await expect(sidebar.tasksTab).toBeClickable();
      await sidebar.tasksTab.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/tasks');
    });
  });

  describe('Testing buttons', () => {
    beforeEach('Come back to Admin Home', () => {
      homePage.openBrowser();
      homePage.adminLink.click();
    });
    it('Home button', async () => {
      await expect(adminHome.homeBtn).toExist();
      await expect(adminHome.homeBtn).toBeClickable();
      await adminHome.homeBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
    it('Home btn link', async () => {
      await expect(adminHome.homeBtnLink).toExist();
      await expect(adminHome.homeBtnLink).toBeClickable();
      await adminHome.homeBtnLink.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });
    it('Admins button', async () => {
      await expect(adminHome.adminsBtn).toExist();
      await expect(adminHome.adminsBtn).toBeClickable();
      await adminHome.adminsBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/admins');
    });
    it('Admins btn link', async () => {
      await expect(adminHome.adminsBtnLink).toExist();
      await expect(adminHome.adminsBtnLink).toBeClickable();
      await adminHome.adminsBtnLink.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/admins');
    });
    it('Super Admins button', async () => {
      await expect(adminHome.superAdminsBtn).toExist();
      await expect(adminHome.superAdminsBtn).toBeClickable();
      await adminHome.superAdminsBtn.click();
      await expect(browser).toHaveUrl(
        'https://alexis-trackgenix-app.vercel.app/admin/super-admins'
      );
    });
    it('Admins button', async () => {
      await expect(adminHome.superAdminsBtnLink).toExist();
      await expect(adminHome.superAdminsBtnLink).toBeClickable();
      await adminHome.superAdminsBtnLink.click();
      await expect(browser).toHaveUrl(
        'https://alexis-trackgenix-app.vercel.app/admin/super-admins'
      );
    });
    it('Employees button', async () => {
      await expect(adminHome.employeesBtn).toExist();
      await expect(adminHome.employeesBtn).toBeClickable();
      await adminHome.employeesBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/employees');
    });
    it('Employees btn link', async () => {
      await expect(adminHome.employeesBtnLink).toExist();
      await expect(adminHome.employeesBtnLink).toBeClickable();
      await adminHome.employeesBtnLink.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/employees');
    });
    it('Projects button', async () => {
      await expect(adminHome.projectsBtn).toExist();
      await expect(adminHome.projectsBtn).toBeClickable();
      await adminHome.projectsBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/projects');
    });
    it('Projects btn link', async () => {
      await expect(adminHome.projectsBtnLink).toExist();
      await expect(adminHome.projectsBtnLink).toBeClickable();
      await adminHome.projectsBtnLink.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/projects');
    });
    it('Timesheets button', async () => {
      await expect(adminHome.timesheetsBtn).toExist();
      await expect(adminHome.timesheetsBtn).toBeClickable();
      await adminHome.timesheetsBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/time-sheets');
    });
    it('Timesheets btn link', async () => {
      await expect(adminHome.timesheetsBtnLink).toExist();
      await expect(adminHome.timesheetsBtnLink).toBeClickable();
      await adminHome.timesheetsBtnLink.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/time-sheets');
    });
    it('Tasks button', async () => {
      await expect(adminHome.tasksBtn).toExist();
      await expect(adminHome.tasksBtn).toBeClickable();
      await adminHome.tasksBtn.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/tasks');
    });
    it('Tasks btn link', async () => {
      await expect(adminHome.tasksBtnLink).toExist();
      await expect(adminHome.tasksBtnLink).toBeClickable();
      await adminHome.tasksBtnLink.click();
      await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin/tasks');
    });
  });
});
