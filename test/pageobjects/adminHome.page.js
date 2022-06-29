class AdminHome {

    // Getters

    get homeSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(1) > a')}
    get adminsSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(2) > a')}
    get superAdminsSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(3) > a')}
    get employeesSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(4) > a')}
    get projectsSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(5) > a')}
    get timesheetSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(6) > a')}
    get tasksSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(7) > a')}

    // Methods

    async sidebarLinks() {
        await this.homeSidebar.click();
        await this.adminsSidebar.click();
        await this.superAdminsSidebar.click();
        await this.employeesSidebar.click();
        await this.projectsSidebar.click();
        await this.timesheetSidebar.click();
        await this.tasksSidebar.click();
    }
}

module.exports = new AdminHome();