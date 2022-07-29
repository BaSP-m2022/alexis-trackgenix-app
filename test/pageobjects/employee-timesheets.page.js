class employeeTimesheets {
  //Getters
  get showMyTsBtn() {
    return $('#root > div > div > div > div > button:nth-child(1)');
  }
  get showEmpTsBtn() {
    return $('#root > div > div > div > div > button:nth-child(2)');
  }
  get projectInput() {
    return $('#root > div > div > div > form > div:nth-child(1) > select');
  }
  get projectInputOption() {
    return $('#root > div > div > div > form > div:nth-child(1) > select > option:nth-child(3)');
  }
  get projectInputMsg() {
    return $('#root > div > div > div > form > div:nth-child(1) > p');
  }
  get periodInput() {
    return $('#root > div > div > div > form > div:nth-child(2) > select');
  }
  get periodInputOption() {
    return $('#root > div > div > div > form > div:nth-child(2) > select > option.select_options__1XylX');
  }
  get periodInputMsg() {
    return $('#root > div > div > div > form > div:nth-child(2) > p');
  }
  get searchBtn() {
    return $('#root > div > div > div > form > div:nth-child(3) > button:nth-child(1)');
  }
  get resetBtn() {
    return $('#root > div > div > div > form > div:nth-child(3) > button:nth-child(2)');
  }
  get timesheetTitle() {
    return $('#root > div > div > div > section > h2');
  }
  get addTimesheetBtn() {
    return $('#root > div > div > div > section > div > button');
  }
  get headerTable() {
    return $('#root > div > div > div > section > div > table > thead > tr');
  }
  get bodyTable() {
    return $('#root > div > div > div > section > div > table > tbody');
  }
  get deleteBtn() {
    return $('#root > div > div > div > section > div > table > tbody > tr:nth-child(1) > td.table_tdButton__2Vvae > button');
  }
  get projectSortDown() {
    return $('#root > div > div > div > section > div > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-down');
  }
  get projectSortUp() {
    return $('#root > div > div > div > section > div > table > thead > tr > th:nth-child(1) > svg.svg-inline--fa.fa-arrow-up');
  }
  get row() {
    return $('#root > div > div > div > section > div > table > tbody > tr:nth-child(1)');
  }

  //Getters Add TimeSheet Modal
  get modalTitle() {
    return $(
      '#root > div > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }
  get projectsInputModal() {
    return $(
      '#root > div > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > select'
    );
  }
  get projectsInputModalMsg() {
    return $(
      '#root > div > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > p'
    );
  }
  get projectsInputModalOption() {
    return $(
      '#root > div > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > select > option.select_options__1XylX'
    );
  }
  get createModalBtn() {
    return $(
      '#root > div > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button'
    );
  }
  get crossModalBtn() {
    return $(
      '#root > div > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  get successAddModal() {
    return $(
      '#root > div > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > h2'
    );
  }
  get successAddCrossBtn() {
    return $(
      '#root > div > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }

  //Getters Delete TimeSheet Modal
  get deleteTimeSheetTitle() {
    return $(
      '#root > div > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_title__3h1tt > h2'
    );
  }
  get deleteCloseBtn() {
    return $(
      '#root > div > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(1)'
    );
  }
  get deleteConfirmBtn() {
    return $(
      '#root > div > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)'
    );
  }
  get successDeleteTitle() {
    return $(
      '#root > div > div > div > section > div.errorsuccessmodal_container__JBOhN > div > div > h2'
    );
  }
  get successDeleteCrossBtn() {
    return $(
      '#root > div > div > div > section > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }

  //Getters Task Row
  get goBackBtn() {
    return $('#root > div > div > section > button');
  }
  get tasksTitle() {
    return $('#root > div > div > section > h2');
  }
  get tasksInfo() {
    return $('#root > div > div > section > div.tasks_box__3ACLv');
  }
  get addTaskBtn() {
    return $('#root > div > div > section > div.tasks_divContainer__433AO > button');
  }
  get tasksTable() {
    return $('#root > div > div > section > div.tasks_divContainer__433AO > table');
  }
  get taskTableHeader() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > table > thead > tr'
    );
  }
  get editTaskBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > table > tbody > tr > td:nth-child(7) > button'
    );
  }
  get deleteTaskBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > table > tbody > tr > td:nth-child(8) > button'
    );
  }


  //Getters Add Task Modal
  get addModalTitle() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }
  get taskNameInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get taskNameInputMsg() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p'
    );
  }
  get workedHoursInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get workedHoursInputMsg() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p'
    );
  }
  get descriptionInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get descriptionInputMsg() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > p'
    );
  }
  get statusInput() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select'
    );
  }
  get statusInputMsg() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > p'
    );
  }
  get statusOption() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select > option:nth-child(3)'
    );
  }
  get createTaskBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > button'
    );
  }
  get crossTaskBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  get successTaskModal() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > h2'
    );
  }
  get successTaskCrossBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > img'
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
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > button'
    );
  }
  get crossEditBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  get editErrorModal() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > h2'
    );
  }
  get editErrorModalCross() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > img'
    );
  }
  get editSuccessModal() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > h2'
    );
  }
  get editSuccessCrossModal() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > img'
    );
  }

  //Getters Delete Task Modal
  get deleteModalTitle() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.confirmModal_title__3h1tt > h2'
    );
  }
  get closeDeleteModalBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(1)'
    );
  }
  get confirmDeleteModalBtn() {
    return $(
      '#root > div > div > section > div.tasks_divContainer__433AO > div > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)'
    );
  }
  get successDeleteModal() {
    return $(
      '#root > div > div > section > div.errorsuccessmodal_container__JBOhN > div > div > h2'
    );
  }
  get successDeleteCrossBtn() {
    return $(
      '#root > div > div > section > div.errorsuccessmodal_container__JBOhN > div > div > img'
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
    await this.taskNameInput.setValue(taskName);
    await this.workedHoursInput.setValue(hours);
    await this.descriptionInput.setValue(description);
    await this.statusInput.click();
    await this.statusOption.click();
    await this.createTaskBtn.click();
  }

  async editTask(editTaskName, editWorkedHours, editDescription) {
    await this.taskNameEditInput.setValue(editTaskName);
    await this.workedHoursEditInput.setValue(editWorkedHours);
    await this.descriptionEditInput.setValue(editDescription);
    await this.editBtn.click();
  }
}

module.exports = new employeeTimesheets();
