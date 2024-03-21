import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { magicCard , color, tipe, rare } from './magiCard';
import { jsonCards } from './jsonController';

yargs(hideBin(process.argv))
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
      choices: Object.values(color),
      demandOption: true
    },
    type: {
      description: 'Type',
      choices: Object.values(tipe),
      demandOption: true
    },
    rare: {
      description: 'Rare',
      choices: Object.values(rare),
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
 }, (argv) => {
    const card = new magicCard(argv.id, argv.name, argv.manaCost, argv.color as color, argv.type as tipe, argv.rare as rare, argv.rules, argv.loyalty, argv.value, argv.strRes);
    const json = new jsonCards();
    json.add(card);
    })
 .help()
 .argv;
