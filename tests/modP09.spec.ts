import 'mocha';
import {expect} from 'chai';
import {infoTaker, CVS, JSON} from '../src/modP09'

describe('Creando objetos correctamente', () =>{
    it('should create an instance', () => {
        expect(new CVS()).to.be.an.instanceOf(CVS);
      });
});