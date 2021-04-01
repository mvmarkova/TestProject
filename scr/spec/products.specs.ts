// Test data from Excel file. 
import { protractor, browser, by, element, Key, logging, ElementFinder, ExpectedConditions as EC, WebElement, ElementArrayFinder } from 'protractor';
import { Products } from '../po/products.po';    //  2. добавяне на Page клас на този spec
import { Login } from '../po/login.po';

describe('Екран за контакти - това е ТестСуит', () => {

    let myProducts:  Products;  // variable type Page 
    myProducts = new Products(); // create new instance of class Page 
    let myLogin: Login;
    myLogin = new Login();

  var EK = protractor.ExpectedConditions;
  var timeForWait: number=5000;

  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);   // за асинхронна работа
    await browser.get('https://www.saucedemo.com/');
    await myLogin.myLogin(); // vhod 
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.DEBUG,
    } as logging.Entry));
  });

  it('Test 2 - проверка на цената ', async () => {
    await myProducts.checkLabel(myProducts.twentynine, '$29.99');
    browser.sleep(5000);
    browser.sleep(5000);
    await myProducts.checkLabel(myProducts.eight, '$7.99');
    await myProducts.checkLabel(myProducts.sixteen, '$15.99');
    await myProducts.checkLabel(myProducts.fifty, '$49.99');
    await myProducts.checkLabel(myProducts.ten, '$9.99');
    await myProducts.checkLabel(myProducts.sixteenDolar, '$15.99');

  })

  it('Test 3 - проверка на заглавието ', async () => {
    await myProducts.checkLabel(myProducts.headerProducts, 'PRODUCTS');
  })

  it('Test 4 - проверка наименование на бутон ', async () => {
    await myProducts.checkLabel(myProducts.addToCart, 'ADD TO CART');
    await myProducts.btnClick(myProducts.addToCart);
    await myProducts.checkLabel(myProducts.removeCart, 'REMOVE');
  })

  it('Test 5 - проверка за добавяне на един продукт и че е в количката', async () => {
    await myProducts.btnClick(myProducts.addToCart);
  })

  it('Test 6 - Натискане количката с маркирана покупка', async () => {
    await myProducts.checkLabel(myProducts.addToCart, 'ADD TO CART');
    await myProducts.btnClick(myProducts.addToCart);
    browser.sleep(5000);
  })

})



