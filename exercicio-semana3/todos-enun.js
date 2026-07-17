/**  Crie uma funçao chamada apresentar(nome) que receba um nome como parâmetro e exiba.
Oá, <nome>
*/

function apresentar(nome){
   
    console.log("Olá, "+ nome);
}

apresentar("Rhona");

/**Crie uma funçao chamada dobro(numero) que retorne o dobro do número recibido.
 * exiba o resultado utilizando cosole.log
 */

function dobro(numero){
    return numero*2;
}
console.log(dobro(5));

/**
 * Crie uma funçao chamada somar(a,b) que retorne a soma de dois números.
 */
function somar(a,b){
    return a+b;
}
console.log(somar(100,3));

/**
 * Crie uma funçao chamada verificarIdade(idade) que retorne: "Maior de idade", "Menor de idade"

 */
function verificarIdade(idade){
    if(idade >= 18){
        return "Maior de idade";
    }

    return "menor de idade";
    
}
console.log(verificarIdade(35));

/**Crie uma funçao chamada calcularDesconto(valorCompra). Retorne as mensage abaixo para os casos:
acima de 500= 20%
acima de 200= 10%
demais= sem desconto
exiba o resultado utilizando console.log()
 */
function calcularDesconto(valorCompra){
    if(valorCompra > 500){
        return "Desconto 20%";
    }
    if(valorCompra > 200){
        return "Desconto 10%";    
    }
    
    return "sem desconto";
    
}
console.log(calcularDesconto(150));