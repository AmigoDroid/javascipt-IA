 function ok(){
     var text = document.getElementById('enter').value;
     if(text===''){
console.log('vazio');
     }else{
         var numero = parseFloat(text);
         entrada(numero);
     }
 }
function entrada(entrada){
  var frut;
    let peso1 = 0.25;
    let peso2 = 0.2;
   var oculta = peso1 * parseFloat( entrada);
    var saida = peso2 * oculta;
    var resultado = saida % 10;
    frut = resultado % 1;
    console.log(parseInt(resultado));
    out(parseInt(resultado));
}
function out(valor){
    var nomes = ['maçã','acerola','goiaba'];
    if(valor<=0 || valor> nomes.length){
        console.log('ERRO!');
        alert('não existe nada definido')
    }else{
valor-=1;
alert(`resultado ${nomes[valor]}`)

    }
}
