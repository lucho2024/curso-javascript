/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
/*
const eliminar=(texto="",patron="")=>
(!texto)
 ?console.warn("no ingresaste un texto");
 :(!patron)
 ?console.warn("no ingresaste un patron");
 :console.info(texto.replace(new RegExp(patron,"ig"),"");


*/

const quitar=(texto="",palabra="")=>{

    try {
        if(typeof texto==="string"){
            if(typeof palabra==="string"){
                let nuevoT=texto.replace(new RegExp(palabra,"gi"),"");

                console.log(nuevoT);
            }else{
                throw new Error("No es un String el segundo parametro");
            }
          
        }else{
            throw new Error("No es un string el primer parametro");
        }
    } catch (error) {
        console.info(error);
    }
   

}

quitar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
quitar("xyz1, xyz2, xyz3, xyz4 y xyz5",2);