/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

/*
    const arreglo =(cadena="",separador=undefined)=>
     (!cadena)
     ?console.warn("no ingresaste una cadena de texto");
     :(separador===undefined)
        ?console.warn("no ingresaste un separador");
        :console.info(cadena.split(separador));

    
    arreglo("hola mundo"," ");
    arreglo("carlos-luis-santiago","-");
*/

function array(cadena,caracter){
    
    try {
        if(typeof cadena==="string"){
            return cadena.split(caracter);
        }else{
            throw new Error("No digito un string");
        }
    } catch (error) {
        
    }
}

let arreglo = array('hola que tal', ' ');

for(let i=0;i<arreglo.length;i++){
    console.log(arreglo[i]);

}

