class TimesheetsPage {
    get timesheetSibedar() { return $('li:nth-child(6) > a')}
    get addTimesheet() { return $('section > button')}
    get editTimesheet() { return $('tr:nth-child(15) > td:nth-child(9) > button')}
    get removeTimesheet() { return $('tr:nth-child(15) > td:nth-child(10) > button')}
    get chooseProject() { return $('form > div:nth-child(1) > select')}
    get selectProject() { return $('select > option:nth-child(1)')}
    get chooseTask() { return $('form > div:nth-child(2) > select')}
    get selectTask() { return $('select > option:nth-child(1)')}
    get successMessage() { return $('div.errorsuccessmodal_container__JBOhN > div')}
    get confirmationModal() { return $('div.confirmModal_modalOvelay___5vol > div')}
    get approvedCheckbox() { return $('form > div.input_checkboxContainer__3zrAz > input')}
    get createBtn() { return $('form > button')}
    get editBtn() { return $('form > button')}
    get crossBtn() { return $('//*[@id="root"]/div/div/section/div[2]/div/div[2]/form/div[4]/div/div/img')}
    get closeDelete() { return $('button:nth-child(2)')}
    get removeTimesheetBtn() { return $('div.confirmModal_modalButton__3CcD9 > button:nth-child(1)')}
    get chooseTaskError() { return $('form > div:nth-child(2) > p')}
    get timesheetForm() { return $('div.modal-form_container__A3c7w > div')}
}

module.exports = new TimesheetsPage();