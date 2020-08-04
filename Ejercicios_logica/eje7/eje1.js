/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
 pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

/*

const cuadrados =(arr=undefined)=>{
    if(arr===undefined)return console.warn("No ingresaste un arreglo de numero");
    if(!(arr instanceof Array)) return console.error("El valor que ingresate no es un arreglo");
    if(arr.length===0 return console.error("el arreglo esta vacio"));

    for(let num of arr){
        if(typeof num!=="number"){
            return console.error(`El valor ${num} ingresado no es un numero`);
        }
    }

    const newArr = arr.map(el=>el*el);

    return console.info(`Arreglo original: ${arr},\n Arreglo elevado al cuadrado: ${newArr}`);
    
    cuadrados();
    cuadrados(true);
    cuadrados([1,2,3]);
    
}



*/




 const elevadoArray=(arreglo=undefined)=>{
    if(arreglo===undefined)return console.info("No digitaste nada");
    if(typeof arreglo!=="object")return console.warn("El valor ingresado no es un numero");
    let arreglo2= new Array();
    console.log(arreglo);
    for(let n of arreglo){
        arreglo2.push(Math.pow(n,2));
    }
    return console.log(arreglo2);
 }

 elevadoArray();
 elevadoArray([1,2,3]);