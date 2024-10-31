function calcola(){
    prezzo = parseInt(document.getElementById("risposta").value);
    let risposta;
    if (!isNaN(prezzo)){
        if (prezzo<50){
            risposta = "Niente sconto";
        } else if (prezzo>=50 && prezzo<100) {
            risposta = "Sconto del 5%: paghi " + prezzo*0.95;
        } else {
            risposta = "Sconto del 10%: paghi " + prezzo*0.9;
        }
    } else {
        risposta = "invalido";
    }
    document.getElementById("output").innerHTML = risposta;
}