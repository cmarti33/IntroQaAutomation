import { Selector, t } from 'testcafe';

const urlBase = 'https://www.saucedemo.com/';
const username = 'standard_user';
const password = 'secret_sauce';
var inputUserName = Selector('#user-name');
var inputPassword = Selector('input').withAttribute('name','password');
var buttonLogin = Selector('input').withAttribute('type','submit');


fixture `Login Test`// declare the fixture
    .page(urlBase)

test('Check page of testing', async t => { //declare of test
//declare all action and asserts of test
var logo = Selector('div').withAttribute('class','login_logo');
var textoButton = await buttonLogin.value;

console.log("Textodelboton "+ await buttonLogin.value)
//declare asserts
   await t 
        .wait(2000)
        .expect(logo.exists).ok('The logo is not ok')
        .expect(inputUserName.exists).ok('The username input is not ok')
        .expect(inputPassword.exists).ok('The password input is not ok')
        .expect(buttonLogin.exists).ok('The buttonLogin input is not ok')
        .expect(textoButton == 'Login').ok('The text in button is not ok');

});

test('Loginok', async t => {

    var product = Selector('span').withAttribute('class','title');
//declare actions
    await t
        .typeText(inputUserName, username)
        .typeText(inputPassword, password)
        .click(buttonLogin)
        .wait(4000);

    await t

        .expect(product.exists).ok('Product not exist')
        .expect(product.withText('Products').exists).ok('Texto not exist');





});


test('Loginnotok', async t => {

    var logo = Selector('div').withAttribute('class','login_logo');
    var textoButton = await buttonLogin.value;
    const username = 'standard_user5';
    const password = 'secret_sauces5';

    //declare actions
    await t
        .typeText(inputUserName, username)
        .typeText(inputPassword, password)
        .click(buttonLogin)
        .wait(4000);

    await t

    .expect(logo.exists).ok('The logo is not ok')
    .expect(inputUserName.exists).ok('The username input is not ok')
    .expect(inputPassword.exists).ok('The password input is not ok')
    .expect(buttonLogin.exists).ok('The buttonLogin input is not ok')
    .expect(textoButton == 'Login').ok('The text in button is not ok');





});

test('Logout', async t => {

    var product = Selector('span').withAttribute('class','title');
    var buttonMenu = Selector('#react-burger-menu-btn');
    var buttonLogout = Selector('#logout_sidebar_link');
    var logo = Selector('div').withAttribute('class','login_logo');
    var textoButton = await buttonLogin.value;
    const username = 'standard_user';
    const password = 'secret_sauce';
//declare actions
    await t
        .typeText(inputUserName, username)
        .typeText(inputPassword, password)
        .click(buttonLogin)
        .wait(4000);

    await t

        .expect(product.exists).ok('Product not exist')
        .expect(product.withText('Products').exists).ok('Texto not exist');

    await t 
        .click(buttonMenu)
        .click(buttonLogout)
        .wait(4000)

    await t
    .expect(logo.exists).ok('The logo is not ok')
    .expect(inputUserName.exists).ok('The username input is not ok')
    .expect(inputPassword.exists).ok('The password input is not ok')
    .expect(buttonLogin.exists).ok('The buttonLogin input is not ok')
    .expect(textoButton == 'Login').ok('The text in button is not ok');









});






   
    

   

    







