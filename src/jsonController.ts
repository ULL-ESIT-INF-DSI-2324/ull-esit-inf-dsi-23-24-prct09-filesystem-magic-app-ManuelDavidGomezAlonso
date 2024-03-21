import * as fs from 'fs';
import { magicCard } from './magiCard';
//import { cardsCollection } from './cardsCollection';

const directorioUsuario = `./usuarios/${process.env.USER}`;

export class jsonCards {

  constructor(){
    if (!fs.existsSync(directorioUsuario)){
      fs.mkdirSync(directorioUsuario);
    }
  }

  add(card: magicCard) {
    if (fs.existsSync(`${directorioUsuario}/${card.getID()}.json`)){
      throw new Error('Card already exists');
    }
    fs.writeFileSync(`${directorioUsuario}/${card.getID()}.json`, JSON.stringify(card));
  }

  delete(cardID: number) {
    if (fs.existsSync(`${directorioUsuario}/${cardID}.json`)){
      fs.unlinkSync(`${directorioUsuario}/${cardID}.json`);
    }
  }
  showCard(showIDCard: number){
    if (fs.existsSync(`${directorioUsuario}/${showIDCard}.json`)){
      const card = fs.readFileSync(`${directorioUsuario}/${showIDCard}.json`, 'utf-8');
      return JSON.parse(card);
    }
  }

  modify(cardID: magicCard, valueToChange: string, newValue: string | number) {
    if (fs.existsSync(`${directorioUsuario}/${cardID}.json`)){
      const card = fs.readFileSync(`${directorioUsuario}/${cardID}.json`, 'utf-8');
      const cardObj = JSON.parse(card);
      cardObj[valueToChange] = newValue;
      this.add(cardObj);
    } else {
      throw new Error('Card not found');
    }
  }

}