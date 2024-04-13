const form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const n1Input = document.getElementById('n1input');
    const n2Input = document.getElementById('n2input');
    const n1Campo = parseFloat(n1Input.value);
    const n2Campo = parseFloat(n2Input.value);
    const msgErro = `tente novamente voce errou a ordem`;
    const msgAcerto = `parabéns você acertou a ordem`;
    if(n1Campo >= n2Campo){
    const erroSelector = document.querySelector(".mensagem-erro");
    erroSelector.innerHTML = msgErro;
    erroSelector.style.display = "block !important";
    document.querySelector('.mensagem-acerto').style.display = "none";
    }
    else{
        const acertoSelector = document.querySelector(".mensagem-acertou");
        acertoSelector.innerHTML = msgAcerto;
        acertoSelector.style.display = "block !important";
        document.querySelector('.mensagem-erro').style.display = "none";
    }
});

