/*22) Programa una función que dado un array devuelva el número mas alto y 
el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const arrayMinMax =(arr=undefined)=>{

    if(arr===undefined)return console.warn("No ingresaste un arreglo de numero");
    if(!(arr instanceof Array)) return console.error("El valor que ingresate no es un arreglo");
    if(arr.length===0 )return console.error("el arreglo esta vacio");

    for(let num of arr){
        if(typeof num!=="number"){
            return console.error(`El valor ${num} ingresado no es un numero`);
        }
    }
return console.info(`Arreglo original :${arr}\n,Valor mayor: ${Math.max(...arr)}\nValor menor ${Math.min(...arr)}`);

}

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2,3,true]);
arrayMinMax([1,4,5,99,-60]);
