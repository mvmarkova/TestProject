
//Page Class contains locators and methods (Page Object Model(POM))
 import {protractor, browser, by, element, Key, logging, ElementFinder, ExpectedConditions as EC, WebElement, ElementArrayFinder } from 'protractor';


 export class Login {
 // 

   username!: ElementFinder;
   password!: ElementFinder;
   loginBtn!: ElementFinder;
   lockedUser!: ElementFinder;
   passwordRequired!: ElementFinder;
   usernameRequired!: ElementFinder;
   notValidEmailAndPassword!: ElementFinder;

   EK = protractor.ExpectedConditions;
    timeForWait: number=5000;
 
   //Contructors contains only locators. 
   constructor() {
 
     this.username = element(by.xpath("//input[contains(@type,'text')]")); // field for username
     this.password=element(by.xpath("//input[contains(@type,'password')]")); // field for password
     this.loginBtn =element(by.xpath("//input[contains(@type,'submit')]")); // field for button submit
     this.lockedUser=element(by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Sorry, this user has been locked out.')]")); // heading for Epic sadface: Sorry, this user has been locked out.
     this.passwordRequired=element(by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Password is required')]")); // heading for Epic sadfce: Password is required 
     this.usernameRequired=element(by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Username is required')]")); // heading for Epic sadface: Username is required
     this.notValidEmailAndPassword=element(by.xpath("//h3[contains(@data-test,'error')]")); // heading for error
   
    }
 
   async loginBtnClick(btn?: any, curl?: any, mes?: any) {      // one method for all test cases
    try{
     await browser.wait(this.EK.elementToBeClickable(this.loginBtn), this.timeForWait, 'Expected object"' + this.loginBtn + '", but is not!');

     if (btn === 'yes') {
       await this.loginBtn.click()
     } 

     expect(await browser.getCurrentUrl()).toEqual(curl);

     if (mes == null) {
     } else {
       expect(await this.notValidEmailAndPassword.getText()).toContain(mes);
     }
    }catch(err){
      console.log("/////" + "error in login.po.loginBtnClick() "+ err);
      expect(true).toBe(false, "/////"+ "error in login.po.loginBtnClick() "+ err); 
    }
   }
     async myTxtBox(d: any, e:ElementFinder) {  // 
       try { 
      await browser.wait(this.EK.visibilityOf(e), this.timeForWait, 'Expected object"' + e + '", but is not!');
      await e.click();
      await e.clear();
      if(d==null){
        
      }else{ 
        await e.sendKeys(d); 
      }
     
       }catch(err){
         console.log("////"+"error in login.po.myTxtBox() "+ err);
         expect(true).toBe(false, "////"+"error in login.po.myTxtBox() "+ err); 
       } 
  
      }

      async myPrice(d: any, e:ElementFinder) {  // 
        try { 
       await browser.wait(this.EK.visibilityOf(e), this.timeForWait, 'Expected object"' + e + '", but is not!');
       await e.click();
       await e.clear();
       if(d==null){
         
       }else{ 
         await e.sendKeys(d); 
       }
      
        }catch(err){
          console.log("////"+"error in login.po.myTxtBox() "+ err);
          expect(true).toBe(false, "////"+"error in login.po.myTxtBox() "+ err); 
        } 
   
       }
 

      async myLogin() { 
        try{

       await this.myTxtBox('standard_user', this.username);
       await this.myTxtBox('secret_sauce', this.password);
       await this.loginBtnClick('yes','https://www.saucedemo.com/inventory.html');
        }catch(err){
          console.log("///" + "====== error in login.po.myLogin() "+ err);
          expect(true).toBe(false,"////"+"=======error in login.po.myLogin() "+ err); 
        }
      }

 }
