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
//import { by, element, ElementFinder } from 'protractor'; // може да се сложат по малко елементи да се ползват. Онези, които липсват ще дава грешка ако искаш да ги ползваш.
var protractor_1 = require("protractor");
var OfficePage = /** @class */ (function () {
    // в конструктора се слагат само локатори, няма click или sendkey , няма събитие.
    function OfficePage() {
        this.contactUsBtn = protractor_1.element(protractor_1.by.xpath("//span[@data-alt='Contact us'][contains(.,'Contact us')]")); // локатор за бутон contactUs
        this.header = protractor_1.element(protractor_1.by.xpath("//h2[contains(.,'Contact Us')]")); // заглавие на прозореца за контакт
        this.email = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'email')]")); // полето за e-mail
    }
    OfficePage.prototype.contactUsBtnClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var until, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.contactUsBtn), 5000, "Бутона не може да се кликне")];
                    case 1:
                        _b.sent(); // 5 секунди проверява, дали бутона може да се кликне
                        return [4 /*yield*/, this.contactUsBtn.click()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(this.header), 5000, 'На екрана се очакваше да има Заглавие/Етикет "' + this.header + '", но го няма!')];
                    case 3:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, this.header.getText()];
                    case 4:
                        _a.apply(void 0, [_b.sent()]).toEqual('CONTACT US'); // проверка, че се е отворила подстраницата
                        return [2 /*return*/];
                }
            });
        });
    };
    OfficePage.prototype.setEmail = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var until, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(this.email), 5000, "Очакваше се да има на екрана поле '" + this.email + "', но го няма")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.email.clear()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(e)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log(" Грешка при OfficePage.setEmail()" + err_1);
                        expect(true).toBe(false, "Грешка при OfficePage.setEmail()" + err_1); // при гърмеж да фейлне теста и това ще се види в репорта
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return OfficePage;
}());
exports.OfficePage = OfficePage;
