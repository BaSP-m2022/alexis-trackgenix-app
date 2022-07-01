const homePage = require('../pageobjects/home.page');
const sidebar = require('../pageobjects/sidebar.page');
const header = require('../pageobjects/header.page');
const employeeHome = require('../pageobjects/employee-home.page');

describe('Testing Employee Home Page', () => {
  beforeAll('Go to Employee Home', () => {
    homePage.openBrowser();
    homePage.employeeLink.click();
  });

  describe('Testing Titles', () => {
    it('Checking header title', async () => {
      await expect(header.headerTitle).toExist();
      await expect(header.headerTitle).toHaveText('Employee');
    });
    it('Checking Employee home title', async () => {
      await expect(employeeHome.title).toExist();
      await expect(employeeHome.title).toHaveText('Employee Home');
    });
  });

  describe('Testing Sidebar', () => {
    it('Home tab', async () => {
      await expect(sidebar.homeTab).toExist();
      await expect(sidebar.homeTab).toBeClickable();
      await sidebar.homeTab.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee');
    });
    it('Home tab', async () => {
      await expect(sidebar.projectsTab).toExist();
      await expect(sidebar.projectsTab).toBeClickable();
      await sidebar.projectsTab.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee/projects');
    });
    it('Home tab', async () => {
      await expect(sidebar.timesheetsTab).toExist();
      await expect(sidebar.timesheetsTab).toBeClickable();
      await sidebar.timesheetsTab.click();
      await expect(browser).toHaveUrl(
        'http://alexis-trackgenix-app.vercel.app/employee/time-sheet'
      );
    });
  });

  describe('Testing Buttons', () => {
    it('Home button', async () => {
      await expect(employeeHome.homeBtn).toExist();
      await expect(employeeHome.homeBtn).toBeClickable();
      await employeeHome.homeBtn.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee/home');
    });
    it('Home btn link', async () => {
      await expect(employeeHome.homeBtnLink).toExist();
      await expect(employeeHome.homeBtnLink).toBeClickable();
      await employeeHome.homeBtnLink.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee/home');
    });
    it('Timesheets button', async () => {
      await expect(employeeHome.timesheetBtn).toExist();
      await expect(employeeHome.timesheetBtn).toBeClickable();
      await employeeHome.timesheetBtn.click();
      await expect(browser).toHaveUrl(
        'http://alexis-trackgenix-app.vercel.app/employee/time-sheet'
      );
    });
    it('Home btn link', async () => {
      await expect(employeeHome.timesheetBtnLink).toExist();
      await expect(employeeHome.timesheetBtnLink).toBeClickable();
      await employeeHome.timesheetBtnLink.click();
      await expect(browser).toHaveUrl(
        'http://alexis-trackgenix-app.vercel.app/employee/time-sheet'
      );
    });
    it('Projects button', async () => {
      await expect(employeeHome.projectsBtn).toExist();
      await expect(employeeHome.projectsBtn).toBeClickable();
      await employeeHome.projectsBtn.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee/projects');
    });
    it('Home btn link', async () => {
      await expect(employeeHome.projectsBtnLink).toExist();
      await expect(employeeHome.projectsBtnLink).toBeClickable();
      await employeeHome.projectsBtnLink.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee/projects');
    });
    it('Profile button', async () => {
      await expect(employeeHome.profileBtn).toExist();
      await expect(employeeHome.profileBtn).toBeClickable();
      await employeeHome.profileBtn.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee/profile');
    });
    it('Profile btn link', async () => {
      await expect(employeeHome.profileBtnLink).toExist();
      await expect(employeeHome.profileBtnLink).toBeClickable();
      await employeeHome.profileBtnLink.click();
      await expect(browser).toHaveUrl('http://alexis-trackgenix-app.vercel.app/employee/profile');
    });
  });
});
