class sidebar {
  //Getters - HOME
  get sidebarContainer() {
    return $('#root > div > aside');
  }
  get sidebarHeader() {
    return $('#root > div > aside > div > a');
  }
  get loginTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(1) > a');
  }
  get signUpTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(2) > a');
  }
  get homeTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(1) > a');
  }

  //Getters - ADMIN HOME
  get employeesTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(4) > a');
  }
  get projectsTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(5) > a');
  }
  get timesheetsTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(6) > a');
  }
  get tasksTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(7) > a');
  }
  get logOutTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(8) > a');
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
  get empProfileTab() {
    return $('#root > div > aside > nav > ul > li:nth-child(4) > a');
  }
}
module.exports = new sidebar();
