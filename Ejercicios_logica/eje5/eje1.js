/*Progrma una funcion para convertir numero de base binaria
a decimal y viceversa, pe miFuncion(100,2) devolvera 4 a base 10*/


const convertir=(numero=undefined,base=undefined)=>{
if(numero===undefined)return console.warn("No ingresaste el numero a convertir");
if(typeof numero !=="number")return console.error(`El valor ${numero} ingresado ,No es un numero`);
if(base===undefined)return console.warn("No ingresaste la base a convertir");
if(typeof base !=="number")return console.warn(`El valor ${base} ingresado ,No es un numero`);

if(base===2){
    //de binario a decimal
    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
}else if(base===10){
    //decimla a binario
    return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
}else{
    console.info("el tipo de base a convertir no es valido");
}

convertir();
convertir("2");
convertir(100);
convertir(100,"2");
convertir(100,2);
convertir(4,10);



}