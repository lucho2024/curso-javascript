/*4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

/*
const repetir =(texto="",veces=undefined)=>{
    if(!texto)return console.warn("no ingresate un texto");

    if(veces===undefined)return console.warn("no ingresaste un numero");

    if(veces===0)return console.error(el numero no puede ser 0);

    if(Math.sign(veces)===-1)return console.error("el numero no puede ser negativo");

    for(let i=0;i<veces;i++)console.info(`${texto},${(i+1)});

    repetir("hola mundo",3);
    repetir("hola mundo",0);
    repetir("hola mundo",-20);
    repetir("",20);


}

*/


function repetir(cadena,numero){
    for(let i=0;i<numero;i++){
        console.log(`${cadena} ${(i+1)}`);
    }
}

repetir('Hola Mundo', 3);