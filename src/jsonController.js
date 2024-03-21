"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonCards = void 0;
var fs = require("fs");
//import { cardsCollection } from './cardsCollection';
var directorioUsuario = "./usuarios/".concat(process.env.USER);
var jsonCards = /** @class */ (function () {
    function jsonCards() {
        if (!fs.existsSync(directorioUsuario)) {
            fs.mkdirSync(directorioUsuario);
        }
    }
    jsonCards.prototype.add = function (card) {
        if (fs.existsSync("".concat(directorioUsuario, "/").concat(card.getID(), ".json"))) {
            throw new Error('Card already exists');
        }
        fs.writeFileSync("".concat(directorioUsuario, "/").concat(card.getID(), ".json"), JSON.stringify(card));
    };
    jsonCards.prototype.delete = function (cardID) {
        if (fs.existsSync("".concat(directorioUsuario, "/").concat(cardID, ".json"))) {
            fs.unlinkSync("".concat(directorioUsuario, "/").concat(cardID, ".json"));
        }
    };
    jsonCards.prototype.showCard = function (showIDCard) {
        if (fs.existsSync("".concat(directorioUsuario, "/").concat(showIDCard, ".json"))) {
            var card = fs.readFileSync("".concat(directorioUsuario, "/").concat(showIDCard, ".json"), 'utf-8');
            return JSON.parse(card);
        }
    };
    jsonCards.prototype.modify = function (cardID, valueToChange, newValue) {
        if (fs.existsSync("".concat(directorioUsuario, "/").concat(cardID, ".json"))) {
            var card = fs.readFileSync("".concat(directorioUsuario, "/").concat(cardID, ".json"), 'utf-8');
            var cardObj = JSON.parse(card);
            cardObj[valueToChange] = newValue;
            this.add(cardObj);
        }
        else {
            throw new Error('Card not found');
        }
    };
    return jsonCards;
}());
exports.jsonCards = jsonCards;
