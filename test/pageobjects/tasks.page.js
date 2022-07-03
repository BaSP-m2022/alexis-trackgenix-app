class Tasks {

    // Getters

    get tasksTitle () {return $('#root > div > div > section > h2')}
    get tasksTable () {return $('#root > div > div > section > div > table')}

    get taskNameTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(1)')}
    get startDateTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(2)')}
    get hoursTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(3)')}
    get descriptionTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(4)')}
    get statusTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(5)')}

    get editTableBtn () {return $('section > div > table > tbody > tr:nth-child(1) > td:nth-child(6) > button')}
    get editModalTitle () {return $('div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2')}
    get editCrossBtn () {return $('div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img')}
    get submitBtn () {return $('div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button:nth-child(7)')}
    get editSuccessTitle () {return $('div.errorsuccessmodal_container__JBOhN > div > div > h2')}
    get editSuccessCross () {return $('div.errorsuccessmodal_container__JBOhN > div > div > img')}

    get deleteTableBtn () {return $('section > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button')}
    get deleteModalTitle () {return $('div.confirmModal_modalOvelay___5vol > div > div.confirmModal_title__3h1tt > h2')}
    get deleteModalClose () {return $('div.confirmModal_modalButton__3CcD9 > button:nth-child(2)')}
    get deleteModalConfirm () {return $('div.confirmModal_modalButton__3CcD9 > button:nth-child(1)')}
    get deleteSuccessTitle () {return $('section > div.errorsuccessmodal_container__JBOhN > div > div > h2')}
    get deleteSuccessCross () {return $('section > div.errorsuccessmodal_container__JBOhN > div > div > img')}

    get addBtn () {return $('#root > div > div > section > button')}
    get addModalTitle () {return $('div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2')}
    get addCrossBtn () {return $(
        'div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    )}
    get addCreateBtn () {return $('div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button:nth-child(7)')}
    get addSuccessTitle () {return $('div.errorsuccessmodal_container__JBOhN > div > div > h2')}
    get addSuccessCross () {return $('div.errorsuccessmodal_container__JBOhN > div > div > img')}
    get taskNameSubTitle () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > label'
    )}
    get addTaskName () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > input'
    )}
    get addTaskMsg () {return $('div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p')}
    get addStartDate () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > input'
    )}
    get addStartMsg () {return $('div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p')}
    get addWorkedHours () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > input'
    )}
    get addHoursMsg () {return $('div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(3) > p')}
    get addDescription () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > input'
    )}
    get addDescMsg () {return $('div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(4) > p')}
    get addStatus () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > select'
    )}
    get addStatusMsg () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.select_selectContainer__1l_1y > p'
    )}
    get addStatusOpt () {return $('div.select_selectContainer__1l_1y > select > option:nth-child(3)')}

    // Setters

    async setTask(name) {
        await this.addTaskName.setValue(name);
    }

    async setStartDate(startDate) {
        await this.addStartDate.setValue(startDate);
    }

    async setWorkedHours(hours) {
        await this.addWorkedHours.setValue(hours);
    }

    async setDescription(description) {
        await this.addDescription.setValue(description);
    }

    // Methods

    async ClickButtons() {
        await this.editTableBtn.click();
        await this.editCrossBtn.click();
        await this.submitBtn.click();
        await this.deleteTableBtn.click();
        await this.deleteModalClose.click();
        await this.deleteModalConfirm.click();
        await this.addBtn.click();
        await this.addCrossBtn.click();
        await this.addCreateBtn.click();
        await this.taskNameSubTitle.click();
    }

    async addTask(name) {
        await this.addTaskName.click();
        await this.setTask(name);
    }

    async addStart(startDate) {
        await this.addStartDate.click();
        await this.setStartDate(startDate);
    }

    async addHours(hours) {
        await this.addWorkedHours.click();
        await this.setWorkedHours(hours);
    }

    async addDescriptionText(description) {
        await this.addDescription.click();
        await this.setDescription(description);
    }

    async chooseStatus() {
        await this.addStatus.click();
        await this.addStatusOpt.click();
    }
}


module.exports = new Tasks();