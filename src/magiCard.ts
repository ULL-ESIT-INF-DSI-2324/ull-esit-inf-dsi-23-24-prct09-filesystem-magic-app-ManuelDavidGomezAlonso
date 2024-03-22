export enum color { white, blue, black, red, green, colorless, multicolor };
export enum rare { common, uncommon, rare, mythicRare };
export enum tipe { creature, enchantment, artifact, instant, sorcery, planeswalker, land };

export class magicCard {
  constructor(private iD: number, 
    private name_: string, 
    private manaCost_: number, 
    private color_: color, 
    private typo_: tipe, 
    private rare_: rare, 
    private rules_: string, 
    private loyalty_: number, 
    private value_: number, 
    private strRes_?: number) {}
    
    getID(): number {
      return this.iD;
    }
    getName(): string {
      return this.name_;
    }
    getManaCost(): number {
      return this.manaCost_;
    }
    getColor(): color {
      return this.color_;
    }
    getTipe(): tipe {
      return this.typo_;
    }
    getRare(): rare {
      return this.rare_;
    }
    getRules(): string {
      return this.rules_;
    }
    getLoyalty(): number {
      return this.loyalty_;
    }
    getValue(): number {
      return this.value_;
    }
    getStrRes(): number| undefined {
      return this.strRes_;
    }

  }
