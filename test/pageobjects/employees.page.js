class Employees {

    // Getters

    get employeeTitle () {return $('//*[@id="root"]/div/div/section/h2')}
    get employeesTable () {return $('//*[@id="root"]/div/div/section/div/table')}

    get firstTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[1]')}
    get lastTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[2]')}
    get phoneTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[3]')}
    get emailTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[4]')}
    get pmTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[5]')}
    get activeTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[6]')}
    get projectsTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[7]')}
    get timesheetTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[8]')}

    get editTableBtn () {return $('//*[@id="root"]/div/div/section/div/table/tbody/tr[1]/td[9]/button')}
    get editModalTitle () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[1]/h2')}
    get editCrossBtn () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[1]/img')}
    get editModalBtn () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/button')}
    get deleteTableBtn () {return $('//*[@id="root"]/div/div/section/div/table/tbody/tr[1]/td[10]/button')}
    get deleteModalTitle () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[1]/h2')}
    get deleteModalClose () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[3]/button[2]')}
    get deleteModalConfirm () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[3]/button[1]')}
    get deleteSuccessTitle () {return $('//*[@id="root"]/div/div/section/div[2]/div/div/h2')}
    get deleteSuccessCross () {return $('//*[@id="root"]/div/div/section/div[2]/div/div/img')}
    get addBtn () {return $('//*[@id="root"]/div/div/section/button')}
    get addModalTitle () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[1]/h2')}
    get addCrossBtn () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[1]/img')}
    get addCreateBtn () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/button')}
    get addSuccessTitle () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[10]/div/div/h2')}
    get addSuccessCross () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[10]/div/div/img')}

    get addFirstName () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[1]/input')}
    get addFirstMsg () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[1]/p')}
    get addLastName () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[2]/input')}
    get addLastMsg () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[2]/p')}
    get addPhone () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[3]/input')}
    get addPhoneMsg () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[3]/p')}
    get addEmail () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[4]/input')}
    get addEmailMsg () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[4]/p')}
    get addPassword () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[5]/input')}
    get addPasswordMsg () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[5]/p')}
    get addTimesheet () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[6]/select')}
    get addPMCheck () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[7]/input')}
    get addActiveCheck () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[8]/input')}
    get addProjects () {return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[9]/select')}

    // Setters

    async setFirstName(name) {
        await this.addFirstName.setValue(name);
    }

    async setLastName(lastName) {
        await this.addLastName.setValue(lastName);
    }

    async setPhone(phone) {
        await this.addPhone.setValue(phone);
    }

    async setEmail(email) {
        await this.addEmail.setValue(email);
    }

    async setPassword(password) {
        await this.addPassword.setValue(password);
    }

    // Methods

    async ClickBtns() {
        await this.editTableBtn.click();
        await this.editCrossBtn.click();
        await this.editModalBtn.click();
        await this.deleteTableBtn.click();
        await this.deleteModalClose.click();
        await this.deleteModalConfirm.click();
        await this.addBtn.click();
        await this.addCrossBtn.click();
        await this.addCreateBtn.click();
    }

    async addFirst(name) {
        await this.addFirstName.click();
        await this.setFirstName(name);
    }

    async addLast(lastName) {
        await this.addLastName.click();
        await this.setLastName(lastName);
    }

    async addPhoneNum(phone) {
        await this.addPhone.click();
        await this.setPhone(phone);
    }

    async addMail(email) {
        await this.addEmail.click();
        await this.setEmail(email);
    }

    async addPass(password) {
        await this.addPassword.click();
        await this.setPassword(password);
    }

    async pmCheckbox() {
        await this.addPMCheck.click();
    }

    async activeCheckbox() {
        await this.addActiveCheck.click();
    }
}


module.exports = new Employees();