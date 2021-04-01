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
//Page Class contains locators and methods (Page Object Model(POM))
var protractor_1 = require("protractor");
var Login = /** @class */ (function () {
    //Contructors contains only locators. 
    function Login() {
        this.EK = protractor_1.protractor.ExpectedConditions;
        this.timeForWait = 5000;
        this.username = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'text')]")); // полето за username 
        this.password = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'password')]")); // полето за password
        this.loginBtn = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'submit')]")); //полето за бутон login
        this.lockedUser = protractor_1.element(protractor_1.by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Sorry, this user has been locked out.')]")); //заглавие за locked user 
        this.passwordRequired = protractor_1.element(protractor_1.by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Password is required')]")); //заглавие за password required 
        this.usernameRequired = protractor_1.element(protractor_1.by.xpath("//h3[@data-test='error'][contains(.,'Epic sadface: Username is required')]")); // заглавие за username required 
        this.notValidEmailAndPassword = protractor_1.element(protractor_1.by.xpath("//h3[contains(@data-test,'error')]")); // заглавие на съобщението за грешен username и password 
        this.logo = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'app_logo')]")); // разделът за SwagLaps 
        this.headerProducts = protractor_1.element(protractor_1.by.xpath("//div[@class='product_label'][contains(.,'Products')]")); // разделът за Products 
        this.addToCart = protractor_1.element(protractor_1.by.xpath("(//button[@class='btn_primary btn_inventory'][contains(.,'ADD TO CART')])[1]")); // бутон ADD RO CART
        this.removeCart = protractor_1.element(protractor_1.by.xpath("//button[@class='btn_secondary btn_inventory'][contains(.,'REMOVE')]")); // бутон REMOVE
        this.shoppingCartBadge = protractor_1.element(protractor_1.by.xpath("//span[@class='fa-layers-counter shopping_cart_badge'][contains(.,'1')]")); //локатор за значка 1 
        this.shoppingCartBtn = protractor_1.element(protractor_1.by.xpath("//a[@class='shopping_cart_link fa-layers fa-fw'][contains(.,'1')]")); // локатор за бутон shopping cart 
        this.checkOutBtn = protractor_1.element(protractor_1.by.xpath("//a[@class='btn_action checkout_button'][contains(.,'CHECKOUT')]")); // бутон CHECK OUT
        this.yourInformation = protractor_1.element(protractor_1.by.xpath("//div[@class='subheader'][contains(.,'Checkout: Your Information')]")); // раздел за checkout your information
        this.yourName = protractor_1.element(protractor_1.by.xpath("//input[contains(@data-test,'firstName')]")); // поле за your name 
        this.continueBtn = protractor_1.element(protractor_1.by.xpath("//input[contains(@class,'btn_primary cart_button')]")); // поле за continue
        this.validationNeedUser = protractor_1.element(protractor_1.by.xpath("//h3[@data-test='error'][contains(.,'Error: Last Name is required')]")); // заглавие за Last name is required
        this.secProduct = protractor_1.element(protractor_1.by.xpath("(//button[@class='btn_primary btn_inventory'][contains(.,'ADD TO CART')])[2]")); // бутон  za ADD TO CART 
        this.lastName = protractor_1.element(protractor_1.by.xpath("//input[contains(@data-test,'lastName')]"));
        this.postalCode = protractor_1.element(protractor_1.by.xpath("//input[contains(@data-test,'postalCode')]"));
    }
    Login.prototype.myProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.addToCart.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.shoppingCartBtn.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.checkOutBtn.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.yourName.sendKeys('wwwww')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.lastName.sendKeys('ksanov')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.postalCode.sendKeys('6900')];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.continueBtn.click()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        console.log("////" + "===== error in check.po.myLogin() " + err_1);
                        expect(true).toBe(false, "////" + "=======error in check.specs.ts");
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return Login;
}());
exports.Login = Login;
