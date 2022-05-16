// Detectar si la cadena de entrada en un palíndromo.

// controlamos el formulario de palindrome
const formPalindromo = document.querySelector("#palindromo");
formPalindromo.addEventListener("submit", function (e) {
	// stop form submission
	e.preventDefault();
  // get input value
  let text =  formPalindromo.textpalindrome.value;
  alert( palindrome(text));
});

// Esta es la funcion  de palindrome
function palindrome(str) {
    const newStr = str.replace(/[\W_]/g,'').toLowerCase();
    const strReversed = newStr.split('').reverse().join('');
    return  newStr === strReversed ? 'Es Palindromo' : 'No Es Palindromo'

}


// controlamos el formulario de volales
const vacales = document.querySelector("#vocales");
vacales.addEventListener("submit", function (e) {
	// stop form submission
	e.preventDefault();
  // get input value
  let text =  vacales.textvocales.value;
  alert( vocales(text));
});

// Escribe un programa que pida una frase y escriba las vocales que aparecen.
function vocales(str) {
    const newStr = str.replace(/[\W_]/g,'').toLowerCase();
    const vocales = ['a','e','i','o','u'];
    let resultado = '';
    for (let i = 0; i < newStr.length; i++) {
        if (vocales.includes(newStr[i])) {
            resultado += newStr[i] + ' ';
        }
    }
    return resultado;
}


// controlamos el formulario de un numero mayor
const mayor = document.querySelector("#menor");
mayor.addEventListener("submit", function (e) {
    // stop form submission
    e.preventDefault();
    // get input value
    let text1 =  mayor.textnum.value;
    let num2 =  mayor.numtext.value;
    alert( menor(text1, num2));
});


// aca escribims nuestra funcion resultado para saber si un numero es mayor o menor que otro
 
function menor(num1, num2) {
    if (num1 > num2) {
        return num1 + " Es Mayor que " + num2;
    } else if (num1 < num2) {
        return num1 + " Es Menor que " + num2;
    } else {
        return num1 + " Es Igual que " + num2;
    }
}

  
// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada 
// una de las vocales.

  const vacales2 = document.querySelector("#vocales2");
    vacales2.addEventListener("submit", function (e) {
        // stop form submission
        e.preventDefault();
        // get input value
        let text =  vacales2.textvocales2.value;
        alert( vocales(text));
    });

  
    function vocales(str) {
        const newStr = str.replace(/[\W_]/g,'').toLowerCase();
        const vocales = ['a','e','i','o','u'];
        let resultado = '';
        for (let i = 0; i < newStr.length; i++) {
            if (vocales.includes(newStr[i])) {
                resultado += newStr[i] + ' ';
            }
        }
        return resultado;
    }
    




 
 










        
// Escribe un programa que pida una frase y escriba las vocales que aparecen.
//

// console.log(vocales("hola rodolfo como estas"));

   
  

// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


// dos números y escriba en la pantalla cual es el mayor
//  console.log(mayor(10, 20));
//     console.log(mayor(30, 40));
//     console.log(mayor(50, 60));


 
    
   // Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

  


      