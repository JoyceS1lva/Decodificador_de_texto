
function criptografar() {
    var inputText = document.getElementById("inputText").value.toLowerCase();
    var outputText = "";
    for (var i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case 'e':
                outputText += "enter";
                break;
            case 'i':
                outputText += "imes";
                break;
            case 'a':
                outputText += "ai";
                break;
            case 'o':
                outputText += "ober";
                break;
            case 'u':
                outputText += "ufat";
                break;
            default:
                outputText += inputText[i];
        }
    }
    document.getElementById("outputText").innerText = outputText;
    document.querySelector('.conteudo_exibicao_imagem').style.display = 'none';
    document.querySelector('.conteudo_exibicao_texto').style.display = 'none';
}

function descriptografar() {
    var inputText = document.getElementById("outputText").innerText.toLowerCase();
    var outputText = "";
    for (var i = 0; i < inputText.length; i++) {
        if (inputText.slice(i, i + 5) === "enter") {
            outputText += "e";
            i += 4;
        } else if (inputText.slice(i, i + 4) === "imes") {
            outputText += "i";
            i += 3;
        } else if (inputText.slice(i, i + 2) === "ai") {
            outputText += "a";
            i += 1;
        } else if (inputText.slice(i, i + 4) === "ober") {
            outputText += "o";
            i += 3;
        } else if (inputText.slice(i, i + 4) === "ufat") {
            outputText += "u";
            i += 3;
        } else {
            outputText += inputText[i];
        }
    }
    document.getElementById("outputText").innerText = outputText;
    document.querySelector('.conteudo_exibicao_imagem').style.display = 'none';
    document.querySelector('.conteudo_exibicao_texto').style.display = 'none';
}

function copiarTexto() {
    var textoCopiado = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => alert('Texto copiado com sucesso!'))
        .catch(err => console.error('Erro ao copiar texto: ', err));
}

document.querySelector('.botao_button:nth-child(1)').addEventListener('click', criptografar);
document.querySelector('.botao_button:nth-child(2)').addEventListener('click', descriptografar);
document.querySelector('.botao_button:nth-child(3)').addEventListener('click', copiarTexto);