class LoginPage {
    //Getters
    get adminUser() { return $('#root > div > section > div > div > button:nth-child(1)')}
    get employeeUser() { return $('#root > div > section > div > div > button:nth-child(2)')}

    //admin view
    get projectsBtn() { return $('button:nth-child(5) > a')}
    get projectsTitle() { return $('#root > div > div > section > h2')}

    //Setters
    async setUsername(username) {
        await this.inputUsername.setValue(username);
    }
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    }
    //Methods
    async login (username, password) {
        await this.setUsername(username),
        await this.setPassword(password);
        await this.btnLogin.click();
    }
    open () {
        return browser.url('https://alexis-trackgenix-app.vercel.app/home');
    }
    admin () {
        return this.adminUser.click();
    }
}

module.exports = new LoginPage();