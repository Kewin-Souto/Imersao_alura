/* Campo que captura nome do usuario */
var nomeUsuario = prompt(" Olá qual seu nome? ");
/* variavel que captura a escolha da moeda a ser cambiada */
var escolha = prompt(
  nomeUsuario + "  Qual das Moedas gostaria de cambiar Dólar  ou...Dogecoin? "
);
/* "Se" a escolhafor Dólar ele faz a conta baseada na cotação do Dolar */
if (escolha == "Dólar") {
  console.log("Você escolheu o Dólar!");
  var valorEmReal = prompt("Quantos Reais deseja cabiar em dolar?");
  var cotacaoDoDolar = 5.32;
  var valorEmDolar = valorEmReal * cotacaoDoDolar;
  valorEmDolar = Math.ceil(valorEmDolar);

  alert(
    "Parabéns! " +
      nomeUsuario +
      "Você tem o total de R$ " +
      valorEmDolar +
      " Do valor em Dolar"
  );
  /* "Senão se" opção com a mesma lógica e valor em real mas com cambio para dogecoin */
} else if (escolha == "Dogecoin") {
  console.log("Você escolheu a Dogecoin!");
  var valorEmReal = prompt("Quantos Reais deseja cabiar em Dogecoin?");
  var cotacaoDoDogecoin = 0.48;
  var valorEmDoge = valorEmReal * cotacaoDoDogecoin;
  valorEmDoge = valorEmDoge.toFixed(2);
 
  alert(
    "Parabéns! " +
      nomeUsuario +
      "Você tem o total de R$ " +
      valorEmDoge +
      " Do valor em Dogecoin"
  );
} else {
   /*  Caso não seja escrito a nenhum nome de nenhuma moeda */
  alert(" Você não selecionou nenhuma das opções ");
}
