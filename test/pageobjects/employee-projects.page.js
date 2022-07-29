class employeeProjects {

  //Getters
  get titlePage() {
    return $('#root > div > div > section > h2');
  }
  get showAllProjectsBtn() {
    return $('#root > div > div > section > div > button:nth-child(1)');
  }
  get showPmProjects() {
    return $('#root > div > div > section > div > button:nth-child(2)');
  }
  get tablePage() {
    return $('#root > div > div > section > table');
  }
  get bodyTable() {
    return $('#root > div > div > section > table > tbody');
  }
  get projects() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1)');
  }
  get projectsSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-down');
  }
  get projectsSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-up');
  }
  get clientName() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(2)');
  }
  get startDate() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(3)');
  }
  get endDate() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(4)');
  }
  get active() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(5)');
  }
  get role() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(6)');
  }
  get tableRow() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1)');
  }

  //Getters Projects by row
  get goBackBtn() {
    return $('#root > div > div > section > div.projectPage_btnContainer__3YVv1 > button');
  }
  get title() {
    return $('#root > div > div > section > h2.projectPage_titleRole__1qZ7f');
  }
  get table() {
    return $('#root > div > div > section > div.projectPage_box__Fiv4R');
  }
  get membersTitle() {
    return $('#root > div > div > section > h2.projectPage_title__3uoSd');
  }
  get addMemberBtn() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > div > button');
  }
  get memberTable() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > table');
  }
  get headerMemberTable() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > table > thead');
  }
  get nameMemberSortDown() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-down');
  }
  get nameMemberSortUp() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-up');
  }
  get roleMemberSortDown() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > table > thead > tr > th:nth-child(2) > svg.svg-inline--fa.fa-arrow-down');
  }
  get roleMemberSortUp() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > table > thead > tr > th:nth-child(2) > svg.svg-inline--fa.fa-arrow-up');
  }
  get editMemberBtn() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > table > tbody > tr:nth-child(1) > td:nth-child(3) > button');
  }
  get deleteMemberBtn() {
    return $('#root > div > div > section > div.projectPage_divContainer__1FITe > table > tbody > tr:nth-child(1) > td:nth-child(4) > button');
  }

  //Getters add member modal
  get addMemberModalTitle() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2');
  }
  get employeeAddInput() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > select');
  }
  get employeeAddInputMsg() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p');
  }
  get roleAddInput() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select');
  }
  get roleAddInputMsg() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p');
  }
  get addBtn() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button');
  }
  get crossBtn() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img');
  }

  //Getters edit member modal
  get modalEditMemberTitle() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2');
  }
  get employeeInput() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.input_inputContainer__Qsqmz > input');
  }
  get roleInput() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select');
  }
  get editButton() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button');
  }
  get crossEditBtn() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img');
  }
  get errorEditModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > h2');
  }
  get crossEditModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img');
  }

  //Getters delete member modal
  get modalDeleteMemberTitle() {
    return $('#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_title__3h1tt > h2');
  }
  get modalDeleteMemberClose() {
    return $('#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(1)');
  }
  get modalDeleteMemberConfirm() {
    return $('#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)');
  }

}

module.exports = new employeeProjects();
