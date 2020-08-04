/*1) Programa una función que cuente el número de caracteres
 de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/


 /* funcion expresada, arrow function
 const contarCaracteres = (cadena="")=>
    (!cadena)
     ?console.warn("No ingresaste ninguna cadena");
     :console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`);

     contarCaracteres();
     contarCartacteres("hola mundo");
 */
 function retornar(s){
    let cantidad;
    try {
        if(typeof s ==="string"){
            cantidad = s.length;
            return cantidad;
        }else{
            throw new Error("El valor introducido no es un string");
        }
        
    } catch (error) {
        console.log(`tuvo el siguiente  ${error}`);
    }

    
}
let hola="Hola Mundo";

const obj ={
    nombre:"carlos",
    apellido:"nose"
}

let numero =8;

let booleano = false;

console.log(retornar(hola));