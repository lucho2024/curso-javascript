/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
 pe. miFuncion(0,"C") devolverá 32°F.*/
/*
const convertirGrados=(grados=undefined,unidad=undefined)=>{

    if(grados===undefined)return console.warn("No ingresaste  nada en los grados");
    if(typeof grados!=="number")return console.warn("No ingresate un numero en grados");
    if(unidad===undefined)return console.warn("No ingresaste el tipo de grado");
    if(typeof unidad!=="string")retunr console.error(`El valor de la unidad no es un string`);
    if(unidad.length!==1||!/(C|F)/.test(unidad))return console.warn("Valor de unidad no reconocido");

    if(unidad==="C"){
        return console.info(`${grados}°C= ${Math.round((grados*(9/5))+32)}°F);
    }else if(unidad==="f"){
        return console.info(`${grados}°C= ${Math.round((grados-32)*(9/5))}°F);
    }


}

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2,true);
convertirGrados(2,"HOLA");
convertirGrados(2,"C");
convertirGrados(2,"F");

*/

 const convertir=(grados=0,tipo="")=>{
      let newGrado=0;
      
        try {
            if(typeof grados==="number"){
                if(tipo){
                 (tipo.toUpperCase()==="C")
                  ?console.log(`${(grados*(9/5))+32} ${tipo} `)
                  :(tipo.toUpperCase()==="F")
                     ?console.log(`${(grados-32)/1.8} ${tipo} `)
                     :console.log("valor invalido");
                }else{
                    throw  new Error("No me digitaste el tipo de grados");
                }
            }else{
                throw  new Error("No me digitaste la cantidad de grados");
            }
        } catch (error) {
            
        }
 }

 convertir(1000,"c");