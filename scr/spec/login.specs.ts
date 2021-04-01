// Test data from Excel file. 
import { protractor, browser, by, element, Key, logging, ElementFinder, ExpectedConditions as EC, WebElement, ElementArrayFinder } from 'protractor';
import { Login } from '../po/login.po';

var xl = require('../utility/readExl.js'); // Library for reading excel file 

describe('Екран за контакти - това е ТестСуит', () => {

     let myLogin:  Login;  // variable type Page 
     myLogin = new Login(); // create new instance of class Page 


     let pntest = xl.readFromExcel('PNTest', './dataFiles/Login.xlsx');


  var EK = protractor.ExpectedConditions;
  var timeForWait: number=5000;

  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);   // за асинхронна работа
    await browser.get('https://www.saucedemo.com/');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.DEBUG,
    } as logging.Entry));
    await browser.driver.close();
  });
  pntest.forEach(function (data: any) {

  it('Подаване на тестови данни от екселски файл всеки ред е отделен тест случай; ' + data.TestCases, async () => {
    await myLogin.myTxtBox(data.userEx, myLogin.username);
    await myLogin.myTxtBox(data.passwordEx, myLogin.password);
    await myLogin.loginBtnClick(data.loginBtnEx, data.currentUrlEx, data.ValidateMessageEx);
  })
  })
}) 


