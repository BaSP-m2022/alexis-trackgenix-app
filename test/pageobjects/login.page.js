class Login {

    // Getters

    get sidebarHome () {return $('#root > div > aside > nav > ul > li:nth-child(1) > a')}

    get headerTitle () {return $('#root > div > header > div.header_pathname__qN2RB')}

    get emailTitle () {return $('#root > div > div > form > div:nth-child(1) > label')}
    get emailInput () {return $('#root > div > div > form > div:nth-child(1) > input')}
    get emailMsg () {return $('#root > div > div > form > div:nth-child(1) > p')}
    get passwordTitle () {return $('#root > div > div > form > div:nth-child(2) > label')}
    get passwordInput () {return $('#root > div > div > form > div:nth-child(2) > input')}
    get passwordMsg () {return $('#root > div > div > form > div:nth-child(2) > p')}
    get loginBtn () {return $('#root > div > div > form > button')}

    // Setters

    async setEmail(email) {
        await this.emailInput.setValue(email);
    }

    async setPassword(password) {
        await this.passwordInput.setValue(password);
    }

    // Methods

    async sidebarBtn() {
        await this.sidebarHome.click();
    }

    async email(email) {
        await this.emailInput.click();
        await this.setEmail(email)
    }

    async password(password) {
        await this.passwordInput.click();
        await this.setPassword(password)
    }

    async loginButton() {
        await this.loginBtn.click();
    }

    async randomClick() {
        await this.emailTitle.click();
    }
}

module.exports = new Login();