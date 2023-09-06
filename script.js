// Função para gerar uma cor hexadecimal aleatória
function generateRandomColor() {
    const chars = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        color += chars[randomIndex];
    }

    return color;
}

function changeColors() {
    for (let i = 1; i <= 5; i++) {
        const colorBox = document.getElementById(`cor-${i}`);
        colorBox.style.backgroundColor = generateRandomColor();
        const textColor = generateRandomColor();
        colorBox.style.color = textColor;
        const textElement = document.getElementById(`txt-cor${i}`);
        textElement.textContent = `Cor ${i}: ${textColor}`;
    }
}
const changeColorsButton = document.getElementById("btn-action");
changeColorsButton.addEventListener("click", changeColors);


function mostrarMensagem() {
    alert("Qual é a sua paleta de cores favorita?");
}


const messageButton = document.getElementById("message-button");
messageButton.addEventListener("click", mostrarMensagem);
