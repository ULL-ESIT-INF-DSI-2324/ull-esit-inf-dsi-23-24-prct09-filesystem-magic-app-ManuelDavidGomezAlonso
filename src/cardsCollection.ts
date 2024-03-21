import { magicCard } from "./magiCard";
import chalk from 'chalk';

export class cardsCollection {
  private collection:magicCard[] = [];

  add(addingCard: magicCard) {
    this.collection.forEach(card => {
      if (card.getID() === addingCard.getID()) {
        throw new Error(chalk.red('Card already exists'));
      }
    });
    this.collection.push(addingCard);
  }

  modify(modCard: magicCard) {
    this.collection.forEach(card => {
      if (card.getID() === modCard.getID()) {
        card = modCard;
        console.log(chalk.green('Card modified'));
      }
    });
    console.log(chalk.red('Card not found'));
  }
  delete(delCardID: number) {
    this.collection.forEach(card => {
      if (card.getID() === delCardID) {
        this.collection.splice(this.collection.indexOf(card), 1);
        console.log(chalk.green('Card deleted'));
      }
    });
    console.log(chalk.red('Card not found'));
  }

  showCollection() {
    this.collection.forEach(card => {
      console.log(chalk.blue('ID: ') + card.getID());
      console.log(chalk.blue('Name: ') + card.getName());
      console.log(chalk.blue('Mana Cost: ') + card.getManaCost());
      console.log(chalk.blue('Color: ') + card.getColor());
      console.log(chalk.blue('Type: ') + card.getTipe());
      console.log(chalk.blue('Rare: ') + card.getRare());
      console.log(chalk.blue('Rules: ') + card.getRules());
      console.log(chalk.blue('Loyalty: ') + card.getLoyalty());
      console.log(chalk.blue('Value: ') + card.getValue());
      if (card.getStrRes()) {
        console.log(chalk.blue('Strength/Resistance: ') + card.getStrRes());
      }
    });
  }

  show(cardID: number){
    this.collection.forEach(card =>{
      if (card.getID() === cardID) {
        console.log(chalk.blue('ID: ') + card.getID());
        console.log(chalk.blue('Name: ') + card.getName());
        console.log(chalk.blue('Mana Cost: ') + card.getManaCost());
        console.log(chalk.blue('Color: ') + card.getColor());
        console.log(chalk.blue('Type: ') + card.getTipe());
        console.log(chalk.blue('Rare: ') + card.getRare());
        console.log(chalk.blue('Rules: ') + card.getRules());
        console.log(chalk.blue('Loyalty: ') + card.getLoyalty());
        console.log(chalk.blue('Value: ') + card.getValue());
        if (card.getStrRes()) {
          console.log(chalk.blue('Strength/Resistance: ') + card.getStrRes());
        }
      }
    });
    console.log(chalk.red('Card not found'));
  }
}
