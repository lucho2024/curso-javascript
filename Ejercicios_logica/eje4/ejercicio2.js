/*13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.*/

/*
    const par=(numero=undefined)=>{

        if(numero===undefined)return console.warn("No ingresaste un valor");
        if(typeof numero!=="number")return console.error("No ingresaste un numero");


        return ((numero%2)===0)
                ?console.log("El numero es par")
                :console.log("El numero es impar");

    }


*/
const parEImpar =(n=0)=>{

    let tipo ="impar";

    if(n%2===0){
        tipo="par";
    }


    return tipo;
}

console.log(parEImpar(29));