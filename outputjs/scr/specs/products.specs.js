"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// Test data from Excel file. 
var protractor_1 = require("protractor");
var products_po_1 = require("./../pom/products.po"); //  2. добавяне на Page клас на този spec
var login_po_1 = require("./../po_/login.po");
//var xl = require('../utility/readExl.js'); // Library for reading excel file 
describe('Екран за контакти - това е ТестСуит', function () {
    var myProducts; // variable type Page 
    myProducts = new products_po_1.Products(); // create new instance of class Page 
    var myLogin;
    myLogin = new login_po_1.Login();
    // let PNTest = xl.readFromExcel('PNTest', './dataFiles/products.xlsx'); // declaration sheet from excel file 
    var EK = protractor_1.protractor.ExpectedConditions;
    var timeForWait = 5000;
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                case 1:
                    _a.sent(); // за асинхронна работа
                    return [4 /*yield*/, protractor_1.browser.get('https://www.saucedemo.com/')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, myLogin.myLogin()];
                case 3:
                    _a.sent(); // vhod 
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
        var logs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.manage().logs().get(protractor_1.logging.Type.BROWSER)];
                case 1:
                    logs = _a.sent();
                    expect(logs).not.toContain(jasmine.objectContaining({
                        level: protractor_1.logging.Level.DEBUG,
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    // PNTest.forEach(function (data: any) {   // forEach reading data sheet 
    fit('Test 1 - Резервация на хотел с коректни данни; ', function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    // await myLogin.myLogin(); // vhod 
                    _a = expect;
                    return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                case 1:
                    // await myLogin.myLogin(); // vhod 
                    _a.apply(void 0, [_f.sent()]).toContain("saucedemo.com");
                    return [4 /*yield*/, protractor_1.browser.wait(EK.visibilityOf(myProducts.logo), timeForWait, 'На екрана се очакваше да има Заглавие "' + myProducts.logo + '", но го няма!')];
                case 2:
                    _f.sent(); // за време изаква да се появи заглавието.
                    //expect(await myPage.destinationHeader.getText()).toEqual(data.destinationHeader);    //colon destinationHeader 
                    return [4 /*yield*/, myProducts.logo.isPresent()];
                case 3:
                    //expect(await myPage.destinationHeader.getText()).toEqual(data.destinationHeader);    //colon destinationHeader 
                    _f.sent();
                    // await browser.wait(EK.visibilityOf(myProducts.headerProducts), timeForWait, 'На екрана се очакваше да има Заглавие "' + myProducts.headerProducts + '", но го няма!');       // за време изаква да се появи заглавието.
                    _b = expect;
                    return [4 /*yield*/, myProducts.headerProducts.getText()];
                case 4:
                    // await browser.wait(EK.visibilityOf(myProducts.headerProducts), timeForWait, 'На екрана се очакваше да има Заглавие "' + myProducts.headerProducts + '", но го няма!');       // за време изаква да се появи заглавието.
                    _b.apply(void 0, [_f.sent()]).toEqual('Products'); //    .headerProducts.getText()).toEqual("Products"); //colon ckeckInHeader 
                    // console.log("////2"+ (await myProducts.headerProducts.getText()));
                    _c = expect;
                    return [4 /*yield*/, myProducts.addToCart.getText()];
                case 5:
                    // console.log("////2"+ (await myProducts.headerProducts.getText()));
                    _c.apply(void 0, [_f.sent()]).toEqual('ADD TO CART');
                    return [4 /*yield*/, myProducts.addToCartClick()];
                case 6:
                    _f.sent();
                    protractor_1.browser.sleep(5000);
                    _d = expect;
                    return [4 /*yield*/, myProducts.removeCart.getText()];
                case 7:
                    _d.apply(void 0, [_f.sent()]).toEqual('REMOVE');
                    return [4 /*yield*/, protractor_1.browser.wait(EK.visibilityOf(myProducts.shoppingCartBadge), timeForWait, 'На екрана се очакваше да има Заглавие "' + myProducts.shoppingCartBadge + '", но го няма!')];
                case 8:
                    _f.sent();
                    _e = expect;
                    return [4 /*yield*/, myProducts.shoppingCartBadge.getText()];
                case 9:
                    _e.apply(void 0, [_f.sent()]).toEqual('1');
                    return [2 /*return*/];
            }
        });
    }); });
    //it('Test 1 - Резервация на хотел с коректни данни; ', async () => {
    // await browser.wait(EK.visibilityOf(myProducts.headerProducts), timeForWait, 'На екрана се очакваше да има Заглавие "' + myProducts.headerProducts + '", но го няма!');       // за време изаква да се появи заглавието.
    //expect(await myProducts.headerProducts.getText()).toEqual("Products"); //colon ckeckInHeader 
    //await myProducts.username('standard_user'); // colon checkIn 
    // await myProducts.password('secret_sauce');  // colon CheckOut 
    //await myPage.adultsDownBtnClick();
    //await myPage.adultsUpBtnClick();
    // await myPage.childDownBtnClick();
    //await myPage.childUpBtnClick();
    //await myPage.searchBtnClick();
    // expect(await browser.getCurrentUrl()).toContain("phptravels.net/hotels/detail/istanbul/alzer-hotel-istanbuls/");
    //})
});
