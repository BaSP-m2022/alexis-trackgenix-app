class EmployeeHome {

    // Getters

    get homeSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(1) > a')}
    get projectsSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(2) > a')}
    get timesheetSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(3) > a')}
    get profileSidebar () {return $('#root > div > aside > nav > ul > li:nth-child(4) > a')}

    // Methods

    async employeeElements() {
        await this.homeSidebar.click();
        await this.projectsSidebar.click();
        await this.timesheetSidebar.click();
        await this.profileSidebar.click();
    }
}

module.exports = new EmployeeHome