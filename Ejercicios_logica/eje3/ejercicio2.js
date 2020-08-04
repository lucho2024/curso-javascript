/*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/
/*

const capicua=(n=0)=>{
if(!n)return console.warn("No ingresaste un numero");
if(typeof n!=="number")return console.error(`El valor ${n} no es un numero`);

n=n.toString();

let reves=n.split("").reverse().join("");

return(numero===reves)
 ?console.info("Si es capicua")
 :console.info("No es capicua");

}

capicua();
capicua("19");
capicua({});
capicua(2000);
capicua(2002);
capicua(18.99);
capicua(212.212):

const capicuaN=(n)=>{
    let bool =false;
    let voltear="";
    try {
            if(typeof n==="number"){
                n=n.toString();
                for(let i=n.length;i>=0;i--){
                    voltear+=n.charAt(i);
                }
                if(voltear===n){
                    bool=true;    
                }
            }else{
                throw new Error("el valor ingresado no es un numero");
            }
    } catch (error) {
        console.log(error);
    }
 
    return bool;
}

console.log(capicuaN(3043));
*/
const capi=(n=0)=>{
    let alReves="";
    
    if(!n)return console.log("No ingresaste ningun valor");
    if(!(typeof n==="number")) return console.log("NO INGRESASTE UN NUMERO");
    n=n.toString();
    for(i=n.length;i>=0;i--){
        alReves+=n.charAt(i);
    }
    (alReves===n)?console.log("capicua"):console.log("No capicua");
}

capi(2002);