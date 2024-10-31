function calcola(){
    voto = parseInt(document.getElementById("risposta").value);
    //Avrei anche potuto evitare di usare un for e degli array e usare if ma pk non complicarsi la vita? :)
    let lettere = ["A", "B", "C", "D", "E"];
    let punteggio = [101, 90, 80, 70, 60];
    if (!isNaN(voto) && voto<=100 && voto>=0){
        let lettera;
        let risposta;
        for (let i = 0; i<punteggio.length; i++){
            if (voto<punteggio[i] && (i==4 ? true : voto>=punteggio[i+1])) {
                lettera = lettere[i]
            }
        }
        switch (lettera){
            case "A":
                risposta = "Superbravo";
                break;
            case "B":
                risposta = "Bravo";
                break;
            case "C":
                risposta = "Puoi far meglio";
                break;
            case "D":
                risposta = "Appena sufficiente";
                break;
            case "E":
                risposta = "Insufficiente. Migliora";
                break;
        }
        document.getElementById("output").innerHTML = lettera + ": " + risposta;
    } else {
        document.getElementById("output").innerHTML = "inserisci voto valido";
    }
}