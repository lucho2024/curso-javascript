/*Programa una funcion que devuelva el monto final despues
de aplicar un descuenta a una cantidad dada.pe funcion(1000,20)
devolvera 800;*/

const aplicarDescuento=(monto=undefined,descuento=0)=>{
   if(monto===undefined)return console.warn("No ingresaste el monto");
   if(typeof monto!=="number")return console.error(`El valor ${monto} ,No es un numero`);
   if(monto===0)return console.error("El no monto no puede ser 0");
   if(Math.sign(monto)===-1)return console.error("El monto no puede ser negativo");
   if(typeof descuento!=="numero")return console.error(`El valor ${descuento} 
   No es un numero`);
   if(Math.sign(descuento)===-1)return console.error("El descuento no puede ser negativo");
   
   return console.info(`${monto}- ${descuento}% =${monto-((monto*descuento)/100)}`);
   
}

aplicarDescuento();
aplicarDescuento("200");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000,"20");
aplicarDescuento(100,-20);
aplicarDescuento(10000);
aplicarDescuento(10000,25);