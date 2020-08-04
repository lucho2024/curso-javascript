/*23) Programa una función que dado un array de números devuelva un objeto con 
2 arreglos en el primero almacena los números pares y 
en el segundo los impares, pe. 
miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
/*


*/

const dosArreglo=(arreglo=undefined)=>{
    if(arreglo===undefined)return console.info("No ingresaste nada");

    let pares = new Array(),
        impares = new Array();

    for(let n of arreglo){
        if(n%2===0){
            pares.push(n);
        }else{
            impares.push(n);
        }
    }

    return console.info({
        pares,
        impares
    });

}

dosArreglo([1,2,3,4,5,6,7,8,9,0]);