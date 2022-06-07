const input = document.getElementById("numero");
const btn = document.getElementById("btn");
const btnClean = document.getElementById("btn-delete");
const btnCalc = document.getElementById("btn-calc");
const resultados = document.getElementById("resultados");
//



var arr = [];
var soma = 0;
var media = 0;



//evento de clique no botão Adicionar
btn.addEventListener("click", () => {
  const spanValue = document.createElement('span') // cria uma caixa de texto em HTML
  var valor = input.value // variavel que recebe o que foi digitado na caixa de texto
  valor.replace(",", ".") // o Javascript não opera com virgulas então essa função substitui virgulas por pontos
  //************************************************************************ */





    arr.push(parseFloat(valor));//* a função push adiciona valores ao array




  //************************************************************ */
  spanValue.innerText = `${valor} foi adicionado`//adiciona o valor a caixa de texto criada anteriormente
  resultados.appendChild(spanValue) // adiciona a caixa de texto dentro do "visor" da calculadora
  console.log(`${valor} adicionado`);//exibe o valor no console
  input.value = ""; //limpa a caixa de texto
});

//evento de clique do botão Limpar
btnClean.addEventListener("click", () => {
  //************************************************************************* */
  arr = []; // zera o array
  soma = 0; // zera a soma
  media = 0; // zera a media


  //************************************************************************ */



  const spanValue = document.createElement('span') // cria uma caixa de texto html
  spanValue.innerText = `------------------------Valores limpos ------------------------` //adiciona a string ao lado a caixa de texto
  console.log(`------------------------Valores limpos ------------------------`)//exibe no console
  resultados.appendChild(spanValue)//adiciona a caixa de texto ao "visor"

});

btnCalc.addEventListener("click", () => {
  //*********************************************************************** */


  for (var i in arr) { //  realiza a
    soma += arr[i];    //  soma de todos os  
  }                    //  possiveis elementos do array

  media = soma / arr.length; // divide a soma pela quantidade de elementos do array




  //****************************************************************************** */
  const spanValue = document.createElement('span') // cria mais uma caixa de texto
  spanValue.innerText = `${media.toFixed(2)} é a media` // adicionado a media formatada com 2 casa decimais a caixa de texto
  console.log(`${media} é a media`) //exibe no console
  resultados.appendChild(spanValue) // adicona a media ao "visor"
});
