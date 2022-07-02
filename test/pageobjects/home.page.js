class Home {

    //Getters

    get sidebarTitle () {return $('#root > div > aside > div > a')}
    get sidebarLogin () {return $('#root > div > aside > nav > ul > li:nth-child(1) > a')}
    get sidebarSignUp () {return $('#root > div > aside > nav > ul > li:nth-child(2) > a')}

    get headerTitle () {return $('#root > div > header > div.header_pathname__qN2RB')}
    get userNameImage () {return $('#root > div > header > div.header_user__3tRZH > div > svg > path')}

    get mainTitle () {return $('#root > div > div > section > h2')}


    get footerTwitter () {return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(1)')}
    get footerFb () {return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(2)')}
    get footerIg () {return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(3)')}
    get footerGitHub () {return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(4)')}
    get footerCopy () {return $('#root > div > footer > div.footer_license__1FrkS > div.footer_copyright__1FoOh')}


    //Methods

    open () {
        return browser.url('https://alexis-trackgenix-app.vercel.app/home')
    }

    async clickButtons() {
        await this.sidebarTitle.click();
        await this.sidebarLogin.click();
        await this.sidebarSignUp.click();
        await this.footerTwitter.click();
        await this.footerFb.click();
        await this.footerIg.click();
        await this.footerGitHub.click();
    }
}

module.exports = new Home();