class AdminPage {
    //Getters
    get adminUser() { return $('#root > div > section > div > div > button:nth-child(1) > a')}
    get employeeUser() { return $('#root > div > section > div > div > button:nth-child(2)')}

    //admin view
    get projectsBtn() { return $('button:nth-child(5) > a')}
    get projectsTitle() { return $('section > h2')}
    get addProject() { return $('section > button')}
    get projectForm() { return $('div.modal-form_container__A3c7w > div')}
    get createBtn() { return $(' div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > button')}
    get errorContainerName() { return $('form > div:nth-child(1) > p')}
    get errorContainerClient() { return $('form > div:nth-child(2) > p')}
    get activeCheckbox() { return $('div.input_checkboxContainer__3zrAz > input')}



    //Setters
    async setClient(client) {
        await this.inputclient.setValue(client);
    }
    async setName(name) {
        await this.inputName.setValue(name);
    }
    async setStartDate(startDate) {
        await this.inputStartDate.setValue(startDate);
    }
    async setEndDAte(endDAte) {
        await this.inputEndDAte.setValue(endDAte);
    }
    async setDescription(description) {
        await this.inputDescription.setValue(description);
    }
    async setActive(active) {
        await this.inputActive.setValue(active);
    }
    //Methods
    async create (name, client, startDate, endDate, description, active) {
        await this.setName(name),
        await this.setClient(client);
        await this.setStartDate(startDate);
        await this.setEndDAte(endDate);
        await this.setDescription(description);
        await this.activeCheckbox.click();
        await this.createBtn.click();
    }
    open () {
        return browser.url('https://alexis-trackgenix-app.vercel.app/home');
    }
    admin () {
        return this.adminUser.click();
    }
}

module.exports = new AdminPage();