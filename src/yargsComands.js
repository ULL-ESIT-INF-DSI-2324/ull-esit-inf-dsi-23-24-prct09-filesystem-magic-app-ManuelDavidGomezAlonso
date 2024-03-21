"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("yargs");
var helpers_1 = require("yargs/helpers");
var magiCard_1 = require("./magiCard");
var jsonController_1 = require("./jsonController");
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command('add', 'Adds a card to the collection', {
    id: {
        description: 'Card ID',
        type: 'number',
        demandOption: true
    },
    name: {
        description: 'card name',
        type: 'string',
        demandOption: true
    },
    manaCost: {
        description: 'Mana cost',
        type: 'number',
        demandOption: true
    },
    color: {
        description: 'Color',
        choices: Object.values(magiCard_1.color),
        demandOption: true
    },
    type: {
        description: 'Type',
        choices: Object.values(magiCard_1.tipe),
        demandOption: true
    },
    rare: {
        description: 'Rare',
        choices: Object.values(magiCard_1.rare),
        demandOption: true
    },
    rules: {
        description: 'Rules',
        type: 'string',
        demandOption: true
    },
    loyalty: {
        description: 'Loyalty',
        type: 'number',
        demandOption: true
    },
    value: {
        description: 'Value',
        type: 'number',
        demandOption: true
    },
    strRes: {
        description: 'Strength/Resistance',
        type: 'number'
    }
}, function (argv) {
    var card = new magiCard_1.magicCard(argv.id, argv.name, argv.manaCost, argv.color, argv.type, argv.rare, argv.rules, argv.loyalty, argv.value, argv.strRes);
    var json = new jsonController_1.jsonCards();
    json.add(card);
})
    .help()
    .argv;
