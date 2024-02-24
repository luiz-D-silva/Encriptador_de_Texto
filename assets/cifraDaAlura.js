function validaTextoAlura() {
  const textoOriginal = document.getElementById("texto").value;
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

function cifraDaAlura(texto) { return texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat"); }
function decifraDaAlura(texto) { return texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); }
document.getElementById("cifraForm2").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const texto = document.getElementById("texto").value;
  

  if (validaTextoAlura(texto) ) {
    const textoCriptografado = cifraDaAlura(texto);
    document.getElementById("texto").value = textoCriptografado;
    document.getElementById("imagem").src = "img/cadeadoFechado.svg";
    document.getElementById("alerta").textContent = "Cifrado por Alura";
  } else {
    if (document.getElementById("texto").value.length == "") {
        swal("Erro!", "Nada foi digitado", "warning"); 
    } else {
        swal("Lembre-se!", "Somente letras minúsculas e sem acento", "warning"); 
    }

    document.getElementById("imagem").src = "img/naoEncriptado.svg";
    document.getElementById("alerta").textContent = "Erro! Texto inválido";
}

});

document.getElementById("btnDescriptografar2").addEventListener("click", function () {
  if (validaTextoAlura()) {
    const textoCriptografado = document.getElementById("texto").value;
    const textoOriginal = decifraDaAlura(textoCriptografado);
    document.getElementById("texto").value = textoOriginal;
    document.getElementById("imagem").src = "img/cadeadoAberto.svg";
    document.getElementById("alerta").textContent = "Descifrado por Alura";
  } else {
    if (document.getElementById("texto").value.length == "") {
        swal("Erro!", "Nada foi digitado", "warning"); 
    } else {
        swal("Lembre-se!", "Somente letras minúsculas e sem acento", "warning"); 
    }

    document.getElementById("imagem").src = "img/naoEncriptado.svg";
    document.getElementById("alerta").textContent = "Erro! Texto inválido";
}
});


document.getElementById('copiarAlura').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
    if (document.getElementById("texto").value.length == "") {
        swal("Erro!", "Texto vazio", "warning");
    } else {
        let text = document.querySelector("#texto").value;
        await navigator.clipboard.writeText(text);
        swal("Sucesso!", "Texto copiado", "success");
    }
}



