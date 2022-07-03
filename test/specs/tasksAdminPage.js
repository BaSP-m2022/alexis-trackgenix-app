const Home = require('../pageobjects/home.page');
const Login = require('../pageobjects/login.page');
const AdminHome = require('../pageobjects/adminHome.page');
const Tasks = require('../pageobjects/tasks.page');

describe('Tasks page', ()=> {
    beforeAll('Should deploy the "TrackGENIX" tasks page', async ()=> {
        await Home.open();
        await Home.sidebarLogin.click();
        await Login.email('testAdmin@radium.com');
        await Login.password('admin123');
        await Login.loginBtn.click();
        await AdminHome.tasksSidebar.click();
    });

        describe('Checking the existence of the elements of the page', ()=> {
        it('Element should be displayed in viewport', async ()=> {
            await expect(Tasks.tasksTitle).toBeDisplayedInViewport();
            await expect(Tasks.tasksTable).toBeDisplayedInViewport();
            await expect(Tasks.taskNameTitle).toBeDisplayedInViewport();
            await expect(Tasks.startDateTitle).toBeDisplayedInViewport();
            await expect(Tasks.hoursTitle).toBeDisplayedInViewport();
            await expect(Tasks.descriptionTitle).toBeDisplayedInViewport();
            await expect(Tasks.statusTitle).toBeDisplayedInViewport();
            await expect(Tasks.editTableBtn).toBeClickable();
            await expect(Tasks.deleteTableBtn).toBeClickable();
            await expect(Tasks.addBtn).toBeClickable();
        })
    })

        describe('Checking the functionality of the buttons of the page', ()=> {
        it('Button should open and close modals', async ()=> {
            await Tasks.editTableBtn.click();
            await expect(Tasks.editModalTitle).toBeDisplayedInViewport();
            await Tasks.editCrossBtn.click();
            await Tasks.deleteTableBtn.click();
            await expect(Tasks.deleteModalTitle).toBeDisplayedInViewport();
            await Tasks.deleteModalClose.click();
            await Tasks.addBtn.click();
            await expect(Tasks.addModalTitle).toBeDisplayedInViewport();
            await Tasks.addCrossBtn.click();
        })
    })

        describe('Add new task', ()=> {
        it('Checking the functionality of the error messages', async ()=> {
            await Tasks.addBtn.click();
            await Tasks.addTask('');
            await Tasks.addStart('');
            await Tasks.addHours('');
            await Tasks.addDescriptionText('');
            await Tasks.addStatus.click();
            await Tasks.taskNameSubTitle.click();
            await expect(Tasks.addTaskMsg).toBeDisplayedInViewport();
            await expect(Tasks.addStartMsg).toBeDisplayedInViewport();
            await expect(Tasks.addHoursMsg).toBeDisplayedInViewport();
            await expect(Tasks.addDescMsg).toBeDisplayedInViewport();
            await expect(Tasks.addStatusMsg).toBeDisplayedInViewport();
        })
        it('Checking the creation of a new task', async ()=> {
            await Tasks.addTask('Task 1');
            await Tasks.addStart('01072022');
            await Tasks.addHours('120');
            await Tasks.addDescriptionText('Description of the task');
            await Tasks.chooseStatus();
            await Tasks.addCreateBtn.click();
            await expect(Tasks.addSuccessTitle).toBeDisplayedInViewport();
            await Tasks.addSuccessCross.click();
        })
    })

        describe('Edit the new task', ()=> {
        it('Checking the new row', async ()=> {
            const row = await $('#root > div > div > section > div > table > tbody > tr:last-child')
            await expect(row).toHaveTextContaining('Task 1');
        })
        it('Checking the functionality of the edit button', async ()=> {
            const rowEditBtn = await $(
                '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(6) > button'
            )
            await rowEditBtn.click();
            await expect(Tasks.editModalTitle).toBeDisplayed();
            await Tasks.editCrossBtn.click();
        })
        it('Checking the functionality of the delete button', async ()=> {
            const rowDeleteBtn = await $(
                '#root > div > div > section > div > table > tbody > tr:last-child > td:nth-child(7) > button'
            )
            await rowDeleteBtn.click();
            await Tasks.deleteModalConfirm.click();
            await expect(Tasks.deleteSuccessTitle).toBeDisplayedInViewport();
            await Tasks.deleteSuccessCross.click();
        })
    })
})