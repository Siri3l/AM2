// Seleção dos elementos do HTML
const xSlider = document.getElementById('slider-eixo-x');
const dataPoint = document.getElementById('ponto-dados');

// Definição dos limites do eixo X no SVG
const xMinPixel = 40; 
const xMaxPixel = 480; 

// Cálculo da posição Y baseado na fórmula da parábola
function calculateY(x) {
  const maxHeight = 230; 
  return 250 - ((x * x * maxHeight) / 10000); 
}

// Atualiza a posição do ponto no gráfico
function updatePointPosition(value) {
  const rangeSlider = 100; 
  const pixelRange = xMaxPixel - xMinPixel;
  const newX = xMinPixel + (value / rangeSlider) * pixelRange;
  const newY = calculateY(value);

  dataPoint.setAttribute('cx', newX);
  dataPoint.setAttribute('cy', newY);
}

// Inicializa a posição do ponto ao carregar a página
updatePointPosition(xSlider.value);

// Interação com o slider e atualiza a posição do ponto
xSlider.addEventListener('input', (event) => {
  const valorAtual = event.target.value;
  updatePointPosition(valorAtual);
});
