class superAdminAdmins {
  //Getters
  get adminsTitle() {
    return $('#root > div > div > section > h2');
  }
  get addAdminBtn() {
    return $('#root > div > div > section > div > button');
  }
  get adminsTable() {
    return $('#root > div > div > section > table');
  }
  get headerTable() {
    return $('#root > div > div > section > table > thead');
  }
  get editBtn() {
    return $(
      '#root > div > div > section > table > tbody > tr:nth-child(1) > td:nth-child(4) > button'
    );
  }
  get deleteBtn() {
    return $(
      '#root > div > div > section > table > tbody > tr:nth-child(1) > td:nth-child(5) > button'
    );
  }
  get tableRow() {
    return $('#root > div > div > section > table > tbody > tr:nth-child(1)');
  }

  //Getters Add Modal
  get addModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get addModalTitle() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }
  get addFNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get addFNameMsg() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p'
    );
  }
  get addLNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get addLNameMsg() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p'
    );
  }
  get addEmailInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get addEmailMsg() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > p'
    );
  }
  get addPasswordInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input'
    );
  }
  get addPasswordMsg() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > p'
    );
  }
  get addCreateBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.add_buttonBox__1KmX9 > button'
    );
  }
  get addCrossBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  get successModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div'
    );
  }
  get crossSuccessModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }

  //Getters Edit Modal
  get editModal() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get editModalTitle() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }
  get editFNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    );
  }
  get editFNameMsg() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p'
    );
  }
  get editLNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    );
  }
  get editLNameMsg() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p'
    );
  }
  get editEmailInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    );
  }
  get editEmailMsg() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > p'
    );
  }
  get editPasswordInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input'
    );
  }
  get editPasswordMsg() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > p'
    );
  }
  get editCreateBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(5) > button'
    );
  }
  get editCrossBtn() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  get editErrorModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div'
    );
  }
  get crossEditError() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }
  get editSuccess() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div'
    );
  }
  get crossEditSuccess() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.errorsuccessmodal_container__JBOhN > div > div > img'
    );
  }
  //Delete Modal
  get deleteModal() {
    return $('#root > div > div > section > div.confirmModal_modalOvelay___5vol > div');
  }
  get confirmDelete() {
    return $(
      '#root > div > div > section > div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)'
    );
  }
  get cancelDelete() {
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

  //Getters Restore Screen
  get restoreDeleteModal() {
    return $('#root > div > div > section > div > div');
  }
  get restoreConfirmDelete() {
    return $(
      '#root > div > div > section > div > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)'
    );
  }
  get restoreSuccessDelete() {
    return $('#root > div > div > section > div > div');
  }
  get crossRestoreSuccess() {
    return $('#root > div > div > section > div > div > div > img');
  }

  //Setters Add Modal
  async setFNameInput(firstName) {
    await this.addFNameInput.setValue(firstName);
  }
  async setLNameInput(lastName) {
    await this.addLNameInput.setValue(lastName);
  }
  async setEmailInput(email) {
    await this.addEmailInput.setValue(email);
  }
  async setPasswordInput(password) {
    await this.addPasswordInput.setValue(password);
  }
  //Setters Edit Modal
  async setEditFNameInput(editFirstName) {
    await this.editFNameInput.setValue(editFirstName);
  }
  async setEditLNameInput(editLastName) {
    await this.editLNameInput.setValue(editLastName);
  }
  async setEditEmailInput(editEmail) {
    await this.editEmailInput.setValue(editEmail);
  }
  async setEditPasswordInput(editPassword) {
    await this.editPasswordInput.setValue(editPassword);
  }
  //Methods Add Modal
  async addAdmin(firstName, lastName, email, password) {
    await this.addFNameInput.setValue(firstName);
    await this.addLNameInput.setValue(lastName);
    await this.addEmailInput.setValue(email);
    await this.addPasswordInput.setValue(password);
    await this.addCreateBtn.click();
  }
  async editAdmin(editFirstName, editLastName, editEmail, editPassword) {
    await this.editFNameInput.setValue(editFirstName);
    await this.editLNameInput.setValue(editLastName);
    await this.editEmailInput.setValue(editEmail);
    await this.editPasswordInput.setValue(editPassword);
    await this.editCreateBtn.click();
  }
}

module.exports = new superAdminAdmins();
