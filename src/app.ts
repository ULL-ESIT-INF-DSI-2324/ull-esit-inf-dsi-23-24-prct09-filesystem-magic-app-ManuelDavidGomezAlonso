/**
 * @fileoverview Este archivo contiene la declaración de los comandos, y el uso de las funciones para gestionar las cartas mediante ficheros JSON.
 */
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { magicCard, color, tipe, rare } from "./magiCard.js";
import { jsonCards } from "./jsonController.js";
import chalk from "chalk";

yargs(hideBin(process.argv))
  /**
   * @brief Comando para añadir una carta a la colección, utiliza la función add de la clase jsonCards.
   * Para ello se le pasan todos los argumentos necesarios para crear una carta que posteriormente serán comprobados y se lanzarán errores si no son correctos.
   * @param id ID de la carta
   * @param name Nombre de la carta
   * @param manaCost Coste de maná
   * @param color Color de la carta
   * @param type Tipo de la carta
   * @param rare Rareza de la carta
   * @param rules Reglas de la carta
   * @param loyalty Lealtad de la carta
   * @param value Valor de la carta
   * @param strRes Fuerza/Resistencia de la carta, debe ser del tipo creature.
   * Todos los parametros se añadiran por comandos mediante --.
   * __Ejemplo de uso:__ node dist/app.js add --id 1 --name "Carta1" --manaCost 1 --color white --type creature --rare common --rules "Reglas" --loyalty 1 --value 1 --strRes 1.
   */
  .command(
    "add",
    "Adds a card to the collection",
    {
      id: {
        description: "Card ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "card name",
        type: "string",
        demandOption: true,
      },
      manaCost: {
        description: "Mana cost",
        type: "number",
        demandOption: true,
      },
      color: {
        description: "Color",
        choices: Object.values(color),
        demandOption: true,
      },
      type: {
        description: "Type",
        choices: Object.values(tipe),
        demandOption: true,
      },
      rare: {
        description: "Rare",
        choices: Object.values(rare),
        demandOption: true,
      },
      rules: {
        description: "Rules",
        type: "string",
        demandOption: true,
      },
      loyalty: {
        description: "Loyalty",
        type: "number",
        demandOption: true,
      },
      value: {
        description: "Value",
        type: "number",
        demandOption: true,
      },
      strRes: {
        description: "Strength/Resistance",
        type: "number",
      },
    },
    (argv) => {
      if (isNaN(argv.id)) {
        throw chalk.red(new Error("ID must be a number"));
      }

      if (typeof argv.name !== "string") {
        throw chalk.red(new Error("Name must be a string"));
      }

      if (isNaN(argv.manaCost)) {
        throw chalk.red(new Error("Mana Cost must be a number"));
      }

      if (!Object.values(color).includes(argv.color)) {
        throw chalk.red(new Error("Color must be a valid color"));
      }

      if (!Object.values(tipe).includes(argv.type)) {
        throw chalk.red(new Error("Type must be a valid type"));
      }

      if (!Object.values(rare).includes(argv.rare)) {
        throw chalk.red(new Error("Rare must be a valid rare"));
      }

      if (typeof argv.rules !== "string") {
        throw chalk.red(new Error("Rules must be a string"));
      }

      if (isNaN(argv.loyalty)) {
        throw chalk.red(new Error("Loyalty must be a number"));
      }

      if (isNaN(argv.value)) {
        throw chalk.red(new Error("Value must be a number"));
      }

      if (argv.strRes && isNaN(argv.strRes)) {
        throw chalk.red(new Error("Strength/Resistance must be a number"));
      }

      if (argv.strRes && argv.type !== tipe.creature) {
        throw chalk.red(
          new Error("Strength/Resistance is only for Creature type"),
        );
      }

      if (argv.type === tipe.creature && !argv.strRes) {
        throw chalk.red(
          new Error("Creature type must have Strength/Resistance"),
        );
      }

      const card = new magicCard(
        argv.id,
        argv.name,
        argv.manaCost,
        argv.color as color,
        argv.type as tipe,
        argv.rare as rare,
        argv.rules,
        argv.loyalty,
        argv.value,
        argv.strRes,
      );
      const json = new jsonCards();
      json.add(card);
    },
  )

  /**
   * @brief Comando para borrar una carta de la colección, utiliza la función delete de la clase jsonCards.
   * @param id ID de la carta a borrar.
   * __Ejemplo de uso:__ node dist/app.js delete --id 1
   */
  .command(
    "delete",
    "Deleting a card from collection",
    {
      id: {
        description: "Card ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      if (isNaN(argv.id)) {
        throw chalk.red(new Error("ID must be a number"));
      }
      const json = new jsonCards();
      json.delete(argv.id);
    },
  )

  /**
   * @brief Comando para mostrar una carta de la colección, utiliza la función showCard de la clase jsonCards.
   * @param id ID de la carta a mostrar.
   * __Ejemplo de uso:__ node dist/app.js show --id 1
   */
  .command(
    "show",
    "Show a card from collection",
    {
      id: {
        description: "Card ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      if (isNaN(argv.id)) {
        throw chalk.red(new Error("ID must be a number"));
      }
      const json = new jsonCards();
      console.log(json.showCard(argv.id));
    },
  )

  /**
   * @brief Comando para modificar una carta de la colección, utiliza la función modify de la clase jsonCards para modificar una carta mediante un campo.
   * @param id ID de la carta a modificar.
   * @param valueToChange Valor a cambiar.
   * @param newValue Nuevo valor.
   * Los campos que se pongan en valueToChange deberán finalizar en un _ los disponibles son los siguientes:
   * - name_
   * - manaCost_
   * - color_
   * - typo_
   * - rare_
   * - rules_
   * - loyalty_
   * - value_
   * - strRes_
   * __Ejemplo de uso:__ node dist/app.js modify --id 1 --valueToChange name_ --newValue "Carta1"
   */
  .command(
    "modify",
    "Modify a card from collection",
    {
      id: {
        description: "Card ID",
        type: "number",
        demandOption: true,
      },
      valueToChange: {
        description: "Value to change",
        type: "string",
        demandOption: true,
      },
      newValue: {
        description: "New value",
        type: "string" || "number",
        demandOption: true,
      },
    },
    (argv) => {
      if (isNaN(argv.id)) {
        throw chalk.red(new Error("ID must be a number"));
      }

      if (typeof argv.valueToChange !== "string") {
        throw chalk.red(new Error("Value to change must be a string"));
      }

      if (
        typeof argv.newValue !== "string" &&
        typeof argv.newValue !== "number"
      ) {
        throw chalk.red(new Error("New value must be a string or a number"));
      }

      const json = new jsonCards();
      json.modify(
        argv.id as number,
        argv.valueToChange as string,
        argv.newValue as string | number,
      );
    },
  )

  /**
   * @brief Comando para actualizar una carta de la colección, utiliza la función update de la clase jsonCards, muy parecida a add, conla diferencia de que la carta debe existir.
   * __Ejemplo de uso:__ node dist/app.js update --id 1 --name "Carta1" --manaCost 1 --color white --type creature --rare common --rules "Reglas" --loyalty 1 --value 1 --strRes 1
   */
  .command(
    "update",
    "Update a card from collection",
    {
      id: {
        description: "Card ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "card name",
        type: "string",
        demandOption: true,
      },
      manaCost: {
        description: "Mana cost",
        type: "number",
        demandOption: true,
      },
      color: {
        description: "Color",
        choices: Object.values(color),
        demandOption: true,
      },
      type: {
        description: "Type",
        choices: Object.values(tipe),
        demandOption: true,
      },
      rare: {
        description: "Rare",
        choices: Object.values(rare),
        demandOption: true,
      },
      rules: {
        description: "Rules",
        type: "string",
        demandOption: true,
      },
      loyalty: {
        description: "Loyalty",
        type: "number",
        demandOption: true,
      },
      value: {
        description: "Value",
        type: "number",
        demandOption: true,
      },
      strRes: {
        description: "Strength/Resistance",
        type: "number",
      },
    },
    (argv) => {
      if (isNaN(argv.id)) {
        throw chalk.red(new Error("ID must be a number"));
      }

      if (typeof argv.name !== "string") {
        throw chalk.red(new Error("Name must be a string"));
      }

      if (isNaN(argv.manaCost)) {
        throw chalk.red(new Error("Mana Cost must be a number"));
      }

      if (!Object.values(color).includes(argv.color)) {
        throw chalk.red(new Error("Color must be a valid color"));
      }

      if (!Object.values(tipe).includes(argv.type)) {
        throw chalk.red(new Error("Type must be a valid type"));
      }

      if (!Object.values(rare).includes(argv.rare)) {
        throw chalk.red(new Error("Rare must be a valid rare"));
      }

      if (typeof argv.rules !== "string") {
        throw chalk.red(new Error("Rules must be a string"));
      }

      if (isNaN(argv.loyalty)) {
        throw chalk.red(new Error("Loyalty must be a number"));
      }

      if (isNaN(argv.value)) {
        throw chalk.red(new Error("Value must be a number"));
      }

      if (argv.strRes && isNaN(argv.strRes)) {
        throw chalk.red(new Error("Strength/Resistance must be a number"));
      }

      if (argv.strRes && argv.type !== tipe.creature) {
        throw chalk.red(
          new Error("Strength/Resistance is only for Creature type"),
        );
      }

      if (argv.type === tipe.creature && !argv.strRes) {
        throw chalk.red(
          new Error("Creature type must have Strength/Resistance"),
        );
      }

      const json = new jsonCards();
      json.update(
        new magicCard(
          argv.id,
          argv.name,
          argv.manaCost,
          argv.color as color,
          argv.type as tipe,
          argv.rare as rare,
          argv.rules,
          argv.loyalty,
          argv.value,
          argv.strRes,
        ),
      );
    },
  )

  /**
   * @brief Comando para mostrar todas las cartas de la colección, utiliza la función showAllCards de la clase jsonCards.
   * __Ejemplo de uso:__ node dist/app.js showAll
   */
  .command("showAll", "Show all cards from collection", () => {
    const json = new jsonCards();
    console.log(json.showAllCards());
  })

  .help().argv;
