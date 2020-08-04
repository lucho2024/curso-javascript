/*26) Programa una función que dado un arreglo de números obtenga el promedio,
 pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

 const promedio=(arr=undefined)=>{
    if(arr===undefined)return console.error("No digitaste nada");
    if(!(arr instanceof Array))return console.warn(`El ${arr} digitado no es un arreglo`);
    if(arr.length===0)return console.error("El arreglo no puede estar vacio");

    let acumulador=0;

    for(let i of arr){
        acumulador+=i;
    }

    return console.info(`El promedio de l ${arr} es ${acumulador/arr.length}`);

/*
return console.info(
    arr.reduce((total,num,index,arr)=>{
        total+=num;
        if(index===arr.length-1){
            return `El promedio es ${(total/arr.length)}`;
        }else{
            return total;
        }
    })
)*/
 }

 promedio();
 promedio([9,8,7,6,5,4,3,2,1,0]);