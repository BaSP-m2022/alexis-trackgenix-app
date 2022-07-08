class adminTimesheet {
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
  //Getters - Add employee
  get addBtn() {
    return $('#root > div > div > section > button');
  }
  get createTimesheetModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get projectsSelector() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > select'
    );
  }
  get projectOption() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > select > option:nth-child(5)'
    );
  }
  get tasksSelector() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select'
    );
  }
  get taskOption() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select > option:nth-child(4)'
    );
  }
  get approvedCheckbox() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.input_checkboxContainer__3zrAz > input'
    );
  }
  get createBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button'
    );
  }
  get crossCreateModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  //Getter - Employee Created Modal
  get successCreate() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div'
    );
  }
  get crossSuccessCreate() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }

  //Getters - Edit Employee
  get editModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get editProjectsSelector() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > select'
    );
  }
  get editProjectOption() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > select > option:nth-child(9)'
    );
  }
  get editTasksSelector() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select'
    );
  }
  get editTaskOption() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select > option:nth-child(12)'
    );
  }
  get editApprovedCheckbox() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.input_checkboxContainer__3zrAz > input'
    );
  }
  get editBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button'
    );
  }
  get errorEdit() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div'
    );
  }
  get crossErrorEdit() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }
  get crossEditModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }

  get successEdit() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div'
    );
  }
  get crossSuccessEdit() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }
  //Getters - Delete Employee
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

  //Methods
  async createTimesheet() {
    await this.projectsSelector.click();
    await this.projectOption.click();
    await this.tasksSelector.click();
    await this.taskOption.click();
    await this.approvedCheckbox.click();
    await this.createBtn.click();
  }
}

module.exports = new adminTimesheet();
