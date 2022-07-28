class employeeTimesheets {
  //Getters
  get title() {
    return $('#root > div > div > section > h2');
  }
  get addTimeSheetBtn() {
    return $('#root > div > div > section > div > button');
  }
  get table() {
    return $('#root > div > div > section > table');
  }
  get headerTable() {
    return $('#root > div > div > section > table > thead > tr');
  }
  get bodyTable() {
    return $('#root > div > div > section > table > tbody');
  }
  get projects() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(1)');
  }
  get approvalPM() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(2)');
  }
  get workedHours() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(3)');
  }
  get period() {
    return $('#root > div > div > section > table > thead > tr > th:nth-child(4)');
  }

  //Getters Add TimeSheet Modal
  get modalTitle() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }
  get projectsInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > select'
    );
  }
  get createBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button'
    );
  }
  get crossBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }

  //Getters Delete TimeSheet Modal
  get deleteTimeSheetTitle() {
    return $(
      '#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_title__3h1tt > h2'
    );
  }
  get deleteCloseBtn() {
    return $(
      '#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(1)'
    );
  }
  get deleteConfirmBtn() {
    return $(
      '#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)'
    );
  }

  //Getters Task Row
  get goBackBtn() {
    return $('#root > div > div > section > div.tasks_btnContainer__3wp0x > button');
  }
  get tasksTitle() {
    return $('#root > div > div > section > h2');
  }
  get tasksInfo() {
    return $('#root > div > div > section > div.tasks_box__3ACLv');
  }
  get addTaskBtn() {
    return $('#root > div > div > section > div.tasks_divContainer__433AO > div > button');
  }
  get tasksTable() {
    return $('#root > div > div > section > div.tasks_divContainer__433AO > table');
  }
  get taskRow() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > table > tbody > tr:nth-child(1)'
    );
  }
  get editTaskBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > table > tbody > tr:nth-child(1) > td:nth-child(7) > button'
    );
  }
  get deleteTaskBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > table > tbody > tr:nth-child(1) > td:nth-child(8) > button'
    );
  }
  get nameErrorMsg() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p'
    );
  }
  get workedHoursErrorMsg() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p'
    );
  }
  get descriptionErrorMsg() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > p'
    );
  }
  get statusErrorMsg() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > p'
    );
  }

  //Getters Add Task Modal
  get addModalTitle() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }
  get taskNameInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get workedHoursInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get descriptionInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get statusInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select'
    );
  }
  get statusOption() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select > option:nth-child(1)'
    );
  }
  get createTaskBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > button'
    );
  }
  get crossTaskBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }

  //Getters Edit Task Modal
  get editModalTitle() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }
  get taskNameEditInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get workedHoursEditInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get descriptionEditInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get statusEditInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select'
    );
  }
  get editBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > button'
    );
  }
  get crossEditBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  get editErrorModal() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div'
    );
  }
  //Getters Delete Task Modal
  get deleteModalTitle() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_title__3h1tt > h2'
    );
  }
  get closeDeleteModalBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(1)'
    );
  }
  get confirmDeleteModalBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)'
    );
  }

  //Setters Add Task
  async setTaskName(taskName) {
    await this.taskNameInput.setValue(taskName);
  }
  async setWorkedHours(hours) {
    await this.workedHoursInput.setValue(hours);
  }
  async setDescription(description) {
    await this.descriptionInput.setValue(description);
  }
  //Setters Edit Task
  async setEditTaskName(editTaskName) {
    await this.taskNameEditInput.setValue(editTaskName);
  }
  async setEditWorkedHours(editWorkedHours) {
    await this.workedHoursEditInput.setValue(editWorkedHours);
  }
  async setEditDescription(editDescription) {
    await this.descriptionEditInput.setValue(editDescription);
  }
  //Methods Add Task
  async addTask(taskName, hours, description) {
    await this.taskNameInput.setTaskName(taskName);
    await this.workedHoursInput.setWorkedHours(hours);
    await this.descriptionInput.setDescription(description);
    await this.statusInput.click();
    await this.statusOption.click();
    await this.createTaskBtn.click();
  }

  async editTask(editTaskName, editWorkedHours, editDescription) {
    await this.taskNameEditInput.setValue(editTaskName);
    await this.workedHoursEditInput.setValue(editWorkedHours);
    await this.descriptionEditInput.setValue(editDescription);
    await this.editTaskBtn.click();
  }
}

module.exports = new employeeTimesheets();
