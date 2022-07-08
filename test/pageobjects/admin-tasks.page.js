class adminTasks {
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
  //Getters - Add Task
  get addBtn() {
    return $('#root > div > div > section > button');
  }
  get createTaskModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get taskNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get startDateInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get workedHoursInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get descriptionInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input'
    );
  }
  get statusSelector() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select'
    );
  }
  get statusOption() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select > option:nth-child(3)'
    );
  }
  get cancelBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button:nth-child(6)'
    );
  }
  get createBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button:nth-child(7)'
    );
  }
  get crossCreateModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  //Getter - Task Created Modal
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

  //Getters - Edit Task
  get editModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get editTaskName() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get editStartDate() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get editWorkedHours() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get editDescription() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input'
    );
  }
  get editStatusSelector() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select'
    );
  }
  get editStatusOption() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select > option:nth-child(4)'
    );
  }
  get cancelEditBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button:nth-child(6)'
    );
  }
  get editBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button:nth-child(7)'
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
  //Getters - Delete Task
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

  //Setters - Add new Task
  async setTaskName(task) {
    await this.taskNameInput.setValue(task);
  }
  async setStartDate(date) {
    await this.startDateInput.setValue(date);
  }
  async setWorkedHours(hours) {
    await this.workedHoursInput.setValue(hours);
  }
  async setDescription(description) {
    await this.descriptionInput.setValue(description);
  }

  //Setters - Edit a Task
  async setEditTaskName(editTask) {
    await this.editTaskName.setValue(editTask);
  }
  async setEditStartDate(editDate) {
    await this.editStartDate.setValue(editDate);
  }
  async setEditWorkedHours(editHours) {
    await this.editWorkedHours.setValue(editHours);
  }
  async setEditDescription(editDescription) {
    await this.editDescription.setValue(editDescription);
  }

  //Methods
  async createTask(task, date, hours, description) {
    await this.taskNameInput.setValue(task);
    await this.startDateInput.setValue(date);
    await this.workedHoursInput.setValue(hours);
    await this.descriptionInput.setValue(description);
    await this.statusSelector.click();
    await this.statusOption.click();
    await this.createBtn.click();
  }
}

module.exports = new adminTasks();
