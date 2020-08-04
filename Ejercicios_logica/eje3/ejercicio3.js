/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
 se define como el producto de todos los números enteros positivos desde 1 hasta n),
  pe. miFuncion(5) devolverá 120.*/

  /*
    const factorial=(numero=undefined)=>{
        if(numero===undefined)return console.warn("No ingresaste un numero");
        if(typeof numero!=="number")return ("El valor no es un numero");
        if(numero===0)return console.error("El numero no pude ser 0");

        if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo");

        let fact=1;

        for(let i=numero;i>1;i--){
            fact*=i;
        }
        return console.info(`El factorial es ${fact}`);

        factorial();
        factorial("5");
        factorial([1,2,3]);
        factorial(0);
        factorial(-5);
        factorial(5);
    }


  */

  const factorial=(n=0)=>{
    let f=1;
    try {
        if(n){
            if(typeof n ==="number"){
                
                for(let i =1;i<=n;i++){
                    f*=i;
                }
                console.log(`El factorial de ${n} es ${f}`);
            }else{
                throw new Error("El valor ingresado no es un numero");
            }
        }else{
            throw new Error("No ingresaste ningun valor");
        }
       
    } catch (error) {
        console.log(error);
    }
    
  }
 

  factorial(0);