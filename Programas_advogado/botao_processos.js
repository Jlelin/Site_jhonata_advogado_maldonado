// Função para aplicar gradientes nas bordas do botão
function applyBorderGradients() {
  const button = document.querySelector('.border-gradient-button');

  if (button) {
    const colors = ['rgb(127,102,29)', 'white']; // Substitua essas cores pelas cores desejadas

    // Obtém as dimensões do botão
    const buttonWidth = button.offsetWidth + 'px';
    const buttonHeight = (button.offsetHeight) + 'px';

    // Largura e altura personalizáveis das partes da borda
    const topBorderHeight = '10px'; // Altura da borda superior
    const bottomBorderHeight = '17px'; // Altura da borda inferior
    const leftBorderWidth = '17px'; // Largura da borda esquerda
    const rightBorderWidth = '17px'; // Largura da borda direita
    const cornerSize = '30px'; // Tamanho dos cantos

    // Ajuste do posicionamento no eixo x e y para cada canto
    const leftTopOffsetX = '-9px';
    const leftTopOffsetY = '-10px';
    const rightTopOffsetX = '8px'; // Ajuste adicional para o canto superior direito
    const rightTopOffsetY = '-10px';
    const leftBottomOffsetX = '-13px';
    const leftBottomOffsetY = '8px'; // Ajuste adicional para o canto inferior esquerdo
    const rightBottomOffsetX = '10px'; // Ajuste adicional para o canto inferior direito
    const rightBottomOffsetY = '8px';
    const centerTopOffsetX = '760px'; // Ajuste adicional para o canto central superior
    const centerTopOffsetY = '177px'; // Ajuste adicional para o canto central superior

    // Criar elemento pseudo-classe ::before para a parte esquerda da borda
    const beforeElementLeft = document.createElement('div');
    beforeElementLeft.style.content = "''";
    beforeElementLeft.style.position = 'absolute';
    beforeElementLeft.style.top = '-11px';
    beforeElementLeft.style.left = '-10px';
    beforeElementLeft.style.width = leftBorderWidth;
    beforeElementLeft.style.height = buttonHeight;
    beforeElementLeft.style.backgroundImage = `linear-gradient(to left, ${colors[0]}, ${colors[1]})`;
    beforeElementLeft.style.zIndex = '-1';
    button.appendChild(beforeElementLeft);

    // Criar elemento pseudo-classe ::after para a parte direita da borda
    const afterElementRight = document.createElement('div');
    afterElementRight.style.content = "''";
    afterElementRight.style.position = 'absolute';
    afterElementRight.style.top = '-10px';
    afterElementRight.style.right = '-10px';
    afterElementRight.style.width = rightBorderWidth;
    afterElementRight.style.height = buttonHeight;
    afterElementRight.style.backgroundImage = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
    afterElementRight.style.zIndex = '-1';
    button.appendChild(afterElementRight);

    // Criar elemento pseudo-classe ::before para a parte superior da borda
    const beforeElementTop = document.createElement('div');
    beforeElementTop.style.content = "''";
    beforeElementTop.style.position = 'absolute';
    beforeElementTop.style.top = '-10px';
    beforeElementTop.style.left = '-0px';
    beforeElementTop.style.width = '1516px';
    beforeElementTop.style.height = topBorderHeight;
    beforeElementTop.style.backgroundImage = `linear-gradient(to top, ${colors[0]}, ${colors[1]})`;
    beforeElementTop.style.zIndex = '-1';
    button.appendChild(beforeElementTop);

    // Criar elemento pseudo-classe ::after para a parte inferior da borda
    const afterElementBottom = document.createElement('div');
    afterElementBottom.style.content = "''";
    afterElementBottom.style.position = 'absolute';
    afterElementBottom.style.bottom = '-10px'; // Ajuste a posição vertical em relação à borda inferior
    afterElementBottom.style.left = 'seu-valor-aqui'; // Ajuste a posição horizontal em relação à borda esquerda
    afterElementBottom.style.width = '1510px';
    afterElementBottom.style.height = bottomBorderHeight;
    afterElementBottom.style.backgroundImage = `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`;
    afterElementBottom.style.zIndex = '0';
    button.appendChild(afterElementBottom);



    // Criar elemento pseudo-classe ::before para a parte esquerda superior da borda
    const beforeElementLeftTop = document.createElement('div');
    beforeElementLeftTop.style.content = "''";
    beforeElementLeftTop.style.position = 'absolute';
    beforeElementLeftTop.style.top = '0';
    beforeElementLeftTop.style.left = '0';
    beforeElementLeftTop.style.width = '21px';
    beforeElementLeftTop.style.height = '10px';
    beforeElementLeftTop.style.backgroundImage = `linear-gradient(to left top, ${colors[0]}, ${colors[1]} 50%)`;
    beforeElementLeftTop.style.zIndex = '-1';
    beforeElementLeftTop.style.transform = `translate(${leftTopOffsetX}, ${leftTopOffsetY})`;
    button.appendChild(beforeElementLeftTop);

    // Criar elemento pseudo-classe ::before para a parte esquerda inferior da borda
    const beforeElementLeftBottom = document.createElement('div');
    beforeElementLeftBottom.style.content = "''";
    beforeElementLeftBottom.style.position = 'absolute';
    beforeElementLeftBottom.style.bottom = '0';
    beforeElementLeftBottom.style.left = '0';
    beforeElementLeftBottom.style.width = '21px';
    beforeElementLeftBottom.style.height = '15px';
    beforeElementLeftBottom.style.backgroundImage = `linear-gradient(to left bottom, ${colors[0]}, ${colors[1]} 60%)`;
    beforeElementLeftBottom.style.zIndex = '1';
    beforeElementLeftBottom.style.transform = `translate(${leftBottomOffsetX}, ${leftBottomOffsetY})`;
    button.appendChild(beforeElementLeftBottom);

    // Criar elemento pseudo-classe ::after para a parte direita superior da borda
    const afterElementRightTop = document.createElement('div');
    afterElementRightTop.style.content = "''";
    afterElementRightTop.style.position = 'absolute';
    afterElementRightTop.style.top = '0px';
    afterElementRightTop.style.right = '0';
    afterElementRightTop.style.width = '21px';
    afterElementRightTop.style.height = '10px';
    afterElementRightTop.style.backgroundImage = `linear-gradient(to right top, ${colors[0]}, ${colors[1]} 50%)`;
    afterElementRightTop.style.zIndex = '1';
    afterElementRightTop.style.transform = `translate(${rightTopOffsetX}, ${rightTopOffsetY})`;
    button.appendChild(afterElementRightTop);

    // Criar elemento pseudo-classe ::after para a parte direita inferior da borda
    const afterElementRightBottom = document.createElement('div');
    afterElementRightBottom.style.content = "''";
    afterElementRightBottom.style.position = 'absolute';
    afterElementRightBottom.style.bottom = '0';
    afterElementRightBottom.style.right = '0';
    afterElementRightBottom.style.width = '21px';
    afterElementRightBottom.style.height = '15px';
    afterElementRightBottom.style.backgroundImage = `linear-gradient(to right bottom, ${colors[0]}, ${colors[1]} 60%)`;

    afterElementRightBottom.style.zIndex = '1';
    afterElementRightBottom.style.transform = `translate(${rightBottomOffsetX}, ${rightBottomOffsetY})`;
    button.appendChild(afterElementRightBottom);

    // Criar elemento pseudo-classe ::before para a parte central superior da borda
    const beforeElementCenterTop = document.createElement('div');
    beforeElementCenterTop.style.content = "''";
    beforeElementCenterTop.style.position = 'absolute';
    beforeElementCenterTop.style.top = '-15px';
    beforeElementCenterTop.style.left = '50%';
    beforeElementCenterTop.style.transform = `translateX(-50%) translate(${centerTopOffsetX}, ${centerTopOffsetY})`; // Ajuste de posição
    beforeElementCenterTop.style.width = '16px';
    beforeElementCenterTop.style.height = '9px';
    beforeElementCenterTop.style.backgroundImage = `linear-gradient(to top, ${colors[1]}, ${colors[1]})`;
    beforeElementCenterTop.style.zIndex = '1';
    button.appendChild(beforeElementCenterTop);

    // Criar elemento pseudo-classe ::before para a parte central superior da borda
    const centerSquare = document.createElement('div');
    centerSquare.style.content = "''";
    centerSquare.style.position = 'absolute';
    centerSquare.style.top = '162px'; // Ajuste a posição vertical em relação à borda superior
    centerSquare.style.left = '-8px';
    centerSquare.style.transform = `translateX(-50%)`; // Ajuste adicional para centralizar no eixo X
    centerSquare.style.width = '16px'; // Substitua 'seu-valor-aqui' pela largura desejada
    centerSquare.style.height = '9px'; // Substitua 'seu-valor-aqui' pela altura desejada
    centerSquare.style.backgroundImage = `linear-gradient(to top, ${colors[1]}, ${colors[1]})`;
    centerSquare.style.zIndex = '1';
    button.appendChild(centerSquare);

  }
}

// Chame a função para aplicar os gradientes quando a página carregar
window.addEventListener('load', applyBorderGradients);
