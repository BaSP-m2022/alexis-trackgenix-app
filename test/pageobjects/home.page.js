class HomePage {
    get homeTG() { return $('aside > div > a')}
    get homeTitle() { return $('div.header_pathname__qN2RB')}
    get adminAccess() { return $('button:nth-child(1)')}
    get employeeAccess() { return $('button:nth-child(2) > a')}
    get socialTW() { return $('div.footer_socialContainer__3bbz9 > a:nth-child(1)')}
    get socialFB() { return $('div.footer_socialContainer__3bbz9 > a:nth-child(2)')}
    get socialIG() { return $('div.footer_socialContainer__3bbz9 > a:nth-child(3)')}
    get socialLKDN() { return $('div.footer_socialContainer__3bbz9 > a:nth-child(4)')}

    //Admin Sidebar
    get asideHome() { return $('#root > div > aside > nav > ul > li:nth-child(1) > a')}
    get asideAdmins() { return $('#root > div > aside > nav > ul > li:nth-child(2) > a')}
    get asideSuperadmins() { return $('#root > div > aside > nav > ul > li:nth-child(3) > a')}
    get asideEmployees() { return $('#root > div > aside > nav > ul > li:nth-child(4) > a')}
    get asideProjects() { return $('#root > div > aside > nav > ul > li:nth-child(5) > a')}
    get asideTimesheets() { return $('#root > div > aside > nav > ul > li:nth-child(6) > a')}
    get asideTasks() { return $('#root > div > aside > nav > ul > li:nth-child(7) > a')}

}

module.exports = new HomePage();