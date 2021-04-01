
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
 
     this.username = element(by.xpath("//input[contains(@type,'text')]")); // полето за username 
     this.password=element(by.xpath("//input[contains(@type,'password')]")); // полето за password
     this.loginBtn =element(by.xpath("//input[contains(@type,'submit')]")); //полето за бутон login
     this.lockedUser=element(by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Sorry, this user has been locked out.')]")); //заглавие за locked user 
     this.passwordRequired=element(by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Password is required')]")); //заглавие за password required 
     this.usernameRequired=element(by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Username is required')]")); // заглавие за username required 
     this.notValidEmailAndPassword=element(by.xpath("//h3[contains(@data-test,'error')]")); // заглавие на съобщението за грешен username и password 
   
    }
 
   async loginBtnClick(btn?: any, curl?: any, mes?: any) {      // един метод за всички тест случай 
    try{
     await browser.wait(this.EK.elementToBeClickable(this.loginBtn), this.timeForWait, 'На екрана се очакваше да има предмет"' + this.loginBtn + '", но го няма!');

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
      await browser.wait(this.EK.visibilityOf(e), this.timeForWait, 'На екрана се очакваше да има предмет"' + e + '", но го няма!');
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
       await browser.wait(this.EK.visibilityOf(e), this.timeForWait, 'На екрана се очакваше да има предмет"' + e + '", но го няма!');
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