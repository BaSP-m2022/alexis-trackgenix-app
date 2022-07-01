class TasksPage {
    get homeTG() { return $('aside > div > a')}
    get addTask() { return $('#root > div > div > section > button')}
    get createTask() { return $('form > button:nth-child(7)')}
    get editTask() { return $('tr:nth-child(3) > td:nth-child(6) > button')}
    get submitBtn() { return $('form > button:nth-child(7)')}
    get removeTask() { return $('tr:nth-child(3) > td:nth-child(7) > button')}
    get confirmDelete() { return $('button:nth-child(1)')}
    get crossBtn() { return $('//*[@id="root"]/div/div/section/div[1]/div/div[2]/form/div[6]/div/div/img')}

    get inputName() { return $('div:nth-child(1) > input')}
    get inputStartDate() { return $('div:nth-child(2) > input')}
    get inputWorkedHours() { return $('div:nth-child(3) > input')}
    get inputDescription() { return $('div:nth-child(4) > input')}
    get inputStatus() { return $('div.select_selectContainer__1l_1y > select')}

    async setName(name) {
        await this.inputName.setValue(name);
    }
    async setStartDate(startDate) {
        await this.inputStartDate.setValue(startDate);
    }
    async setWorkedHours(workedHours) {
        await this.inputWorkedHours.setValue(workedHours);
    }
    async setDescription(description) {
        await this.inputDescription.setValue(description);
    }

    async create (name, startDate, workedHours, description) {
        await this.setName(name);
        await this.setStartDate(startDate);
        await this.setWorkedHours(workedHours);
        await this.setDescription(description);
    }
}

module.exports = new TasksPage();