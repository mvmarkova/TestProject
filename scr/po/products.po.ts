/**
 * Page Class contains locators and methods (Page Object Model(POM))
 */
 import {protractor, browser, by, element, Key, logging, ElementFinder, ExpectedConditions as EC, WebElement, ElementArrayFinder } from 'protractor';


 export class Products {
 // 
   contactUsBtn!: ElementFinder;
 
   header!: ElementFinder;
   email!: ElementFinder;
    name!: ElementFinder;
   subject!: ElementFinder;
   yourMessege!: ElementFinder;
    tel!: ElementFinder;
   sendBtn!: ElementFinder;
   notValidEmail!: ElementFinder;
   responseOutput!: ElementFinder;
   destination!: ElementFinder;
   destinationValue!: ElementFinder;
   adultsDownBtn!: ElementFinder;
    adultsUpBtn!: ElementFinder;
     childDownBtn!: ElementFinder;
  childUpBtn!: ElementFinder;
   searchBtn!: ElementFinder;
  destinationHeader!: ElementFinder;
    checkInHeader!: ElementFinder;
    checkIn!: ElementFinder;
    checkOut!: ElementFinder; 
    noMatchesFound!: ElementFinder; 
   destinationIns!: ElementFinder; 
   username!: ElementFinder;
   password!: ElementFinder;
   loginBtn!: ElementFinder;
   logo!: ElementFinder;
   headerProducts!: ElementFinder;
   addToCart!: ElementFinder;
   removeCart!: ElementFinder; 
   shoppingCartBadge!: ElementFinder;
   shoppingCartBtn!: ElementFinder;
   checkOutBtn!: ElementFinder;
   yourInformation!: ElementFinder;
   yourName!: ElementFinder;
   continueBtn!: ElementFinder;
   validationNeedUser!: ElementFinder;
   product!: ElementFinder;  
   lastName!: ElementFinder;
   postalCode!: ElementFinder;
   twentynine!: ElementFinder;
   eight!: ElementFinder; 
   sixteen!: ElementFinder;
   ten!: ElementFinder; 
   fifty!: ElementFinder;
   sixteenDolar!: ElementFinder; 


   EK = protractor.ExpectedConditions;
    timeForWait: number=5000;
 
 //Contructors contains only locators. 
 
   constructor() {
 
     this.contactUsBtn = element(by.xpath("//span[@data-alt='Contact us'][contains(.,'Contact us')]")); // локатор за бутон contactUs
     this.header = element(by.xpath("//h2[contains(.,'Contact Us')]")); // заглавие на прозореца за контакт
     this.email = element(by.xpath("//input[contains(@type,'email')]")); // полето за e-mail
     this.name = element(by.xpath("//input[contains(@name,'your-name')]")); //полето за име
     this.subject = element(by.xpath("//input[@id='cf-4']"));//полето за заглавие
     this.yourMessege = element(by.xpath("//textarea[contains(@name,'your-message')]")); //текстовотополе за твоето съобщение
     this.tel = element(by.xpath("//input[contains(@type,'tel')]")); // полето за телефонен номер
     this.sendBtn = element(by.xpath("//input[contains(@type,'submit')]")); // полето за бутон send
     this.notValidEmail = element(by.xpath("//span[@class='wpcf7-not-valid-tip'][contains(.,'The e-mail address entered is invalid.')]")); // локаторът за невалидно съобщение
     this.responseOutput = element(by.xpath("//div[@class='wpcf7-response-output'][contains(.,'One or more fields have an error. Please check and try again.')]")); // разделът за грешки в полетата
     this.destinationHeader = element(by.xpath("//label[@class='fr'][contains(.,'Destination')]")); // етикет  на дестинация
     this.checkInHeader = element(by.xpath("//label[@class='fr'][contains(.,'Check in')]")); // етикет на check in 
     this.checkIn = element(by.xpath("//input[@id='checkin']"));
     this.checkOut= element(by.xpath("//input[contains(@name,'checkout')]")); 
     this.destination = element(by.xpath("(//span[@class='select2-chosen'][contains(.,'Search by Hotel or City Name')])[1]")); // локатор за полето дестинация 
     this.destinationValue = element(by.xpath("//div[@class='select2-result-label'][contains(.,'Alzer Hotel Istanbul, Istanbul')]"));
     this.adultsDownBtn = element(by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-down '][contains(.,'-')])[1]")); // бутон -
     this.adultsUpBtn = element(by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-up '][contains(.,'+')])[1]")); // бутон +
     this.childDownBtn = element(by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-down '][contains(.,'-')])[2]")); // бутон -
     this.childUpBtn = element(by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-up '][contains(.,'+')])[2]")); // бутон + 
     this.searchBtn = element(by.xpath("(//button[@type='submit'][contains(.,'Search')])[1]")); // локаторът за search 
     this.noMatchesFound = element(by.xpath("//li[@class='select2-no-results'][contains(.,'No matches found')]")); // съобщение за ненамерени 
     this.destinationIns = element(by.xpath("(//input[contains(@type,'text')])[44]")); 
     this.username = element(by.xpath("//input[contains(@type,'text')]"));
     this.password = element(by.xpath("//input[contains(@type,'password')]")); // полето за password
     this.loginBtn =element(by.xpath("//input[contains(@type,'submit')]")); //полето за бутон login
     this.logo = element(by.xpath("//div[contains(@class,'app_logo')]")); // разделът за SwagLaps 
     this.headerProducts = element(by.xpath("//span[@class='title'][contains(.,'Products')]")); // разделът за Products 
     this.addToCart = element(by.xpath("//button[contains(@data-test,'add-to-cart-sauce-labs-backpack')]")); // бутон ADD RO CART
     this.removeCart = element(by.xpath("//button[@class='btn btn_secondary btn_small btn_inventory'][contains(.,'Remove')]")); // бутон REMOVE
     this.shoppingCartBadge = element(by.xpath("//span[@class='shopping_cart_badge'][contains(.,'1')]")); //локатор за значка 1 
     this.shoppingCartBtn = element(by.xpath("//a[@class='shopping_cart_link fa-layers fa-fw'][contains(.,'1')]")); // локатор за бутон shopping cart 
     this.checkOutBtn = element(by.xpath("//a[@class='btn_action checkout_button'][contains(.,'CHECKOUT')]")); // бутон CHECK OUT
     this.yourInformation =  element(by.xpath("//div[@class='subheader'][contains(.,'Checkout: Your Information')]")); // раздел за грешки в полетата
     this.yourName = element(by.xpath("//input[contains(@data-test,'firstName')]")); // поле за your name 
     this.continueBtn =  element(by.xpath("//input[contains(@class,'btn_primary cart_button')]")); // поле за continue
     this.validationNeedUser = element(by.xpath("//h3[@data-test='error'][contains(.,'Error: Last Name is required')]")); // заглавие за Last name is required
     this.lastName  = element(by.xpath("//input[contains(@data-test,'lastName')]")); // поле за lastname
     this.postalCode = element(by.xpath("//input[contains(@data-test,'postalCode')]")); // поле за postalcode
     this.twentynine = element(by.xpath("//div[@class='inventory_item_price'][contains(.,'$29.99')]")); // разделът $29.99
     this.eight = element(by.xpath("//div[@class='inventory_item_price'][contains(.,'$7.99')]")); // разделът $7.99
     this.sixteen = element(by.xpath("(//div[@class='inventory_item_price'][contains(.,'$15.99')])[1]")); // разделът $15.99
     this.ten = element(by.xpath("//div[@class='inventory_item_price'][contains(.,'$9.99')]")); // разделъ $9.99
     this.fifty = element(by.xpath("//div[@class='inventory_item_price'][contains(.,'$49.99')]")); // разделът $49.99
     this.sixteenDolar = element(by.xpath("(//div[@class='inventory_item_price'][contains(.,'$15.99')])[2]")); // разделът $15.99 
    }


     async btnClick(b: ElementFinder) { // методът се използва за всички бутони
         try {
             await browser.wait(this.EK.elementToBeClickable(b), this.timeForWait, 'На екрана се очакваше да има предмет"' + b + '", но го няма!');
             await b.click();
         }
         catch (err) {
             console.log("////" + "error in products.po.ts allbtncluck() " + err);
             expect(true).toBe(false, "////" + "error in products.po.ts allbtnclick()" + err);
         }
     }

     async youNameTxt(d: any) {  // метода се използва от няколко текстови полета 
         await browser.wait(this.EK.visibilityOf(this.yourName), this.timeForWait, 'На екрана се очакваше да има име "' + this.yourName + '", но го няма!');
         await this.yourName.click();
         await this.yourName.clear();
         await this.yourName.sendKeys(d);
     }

     async usernameTxt(d: any) {  // метода се използва от няколко текстови полета 
         await browser.wait(this.EK.visibilityOf(this.username), this.timeForWait, 'На екрана се очакваше да има име "' + this.username + '", но го няма!');
         await this.username.click();
         await this.username.clear();
         await this.username.sendKeys(d);
     }

     async passwordTxt(d: any) {  //метода се използва от няколко текстови полета
         await browser.wait(this.EK.visibilityOf(this.password), this.timeForWait, 'На екрана се очакваше да има предмет"' + this.password + '", но го няма!');
         await this.password.click();
         await this.password.clear();
         await this.password.sendKeys(d);
     }

     async checkLabel(l: ElementFinder, s: String) { // методът се използва от няколко текстови полета
         try {
             await browser.wait(this.EK.visibilityOf(l), this.timeForWait, 'На екрана се очакваше да има предмет"' + l + '", но го няма!');
             expect(await l.getText()).toEqual(s);
         }
         catch (err) {
             console.log("////" + "error in products.po.ts checklabel() " + err);
             expect(true).toBe(false, "////" + "error in products.po.ts checklabel()" + err);
         }
     }
 }