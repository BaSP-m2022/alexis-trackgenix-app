const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page');
const AdminHome = require('../pageobjects/adminHome.page');
const Projects = require('../pageobjects/projects.page');

describe('Employees page', ()=> {
    beforeAll('Should deploy the "TrackGENIX" employees page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await Login.email('testAdmin@radium.com');
        await Login.password('admin123');
        await Login.loginBtn.click();
        await AdminHome.projectsSidebar.click();
    });

    describe('Checking the existence of the elements of the page', ()=> {
        it('Element should be displayed in viewport', async ()=> {
            await expect(Projects.projectsTitle).toBeDisplayedInViewport();
            await expect(Projects.projectsTable).toBeDisplayedInViewport();
            await expect(Projects.nameTitle).toBeDisplayedInViewport();
            await expect(Projects.descriptionTitle).toBeDisplayedInViewport();
            await expect(Projects.statDateTitle).toBeDisplayedInViewport();
            await expect(Projects.endDateTitle).toBeDisplayedInViewport();
            await expect(Projects.clientNameTitle).toBeDisplayedInViewport();
            await expect(Projects.activeTitle).toBeDisplayedInViewport();
            await expect(Projects.projectsTitle).toBeDisplayedInViewport();
            await expect(Projects.membersTitle).toBeDisplayedInViewport();
            await expect(Projects.editTableBtn).toExist();
            await expect(Projects.deleteTableBtn).toExist();
            await expect(Projects.addBtn).toExist();
        })
    })

    describe('Checking the functionality of the buttons of the page', ()=> {
        it('Button should open and close modals', async ()=> {
            await Projects.editTableBtn.click();
            await expect(Projects.editModalTitle).toBeDisplayedInViewport();
            await Projects.editCrossBtn.click();
            await Projects.deleteTableBtn.click();
            await expect(Projects.deleteModalTitle).toBeDisplayedInViewport();
            await Projects.deleteModalClose.click();
            await Projects.addBtn.click();
            await expect(Projects.addModalTitle).toBeDisplayedInViewport();
            await Projects.addCrossBtn.click();
        })
    })

    describe('Add new project', ()=> {
        it('Checking the functionality of the error messages', async ()=> {
            await Projects.addBtn.click();
            await Projects.addNameProject('');
            await Projects.addClientName('');
            await Projects.addStart('');
            await Projects.addEnd('');
            await Projects.addDescriptionText('');
            await Projects.addActiveCheck.click();
            await expect(Projects.addProjectMsg).toBeDisplayedInViewport();
            await expect(Projects.addClientMsg).toBeDisplayedInViewport();
            await expect(Projects.addStartMsg).toBeDisplayedInViewport();
            await expect(Projects.addEndMsg).toBeDisplayedInViewport();
            await expect(Projects.addDescriptionMsg).toBeDisplayedInViewport();
        })
        it('Checking the creation of a new employee', async ()=> {
            await Projects.addNameProject('Project');
            await Projects.addClientName('Coto');
            await Projects.addStart('01021994');
            await Projects.addEnd('01021995');
            await Projects.addDescriptionText('description of the project');
            await Projects.addActiveCheck.click();
            await Projects.addCreateBtn.click();
            await expect(Projects.addSuccessTitle).toBeDisplayedInViewport();
            await Projects.addSuccessCross.click();
        })
    })

    describe('Edit the new employee', ()=> {
        it('Checking the new row', async ()=> {
            const row = await $('#root > div > div > section > div > table > tbody > tr:last-child')
            await expect(row).toHaveTextContaining('Coto');
        })
        it('Checking the functionality of the edit button', async ()=> {
            const rowEditBtn = await $(
                '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(8) > button'
            )
            await rowEditBtn.click();
            await expect(Projects.editModalTitle).toBeDisplayed();
            await Projects.editCrossBtn.click();
        })
        it('Checking the functionality of the delete button', async ()=> {
            const rowDeleteBtn = await $(
                '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(9) > button'
            )
            await rowDeleteBtn.click();
            await Projects.deleteModalConfirm.click();
            await expect(Projects.deleteSuccessTitle).toBeDisplayedInViewport();
            await Projects.deleteSuccessCross.click();
        })
    })

})