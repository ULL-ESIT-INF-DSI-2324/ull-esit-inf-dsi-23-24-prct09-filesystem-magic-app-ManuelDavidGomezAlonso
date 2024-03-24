import 'mocha';
import { expect } from 'chai';
import { magicCard, color, tipe, rare } from '../src/magiCard.js';

describe('MagiCards', () => {
  //creando una instancia del objeto correctametne
  it('should create an instance', () => {
    expect(new magicCard(12, "Cazador", 16, color.multicolor, tipe.creature, rare.mythicRare, "No puede atacar cuerpo a cuerpo", 150, 100, 1000)).to.be.an.instanceOf(magicCard);
  });
});
