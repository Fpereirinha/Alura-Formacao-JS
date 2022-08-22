 // == ( value ) < há uma conversão implicita, normalmente. or  ===( type and value )

 console.log('3' === 3); // irá retornar falso, valor igual, tipo diferente.
 console.log('3' == 3); // return true, pelo fato de o valor ser  o mesmo, ignorando o tipo. ( há uma conversão implicita )
 console.log(typeof '3' === typeof String(3)); // conversão foi feita explicitamente, por isso funciona.
 // boas praticas recomendam usar a conversão explicita juntamente ao operador (===).