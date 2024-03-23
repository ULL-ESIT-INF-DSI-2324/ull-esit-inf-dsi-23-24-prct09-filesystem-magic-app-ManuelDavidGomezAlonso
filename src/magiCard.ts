export enum color { white, blue, black, red, green, colorless, multicolor };
export enum rare { common, uncommon, rare, mythicRare };
export enum tipe { creature, enchantment, artifact, instant, sorcery, planeswalker, land };

export class magicCard {
  constructor(public iD: number, 
    public name_: string, 
    public manaCost_: number, 
    public color_: color, 
    public typo_: tipe, 
    public rare_: rare, 
    public rules_: string, 
    public loyalty_: number, 
    public value_: number, 
    public strRes_?: number) {}
    
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
    getType(): tipe {
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
