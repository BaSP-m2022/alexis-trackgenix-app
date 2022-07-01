class AdminPage {
    //Getters
    get adminUser() { return $('section > div > div > button:nth-child(1) > a')}
    get employeeUser() { return $('section > div > div > button:nth-child(2)')}
    

    //admin view
   
    
    open () {
        return browser.url('https://alexis-trackgenix-app.vercel.app/home');
    }
    admin () {
        return this.adminUser.click();
    }
}

module.exports = new AdminPage();