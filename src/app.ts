import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { magicCard , color, tipe, rare } from './magiCard';
import { jsonCards } from './jsonController';
import * as chalk from 'chalk';

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

    if (isNaN(argv.id)) {
      throw chalk.red(new Error('ID must be a number'));
    }

    if (typeof argv.name !== 'string') {
      throw chalk.red(new Error('Name must be a string'));
    }

    if (isNaN(argv.manaCost)) {
      throw chalk.red(new Error('Mana Cost must be a number'));
    }

    if (!Object.values(color).includes(argv.color)) {
      throw chalk.red(new Error('Color must be a valid color'));
    }

    if (!Object.values(tipe).includes(argv.type)) {
      throw chalk.red(new Error('Type must be a valid type'));
    }

    if (!Object.values(rare).includes(argv.rare)) {
      throw chalk.red(new Error('Rare must be a valid rare'));
    }

    if (typeof argv.rules !== 'string') {
      throw chalk.red(new Error('Rules must be a string'));
    }

    if (isNaN(argv.loyalty)) {
      throw chalk.red(new Error('Loyalty must be a number'));
    }

    if (isNaN(argv.value)) {
      throw chalk.red(new Error('Value must be a number'));
    }

    if (argv.strRes && isNaN(argv.strRes)) {
      throw chalk.red(new Error('Strength/Resistance must be a number'));
    }

    if (argv.strRes && argv.type !== tipe.creature) {
      throw chalk.red(new Error('Strength/Resistance is only for Creature type'));
    }

    const card = new magicCard(argv.id, argv.name, argv.manaCost, argv.color as color, argv.type as tipe, argv.rare as rare, argv.rules, argv.loyalty, argv.value, argv.strRes);
    const json = new jsonCards();
    json.add(card);
    })

    .command('delete', 'Deleting a card from collection', {
      id: {
        description: 'Card ID',
        type: 'number',
        demandOption: true
      }
    }, (argv) => {
      
      if (isNaN(argv.id)) {
        throw chalk.red(new Error('ID must be a number'));
      }
      const json = new jsonCards();
      json.delete(argv.id);
    })

    .command('show', 'Show a card from collection', {
      id: {
        description: 'Card ID',
        type: 'number',
        demandOption: true
      }
    }, (argv) => {
    
      if (isNaN(argv.id)) {
        throw chalk.red(new Error('ID must be a number'));
      }
      const json = new jsonCards();
      console.log(json.showCard(argv.id));
    })

    .command('modify', 'Modify a card from collection', {
      id: {
        description: 'Card ID',
        type: 'number',
        demandOption: true
      },
      valueToChange: {
        description: 'Value to change',
        type: 'string',
        demandOption: true
      },
      newValue: {
        description: 'New value',
        type: 'string' || 'number',
        demandOption: true
      }
    }, (argv) => {

      if (isNaN(argv.id)) {
        throw chalk.red(new Error('ID must be a number'));
      }

      if (typeof argv.valueToChange !== 'string') {
        throw chalk.red(new Error('Value to change must be a string'));
      }

      if (typeof argv.newValue !== 'string' && typeof argv.newValue !== 'number') {
        throw chalk.red(new Error('New value must be a string or a number'));
      }
      
      const json = new jsonCards();
      json.modify(argv.id as number, argv.valueToChange as string, argv.newValue as string | number);
    })
    
 .help()
 .argv;
