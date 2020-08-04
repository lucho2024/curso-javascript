/*
programa una funcion que dada una fecha valida determine cuantos años han 
pasado hasta el dia de hoy , pe funcion(new Date(1984,4,23)) devolvera 35 años en 2020

*/

const calcularAnios=(fecha=undefined)=>{
    if(fecha===undefined)return console.warn("No ingresaste la fecha");
    if(!fecha instanceof Date)return console.warn("El valor ingresado no es una fecha valida");

    let hoyMenosFecha=new Date().getTime()-fecha.getTime(),
        aniosEnMs=1000*60*60*24*365,
        aniosHumanos=Math.floor(hoyMenosFecha/aniosEnMs);
 
    return (Math.sign(aniosHumanos)===-1)
    ?console.info(`Falnta ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    :(Math.sign(aniosHumanos)===1)
     ?console.info(`Han pasado ${aniosHumanos}`)
     :console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
        
}