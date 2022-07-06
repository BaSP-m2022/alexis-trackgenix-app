class employeeTimesheets {
  //Getters
  get title() {
    return $('#root > div > div > section > h2');
  }
  get table() {
    return $('#root > div > div > section > div > table');
  }
  get headerTable() {
    return $('#root > div > div > section > div > table > thead');
  }
  get bodyTable() {
    return $('#root > div > div > section > div > table > tbody');
  }
  get projects() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(1)');
  }
  get approvalPM() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(2)');
  }
  get workedHours() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(3)');
  }
}

module.exports = new employeeTimesheets();
