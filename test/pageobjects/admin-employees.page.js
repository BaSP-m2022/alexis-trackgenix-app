class adminEmployees {
  //Getters general
  get title() {
    return $('#root > div > div > section > h2');
  }
  get table() {
    return $('#root > div > div > section > div > table');
  }
  get tableHeader() {
    return $('#root > div > div > section > div > table > thead');
  }
  get tableBody() {
    return $('#root > div > div > section > div > table > tbody');
  }
  get tableRow() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1)')
  }

  //Getters - Delete Employee
  get deleteBtn() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1) > td.table_tdButton__2Vvae > button');
  }
  get confirmModal() {
    return $('#root > div > div > section > div.confirmModal_modalOvelay___5vol > div');
  }
  get cancelDelete() {
    return $(
      '#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)'
    );
  }
  get confirmDelete() {
    return $(
      '#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(1)'
    );
  }
  get successDelete() {
    return $('#root > div > div > section > div.errorsuccessmodal_container__JBOhN > div');
  }
  get crossSuccessDelete() {
    return $(
      '#root > div > div > section > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }

  //Getters - Sort
  get firstNameSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-down');
  }
  get firstNameSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-up');
  }
  get lastNameSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(2) > svg.svg-inline--fa.fa-arrow-down');
  }
  get lastNameSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(2) > svg.svg-inline--fa.fa-arrow-up');
  }
  get phoneSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(3) > svg.svg-inline--fa.fa-arrow-down');
  }
  get phoneSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(3) > svg.svg-inline--fa.fa-arrow-up');
  }
  get emailSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(4) > svg.svg-inline--fa.fa-arrow-down');
  }
  get emailSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(4) > svg.svg-inline--fa.fa-arrow-up');
  }
  get activeSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(5) > svg.svg-inline--fa.fa-arrow-down');
  }
  get activeSortUp () {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(5) > svg.svg-inline--fa.fa-arrow-up')
  }

  //Getters row
  get goBackBtn() {
    return $('#root > div > div > section > div.employeePage_btnContainer__oAqUU > button');
  }
  get table() {
    return $('#root > div > div > section > div.employeePage_information__2fRYX');
  }
  get projectsTitle() {
    return $('#root > div > div > section > h2');
  }
  get pMSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-down');
  }
  get pMSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-up');
  }
  get roleSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(2) > svg.svg-inline--fa.fa-arrow-down');
  }
  get roleSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(2) > svg.svg-inline--fa.fa-arrow-up');
  }
  get rateSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(3) > svg.svg-inline--fa.fa-arrow-down');
  }
  get rateSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(3) > svg.svg-inline--fa.fa-arrow-up');
  }
  get projectRow() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1)');
  }

}
module.exports = new adminEmployees();
