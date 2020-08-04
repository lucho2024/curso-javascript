/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

/*
const textoCadena =(cadena="",texto="")=>{
    if(!cadena)return console.warn("No ingreasaste el texto largo");
    if(!texto)return console.warn("No ingreaste la palabra a evaluar");

    let i=0,
        contador=0;
    
    while(i!==-1){
        i=cadena.indexOf(texto,i);
        if(!==-1){
            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${texto}se repito ${contador}veces `);

}

textoCadena();
textoCadena("","mundo");
textoCadena("hola mundo adios mundo");
textoCadena("hola mundo adios mundo","mundo");


*/
const contar =(texto="",palabra="")=>{
    let contador=0;
    try {
        if(typeof texto==="string" ){
            if(typeof palabra ==="string"){
              let arreglo=  texto.split(" ");
                for(let i=0;i<arreglo.length;i++){
                    if(arreglo[i]===palabra){
                        contador++;
                    }
                }
            }else{
                throw new Error("La palabra no es un string");
            }
            return contador;
        }else{
            throw new Error ("El texto no es un string");
        }
    } catch (error) {
        console.log(error);
    }

}

console.log(contar("mundo hola mundo adios", "mundo"));

