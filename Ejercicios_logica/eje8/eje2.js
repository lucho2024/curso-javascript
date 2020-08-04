/*25) Programa una función que dado un arreglo de elementos,
 elimine los duplicados,
  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/


const eliminarIgual=(arr=undefined)=>{
    if(arr===undefined)return console.warn("No ingresaste el arreglo");
    if(!(arr instanceof Array))return console.info(`El valor ${arr}, No es un arreglo`);
    if(arr.length===0)return console.error("Ingresaste un arreglo vacio");
    if(arr.length===1)return console.error("Ingresa almenos 2 valores");

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){    
            if(arr[i]===arr[j] && i!==j){
                     arr.splice(j,1);
            }
        }
    }

    return console.log(arr);

    /*
    return console.info({
        original:arr,
        sinDuplicados:[...new Set(arr)]
    });
    */

}
 eliminarIgual(["x", 10, "x", 2,10,3,"10", 10, true, true]);