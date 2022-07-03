class TimesheetsEmployee {

    // Getters

    get timesheetsTitle () {return $('#root > div > div > section > h2')}
    get timesheetsTable () {return $('#root > div > div > section > div > table')}

    get tableProject () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(1)')}
    get tableApproval () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(2)')}
    get tableHours () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(3)')}

}

module.exports = new TimesheetsEmployee();