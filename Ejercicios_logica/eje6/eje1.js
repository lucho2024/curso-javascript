/*18) Programa una función que dada una cadena de texto cuente el número de
 vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const contarLetras=(cadena="")=>{
    if(!cadena)return console.warn("No ingresaste una cadena de texto");
    if(typeof cadena!=="string")return console.error(`el valor ${cadena} ingresado,no es una cadena de texto`);

    let vocales=0,
        consonantes=0;
    cadena= cadena.toLowerCase();
    for(let letra of cadena){
        if(/[aeiou]/.test(letra))vocales++;
        if(/[bcdfghjklmnñpqrstwxyz]/.test(letra))consonantes++;
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    });

}

contarLetras();
contarLetras(2);
contarLetras("hola mundo");
contarLetras("");
contarLetras("me llamo carlos");