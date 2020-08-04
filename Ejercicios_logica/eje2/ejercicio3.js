/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), .
pe. mifuncion("Salas") devolverá true.*/

/*
const palindromo=(palabra="")=>{

    if(!palabra)return console.warn("No ingresaste una palabra");

    palabra=palabra.toLowerCase();
    let alReves=palabra.split("").reverse().join("");

    return(palabra===alReves)
        ?console.info(`Si es palindromo`);
        :console.info(`No es palindromo`);
}

palindromo();
palindromo("hola mundo");
palindromo("salas");



const palin =(palabra)=>{
    let palabraRe="";
    let bool=false;
    
    try {
        if(typeof palabra==="string"){
            for(let i=palabra.length;i>=0;i--){
                palabraRe+=palabra.charAt(i);
            }
            console.log(palabraRe)
            if(palabra===palabraRe){
                bool=true;
            }
        }else{
            throw new Error("No es un string");
        }
    } catch (error) {
        console.log(error);
    }

    return bool;

}*/
const palin =(palabra)=>{
    let palabraRe="";
    let bool=false;
    let sinE=palabra.replace(/ /g,"").toLowerCase();
    console.log(sinE);
    try {
        if(typeof palabra==="string"){
            for(let i=sinE.length;i>=0;i--){
                palabraRe+=sinE.charAt(i);
            }
            console.log(palabraRe);
            if(sinE===palabraRe){
                bool=true;
            }
        }else{
            throw new Error("No es un string");
        }
    } catch (error) {
        console.log(error);
    }

    return bool;

}

console.log(palin("Sometamos o matemos"));