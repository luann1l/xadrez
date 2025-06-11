const canvas = document.getElementById('tabuleiro');
const ctx = canvas.getContext('2d');

const tamanhoCasa = 50;
const numCasas = 8;

for (let linha = 0; linha < numCasas; linha++) {
  for (let coluna = 0; coluna < numCasas; coluna++) {
    const x = coluna * tamanhoCasa;
    const y = linha * tamanhoCasa;

    // Alterna entre branco e cinza
    if ((linha + coluna) % 2 === 0) {
      ctx.fillStyle = '#ffffff'; // Branco
    } else {
      ctx.fillStyle = '#888888'; // Cinza escuro
    }

    ctx.fillRect(x, y, tamanhoCasa, tamanhoCasa);
    ctx.strokeRect(x, y, tamanhoCasa, tamanhoCasa); // Borda opcional
  }
}