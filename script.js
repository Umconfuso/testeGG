document.getElementById('sizeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio do formulário padrão
  
    // Captura os valores dos inputs
    const altura = parseInt(document.getElementById('altura').value);
    const peso = parseInt(document.getElementById('peso').value);
    const barriga = document.getElementById('barriga').value;
    const ombros = document.getElementById('ombros').value;
  
    let tamanho = '';
  
    // Lógica baseada na proporção altura-peso
    if (altura >= 150 && altura <= 165) {
      if (peso <= 55) tamanho = 'XS';
      else if (peso > 55 && peso <= 70) tamanho = 'S';
      else if (peso > 70 && peso <= 85) tamanho = 'M';
      else tamanho = 'L';
    } else if (altura > 165 && altura <= 175) {
      if (peso <= 60) tamanho = 'S';
      else if (peso > 60 && peso <= 75) tamanho = 'M';
      else if (peso > 75 && peso <= 90) tamanho = 'L';
      else tamanho = 'XL';
    } else if (altura > 175 && altura <= 185) {
      if (peso <= 65) tamanho = 'S';
      else if (peso > 65 && peso <= 80) tamanho = 'M';
      else if (peso > 80 && peso <= 95) tamanho = 'L';
      else tamanho = 'XL';
    } else if (altura > 185) {
      if (peso <= 70) tamanho = 'M';
      else if (peso > 70 && peso <= 90) tamanho = 'L';
      else if (peso > 90 && peso <= 110) tamanho = 'XL';
      else tamanho = 'XXL';
    } else {
      tamanho = 'Indeterminado - Verifique as medidas.';
    }
  
    // Ajustes adicionais com base na estrutura corporal
    let ajuste = '';
    if (barriga === 'cheia') {
      ajuste += 'Considere um tamanho maior para maior conforto na região abdominal. ';
      if (tamanho === 'XS') tamanho = 'S';
      else if (tamanho === 'S') tamanho = 'M';
      else if (tamanho === 'M') tamanho = 'L';
      else if (tamanho === 'L') tamanho = 'XL';
    }
  
    if (ombros === 'largos') {
      ajuste += 'Ombros largos podem indicar necessidade de um ajuste maior no peito. ';
      if (tamanho === 'XS') tamanho = 'S';
      else if (tamanho === 'S') tamanho = 'M';
      else if (tamanho === 'M') tamanho = 'L';
      else if (tamanho === 'L') tamanho = 'XL';
      else if (tamanho === 'XL') tamanho = 'XXL';
    }
  
    // Mostra o resultado na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `Seu tamanho sugerido é <strong>${tamanho}</strong>. ${ajuste}`;
  });
  