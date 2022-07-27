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

  //Add Modal

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
  //Created successfully Modal
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

  //Edit Modals
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

  //Delete Modal
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
