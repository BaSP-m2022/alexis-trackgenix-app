class adminHome {
  //Getters
  get headerTitle() {
    return $('#root > div > header > div.header_pathname__qN2RB');
  }
  get title() {
    return $('#root > div > div > section > h2');
  }
  get homeBtn() {
    return $('#root > div > div > section > div > button:nth-child(1)');
  }
  get homeBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(1) > a');
  }
  get adminsBtn() {
    return $('#root > div > div > section > div > button:nth-child(2)');
  }
  get adminsBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(2) > a');
  }
  get superAdminsBtn() {
    return $('#root > div > div > section > div > button:nth-child(3)');
  }
  get superAdminsBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(3) > a');
  }
  get employeesBtn() {
    return $('#root > div > div > section > div > button:nth-child(4)');
  }
  get employeesBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(4) > a');
  }
  get projectsBtn() {
    return $('#root > div > div > section > div > button:nth-child(5)');
  }
  get projectsBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(5) > a');
  }
  get timesheetsBtn() {
    return $('#root > div > div > section > div > button:nth-child(6)');
  }
  get timesheetsBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(6) > a');
  }
  get tasksBtn() {
    return $('#root > div > div > section > div > button:nth-child(7)');
  }
  get tasksBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(7) > a');
  }
}
module.exports = new adminHome();
