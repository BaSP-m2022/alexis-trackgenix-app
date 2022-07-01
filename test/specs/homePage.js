// const Home = require('../pageobjects/home.page')

// describe('Home page', () => {
//     beforeAll('Should deploy the "TrackGENIX" home page', async () => {
//         await Home.open('home');
//         await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
//     });

//     describe('Sidebar elements', ()=> {
//         it('Checking the sidebar title', async ()=> {
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
//             await expect(Home.sidebarTitle).toBeDisplayed();
//             await expect(Home.sidebarTitle).toBeClickable();
//         });
//     })

//     describe('Header elements', ()=> {
//         it('Checking the existence of the header elements', async ()=> {
//             await expect(Home.headerTitle).toExist();
//             await expect(Home.headerTitle).toHaveTextContaining('Home');
//             await expect(Home.userNameImage).toExist();
//         });
//     })

//     describe('Main Page elements', ()=> {
//     //     it('Checking the existence of the main buttons and their functionality', async ()=> {
//     //         await expect(Home.mainTitle).toExist();
//     //         await expect(Home.adminBtn).toExist();
//     //         await expect(Home.adminBtn).toBeClickable();
//     //         await expect(Home.adminBtn).toHaveLink('/admin');
//     //         await expect(Home.employeeBtn).toExist();
//     //         await expect(Home.employeeBtn).toBeClickable();
//     //         await expect(Home.employeeBtn).toHaveLink('/employee');
//     //         await expect(Home.signUpBtn).toExist();
//     //         await expect(Home.signUpBtn).toBeClickable();
//     //         await expect(Home.signUpBtn).toHaveLink('/signup')
//     //     });
//         it('Checking the existence of the main links and their functionality', async ()=> {
//             await expect(Home.adminLink).toExist();
//             await expect(Home.adminLink).toBeClickable();
//             await expect(Home.adminLink).toHaveLink('/admin');
//             await expect(Home.employeeLink).toExist();
//             await expect(Home.employeeLink).toBeClickable();
//             await expect(Home.employeeLink).toHaveLink('/employee');
//             await expect(Home.signUpLink).toExist();
//             await expect(Home.signUpLink).toBeClickable();
//             await expect(Home.signUpLink).toHaveLink('/signup');
//         })
//     })

//     describe('Functionality of main page elements and sidebar title', ()=> {
//         it('Checking the functionality of the links', async ()=> {
//             await Home.adminLink.click();
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/admin');
//             await Home.sidebarTitle.click();
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
//             await Home.employeeLink.click();
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/employee');
//         });
//     })

//     describe('Footer elements', ()=> {
//         beforeEach('Should back to the TrackGENIX page', async ()=> {
//             await Home.open('home');
//             await expect(browser).toHaveUrl('https://alexis-trackgenix-app.vercel.app/home');
//         });
//         it('Checking the functionality of the twitter button', async ()=> {
//             await Home.footerTwitter.click();
//             await browser.switchWindow('twitter.com');
//             await expect(browser).toHaveUrlContaining('twitter');
//             await browser.switchWindow('https://alexis-trackgenix-app.vercel.app/home');
//         });
//         it('Checking the functionality of the Facebook button', async ()=> {
//             await Home.footerFb.click();
//             await browser.switchWindow('facebook.com');
//             await expect(browser).toHaveUrlContaining('facebook.com');
//             await browser.switchWindow('https://alexis-trackgenix-app.vercel.app/home');
//         });
//         it('Checking the functionality of the Instagram button', async ()=> {
//             await Home.footerIg.click();
//             await browser.switchWindow('instagram.com');
//             await expect(browser).toHaveUrlContaining('instagram.com');
//             await browser.switchWindow('https://alexis-trackgenix-app.vercel.app/home');
//         });
//         it('Checking the functionality of the GitHub button', async ()=> {
//             await Home.open('home');
//             await Home.footerGitHub.click();
//             await browser.switchWindow('https://github.com/BaSP-m2022/alexis-trackgenix-app');
//             await expect(browser).toHaveUrl('https://github.com/BaSP-m2022/alexis-trackgenix-app');
//             await browser.closeWindow();
//             await browser.switchWindow('https://alexis-trackgenix-app.vercel.app/home');
//         });
//     });

//     describe('Footer copyright', ()=> {
//         it('Should have the correct text', async ()=> {
//             await Home.open('home');
//             await expect(Home.footerCopy).toExist();
//             await expect(Home.footerCopy).toHaveText('Copyright © 2022 Trackgenix SA. All rights reserved.');
//         });
//     })

// });