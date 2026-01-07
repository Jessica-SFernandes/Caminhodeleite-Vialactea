document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario() {
    
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "") {
    alert("Prontinho! Você receberá as novidades por email.");

    }else{
        
        alert("Por favor, preencha os campos nome e email!")
    }
}

const universo = document.getElementById('universo');
const numeroDeEstrelas = 200; 

for (let i = 0; i < numeroDeEstrelas; i++) {
    const estrela = document.createElement('div');
    estrela.className = 'estrela';
    
    const tamanho = Math.random() * 3 + 'px';
    estrela.style.width = tamanho;
    estrela.style.height = tamanho;

    estrela.style.top = Math.random() * 100 + '%';
    estrela.style.left = Math.random() * 100 + '%';

    const duracao = Math.random() * 3 + 2 + 's';
    estrela.style.setProperty('--duracao', duracao);
    
    estrela.style.animationDelay = Math.random() * 5 + 's';

    universo.appendChild(estrela);
}