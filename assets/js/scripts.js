let counta = 0;

const NUMERO_ATUAL = document.getElementById('atualNumero');


function incrementar(){
    counta++;
    NUMERO_ATUAL.innerHTML = counta;
    if (counta > 0 ){
        document.getElementById('atualNumero').style.color ='blue';
    }
}

function decrementar(){
    counta--;
    NUMERO_ATUAL.innerHTML = counta;
    if (counta <= 0 ){
        document.getElementById('atualNumero').style.color ='red';
    }
    
   
}

function teste(){
    kdowkdpo;
}