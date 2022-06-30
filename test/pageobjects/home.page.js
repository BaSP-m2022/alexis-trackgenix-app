class Home {

    //Getters

    get sidebarTitle () {return $('#root > div > aside > div > a')}

    get headerTitle () {return $('#root > div > header > div.header_pathname__qN2RB')}
    get userNameImage () {return $('#root > div > header > div.header_user__3tRZH > div > svg > path')}

    get mainTitle () {return $('#root > div > section > h2')}
    get adminBtn () {return $('#root > div > section > div > div > button:nth-child(1)')}
    get adminLink () {return $('#root > div > section > div > div > button:nth-child(1) > a')}
    get employeeBtn () {return $('#root > div > section > div > div > button:nth-child(2)')}
    get employeeLink () {return $('#root > div > section > div > div > button:nth-child(2) > a')}
    get signUpBtn () {return $('#root > div > section > div > div > button:nth-child(3)')}
    get signUpLink () {return $('#root > div > section > div > div > button:nth-child(3) > a')}

    get footerTwitter () {return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(1)')}
    get footerFb () {return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(2)')}
    get footerIg () {return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(3)')}
    get footerGitHub () {return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(4)')}
    get footerCopy () {return $('#root > div > footer > div.footer_license__1FrkS > div.footer_copyright__1FoOh')}


    //Methods

    open (path) {
        return browser.url(`https://alexis-trackgenix-app.vercel.app/${path}`)
    }

    async clickButtons() {
        await this.sidebarTitle.click();
        await this.adminBtn.click();
        await this.adminLink.click();
        await this.employeeBtn.click();
        await this.employeeLink.click();
        await this.signUpBtn.click();
        await this.signUpLink.click();
        await this.footerTwitter.click();
        await this.footerFb.click();
        await this.footerIg.click();
        await this.footerGitHub.click();
    }
}

module.exports = new Home();