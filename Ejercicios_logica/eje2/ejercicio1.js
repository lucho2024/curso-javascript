/*5) Programa una función que invierta las palabras de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

/*
    const invertirCadena=(cadena="")=>{
        (!cadena)
          ?console.warn("No ingresaste un cadena de texto")
          :console.info(cadena.split("").reverse().join(""));

        
        invertirCadena();
        invertirCadena("hola mundo");
    }
*/
 const invertir =(cadena)=>{
    let cadenaInversa="";

    try {
        if(typeof cadena==="string"){
            for(let i=cadena.length;i>=0;i--){
                cadenaInversa+=(cadena.charAt(i));
            }
        
            cadena=cadenaInversa;
        
            console.log(cadena);
        }else{
            throw new Error("El valor introducido no es un string");
        }
    } catch (error) {
        
    }
    
   


 }

invertir("hola");

