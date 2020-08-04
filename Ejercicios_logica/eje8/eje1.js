/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
 pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/




 const ascDesc =(arr =undefined)=>{

    if(arr===undefined)return console.warn("No ingresaste el arreglo");
    if(!(arr instanceof Array))return console.info(`El valor ${arr}, No es un arreglo`);
    if(arr.length===0)return console.error("Ingresaste un arreglo vacio");

    const arr2=[];

    arr=arr.sort();
    for(let i=arr.length-1;i>=0;i--){
        arr2.push(arr[i]);
    }

    return console.info({
        asc:arr,
        desc:arr2
    })
    /*
    return console.info({
        asc:arr.map(el=>el).sort(),
        desc:arr.map(el=>el).sort().reverse()
    });

 }
 ascDesc();
 ascDesc([7, 5,7,8,6]);