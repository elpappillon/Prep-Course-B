// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acumulador = 0
    for (var i = 1 ; i < 11 ; i++){
      acumulador +=i
    } 
      return acumulador
    }

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = []
  for ( var i = 0 ; i< array.length; i++){
    if(array[i] % 2 === 0){
      pares.push(array[i])
    }
  } return pares
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var elevados = []
  for ( var i = 0 ; i< array.length ; i++){
    elevados.push(Math.pow(array[i], 2))
  } return elevados
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var total =
 (array.reduce((total, actual) => total + actual))
  return total
} 

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var num = [4,5,6,7]
  return num.length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
