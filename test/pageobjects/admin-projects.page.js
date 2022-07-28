class adminProjects {
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
  get tableBody() {
    return $('#root > div > div > section > div > table > tbody');
  }
  get addBtn() {
    return $('#root > div > div > section > button');
  }
  get tableRow() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1)');
  }

  //Getters Add Modal

  get modal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get modalHeader() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl'
    );
  }
  get modalTitle() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }
  get projectNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(1) > input'
    );
  }
  get clientNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(2) > input'
    );
  }
  get startDateInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(3) > input'
    );
  }
  get endDateInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(4) > input'
    );
  }
  get descriptionInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.textarea_textareaContainer__zy-Jg > textarea'
    );
  }
  get activeCheckbox() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.input_checkboxContainer__3zrAz'
    );
  }
  get createBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > button'
    );
  }
get crossBtn() {
  return $(
    '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
  );
}
  //Getters Created successfully Modal
  get createdModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div.errorsuccessmodal_container__JBOhN > div'
    );
  }
  get crossCreate() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }

  //Getters Edit Modals
  get editProjectModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get editBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > button'
    );
  }
  get noChangesModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div'
    );
  }
  get crossErrorEdit() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > img'
    );
  }
  get successEdit() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div'
    );
  }
  get crossSuccess() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > img'
    );
  }
  get editDescription() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > div.form_larger__3VW_g > div.textarea_textareaContainer__zy-Jg > textarea'
    );
  }

  //Getters Delete Modal
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
  get crossDelete() {
    return $(
      '#root > div > div > section > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }

  //Getters Sort
  get ProjectNameSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-down');
  }
  get ProjectNameSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-up');
  }
  get clientSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(2) > svg.svg-inline--fa.fa-arrow-down');
  }
  get clientSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(2) > svg.svg-inline--fa.fa-arrow-up');
  }
  get pMSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(3) > svg.svg-inline--fa.fa-arrow-down');
  }
  get pMSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(3) > svg.svg-inline--fa.fa-arrow-up');
  }
  get startDateSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(4) > svg.svg-inline--fa.fa-arrow-down');
  }
  get startDateSortUp() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(4) > svg.svg-inline--fa.fa-arrow-up');
  }
  get endDateSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(5) > svg.svg-inline--fa.fa-arrow-down');
  }
  get endDateSortUp () {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(5) > svg.svg-inline--fa.fa-arrow-up')
  }
  get activeSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(6) > svg.svg-inline--fa.fa-arrow-down');
  }
  get activeSortUp () {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(6) > svg.svg-inline--fa.fa-arrow-up')
  }

  //Getters Row
  get goBackBtn() {
    return $('#root > div > div > section > div.projectPage_btnContainer__eC22p > button');
  }
  get tableRow() {
    return $('#root > div > div > section > div.projectPage_box__3gE75');
  }
  get membersTitle() {
    return $('#root > div > div > section > h2');
  }
  get addMemberBtn() {
    return $('#root > div > div > section > div.projectPage_btnContainerAdd__1WZtW > button');
  }
  get nameSortDown() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-down');
  }
  get nameSortUp() {
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
  get editMemberBtn() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1) > td:nth-child(4) > button');
  }
  get deleteMemberBtn() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1) > td:nth-child(5) > button');
  }
  get employeeRow() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1)');
  }

  //Getters add member modal
  get addMemberTitle() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2');
  }
  get employeeInput() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > select');
  }
  get roleInput() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select');
  }
  get rateInput() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.input_inputContainer__Qsqmz > input');
  }
  get addButton() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button');
  }
  get crossButton() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img');
  }

  //Setters
  async setProjectName(project) {
    await this.projectNameInput.setValue(project);
  }
  async setClientName(client) {
    await this.clientNameInput.setValue(client);
  }
  async setStartDate(sDate) {
    await this.startDateInput.setValue(sDate);
  }
  async setEndDate(eDate) {
    await this.endDateInput.setValue(eDate);
  }
  async setDescription(description) {
    await this.descriptionInput.setValue(description);
  }

  //Setters for editing a project
  async setEditDescription(description) {
    await this.editDescription.setValue(description);
  }

  //Methods

  async createProject(project, client, sDate, eDate, description) {
    await this.projectNameInput.setValue(project);
    await this.clientNameInput.setValue(client);
    await this.startDateInput.setValue(sDate);
    await this.endDateInput.setValue(eDate);
    await this.descriptionInput.setValue(description);
    await this.activeCheckbox.click();
    await this.createBtn.click();
  }
}

module.exports = new adminProjects();
