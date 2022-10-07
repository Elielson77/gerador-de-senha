import geraSenha from './modules/geraSenha';
import './assets/css/style.css';

const botaoCriarSenha = document.querySelector('#gerar-senha');
const campoDaSenha = document.querySelector('#campo-senha')

botaoCriarSenha.addEventListener('click', () => {
  const temMaiuscula = document.querySelector('#check-maiusculas').checked;
  const temMinuscula = document.querySelector('#check-minusculas').checked;
  const temNumero = document.querySelector('#check-numeros').checked;
  const temSimbolos = document.querySelector('#check-simbolos').checked;
  const quantidadeCaracteres = document.querySelector('#quantidade-caracteres').value;

  campoDaSenha.innerHTML = geraSenha(
    quantidadeCaracteres,
    temMaiuscula,
    temMinuscula,
    temNumero,
    temSimbolos,
  ) || 'Selecione um campo!'
})