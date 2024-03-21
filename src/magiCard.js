"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicCard = exports.tipe = exports.rare = exports.color = void 0;
var color;
(function (color) {
    color[color["white"] = 0] = "white";
    color[color["blue"] = 1] = "blue";
    color[color["black"] = 2] = "black";
    color[color["red"] = 3] = "red";
    color[color["green"] = 4] = "green";
    color[color["colorless"] = 5] = "colorless";
    color[color["multicolor"] = 6] = "multicolor";
})(color || (exports.color = color = {}));
;
var rare;
(function (rare) {
    rare[rare["common"] = 0] = "common";
    rare[rare["uncommon"] = 1] = "uncommon";
    rare[rare["rare"] = 2] = "rare";
    rare[rare["mythicRare"] = 3] = "mythicRare";
})(rare || (exports.rare = rare = {}));
;
var tipe;
(function (tipe) {
    tipe[tipe["creature"] = 0] = "creature";
    tipe[tipe["enchantment"] = 1] = "enchantment";
    tipe[tipe["artifact"] = 2] = "artifact";
    tipe[tipe["instant"] = 3] = "instant";
    tipe[tipe["sorcery"] = 4] = "sorcery";
    tipe[tipe["planeswalker"] = 5] = "planeswalker";
    tipe[tipe["land"] = 6] = "land";
})(tipe || (exports.tipe = tipe = {}));
;
var magicCard = /** @class */ (function () {
    function magicCard(iD, name_, manaCost_, color_, typo_, rare_, rules_, loyalty_, value_, strRes_) {
        this.iD = iD;
        this.name_ = name_;
        this.manaCost_ = manaCost_;
        this.color_ = color_;
        this.typo_ = typo_;
        this.rare_ = rare_;
        this.rules_ = rules_;
        this.loyalty_ = loyalty_;
        this.value_ = value_;
        this.strRes_ = strRes_;
    }
    //getters
    magicCard.prototype.getID = function () {
        return this.iD;
    };
    magicCard.prototype.getName = function () {
        return this.name_;
    };
    magicCard.prototype.getManaCost = function () {
        return this.manaCost_;
    };
    magicCard.prototype.getColor = function () {
        return this.color_;
    };
    magicCard.prototype.getTipe = function () {
        return this.typo_;
    };
    magicCard.prototype.getRare = function () {
        return this.rare_;
    };
    magicCard.prototype.getRules = function () {
        return this.rules_;
    };
    magicCard.prototype.getLoyalty = function () {
        return this.loyalty_;
    };
    magicCard.prototype.getValue = function () {
        return this.value_;
    };
    magicCard.prototype.getStrRes = function () {
        return this.strRes_;
    };
    return magicCard;
}());
exports.magicCard = magicCard;
