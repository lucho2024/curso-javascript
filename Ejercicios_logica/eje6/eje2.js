/*19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const validadNombre=(nombre="")=>{
    if(!nombre)return console.warn("No ingresaste un nombre");
    if(typeof nombre!=="string")return console.error(`El valor ${nombre} no es una cadena`);


let expReg=/^^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(nombre);

return(expReg)
       ?console.info(`"${nombre}", es un nombre valido`)
       :console.warn(`"${nombre}", no es un nombre valido`);;

}

validadNombre();
validadNombre(3);
validadNombre("luis montoya");
validadNombre("luis,montoya");

