import { Selector, t } from 'testcafe';

const urlBase = 'https://demoqa.com/login';



fixture `Logout Test`// declare the fixture
    .page(urlBase)
    

test('Check page of testing', async t => { //declare of test
//declare all action and asserts of test
var logo = Selector('class').withAttribute('src','/images/Toolsqa.jpg');
var buttonLogout = Selector('#');

//declare asserts
   await t 
        .wait(2000)
        .expect(logo.exists).ok('The logo is not ok')
        .expect(buttonLogout.withText('Logout').exists).ok('The text in button is not ok');

//declare actions
    await t
      .click(
        .typeText(inputUserName, username)
        .typeText(inputPassword, password)
        //.wait(4000)
        .click(buttonLogin);
});
