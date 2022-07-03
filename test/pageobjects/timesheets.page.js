class Timesheet {

    // Getters

    get timesheetTitle () {return $('#root > div > div > section > h2')}
    get timesheetTable () {return $('#root > div > div > section > div > table')}

    get projectTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(1)')}
    get taskIdTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(2)')}
    get taskNameTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(3)')}
    get startDateTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(4)')}
    get hoursTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(5)')}
    get descriptionTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(6)')}
    get statusTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(7)')}
    get pmApprovalTitle () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(8)')}

    get editTableBtn () {return $('section > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > button')}
    get editModalTitle () {return $('div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2')}
    get editModalCross () {return $('div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img')}
    get editModalEdit () {return $('div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button')}
    get editTaskInput () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select'
    )}
    get editTaskOpt () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select > option:nth-child(6)'
    )}
    get editSuccessCross () {return $('div.errorsuccessmodal_container__JBOhN > div > div > img')}

    get deleteTableBtn () {return $('section > div > table > tbody > tr:nth-child(1) > td:nth-child(10) > button')}
    get delModalTitle () {return $('div.confirmModal_modalOvelay___5vol > div > div.confirmModal_title__3h1tt > h2')}
    get delModalClose () {return $(
        'div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(2)'
    )}
    get delModalConfirm () {return $(
        'div.confirmModal_modalOvelay___5vol > div > div.confirmModal_modalButton__3CcD9 > button:nth-child(1)'
    )}
    get delSuccessMsg () {return $('section > div.errorsuccessmodal_container__JBOhN > div > div > h2')}
    get delSuccessCross () {return $('section > div.errorsuccessmodal_container__JBOhN > div > div > img')}

    get addBtn () {return $('#root > div > div > section > button')}
    get addModalTitle () {return $('div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2')}
    get addModalCross () {return $('div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img')}
    get addModalCreate () {return $('div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > button')}
    get addSuccessMsg () {return $('div.errorsuccessmodal_container__JBOhN > div > div > h2')}
    get addSuccessCross () {return $('div.errorsuccessmodal_container__JBOhN > div > div > img')}

    get addProjectInput () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > select'
    )}
    get projectOpt () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > select > option:nth-child(2)'
    )}
    get addProjectMsg () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(1) > p'
    )}
    get addTaskInput () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select'
    )}
    get taskOpt () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > select > option:nth-child(4)'
    )}
    get addTaskMsg () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div:nth-child(2) > p'
    )}
    get approvedCheck () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > form > div.input_checkboxContainer__3zrAz > input'
    )}

    // Methods

    async ClickButtons() {
        await this.editTableBtn.click();
        await this.editModalCross.click();
        await this.editModalEdit.click();
        await this.editTaskInput.click();
        await this.editTaskOpt.click();
        await this.editSuccessCross.click();

        await this.deleteTableBtn.click();
        await this.deleteModalClose.click();
        await this.deleteModalConfirm.click();
        await this.delSuccessCross.click();

        await this.addBtn.click();
        await this.addModalCross.click();
        await this.addModalCreate.click();
        await this.addProjectInput.click();
        await this.addSuccessCross.click();
        await this.projectOpt.click();
        await this.addTaskInput.click();
        await this.taskOpt.click();
        await this.approvedCheck.click();
    }
}

module.exports = new Timesheet();