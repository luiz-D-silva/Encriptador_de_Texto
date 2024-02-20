function validaTextoCesar() {
    const textoOriginal = document.getElementById("texto1").value;
    if (textoOriginal.length == ""){
        return false
    }
    else if (/^\s+$/.test(textoOriginal)){
      return false
    }
    else if (/^[a-z\s]+$|^$/.test(textoOriginal)) {
        return true
    }
    else {
      return false
    }
  }

function cifraDeCesar(texto, deslocamento) {
    let textoCriptografado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        // Verifica se o caractere é uma letra do alfabeto
        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);
            let limite = codigo >= 65 && codigo <= 90 ? 65 : 97;

            char = String.fromCharCode(((codigo - limite + deslocamento) % 26 + 26) % 26 + limite);
        }

        textoCriptografado += char;
    }

    return textoCriptografado;
}

document.getElementById("cifraForm").addEventListener("submit", function (event) {
    event.preventDefault();
    

    if (validaTextoCesar()) {
        
        const texto = document.getElementById("texto1").value;
        const deslocamento = parseInt(document.getElementById("deslocamento").value);

        const textoCriptografado = cifraDeCesar(texto, deslocamento);
        document.getElementById("texto1").value = textoCriptografado;
        document.getElementById("imagem").src = "img/cadeadoFechado.svg";
        document.getElementById("alerta").textContent = "Texto Cripografado César";
    } else {
        if (document.getElementById("texto1").value.length == "") {
            swal("Erro!", "Nada foi digitado", "warning"); 
        } else {
            swal("Lembre-se!", "Somente letras minúsculas e sem acento", "warning"); 
        }

        document.getElementById("imagem").src = "img/naoEncriptado.svg";
        document.getElementById("alerta").textContent = "Erro! Texto inválido";
    }
    
});

document.getElementById("btnDescriptografar").addEventListener("click", function () {
    if (validaTextoCesar()){
        const textoCriptografado = document.getElementById("texto1").value;
        const deslocamento = parseInt(document.getElementById("deslocamento").value);

        const textoDescriptografado = cifraDeCesar(textoCriptografado, -deslocamento);
        document.getElementById("texto1").value = textoDescriptografado;
        document.getElementById("imagem").src = "img/cadeadoAberto.svg";
        document.getElementById("alerta").textContent = "Texto Descriptografado César";
    } else {
        if (document.getElementById("texto1").value.length == "") {
            swal("Erro!", "Nada foi digitado", "warning"); 
        } else {
            swal("Lembre-se!", "Somente letras minúsculas e sem acento", "warning"); 
        }

        document.getElementById("imagem").src = "img/naoEncriptado.svg";
        document.getElementById("alerta").textContent = "Erro! Texto inválido";
    }
    
});

document.getElementById('copiarCesar').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#texto1").value;
  await navigator.clipboard.writeText(text);
}