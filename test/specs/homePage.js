const Home = require('../pageobjects/home.page')

describe('Home page', () => {
    beforeAll('Should deploy the "TrackGENIX" home page', async () => {
        await Home.open();
        await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
    });

    describe('Sidebar elements', ()=> {
        it('Checking the sidebar title', async ()=> {
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
            await expect(Home.sidebarTitle).toBeDisplayed();
            await expect(Home.sidebarTitle).toBeClickable();
        })
    })

    describe('Header elements', ()=> {
        it('Checking the existence of the header elements', async ()=> {
            await expect(Home.headerTitle).toExist();
            await expect(Home.headerTitle).toHaveTextContaining('Home');
            await expect(Home.userNameImage).toExist();
        })
    })

    describe('Main Page elements', ()=> {
        it('Checking the existence of the main elements', async ()=> {
            await expect(Home.mainTitle).toExist();
            await expect(Home.adminBtn).toExist();
            await expect(Home.adminBtn).toBeClickable();
            await expect(Home.adminLink).toExist();
            await expect(Home.adminLink).toBeClickable();
            await expect(Home.employeeBtn).toExist();
            await expect(Home.employeeBtn).toBeClickable();
            await expect(Home.employeeLink).toExist();
            await expect(Home.employeeLink).toBeClickable();
        })
    })

    describe('Functionality of main page elements and sidebar title', ()=> {
        it('Checking the functionality of the links', async ()=> {
            await Home.adminLink.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
            await Home.sidebarTitle.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
            await Home.employeeLink.click();
            await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
        })
    })

    describe('Footer elements', ()=> {
        it('Checking the existence of the footer elements', async ()=> {
            await Home.open();
            await Home.footerTwitter.click();
            await expect(browser).toHaveUrl('https://twitter.com/home');
        })
    })

});


