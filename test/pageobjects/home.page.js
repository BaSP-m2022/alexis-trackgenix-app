class homePage {

    //Methods

    open() {
        return browser.url('https://alexis-trackgenix-app.vercel.app/home');
    }
}

module.exports = new homePage();