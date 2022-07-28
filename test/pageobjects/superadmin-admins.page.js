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
        return $('#root > div > div > section > table > tbody > tr:nth-child(1) > td:nth-child(4) > button');
    }
    get deleteBtn() {
        return $('#root > div > div > section > table > tbody > tr:nth-child(1) > td:nth-child(5) > button');
    }
    get tableRow() {
        return $('#root > div > div > section > table > tbody > tr:nth-child(1)');
    }

    //Getters Add Modal
    get addModalTitle() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2');
    }
    get addFNameInput() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input');
    }
    get addFNameMsg() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p');
    }
    get addLNameInput() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input');
    }
    get addLNameMsg() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p');
    }
    get addEmailInput() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input');
    }
    get addEmailMsg() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > p');
    }
    get addPasswordInput() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input');
    }
    get addPasswordMsg() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > p');
    }
    get addCreateBtn() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.add_buttonBox__1KmX9 > button');
    }
    get addCrossBtn() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img');
    }

    //Getters Edit Modal
    get editModalTitle() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2');
    }
    get editFNameInput() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input');
    }
    get editFNameMsg() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p');
    }
    get editLNameInput() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input');
    }
    get editLNameMsg() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p');
    }
    get editEmailInput() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input');
    }
    get editEmailMsg() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > p');
    }
    get editPasswordInput() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input');
    }
    get editPasswordMsg() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > p');
    }
    get editCreateBtn() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(5) > button');
    }
    get editCrossBtn() {
        return $('#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img');
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

    //Methods Add Modal
    async addAdmin(firstName, lastName, email, password) {
        await this.addFNameInput.setFNameInput(firstName);
        await this.addLNameInput.setLNameInput(lastName);
        await this.addEmailInput.setEmailInput(email);
        await this.addPasswordInput.setPasswordInput(password);
        await this.addCreateBtn.click();
    }

}

module.exports = new superAdminAdmins();