class sidebar {
  //Getters - HOME
  get sidebarContainer() {
    return $('#root > div > aside');
  }
  get loginTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(1) > a');
  }
  get signUpTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(2) > a');
  }

  //Getters - ADMIN HOME
  get homeTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(1) > a');
  }
  get employeesTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(2) > a');
  }
  get projectsTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(3) > a');
  }
  get logOutTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(4) > a');
  }

  //Getters - EMPLOYEE HOME
  get empHomeTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(1) > a');
  }
  get empProjectsTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(2) > a');
  }
  get empTimesheetsTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(3) > a');
  }
  get empLogOutTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(4) > a');
  }

  // Getters - SUEPER ADMIN HOME
  get spHomeTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(1) > a');
  }
  get spAdminsTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(2) > a');
  }
  get spLogOutTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(3) > a');
  }
}
module.exports = new sidebar();
