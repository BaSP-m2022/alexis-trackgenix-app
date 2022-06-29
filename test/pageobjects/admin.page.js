class AdminPage {
    //Getters
    get adminUser() { return $('section > div > div > button:nth-child(1) > a')}
    get employeeUser() { return $('section > div > div > button:nth-child(2)')}
    get projectSidebar() { return $('aside > nav > ul > li:nth-child(5) > a')}

    //admin view
    get projectsBtn() { return $('button:nth-child(5) > a')}
    get projectsTitle() { return $('section > h2')}
    get addProject() { return $('section > button')}
    get projectForm() { return $('div.modal-form_container__A3c7w > div')}
    get createBtn() { return $(' div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > button')}
    get errorContainerName() { return $('form > div:nth-child(1) > p')}
    get errorContainerClient() { return $('form > div:nth-child(2) > p')}
    get activeCheckbox() { return $('div.input_checkboxContainer__3zrAz > input')}

    //inputs

    get inputName() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(1) > input')}
    get inputClient() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(2) > input')}
    get inputStartDate() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(3) > input')}
    get inputEndDate() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(4) > input')}
    get inputDescription() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.textarea_textareaContainer__zy-Jg > textarea')}

    //Edit
    get changeName() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > div.form_divcontainer__35TLE > div:nth-child(1) > input')}
    get changeClient() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > div.form_divcontainer__35TLE > div:nth-child(2) > input')}
    get changeStartDate() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > div.form_divcontainer__35TLE > div:nth-child(4) > input')}
    get changeEndDate() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > div.form_divcontainer__35TLE > div:nth-child(5) > input')}
    get changeDescription() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div > div.form_larger__3VW_g > div.textarea_textareaContainer__zy-Jg > textarea')}

    get crossBtnEdit() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div.errorsuccessmodal_container__JBOhN > div > div > img')}
    
    get editBtn() { return $('div > table > tbody > tr:nth-child(6) > td:nth-child(8) > button')}
    get editForm() { return $('div.modal-form_container__A3c7w > div')}
    get editAcceptBtn() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > button')}
    get noChangesModal() { return $('div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div')}
    get addMember() { return $('div.form_larger__3VW_g > div:nth-child(2) > div > button')}
    get submitBtn() { return $('button:nth-child(2)')}
    get errorContainerRole() { return $('form > div:nth-child(2) > p')}
    get errorContainerRate() { return $('div.input_inputContainer__Qsqmz > p')}
    get chooseMember() { return $('div:nth-child(1) > select')}
    get chooseEmployee() { return $('div:nth-child(1) > select > option:nth-child(6)')}
    get chooseRole() { return $('div:nth-child(2) > select')}
    get chooseQA() { return $('option:nth-child(3)')}
    get choosePM() { return $('option:nth-child(5)')}
    get insertRate() { return $('iv.input_inputContainer__Qsqmz > input')}

    //Delete
    get deleteBtn() { return $('div > table > tbody > tr:nth-child(13) > td:nth-child(9) > button')}
    get deleteModal() { return $('div.confirmModal_modalOvelay___5vol > div')}
    get closeDeleteBtn() { return $('div.confirmModal_modalButton__3CcD9 > button:nth-child(2)')}
    get confirmDeleteBtn() { return $('div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(1)')}

    //Setters

    //Add setter
    async setName(name) {
        await this.inputName.setValue(name);
    }
    async setClient(client) {
        await this.inputClient.setValue(client);
    }
    async setStartDate(startDate) {
        await this.inputStartDate.setValue(startDate);
    }
    async setEndDate(endDate) {
        await this.inputEndDate.setValue(endDate);
    }
    async setDescription(description) {
        await this.inputDescription.setValue(description);
    }

    //Edit setter
    async editName(name) {
        await this.changeName.setValue(name);
    }
    async editClient(client) {
        await this.changeClient.setValue(client);
    }
    async editStartDate(startDate) {
        await this.changeStartDate.setValue(startDate);
    }
    async editEndDate(endDate) {
        await this.changeEndDate.setValue(endDate);
    }
    async editDescription(description) {
        await this.changeDescription.setValue(description);
    }

    //Member setter
    async insertRateNumber(rate) {
        await this.insertRate.setValue(rate);
    }
    //Methods
    async create (name, client, startDate, endDate, description) {
        await this.setName(name);
        await this.setClient(client);
        await this.setStartDate(startDate);
        await this.setEndDate(endDate);
        await this.setDescription(description);
        await this.activeCheckbox.click()
        await this.createBtn.click();
    }
    async edit (name, client, startDate, endDate, description) {
        await this.editName(name),
        await this.editClient(client);
        await this.editStartDate(startDate);
        await this.editEndDate(endDate);
        await this.editDescription(description);
        await this.editAcceptBtn.click();
    }
    
    open () {
        return browser.url('https://alexis-trackgenix-app.vercel.app/home');
    }
    admin () {
        return this.adminUser.click();
    }
}

module.exports = new AdminPage();