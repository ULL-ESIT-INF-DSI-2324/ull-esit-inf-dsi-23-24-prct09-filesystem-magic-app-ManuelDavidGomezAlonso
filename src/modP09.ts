// import JSON from 'JSON';

// //import FileSync from "lowdb/adapters/FileSync.js";

// /**
//  * Interfaz que implementa un elemento de la mochila.
//  */
// interface item {
//   nElto: number,
//   peso: number,
//   profit:string
// }

// /**
//  * @brief Clase abstracta para la obtencion de la información del problema. 
//  */
// export abstract class infoTaker {
//   protected info: string[]; // Array to store information
//   protected Capacidad: number; // Capacity of the backpack
//   protected nItem:number; // Number of items
//   protected items: item[]; // Array of items

//   constructor(){
//   }

//   /**
//    * @brief Funcion que deben implementar las clase para seguir el patrón template method.
//    * @param textFile Nombre del fichero.
//    * @param textInfo Información que contiene el fichero.
//    */
//   protected abstract infoTake(textFile: string): Map<string, number>;
    
//   protected AftherInfoTake(){}

//   showInfo() {
//     this.info.forEach(item => {console.log(item)});
//   }
// }

// /**
//  * @brief Clase para leer un CSS, separado por comas.
//  */
// export class CVS extends infoTaker {

//   /**
//    * @brief Función abstracta con los pasos que debe hacer CSS.
//    * @param textFile 
//    * @param textInfo 
//    * @returns 
//    */
//   infoTake(textFile: string): Map<string, number>{
//     // const text = new FileSync(textFile);
//     // const lines: string[] = text.split('\n');
//     // const returnMap: Map<string, number> = new Map<string, number>();
//     // for (let i = 0; i < lines.length(); i++ ){
//     //     if (i !== 0 && i!== 1){
//     //         const itemvalues: string[] = lines[i].split(',');
//     //         returnMap.set(itemvalues[2],Number(itemvalues[0]));
//     //     }
//     // }
//   }
// }

// export class JSON extends infoTaker {

//   /**
//    * @brief Funcion abstracta con los pasos que se debe hacer para un JSON.
//    * @param textFile 
//    * @param textInfo 
//    */    
//   infoTake(textFile: string): Map<string, number>{
//     // const text = new FileSync(textFile);
//     // const peso = text.get("elemetos").get("peso").value();
//     // let userData = JSON.parse(userData, (key, value) => {
//     //     if (typeof value === 'string') {
//     //       return value.toUpperCase();
//     //     }
//     //     return value;
//     //   });
//   }
// }