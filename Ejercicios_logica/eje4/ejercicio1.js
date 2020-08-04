/*
12) Programa una función que determine si un número 
es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

/*
const numeroPrimo=(numero=undefined)=>{
    if(numero===undefined)return console.warn("No ingresaste un valor");
    if(typeof numero!=="number")return console.error("El valor no es un numero");
    if(numero===0)return console.error("El numero no puee ser 0");
    if(numero===1)return console.error("El numero no puede ser 1");
    if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo");

    let divisible=false;

    for(let i=2;i<numero;i++){
        if((numero%2)===0){
            divisible=true;
            break;
        }
    }

    return(divisible)
            ?console.log("No es primo");
            :console.log("Es primo");

}

numeroPrimo();
numeroPrimo("320");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);

*/

const primo=(n=0)=>{
    bool=false;
    if(n===2 || n ===3){
        bool =true;
    }
    if(!(n%2==0 || n%3==0 || n%5==0 || n%7==0)){
        bool=true;
    }

    return bool;

}

console.log(primo(619));