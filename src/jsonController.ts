import * as fs from 'fs';
import { magicCard } from './magiCard';
import * as chalk from 'chalk';

const directorioUsuario = `./usuarios/${process.env.USER}`;

export class jsonCards {

  constructor(){
    if (!fs.existsSync(directorioUsuario)){
      fs.mkdirSync(directorioUsuario);
    }
  }

  add(card: magicCard) {
    if (fs.existsSync(`${directorioUsuario}/${card.getID()}.json`)){
      throw chalk.red(new Error(`Card already exists in ${process.env.USER}`));
    }
    fs.writeFileSync(`${directorioUsuario}/${card.getID()}.json`, JSON.stringify(card));
    console.log(chalk.green('Card added'));
  }

  delete(cardID: number) {
    if (fs.existsSync(`${directorioUsuario}/${cardID}.json`)){
      fs.unlinkSync(`${directorioUsuario}/${cardID}.json`);
    }
  }

  showCard(showIDCard: number) {
    const filePath = `${directorioUsuario}/${showIDCard}.json`;
    if (fs.existsSync(filePath)) {
      const cardData = fs.readFileSync(filePath, 'utf-8');
      const card = JSON.parse(cardData);
      console.log(chalk.blue(`ID: ${showIDCard}`));
      console.log(chalk.blue(`Name: ${card.name_}`));
      console.log(chalk.blue(`Mana Cost: ${card.manaCost_}`));
      console.log(chalk.blue(`Color: ${card.color_}`));
      console.log(chalk.blue(`Type: ${card.type_}`));
      console.log(chalk.blue(`Rare: ${card.rare_}`));
      console.log(chalk.blue(`Rules: ${card.rules_}`));
      console.log(chalk.blue(`Loyalty: ${card.loyalty_}`));
      console.log(chalk.blue(`Value: ${card.value_}`));
      if (card.strRes_) {
        console.log(chalk.blue(`Strength/Resistance: ${card.strRes_}`));
      }
    } else {
      throw new Error(chalk.red(`Card not found with ID ${showIDCard}`));
    }
  }

  update(card: magicCard) {
    if (fs.existsSync(`${directorioUsuario}/${card.getID}.json`)){
      fs.writeFileSync(`${directorioUsuario}/${card.getID}.json`, JSON.stringify(card));
      console.log(chalk.green('Card updated'));0
    }
    throw chalk.red(new Error(`Card not found in ${process.env.USER}`));
  }


  modify(cardID: number, valueToChange: string, newValue: string | number) {
    if (fs.existsSync(`${directorioUsuario}/${cardID}.json`)) {
      const card = fs.readFileSync(`${directorioUsuario}/${cardID}.json`, 'utf-8');
      const cardObj = JSON.parse(card);
      if (card.hasOwnProperty(valueToChange)) {
        cardObj[valueToChange] = newValue;
      } else {
        throw chalk.red(new Error('Property not found in object magicCard'));
      }
      fs.writeFileSync(`${directorioUsuario}/${cardID}.json`, JSON.stringify(cardObj));
    } else {
      throw chalk.red(new Error(`Card not found in ${process.env.USER}`));
    }
  }

  showAllCards(){
    const cards = fs.readdirSync(directorioUsuario);
    const cardsArray:magicCard[] = [];
    cards.forEach(card => {
      cardsArray.push(JSON.parse(fs.readFileSync(`${directorioUsuario}/${card}`, 'utf-8')));
    });
    return cardsArray;
  }
}