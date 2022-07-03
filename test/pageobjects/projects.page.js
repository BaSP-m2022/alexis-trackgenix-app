class Projects {

    // Getters

    get projectsTitle () {return $('//*[@id="root"]/div/div/section/h2')}
    get projectsTable () {return $('//*[@id="root"]/div/div/section/div/table')}

    get nameTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[1]')}
    get descriptionTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[2]')}
    get statDateTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[3]')}
    get endDateTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[4]')}
    get clientNameTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[5]')}
    get activeTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[6]')}
    get membersTitle () {return $('//*[@id="root"]/div/div/section/div/table/thead/tr/th[7]')}

    get editTableBtn () {return $('//*[@id="root"]/div/div/section/div/table/tbody/tr[1]/td[8]/button')}
    get editModalTitle () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[1]/h2')}
    get editCrossBtn () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[1]/img')}
    get editModalBtn () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/button')}
    get deleteTableBtn () {return $('//*[@id="root"]/div/div/section/div/table/tbody/tr[1]/td[9]/button')}
    get deleteModalTitle () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[1]/h2')}
    get deleteModalClose () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[3]/button[2]')}
    get deleteModalConfirm () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[3]/button[1]')}
    get deleteSuccessTitle () {return $('//*[@id="root"]/div/div/section/div[1]/div/div/h2')}
    get deleteSuccessCross () {return $('//*[@id="root"]/div/div/section/div[1]/div/div/img')}
    get addBtn () {return $('//*[@id="root"]/div/div/section/button')}
    get addModalTitle () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[1]/h2')}
    get addCrossBtn () {return $(
        'div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    )}
    get addCreateBtn () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/div/button')}
    get addSuccessTitle () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/div[2]/div/div/h2')}
    get addSuccessCross () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/div[2]/div/div/img')}

    get addProjectName () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(1) > input'
    )}
    get addProjectMsg () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/form/div[1]/p')}
    get addClient () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(2) > input'
    )}
    get addClientMsg () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/form/div[2]/p')}
    get addStartDate () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(3) > input'
    )}
    get addStartMsg () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/form/div[3]/p')}
    get addEndDate () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(4) > input'
    )}
    get addEndMsg () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/form/div[4]/p')}
    get addDescription () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.textarea_textareaContainer__zy-Jg > textarea'
    )}
    get addDescriptionMsg () {return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/div/form/div[5]/p')}
    get addActiveCheck () {return $(
        'div > form > div.input_checkboxContainer__3zrAz > input'
    )}

    // Setters

    async setProject(name) {
        await this.addProjectName.setValue(name);
    }

    async setClient(client) {
        await this.addClient.setValue(client);
    }

    async setStartDate(startDate) {
        await this.addStartDate.setValue(startDate);
    }

    async setEndDate(endDate) {
        await this.addEndDate.setValue(endDate);
    }

    async setDescription(description) {
        await this.addDescription.setValue(description);
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
        await this.addActiveCheck.click();
    }

    async addNameProject(name) {
        await this.addProjectName.click();
        await this.setProject(name);
    }

    async addClientName(client) {
        await this.addClient.click();
        await this.setClient(client);
    }

    async addStart(startDate) {
        await this.addStartDate.click();
        await this.setStartDate(startDate);
    }

    async addEnd(endDate) {
        await this.addEndDate.click();
        await this.setEndDate(endDate);
    }

    async addDescriptionText(description) {
        await this.addDescription.click();
        await this.setDescription(description);
    }

}


module.exports = new Projects();