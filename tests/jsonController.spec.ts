import 'mocha';
import { expect } from 'chai';
import { jsonCards } from '../src/jsonController.js';
import { magicCard, color, tipe, rare} from '../src/magiCard.js';
import fs from 'fs';


const directorioUsuario = `./src/usuarios/${process.env.USER}`;

describe('JsonController', () => {

  it('should create an instance', () => {
    expect(new jsonCards()).to.be.an.instanceOf(jsonCards);
  });

  it('should add a card to the list', () => {
    const files = fs.readdirSync(directorioUsuario);
    const preadd = files.length;
    const controller = new jsonCards();
    const cart = new magicCard(0,'Cazador', 16, color.multicolor, tipe.creature, rare.mythicRare, 'No puede atacar cuerpo a cuerpo', 150, 100, 1000);    
    if (fs.existsSync(`${directorioUsuario}/0.json`)){
      expect(fs.existsSync(`${directorioUsuario}/0.json`)).to.be.equal(true);
    } else {
    controller.add(cart);
    const postadd = fs.readdirSync(directorioUsuario).length;
    expect(postadd).to.be.equal(preadd + 1);
    }

  });

  it('should update a card', () => {
    const controller = new jsonCards();
    const newCart = new magicCard(0,'Jose', 16, color.multicolor, tipe.creature, rare.mythicRare, 'No puede atacar cuerpo a cuerpo', 150, 100, 1000);
    if (!fs.existsSync(`${directorioUsuario}/0.json`)){
      controller.add(newCart);
    }
    controller.update(newCart);
    const cardData = fs.readFileSync(`${directorioUsuario}/0.json`, 'utf-8');
    const card = JSON.parse(cardData);
    expect(card.name_).to.be.equal(newCart.name_);
  });

  it('should delete a card', () => {
    const controller = new jsonCards();
    const cart = new magicCard(0,'Cazador', 16, color.multicolor, tipe.creature, rare.mythicRare, 'No puede atacar cuerpo a cuerpo', 150, 100, 1000);
    //controller.add(cart);
    controller.delete(0);
    let files
    if (fs.existsSync(`${directorioUsuario}/0.json`)){
      files = fs.readdirSync(`${directorioUsuario}/0.json`);
    } else {
      files = undefined;
    }
    expect(files).to.be.equal(undefined);

  });

  it('should modify a card', () => {
    const controller = new jsonCards();
    const cart = new magicCard(0,'Cazador', 16, color.multicolor, tipe.creature, rare.mythicRare, 'No puede atacar cuerpo a cuerpo', 150, 100, 1000);
    controller.add(cart);
    controller.modify(0, 'name_', 'Jose');
    const cardData = fs.readFileSync(`${directorioUsuario}/0.json`, 'utf-8');
    const card = JSON.parse(cardData);
    expect(card.name_).to.be.equal('Jose');
  });
});
