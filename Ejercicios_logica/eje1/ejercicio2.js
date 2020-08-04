/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

 /*
    const recortar=(cadena="",longitud=undefined)=>
        (!cadena)
        ?console.warn("No ingresaste una cadena");
        :(longitud===undefined)
        ?console.warn("No ingresaste la longitud");
        :console.info(cadena.slice(0,longitud));

        recortar("hola mundo",4);
        recortar();
        recortar("hola hola");
        recortar("",5);
 */
 function retornarSB(cadena,numero){

    try {
        if(typeof cadena ==="string"){
            return cadena.substring(0,numero);
        //  return cadena.substr(2,4);
        }else{
            throw new Error("No ingreso un string");
        }
    } catch (error) {
        
    }

 }

 console.log(retornarSB("Hola Mundo",4));