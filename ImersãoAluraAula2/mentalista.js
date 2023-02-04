/*parseInt converte o prumeiro algumento para string e analiza, Math.randow da numeros por exemplo até 999 sem quebra por isso nesse caso vai ate 1001*/
var numeroSecreto = Math.floor(Math.random() * 1000) +1;


var incremento = 1;
for (var i = 1; i => 1001; i++) {

  var chute = prompt("Digite um número entre 1 e 1000");

  alert(
    "Total de " + i + "x Chutes,o ultimo numero selecionado foi  " + (chute++)
  );

  if (chute == numeroSecreto) {
    alert("Acertou" + contaChute + " vezes");
  } else if (chute > numeroSecreto) {
    alert("Errou.. o número secreto é menor");
  } else if (chute < numeroSecreto) {
    alert("Errou.. o número secreto é maior");
  }
  
  if (i === 3) {
    alert(" Você excedeu suas " + i + " que venha o próximo! ");

    break;
    

  }
  
}