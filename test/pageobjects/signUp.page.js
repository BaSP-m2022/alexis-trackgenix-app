class SignUp {

    // Getters

    get signUpTitle () {return $('#root > div > form > h2')}

    get firstNameTitle () {return $('#root > div > form > div > div:nth-child(1) > label')}
    get firstNameInput () {return $('#root > div > form > div > div:nth-child(1) > input')}
    get firstNameMsg () {return $('#root > div > form > div > div:nth-child(1) > p')}
    get lastNameTitle () {return $('#root > div > form > div > div:nth-child(2) > label')}
    get lastNameInput () {return $('#root > div > form > div > div:nth-child(2) > input')}
    get lastNameMsg () {return $('#root > div > form > div > div:nth-child(2) > p')}
    get phoneTitle () {return $('#root > div > form > div > div:nth-child(3) > label')}
    get phoneInput () {return $('#root > div > form > div > div:nth-child(3) > input')}
    get phoneMsg () {return $('#root > div > form > div > div:nth-child(3) > p')}
    get emailTitle () {return $('#root > div > form > div > div:nth-child(4) > label')}
    get emailInput () {return $('#root > div > form > div > div:nth-child(4) > input')}
    get emailMsg () {return $('#root > div > form > div > div:nth-child(4) > p')}
    get passwordTitle () {return $('#root > div > form > div > div:nth-child(5) > label')}
    get passwordInput () {return $('#root > div > form > div > div:nth-child(5) > input')}
    get passwordMsg () {return $('#root > div > form > div > div:nth-child(5) > p')}
    get repeatTitle () {return $('#root > div > form > div > div:nth-child(6) > label')}
    get repeatInput () {return $('#root > div > form > div > div:nth-child(6) > input')}
    get repeatMsg () {return $('#root > div > form > div > div:nth-child(6) > p')}

    get createBtn () {return $('#root > div > form > button')}

    // Setters

    async setName (name) {
        await this.firstNameInput.setValue(name);
    }

    async setLastName (lastName) {
        await this.lastNameInput.setValue(lastName)
    }

    async setPhone (phone) {
        await this.phoneInput.setValue(phone)
    }

    async setEmail (email) {
        await this.emailInput.setValue(email)
    }

    async setPassword (password) {
        await this.passwordInput.setValue(password)
    }

    async setRepeat (repeat) {
        await this.repeatInput.setValue(repeat)
    }

    // Methods

    async firstName(name) {
        await this.firstNameInput.click();
        await this.setName(name);
    }
    async lastName(lastName) {
        await this.lastNameInput.click();
        await this.setLastName(lastName)
    }
    async phone(phone) {
        await this.phoneInput.click();
        await this.setPhone(phone)
    }
    async email(email) {
        await this.emailInput.click();
        await this.setEmail(email)
    }
    async password(password) {
        await this.passwordInput.click();
        await this.setPassword(password)
    }
    async repeat(repeat) {
        await this.repeatInput.click();
        await this.setRepeat(repeat)
    }

    async createButton() {
        await this.createBtn.click();
    }

}

module.exports = new SignUp();