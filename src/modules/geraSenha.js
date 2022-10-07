const numeroAleatorio = (min, max) => Math.floor(Math.random() * ((max + 1) - min) + min);
const simbolos = ['!', '%', '@', '$', '(', ')', '&'];

const geraMaiuscula = () => String.fromCharCode(numeroAleatorio(65, 90));
const geraMinuscula = () => String.fromCharCode(numeroAleatorio(97, 122));
const geraNumeros = () => String.fromCharCode(numeroAleatorio(48, 57));
const geraSimbolos = () => simbolos[numeroAleatorio(0, simbolos.length)];

const geraSenha = (quantidade, maius, minus, num, sim) => {
  const senha = [];
  for (let i = 1; i <= quantidade; i++) {
    maius && senha.push(geraMaiuscula());
    minus && senha.push(geraMinuscula());
    num && senha.push(geraNumeros());
    sim && senha.push(geraSimbolos());
  }

  return senha.slice(0, quantidade).join('');
}

export default geraSenha;
