class ProjectsEmployee {

    // Getters

    get projectsTitle () {return $('#root > div > div > section > h2')}
    get projectsTable () {return $('#root > div > div > section > div > table')}

    get tableProject () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(1)')}
    get tableClient () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(2)')}
    get tableStart () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(3)')}
    get tableEnd () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(4)')}
    get tableActive () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(5)')}
    get tableRole () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(6)')}
    get tableRate () {return $('#root > div > div > section > div > table > thead > tr > th:nth-child(7)')}
}

module.exports = new ProjectsEmployee();