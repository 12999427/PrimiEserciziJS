function calcola(){
    numeroPiatto = parseInt(document.getElementById("risposta").value);
    //si potevano usare anche array ma la consegna spacifica di usare switch
    switch(numeroPiatto){
        case 1:
            risposta = "Pizza - $10";
            break;
        case 2:
            risposta = "Pasta - $8";
            break;
        case 3:
            risposta = "Insalata - $5";
            break;
        case 4:
            risposta = "Hamburger - $12";
            break;
        case 5:
            risposta = "Zuppa - $6";
            break;
        default:
            risposta = "Input invalido";
    }
    document.getElementById("output").innerHTML = risposta;
}