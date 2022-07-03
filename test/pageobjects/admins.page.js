class Admin {

    // Getters

    get adminTitle () {return $('#root > div > div > section > div > h2')}
    get adminTable () {return $('#root > div > div > section > div > div > table')}

    get idTable () {return $('#root > div > div > section > div > div > table > thead > tr > th:nth-child(1)')}
    get firstNameTable () {return $('#root > div > div > section > div > div > table > thead > tr > th:nth-child(2)')}
    get lastNameTable () {return $('#root > div > div > section > div > div > table > thead > tr > th:nth-child(3)')}
    get emailTable () {return $('#root > div > div > section > div > div > table > thead > tr > th:nth-child(4)')}
    get passwordTable () {return $('#root > div > div > section > div > div > table > thead > tr > th:nth-child(5)')}
    get activeTable () {return $('#root > div > div > section > div > div > table > thead > tr > th:nth-child(6)')}

    get editBtn () {return $('tr:nth-child(1) > td:nth-child(7) > button > svg')}
    get deleteBtn () {return $('tr:nth-child(1) > td:nth-child(8) > button > svg')}
    get addBtn () {return $('#root > div > div > section > div > button')}

    get modalTitle () {return $('div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2')}
    get modalFirst () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[1]/input')}
    get modalLast () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[2]/input')}
    get modalEmail () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[3]/input')}
    get modalPass () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[4]/input')}
    get modalActive () {return $('div.input_checkboxContainer__3zrAz')}
    get modalCreate () {return $('div.add_buttonBox__1Pzi6 > button')}

    get successTitle () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[7]/div/div/h2')}
    get successCross () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[7]/div/div/img')}

    get editModalTitle () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[1]/h2')}
    get firstNameEdit () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[1]/input')}
    get firstNameEditMsg () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[1]/p')}
    get lastNameEdit () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[2]/input')}
    get lastNameEditMsg () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[2]/p')}
    get emailEdit () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[3]/input')}
    get emailEditMsg () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[3]/p')}
    get passwordEdit () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[4]/input')}
    get passwordEditMsg () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[4]/p')}
    get editModalBtn () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[6]/button')}
    get editCross () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[1]/img')}

    get successEditMsg () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[7]/div/div/h2')}
    get crossSuccessEdit () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]/form/div[7]/div/div/img')}

    get deleteTitle () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[1]/h2')}
    get deleteP () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[2]')}
    get deleteClose () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[3]/button[2]')}
    get deleteConfirm () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div[3]/button[1]')}

    get successDeleteMsg () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div/h2')}
    get successDeleteCross () {return $('//*[@id="root"]/div/div/section/div/div[2]/div/div/img')}

    // Setters

    async setAdminName(name) {
        await this.modalFirst.setValue(name);
    }

    async setAdminLastName(lastName) {
        await this.modalLast.setValue(lastName);
    }

    async setAdminEmail(email) {
        await this.modalEmail.setValue(email);
    }

    async setAdminPassword(password) {
        await this.modalPass.setValue(password);
    }

    async setEditName(name) {
        await this.firstNameEdit.setValue(name);
    }

    async setEditLastName(lastName) {
        await this.lastNameEdit.setValue(lastName);
    }

    async setEditEmail(email) {
        await this.emailEdit.setValue(email);
    }

    async setEditPassword(password) {
        await this.passwordEdit.setValue(password);
    }

    // Methods

    async clickButtons() {
        await this.editBtn.click();
        await this.deleteBtn.click();
        await this.addBtn.click();
    }

    async adminFirstName(name) {
        await this.modalFirst.click();
        await this.setAdminName(name);
    }

    async adminLastName(lastName) {
        await this.modalLast.click();
        await this.setAdminLastName(lastName);
    }

    async adminEmail(email) {
        await this.modalEmail.click();
        await this.setAdminEmail(email);
    }

    async adminPassword(password) {
        await this.modalPass.click();
        await this.setAdminPassword(password);
    }

    async modalCheckbox() {
        await this.modalActive.click();
    }

    async createButton() {
        await this.modalCreate.click();
    }

    async crossModalButton() {
        await this.successCross.click();
    }

    async editFirstName(name) {
        await this.firstNameEdit.click();
        await this.setEditName(name);
    }

    async editLastName(lastName) {
        await this.lastNameEdit.click();
        await this.setEditLastName(lastName);
    }

    async editEmail(email) {
        await this.emailEdit.click();
        await this.setEditEmail(email);
    }

    async editPassword(password) {
        await this.passwordEdit.click();
        await this.setEditPassword(password);
    }

    async clickEditModalButton() {
        await this.editModalBtn.click();
    }

    async clickEditCross () {
        await this.editCross.click();
    }

    async clickSuccessEditCross() {
        await this.crossSuccessEdit.click();
    }

    async clickSuccessDeleteCross() {
        await this.successDeleteCross.click();
    }
}

module.exports = new Admin();