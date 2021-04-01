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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Page Class contains locators and methods (Page Object Model(POM))
 */
var protractor_1 = require("protractor");
var Products = /** @class */ (function () {
    //Contructors contains only locators. 
    function Products() {
        this.EK = protractor_1.protractor.ExpectedConditions;
        this.timeForWait = 5000;
        this.contactUsBtn = protractor_1.element(protractor_1.by.xpath("//span[@data-alt='Contact us'][contains(.,'Contact us')]")); // локатор за бутон contactUs
        this.header = protractor_1.element(protractor_1.by.xpath("//h2[contains(.,'Contact Us')]")); // заглавие на прозореца за контакт
        this.email = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'email')]")); // полето за e-mail
        this.name = protractor_1.element(protractor_1.by.xpath("//input[contains(@name,'your-name')]")); //полето за име
        this.subject = protractor_1.element(protractor_1.by.xpath("//input[@id='cf-4']")); //полето за заглавие
        this.yourMessege = protractor_1.element(protractor_1.by.xpath("//textarea[contains(@name,'your-message')]")); //текстовотополе за твоето съобщение
        this.tel = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'tel')]")); // полето за телефонен номер
        this.sendBtn = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'submit')]")); // полето за бутон send
        this.notValidEmail = protractor_1.element(protractor_1.by.xpath("//span[@class='wpcf7-not-valid-tip'][contains(.,'The e-mail address entered is invalid.')]")); // локаторът за невалидно съобщение
        this.responseOutput = protractor_1.element(protractor_1.by.xpath("//div[@class='wpcf7-response-output'][contains(.,'One or more fields have an error. Please check and try again.')]")); // разделът за грешки в полетата
        this.destinationHeader = protractor_1.element(protractor_1.by.xpath("//label[@class='fr'][contains(.,'Destination')]")); // етикет  на дестинация
        this.checkInHeader = protractor_1.element(protractor_1.by.xpath("//label[@class='fr'][contains(.,'Check in')]")); // етикет на check in 
        this.checkIn = protractor_1.element(protractor_1.by.xpath("//input[@id='checkin']"));
        this.checkOut = protractor_1.element(protractor_1.by.xpath("//input[contains(@name,'checkout')]"));
        this.destination = protractor_1.element(protractor_1.by.xpath("(//span[@class='select2-chosen'][contains(.,'Search by Hotel or City Name')])[1]")); // локатор за полето дестинация 
        this.destinationValue = protractor_1.element(protractor_1.by.xpath("//div[@class='select2-result-label'][contains(.,'Alzer Hotel Istanbul, Istanbul')]"));
        this.adultsDownBtn = protractor_1.element(protractor_1.by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-down '][contains(.,'-')])[1]")); // бутон -
        this.adultsUpBtn = protractor_1.element(protractor_1.by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-up '][contains(.,'+')])[1]")); // бутон +
        this.childDownBtn = protractor_1.element(protractor_1.by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-down '][contains(.,'-')])[2]")); // бутон -
        this.childUpBtn = protractor_1.element(protractor_1.by.xpath("(//button[@class='btn btn-white bootstrap-touchspin-up '][contains(.,'+')])[2]")); // бутон + 
        this.searchBtn = protractor_1.element(protractor_1.by.xpath("(//button[@type='submit'][contains(.,'Search')])[1]")); // локаторът за search 
        this.noMatchesFound = protractor_1.element(protractor_1.by.xpath("//li[@class='select2-no-results'][contains(.,'No matches found')]")); // съобщение за ненамерени 
        this.destinationIns = protractor_1.element(protractor_1.by.xpath("(//input[contains(@type,'text')])[44]"));
        this.username = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'text')]"));
        this.password = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'password')]")); // полето за password
        this.loginBtn = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'submit')]")); //полето за бутон login
        this.logo = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'app_logo')]")); // разделът за SwagLaps 
        this.headerProducts = protractor_1.element(protractor_1.by.xpath("//span[@class='title'][contains(.,'Products')]")); // разделът за Products 
        this.addToCart = protractor_1.element(protractor_1.by.xpath("//button[contains(@data-test,'add-to-cart-sauce-labs-backpack')]")); // бутон ADD RO CART
        this.removeCart = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn_secondary btn_small btn_inventory'][contains(.,'Remove')]")); // бутон REMOVE
        this.shoppingCartBadge = protractor_1.element(protractor_1.by.xpath("//span[@class='fa-layers-counter shopping_cart_badge'][contains(.,'1')]")); //локатор за значка 1 
        this.shoppingCartBtn = protractor_1.element(protractor_1.by.xpath("//a[@class='shopping_cart_link fa-layers fa-fw'][contains(.,'1')]")); // локатор за бутон shopping cart 
        this.checkOutBtn = protractor_1.element(protractor_1.by.xpath("//a[@class='btn_action checkout_button'][contains(.,'CHECKOUT')]")); // бутон CHECK OUT
        this.yourInformation = protractor_1.element(protractor_1.by.xpath("//div[@class='subheader'][contains(.,'Checkout: Your Information')]")); // раздел за грешки в полетата
        this.yourName = protractor_1.element(protractor_1.by.xpath("//input[contains(@data-test,'firstName')]")); // поле за your name 
        this.continueBtn = protractor_1.element(protractor_1.by.xpath("//input[contains(@class,'btn_primary cart_button')]")); // поле за continue
        this.validationNeedUser = protractor_1.element(protractor_1.by.xpath("//h3[@data-test='error'][contains(.,'Error: Last Name is required')]")); // заглавие за Last name is required
        this.lastName = protractor_1.element(protractor_1.by.xpath("//input[contains(@data-test,'lastName')]")); // поле за lastname
        this.postalCode = protractor_1.element(protractor_1.by.xpath("//input[contains(@data-test,'postalCode')]")); // поле за postalcode
        this.twentynine = protractor_1.element(protractor_1.by.xpath("//div[@class='inventory_item_price'][contains(.,'$29.99')]")); // разделът $29.99
        this.eight = protractor_1.element(protractor_1.by.xpath("//div[@class='inventory_item_price'][contains(.,'$7.99')]")); // разделът $7.99
        this.sixteen = protractor_1.element(protractor_1.by.xpath("(//div[@class='inventory_item_price'][contains(.,'$15.99')])[1]")); // разделът $15.99
        this.ten = protractor_1.element(protractor_1.by.xpath("//div[@class='inventory_item_price'][contains(.,'$9.99')]")); // разделъ $9.99
        this.fifty = protractor_1.element(protractor_1.by.xpath("//div[@class='inventory_item_price'][contains(.,'$49.99')]")); // разделът $49.99
        this.sixteenDolar = protractor_1.element(protractor_1.by.xpath("(//div[@class='inventory_item_price'][contains(.,'$15.99')])[2]")); // разделът $15.99 
    }
    Products.prototype.btnClick = function (b) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, protractor_1.browser.wait(this.EK.elementToBeClickable(b), this.timeForWait, 'На екрана се очакваше да има предмет"' + b + '", но го няма!')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, b.click()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log("////" + "error in products.po.ts allbtncluck() " + err_1);
                        expect(true).toBe(false, "////" + "error in products.po.ts allbtnclick()" + err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Products.prototype.youNameTxt = function (d) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: // метода се използва от няколко текстови полета 
                    return [4 /*yield*/, protractor_1.browser.wait(this.EK.visibilityOf(this.yourName), this.timeForWait, 'На екрана се очакваше да има име "' + this.yourName + '", но го няма!')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.yourName.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.yourName.clear()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.yourName.sendKeys(d)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Products.prototype.usernameTxt = function (d) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: // метода се използва от няколко текстови полета 
                    return [4 /*yield*/, protractor_1.browser.wait(this.EK.visibilityOf(this.username), this.timeForWait, 'На екрана се очакваше да има име "' + this.username + '", но го няма!')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.username.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.username.clear()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.username.sendKeys(d)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Products.prototype.passwordTxt = function (d) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: //метода се използва от няколко текстови полета
                    return [4 /*yield*/, protractor_1.browser.wait(this.EK.visibilityOf(this.password), this.timeForWait, 'На екрана се очакваше да има предмет"' + this.password + '", но го няма!')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.password.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.password.clear()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(d)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Products.prototype.checkLabel = function (l, s) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, protractor_1.browser.wait(this.EK.visibilityOf(l), this.timeForWait, 'На екрана се очакваше да има предмет"' + l + '", но го няма!')];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, l.getText()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual(s);
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _b.sent();
                        console.log("////" + "error in products.po.ts checklabel() " + err_2);
                        expect(true).toBe(false, "////" + "error in products.po.ts checklabel()" + err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Products;
}());
exports.Products = Products;
