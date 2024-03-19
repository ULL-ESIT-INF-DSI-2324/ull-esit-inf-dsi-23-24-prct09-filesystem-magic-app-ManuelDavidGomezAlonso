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
    private strRes_?: number, 
    private loyalty_: number, 
    private value_: number) { }

  }
