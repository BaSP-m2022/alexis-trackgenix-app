class employeeProjects {
  //Getters
  get title() {
    return $('#root > div > div > section > h2');
  }
  get table() {
    return $('#root > div > div > section > div > table');
  }
  get tableHeader() {
    return $('#root > div > div > section > div > table > thead');
  }
  get bodyTable() {
    return $('#root > div > div > section > div > table > tbody');
  }
  get projects() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(1)');
  }
  get clientName() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(2)');
  }
  get startDate() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(3)');
  }
  get endDate() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(4)');
  }
  get active() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(5)');
  }
  get role() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(6)');
  }
  get rate() {
    return $('#root > div > div > section > div > table > thead > tr > th:nth-child(7)');
  }
}

module.exports = new employeeProjects();
