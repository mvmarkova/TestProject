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
     this.subject = element(by.xpath("//input[@id='cf-4']"));//field for subject
     this.yourMessege = element(by.xpath("//textarea[contains(@name,'your-message')]")); // text field for your message
     this.tel = element(by.xpath("//input[contains(@type,'tel')]")); // field for tel
     this.sendBtn = element(by.xpath("//input[contains(@type,'submit')]")); // field for button submit
     this.notValidEmail = element(by.xpath("//span[@class='wpcf7-not-valid-tip'][contains(.,'The e-mail address entered is invalid.')]")); // locator for The e-mail address entered is invalid
     this.responseOutput = element(by.xpath("//div[@class='wpcf7-response-output'][contains(.,'One or more fields have an error. Please check and try again.')]")); // locator for One or more fields have an error. Please check and try again
     this.destinationHeader = element(by.xpath("//label[@class='fr'][contains(.,'Destination')]")); // destination
     this.checkInHeader = element(by.xpath("//label[@class='fr'][contains(.,'Check in')]")); //  check in 
     this.checkIn = element(by.xpath("//input[@id='checkin']")); //field for check in 
     this.checkOut= element(by.xpath("//input[contains(@name,'checkout')]")); // field for chechout
     this.destination = element(by.xpath("(//span[@class='select2-chosen'][contains(.,'Search by Hotel or City Name')])[1]")); // locator for field destination
     this.destinationValue = element(by.xpath("//div[@class='select2-result-label'][contains(.,'Alzer Hotel Istanbul, Istanbul')]")); // 
     this.adultsDownBtn = element(by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-down '][contains(.,'-')])[1]")); // button -
     this.adultsUpBtn = element(by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-up '][contains(.,'+')])[1]")); // button +
     this.childDownBtn = element(by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-down '][contains(.,'-')])[2]")); // button - 
     this.childUpBtn = element(by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-up '][contains(.,'+')])[2]")); // button + 
     this.searchBtn = element(by.xpath("(//button[@type='submit'][contains(.,'Search')])[1]")); // button search 
     this.noMatchesFound = element(by.xpath("//li[@class='select2-no-results'][contains(.,'No matches found')]")); // locator for No matches found
     this.destinationIns = element(by.xpath("(//input[contains(@type,'text')])[44]")); // field for destination
     this.username = element(by.xpath("//input[contains(@type,'text')]")); // field for username
     this.password = element(by.xpath("//input[contains(@type,'password')]")); // field for Password
     this.loginBtn =element(by.xpath("//input[contains(@type,'submit')]")); //field for LOGIN
     this.logo = element(by.xpath("//div[contains(@class,'app_logo')]")); // logo SwagLaps 
     this.headerProducts = element(by.xpath("//span[@class='title'][contains(.,'Products')]")); // locator for Products 
     this.addToCart = element(by.xpath("//button[contains(@data-test,'add-to-cart-sauce-labs-backpack')]")); // locator for button ADD RO CART
     this.removeCart = element(by.xpath("//button[@class='btn btn_secondary btn_small btn_inventory'][contains(.,'Remove')]")); // locator for button REMOVE
     this.shoppingCartBadge = element(by.xpath("//span[@class='shopping_cart_badge'][contains(.,'1')]")); // locator for you cart 1 
     this.shoppingCartBtn = element(by.xpath("//a[@class='shopping_cart_link fa-layers fa-fw'][contains(.,'1')]")); // locator for shopping cart 
     this.checkOutBtn = element(by.xpath("//a[@class='btn_action checkout_button'][contains(.,'CHECKOUT')]")); // locator for button CHECK OUT
     this.yourInformation =  element(by.xpath("//div[@class='subheader'][contains(.,'Checkout: Your Information')]")); // 
     this.yourName = element(by.xpath("//input[contains(@data-test,'firstName')]")); // field for your name is required
     this.continueBtn =  element(by.xpath("//input[contains(@class,'btn_primary cart_button')]")); // locator for button continue
     this.validationNeedUser = element(by.xpath("//h3[@data-test='error'][contains(.,'Error: Last Name is required')]")); // headings for Last name is required
     this.lastName  = element(by.xpath("//input[contains(@data-test,'lastName')]")); // field for lastname
     this.postalCode = element(by.xpath("//input[contains(@data-test,'postalCode')]")); // field for postalcode
     this.twentynine = element(by.xpath("//div[@class='inventory_item_price'][contains(.,'$29.99')]")); // $29.99
     this.eight = element(by.xpath("//div[@class='inventory_item_price'][contains(.,'$7.99')]")); // $7.99
     this.sixteen = element(by.xpath("(//div[@class='inventory_item_price'][contains(.,'$15.99')])[1]")); // $15.99
     this.ten = element(by.xpath("//div[@class='inventory_item_price'][contains(.,'$9.99')]")); //  $9.99
     this.fifty = element(by.xpath("//div[@class='inventory_item_price'][contains(.,'$49.99')]")); //  $49.99
     this.sixteenDolar = element(by.xpath("(//div[@class='inventory_item_price'][contains(.,'$15.99')])[2]")); //  $15.99 
    }


     async btnClick(b: ElementFinder) { // method using all buttons
         try {
             await browser.wait(this.EK.elementToBeClickable(b), this.timeForWait, 'Expected object"' + b + '", but is not!');
             await b.click();
         }
         catch (err) {
             console.log("////" + "error in products.po.ts allbtncluck() " + err);
             expect(true).toBe(false, "////" + "error in products.po.ts allbtnclick()" + err);
         }
     }

     async youNameTxt(d: any) {  // method for name
         await browser.wait(this.EK.visibilityOf(this.yourName), this.timeForWait, 'Expected name"' + this.yourName + '", but is not!');
         await this.yourName.click();
         await this.yourName.clear();
         await this.yourName.sendKeys(d);
     }

     async usernameTxt(d: any) {  // method for username
         await browser.wait(this.EK.visibilityOf(this.username), this.timeForWait, 'Expected username "' + this.username + '", but is not!');
         await this.username.click();
         await this.username.clear();
         await this.username.sendKeys(d);
     }

     async passwordTxt(d: any) {  // method for password
         await browser.wait(this.EK.visibilityOf(this.password), this.timeForWait, 'Expected password"' + this.password + '", but is not!');
         await this.password.click();
         await this.password.clear();
         await this.password.sendKeys(d);
     }

     async checkLabel(l: ElementFinder, s: String) { // checklabel for a few headings
         try {
             await browser.wait(this.EK.visibilityOf(l), this.timeForWait, 'Expected headings"' + l + '", but is not!');
             expect(await l.getText()).toEqual(s);
         }
         catch (err) {
             console.log("////" + "error in products.po.ts checklabel() " + err);
             expect(true).toBe(false, "////" + "error in products.po.ts checklabel()" + err);
         }
     }
 }
