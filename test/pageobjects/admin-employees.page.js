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
  //Getters - Add employee
  get addBtn() {
    return $('#root > div > div > section > button');
  }
  get createEmployeeModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get firstNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get lastNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get phoneInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get emailInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input'
    );
  }
  get pwInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(5) > input'
    );
  }
  get timesheetSelector() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(6) > select'
    );
  }
  get isPMCheckbox() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(7) > input'
    );
  }
  get activeCheckbox() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(8) > input'
    );
  }
  get projectsSelector() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(9) > select'
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
  get errorCreate() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div'
    );
  }
  get crossErrorCreate() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }
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
  get editFirstName() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get editLastName() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get editPhone() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get editEmail() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input'
    );
  }
  get editPw() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(5) > input'
    );
  }
  get editBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button'
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
  //Setters - Add employee
  async setFirstName(firstName) {
    await this.firstNameInput.setValue(firstName);
  }
  async setLastName(lastName) {
    await this.lastNameInput.setValue(lastName);
  }
  async setPhone(phone) {
    await this.phoneInput.setValue(phone);
  }
  async setEmail(email) {
    await this.emailInput.setValue(email);
  }
  async setPw(password) {
    await this.pwInput.setValue(password);
  }
  //Setters - Edit Employee
  async setEditFirstName(firstName) {
    await this.editFirstName.setValue(firstName);
  }
  async setEditLastName(lastName) {
    await this.editLastName.setValue(lastName);
  }
  async setEditPhone(phone) {
    await this.editPhone.setValue(phone);
  }
  async setEditPw(password) {
    await this.editPw.setValue(password);
  }
  //Methods
  async createEmployee(firstName, lastName, phone, email, password) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.phoneInput.setValue(phone);
    await this.emailInput.setValue(email);
    await this.pwInput.setValue(password);
    await this.createBtn.click();
  }
}
module.exports = new adminEmployees();
